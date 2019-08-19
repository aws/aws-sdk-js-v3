/**
 * <p> Contains the service and cluster names used to identify an Amazon ECS deployment's target. </p>
 */
export interface _ECSService {
  /**
   * <p> The name of the target Amazon ECS service. </p>
   */
  serviceName?: string;

  /**
   * <p> The name of the cluster that the Amazon ECS service is associated with. </p>
   */
  clusterName?: string;
}

export type _UnmarshalledECSService = _ECSService;
