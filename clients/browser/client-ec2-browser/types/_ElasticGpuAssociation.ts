/**
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface _ElasticGpuAssociation {
  /**
   * <p>The ID of the Elastic Graphics accelerator.</p>
   */
  ElasticGpuId?: string;

  /**
   * <p>The ID of the association.</p>
   */
  ElasticGpuAssociationId?: string;

  /**
   * <p>The state of the association between the instance and the Elastic Graphics accelerator.</p>
   */
  ElasticGpuAssociationState?: string;

  /**
   * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
   */
  ElasticGpuAssociationTime?: string;
}

export type _UnmarshalledElasticGpuAssociation = _ElasticGpuAssociation;
