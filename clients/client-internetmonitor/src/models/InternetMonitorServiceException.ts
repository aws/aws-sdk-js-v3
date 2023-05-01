// smithy-typescript generated code
import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@aws-sdk/smithy-client";

/**
 * @public
 *
 * Base exception class for all service exceptions from InternetMonitor service.
 */
export class InternetMonitorServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, InternetMonitorServiceException.prototype);
  }
}
