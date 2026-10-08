// smithy-typescript generated code
import {
  type ServiceExceptionOptions as __ServiceExceptionOptions,
  ServiceException as __ServiceException,
} from "@smithy/core/client";

export type { __ServiceExceptionOptions };

export { __ServiceException };

/**
 * @public
 *
 * Base exception class for all service exceptions from KMS service.
 */
export class KMSServiceException extends __ServiceException {
  public static readonly shapeId: string = "smithy.ts.sdk.synthetic.com.amazonaws.kms#KMSServiceException";
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, KMSServiceException.prototype);
  }
}
