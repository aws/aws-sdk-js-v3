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
 * Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.
 */
export class LicenseManagerLinuxSubscriptionsServiceException extends __ServiceException {
  public static readonly shapeId: string = "smithy.ts.sdk.synthetic.com.amazonaws.licensemanagerlinuxsubscriptions#LicenseManagerLinuxSubscriptionsServiceException";
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, LicenseManagerLinuxSubscriptionsServiceException.prototype);
  }
}
