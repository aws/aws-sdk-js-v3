import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of <code>HealthCheckVersion</code> in the health check.</p>
 */
export interface HealthCheckVersionMismatch
  extends __ServiceException__<_HealthCheckVersionMismatchDetails> {
  name: "HealthCheckVersionMismatch";
}

export interface _HealthCheckVersionMismatchDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
