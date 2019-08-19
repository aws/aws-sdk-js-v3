import { _User, _UnmarshalledUser } from "./_User";

/**
 * <p>Contains information about a virtual MFA device.</p>
 */
export interface _VirtualMFADevice {
  /**
   * <p>The serial number associated with <code>VirtualMFADevice</code>.</p>
   */
  SerialNumber: string;

  /**
   * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base64-encoded. </p>
   */
  Base32StringSeed?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p> A QR code PNG image that encodes <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code> where <code>$virtualMFADeviceName</code> is one of the create call arguments. <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise), and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code> value is base64-encoded. </p>
   */
  QRCodePNG?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The IAM user associated with this virtual MFA device.</p>
   */
  User?: _User;

  /**
   * <p>The date and time on which the virtual MFA device was enabled.</p>
   */
  EnableDate?: Date | string | number;
}

export interface _UnmarshalledVirtualMFADevice extends _VirtualMFADevice {
  /**
   * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base64-encoded. </p>
   */
  Base32StringSeed?: Uint8Array;

  /**
   * <p> A QR code PNG image that encodes <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code> where <code>$virtualMFADeviceName</code> is one of the create call arguments. <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise), and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code> value is base64-encoded. </p>
   */
  QRCodePNG?: Uint8Array;

  /**
   * <p>The IAM user associated with this virtual MFA device.</p>
   */
  User?: _UnmarshalledUser;

  /**
   * <p>The date and time on which the virtual MFA device was enabled.</p>
   */
  EnableDate?: Date;
}
