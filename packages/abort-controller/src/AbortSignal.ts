import { AbortHandler, AbortSignal as IAbortSignal } from "@aws-sdk/types";

export class AbortSignal implements IAbortSignal {
  public onabort?: AbortHandler;
  private _aborted!: boolean;

  constructor() {
    Object.defineProperty(this, "_aborted", {
      value: false,
      writable: true,
    });
  }

  /**
   * Whether the associated operation has already been cancelled.
   */
  get aborted(): boolean {
    return this._aborted;
  }

  /**
   * @internal
   */
  abort(): void {
    this._aborted = true;
    if (this.onabort) {
      this.onabort();
      this.onabort = undefined;
    }
  }
}
