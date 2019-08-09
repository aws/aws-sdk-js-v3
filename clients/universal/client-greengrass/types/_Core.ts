/**
 * Information about a core.
 */
export interface _Core {
  /**
   * The ARN of the certificate associated with the core.
   */
  CertificateArn: string;

  /**
   * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string;

  /**
   * If true, the core's local shadow is automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The ARN of the thing which is the core.
   */
  ThingArn: string;
}

export type _UnmarshalledCore = _Core;
