import { AbortController as IAbortController } from "@aws-sdk/types";

import { AbortSignal } from "./AbortSignal";

/**
 * This implementation should not be necessary in browsers.
 * Use the global native implementation in browsers.
 */
export class AbortController implements IAbortController {
  public readonly signal: AbortSignal = new AbortSignal();

  abort(): void {
    this.signal.abort();
  }
}
