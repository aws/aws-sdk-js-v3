import { S3ExpressIdentity } from "../interfaces/S3ExpressIdentity";

/**
 * @internal
 */
export class S3ExpressIdentityCacheEntry {
  /**
   * @param identity - stored identity.
   * @param accessed - timestamp of last access in epoch ms.
   * @param isRefreshing - this key is currently in the process of being refreshed (background).
   */
  public constructor(
    private _identity: Promise<S3ExpressIdentity>,
    public isRefreshing = false,
    public accessed = Date.now()
  ) {}

  public get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
}
