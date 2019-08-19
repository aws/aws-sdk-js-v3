/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface _EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>The status of the endpoint.</p> <ul> <li> <p> <code>OutOfService</code>: Endpoint is not available to take incoming requests.</p> </li> <li> <p> <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p> </li> <li> <p> <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p> </li> <li> <p> <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.</p> </li> <li> <p> <code>RollingBack</code>: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an <code>InService</code> status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called explicitly.</p> </li> <li> <p> <code>InService</code>: Endpoint is available to process incoming requests.</p> </li> <li> <p> <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p> </li> <li> <p> <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use <a>DescribeEndpointOutput$FailureReason</a> for information about the failure. <a>DeleteEndpoint</a> is the only operation that can be performed on a failed endpoint.</p> </li> </ul> <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus:
    | "OutOfService"
    | "Creating"
    | "Updating"
    | "SystemUpdating"
    | "RollingBack"
    | "InService"
    | "Deleting"
    | "Failed"
    | string;
}

export interface _UnmarshalledEndpointSummary extends _EndpointSummary {
  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date;
}
