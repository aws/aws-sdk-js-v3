import { _UnmarshalledProductionVariantSummary } from "./_ProductionVariantSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEndpointOutput shape
 */
export interface DescribeEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string;

  /**
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model hosted behind this endpoint. </p>
   */
  ProductionVariants?: Array<_UnmarshalledProductionVariantSummary>;

  /**
   * <p>The status of the endpoint.</p> <ul> <li> <p> <code>OutOfService</code>: Endpoint is not available to take incoming requests.</p> </li> <li> <p> <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p> </li> <li> <p> <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p> </li> <li> <p> <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.</p> </li> <li> <p> <code>RollingBack</code>: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an <code>InService</code> status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called explicitly.</p> </li> <li> <p> <code>InService</code>: Endpoint is available to process incoming requests.</p> </li> <li> <p> <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p> </li> <li> <p> <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use <a>DescribeEndpointOutput$FailureReason</a> for information about the failure. <a>DeleteEndpoint</a> is the only operation that can be performed on a failed endpoint.</p> </li> </ul>
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

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
