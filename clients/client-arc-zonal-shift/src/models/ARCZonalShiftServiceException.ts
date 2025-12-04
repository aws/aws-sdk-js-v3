// smithy-typescript generated code
import {
  type ServiceExceptionOptions as __ServiceExceptionOptions,
  ServiceException as __ServiceException,
} from "@smithy/smithy-client";

export type { __ServiceExceptionOptions };

export { __ServiceException };

/**
 * @public
 *
 * Base exception class for all service exceptions from ARCZonalShift service.
 */
export class ARCZonalShiftServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, ARCZonalShiftServiceException.prototype);
  }
}
