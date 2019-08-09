/**
 * _DeviceDescription shape
 */
export interface _DeviceDescription {
  /**
   * <p>The ARN of the device.</p>
   */
  Arn?: string;

  /**
   * <p>An array of zero or more elements of DeviceAttribute objects providing
   *  user specified device attributes.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>A Boolean value indicating whether or not the device is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A value between 0 and 1 inclusive, representing the fraction of life remaining for the
   *  device.</p>
   */
  RemainingLife?: number;

  /**
   * <p>The type of the device, such as "button".</p>
   */
  Type?: string;

  /**
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDeviceDescription extends _DeviceDescription {
  /**
   * <p>An array of zero or more elements of DeviceAttribute objects providing
   *  user specified device attributes.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The tags currently associated with the AWS IoT 1-Click device.</p>
   */
  Tags?: { [key: string]: string };
}
