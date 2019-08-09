/**
 * <p>Provides configuration information for labeling jobs.</p>
 */
export interface _LabelingJobResourceConfig {
  /**
   * <p>The AWS Key Management Service key ID for the key used to encrypt the output data, if any.</p>
   */
  VolumeKmsKeyId?: string;
}

export type _UnmarshalledLabelingJobResourceConfig = _LabelingJobResourceConfig;
