import {
  _DirectoryVpcSettingsDescription,
  _UnmarshalledDirectoryVpcSettingsDescription
} from "./_DirectoryVpcSettingsDescription";
import {
  _RadiusSettings,
  _UnmarshalledRadiusSettings
} from "./_RadiusSettings";

/**
 * <p>Describes the directory owner account details that have been shared to the directory consumer account.</p>
 */
export interface _OwnerDirectoryDescription {
  /**
   * <p>Identifier of the AWS Managed Microsoft AD directory in the directory owner account.</p>
   */
  DirectoryId?: string;

  /**
   * <p>Identifier of the directory owner account.</p>
   */
  AccountId?: string;

  /**
   * <p>IP address of the directory’s domain controllers.</p>
   */
  DnsIpAddrs?: Array<string> | Iterable<string>;

  /**
   * <p>Information about the VPC settings for the directory.</p>
   */
  VpcSettings?: _DirectoryVpcSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
   */
  RadiusSettings?: _RadiusSettings;

  /**
   * <p>Information about the status of the RADIUS server.</p>
   */
  RadiusStatus?: "Creating" | "Completed" | "Failed" | string;
}

export interface _UnmarshalledOwnerDirectoryDescription
  extends _OwnerDirectoryDescription {
  /**
   * <p>IP address of the directory’s domain controllers.</p>
   */
  DnsIpAddrs?: Array<string>;

  /**
   * <p>Information about the VPC settings for the directory.</p>
   */
  VpcSettings?: _UnmarshalledDirectoryVpcSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
   */
  RadiusSettings?: _UnmarshalledRadiusSettings;
}
