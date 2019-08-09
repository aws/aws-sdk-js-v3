/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 */
export interface _EBSOptions {
  /**
   * <p>Specifies whether EBS-based storage is enabled.</p>
   */
  EBSEnabled?: boolean;

  /**
   * <p> Specifies the volume type for EBS-based storage.</p>
   */
  VolumeType?: "standard" | "gp2" | "io1" | string;

  /**
   * <p> Integer to specify the size of an EBS volume.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).</p>
   */
  Iops?: number;
}

export type _UnmarshalledEBSOptions = _EBSOptions;
