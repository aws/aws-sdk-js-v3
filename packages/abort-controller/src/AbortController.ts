import { AbortController as IAbortController } from "@aws-sdk/types";

import { AbortSignal } from "./AbortSignal";

export { IAbortController };

/**
 * This implementation was added as Node.js didn't support AbortController prior to 15.x
 * Use native implementation in browsers or Node.js \>=15.4.0.
 *
 * @public
 */
export class AbortController implements IAbortController {
  public readonly signal: AbortSignal = new AbortSignal();

  abort(): void {
    this.signal.abort();
  }
}
