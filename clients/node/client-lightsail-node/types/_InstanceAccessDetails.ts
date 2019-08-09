import { _PasswordData, _UnmarshalledPasswordData } from "./_PasswordData";
import {
  _HostKeyAttributes,
  _UnmarshalledHostKeyAttributes
} from "./_HostKeyAttributes";

/**
 * <p>The parameters for gaining temporary access to one of your Amazon Lightsail instances.</p>
 */
export interface _InstanceAccessDetails {
  /**
   * <p>For SSH access, the public key to use when accessing your instance For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey-cert.pub</code>.</p>
   */
  certKey?: string;

  /**
   * <p>For SSH access, the date on which the temporary keys expire.</p>
   */
  expiresAt?: Date | string | number;

  /**
   * <p>The public IP address of the Amazon Lightsail instance.</p>
   */
  ipAddress?: string;

  /**
   * <p>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.</p> <note> <p>If you create an instance using any key pair other than the default (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty string.</p> <p>If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</p> </note>
   */
  password?: string;

  /**
   * <p>For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if <code>password</code> is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.</p>
   */
  passwordData?: _PasswordData;

  /**
   * <p>For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey</code>).</p>
   */
  privateKey?: string;

  /**
   * <p>The protocol for these Amazon Lightsail instance access details.</p>
   */
  protocol?: "ssh" | "rdp" | string;

  /**
   * <p>The name of this Amazon Lightsail instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The user name to use when logging in to the Amazon Lightsail instance.</p>
   */
  username?: string;

  /**
   * <p>Describes the public SSH host keys or the RDP certificate.</p>
   */
  hostKeys?: Array<_HostKeyAttributes> | Iterable<_HostKeyAttributes>;
}

export interface _UnmarshalledInstanceAccessDetails
  extends _InstanceAccessDetails {
  /**
   * <p>For SSH access, the date on which the temporary keys expire.</p>
   */
  expiresAt?: Date;

  /**
   * <p>For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if <code>password</code> is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.</p>
   */
  passwordData?: _UnmarshalledPasswordData;

  /**
   * <p>Describes the public SSH host keys or the RDP certificate.</p>
   */
  hostKeys?: Array<_UnmarshalledHostKeyAttributes>;
}
