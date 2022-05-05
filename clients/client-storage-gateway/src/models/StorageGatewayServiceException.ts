// smithy-typescript generated code
import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@aws-sdk/smithy-client";

/**
 * Base exception class for all service exceptions from StorageGateway service.
 */
export class StorageGatewayServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, StorageGatewayServiceException.prototype);
  }
}
