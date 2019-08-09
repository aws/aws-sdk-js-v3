import {
  _DirectoryVpcSettingsDescription,
  _UnmarshalledDirectoryVpcSettingsDescription
} from "./_DirectoryVpcSettingsDescription";
import {
  _DirectoryConnectSettingsDescription,
  _UnmarshalledDirectoryConnectSettingsDescription
} from "./_DirectoryConnectSettingsDescription";
import {
  _RadiusSettings,
  _UnmarshalledRadiusSettings
} from "./_RadiusSettings";
import {
  _OwnerDirectoryDescription,
  _UnmarshalledOwnerDirectoryDescription
} from "./_OwnerDirectoryDescription";

/**
 * <p>Contains information about an AWS Directory Service directory.</p>
 */
export interface _DirectoryDescription {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The fully qualified name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>The short name of the directory.</p>
   */
  ShortName?: string;

  /**
   * <p>The directory size.</p>
   */
  Size?: "Small" | "Large" | string;

  /**
   * <p>The edition associated with this directory.</p>
   */
  Edition?: "Enterprise" | "Standard" | string;

  /**
   * <p>The alias for the directory. If no alias has been created for the directory, the alias is the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   */
  Alias?: string;

  /**
   * <p>The access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>. If no alias has been created for the directory, <code>&lt;alias&gt;</code> is the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   */
  AccessUrl?: string;

  /**
   * <p>The textual description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers in the on-premises directory to which the AD Connector is connected.</p>
   */
  DnsIpAddrs?: Array<string> | Iterable<string>;

  /**
   * <p>The current stage of the directory.</p>
   */
  Stage?:
    | "Requested"
    | "Creating"
    | "Created"
    | "Active"
    | "Inoperable"
    | "Impaired"
    | "Restoring"
    | "RestoreFailed"
    | "Deleting"
    | "Deleted"
    | "Failed"
    | string;

  /**
   * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
   */
  ShareStatus?:
    | "Shared"
    | "PendingAcceptance"
    | "Rejected"
    | "Rejecting"
    | "RejectFailed"
    | "Sharing"
    | "ShareFailed"
    | "Deleted"
    | "Deleting"
    | string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: "ORGANIZATIONS" | "HANDSHAKE" | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Specifies when the directory was created.</p>
   */
  LaunchTime?: Date | string | number;

  /**
   * <p>The date and time that the stage was last updated.</p>
   */
  StageLastUpdatedDateTime?: Date | string | number;

  /**
   * <p>The directory size.</p>
   */
  Type?:
    | "SimpleAD"
    | "ADConnector"
    | "MicrosoftAD"
    | "SharedMicrosoftAD"
    | string;

  /**
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional information about a directory. This member is only present if the directory is a Simple AD or Managed AD directory.</p>
   */
  VpcSettings?: _DirectoryVpcSettingsDescription;

  /**
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional information about an AD Connector directory. This member is only present if the directory is an AD Connector directory.</p>
   */
  ConnectSettings?: _DirectoryConnectSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server configured for this directory.</p>
   */
  RadiusSettings?: _RadiusSettings;

  /**
   * <p>The status of the RADIUS MFA server connection.</p>
   */
  RadiusStatus?: "Creating" | "Completed" | "Failed" | string;

  /**
   * <p>Additional information about the directory stage.</p>
   */
  StageReason?: string;

  /**
   * <p>Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.</p>
   */
  SsoEnabled?: boolean;

  /**
   * <p>The desired number of domain controllers in the directory if the directory is Microsoft AD.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * <p>Describes the AWS Managed Microsoft AD directory in the directory owner account.</p>
   */
  OwnerDirectoryDescription?: _OwnerDirectoryDescription;
}

export interface _UnmarshalledDirectoryDescription
  extends _DirectoryDescription {
  /**
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers in the on-premises directory to which the AD Connector is connected.</p>
   */
  DnsIpAddrs?: Array<string>;

  /**
   * <p>Specifies when the directory was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The date and time that the stage was last updated.</p>
   */
  StageLastUpdatedDateTime?: Date;

  /**
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional information about a directory. This member is only present if the directory is a Simple AD or Managed AD directory.</p>
   */
  VpcSettings?: _UnmarshalledDirectoryVpcSettingsDescription;

  /**
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional information about an AD Connector directory. This member is only present if the directory is an AD Connector directory.</p>
   */
  ConnectSettings?: _UnmarshalledDirectoryConnectSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server configured for this directory.</p>
   */
  RadiusSettings?: _UnmarshalledRadiusSettings;

  /**
   * <p>Describes the AWS Managed Microsoft AD directory in the directory owner account.</p>
   */
  OwnerDirectoryDescription?: _UnmarshalledOwnerDirectoryDescription;
}
