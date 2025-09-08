import { IAbortSignal } from "./types";

/**
 * This function wires an external abort signal to an internal abort controller.
 * The internal abort controller will be aborted when the external signal is
 * aborted.
 *
 * Every callback created will be removed as soon as either the internal or
 * external signal is aborted. This allows to avoid memory leaks, especially if
 * the external signal has a (significantly) longer lifespan than the internal
 * one.
 *
 * In order to ensure that any references are removed, make sure to always
 * `abort()` the internal controller when you are done with it.
 */
export function wireSignal(internalController: AbortController, externalSignal?: IAbortSignal): void {
  if (!externalSignal || internalController.signal.aborted) {
    return;
  }
  if (externalSignal.aborted) {
    internalController.abort();
    return;
  }

  if (isNativeSignal(externalSignal)) {
    externalSignal.addEventListener("abort", () => internalController.abort(), {
      once: true,
      signal: internalController.signal,
    });
  } else {
    // backwards compatibility
    const origOnabort = externalSignal.onabort;
    const restore = () => {
      externalSignal.onabort = origOnabort;
    };

    externalSignal.onabort = function () {
      internalController.abort();
      restore();
      origOnabort?.call(this);
    };

    // Let's clear any reference to the internal controller when it is aborted,
    // avoiding potential memory leaks.
    internalController.signal.addEventListener("abort", restore, { once: true });
  }
}

export function isNativeSignal(signal: IAbortSignal): signal is globalThis.AbortSignal {
  return "addEventListener" in signal && typeof signal.addEventListener === "function";
}
