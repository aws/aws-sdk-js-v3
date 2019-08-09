import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting AWS Support. </p>
 */
export interface ServiceLimitExceeded
  extends __ServiceException__<_ServiceLimitExceededDetails> {
  name: "ServiceLimitExceeded";
}

export interface _ServiceLimitExceededDetails {
  /**
   * <p>Enumeration of the service limit that was exceeded. </p>
   */
  Limit:
    | "FILE_SYSTEM_COUNT"
    | "TOTAL_THROUGHPUT_CAPACITY"
    | "TOTAL_STORAGE"
    | "TOTAL_USER_INITIATED_BACKUPS"
    | string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
