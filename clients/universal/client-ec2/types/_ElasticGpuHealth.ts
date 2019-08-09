/**
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface _ElasticGpuHealth {
  /**
   * <p>The health status.</p>
   */
  Status?: "OK" | "IMPAIRED" | string;
}

export type _UnmarshalledElasticGpuHealth = _ElasticGpuHealth;
