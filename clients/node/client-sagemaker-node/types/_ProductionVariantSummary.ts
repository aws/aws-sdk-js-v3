import { _DeployedImage, _UnmarshalledDeployedImage } from "./_DeployedImage";

/**
 * <p>Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. </p>
 */
export interface _ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: Array<_DeployedImage> | Iterable<_DeployedImage>;

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;
}

export interface _UnmarshalledProductionVariantSummary
  extends _ProductionVariantSummary {
  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: Array<_UnmarshalledDeployedImage>;
}
