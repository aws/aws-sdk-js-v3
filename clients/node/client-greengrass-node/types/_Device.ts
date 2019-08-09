/**
 * Information about a device.
 */
export interface _Device {
  /**
   * The ARN of the certificate associated with the device.
   */
  CertificateArn: string;

  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string;

  /**
   * If true, the device's local shadow will be automatically synced with the cloud.
   */
  SyncShadow?: boolean;

  /**
   * The thing ARN of the device.
   */
  ThingArn: string;
}

export type _UnmarshalledDevice = _Device;
