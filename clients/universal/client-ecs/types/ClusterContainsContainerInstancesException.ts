import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot delete a cluster that has registered container instances. First, deregister the container instances before you can delete the cluster. For more information, see <a>DeregisterContainerInstance</a>.</p>
 */
export interface ClusterContainsContainerInstancesException
  extends __ServiceException__<
    _ClusterContainsContainerInstancesExceptionDetails
  > {
  name: "ClusterContainsContainerInstancesException";
}

export interface _ClusterContainsContainerInstancesExceptionDetails {}
