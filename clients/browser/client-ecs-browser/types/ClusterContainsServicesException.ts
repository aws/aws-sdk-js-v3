import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot delete a cluster that contains services. First, update the service to reduce its desired task count to 0 and then delete the service. For more information, see <a>UpdateService</a> and <a>DeleteService</a>.</p>
 */
export interface ClusterContainsServicesException
  extends __ServiceException__<_ClusterContainsServicesExceptionDetails> {
  name: "ClusterContainsServicesException";
}

export interface _ClusterContainsServicesExceptionDetails {}
