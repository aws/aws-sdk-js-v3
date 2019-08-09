/**
 * <p> Describes the association between an instance and an elastic inference accelerator. </p>
 */
export interface _ElasticInferenceAcceleratorAssociation {
  /**
   * <p> The Amazon Resource Name (ARN) of the elastic inference accelerator. </p>
   */
  ElasticInferenceAcceleratorArn?: string;

  /**
   * <p> The ID of the association. </p>
   */
  ElasticInferenceAcceleratorAssociationId?: string;

  /**
   * <p> The state of the elastic inference accelerator. </p>
   */
  ElasticInferenceAcceleratorAssociationState?: string;

  /**
   * <p> The time at which the elastic inference accelerator is associated with an instance. </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date | string | number;
}

export interface _UnmarshalledElasticInferenceAcceleratorAssociation
  extends _ElasticInferenceAcceleratorAssociation {
  /**
   * <p> The time at which the elastic inference accelerator is associated with an instance. </p>
   */
  ElasticInferenceAcceleratorAssociationTime?: Date;
}
