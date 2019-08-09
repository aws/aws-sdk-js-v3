/**
 * <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
 */
export interface _MFADevice {
  /**
   * <p>The user with whom the MFA device is associated.</p>
   */
  UserName: string;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</p>
   */
  SerialNumber: string;

  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   */
  EnableDate: Date | string | number;
}

export interface _UnmarshalledMFADevice extends _MFADevice {
  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   */
  EnableDate: Date;
}
