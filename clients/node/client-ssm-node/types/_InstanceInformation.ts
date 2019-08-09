import {
  _InstanceAggregatedAssociationOverview,
  _UnmarshalledInstanceAggregatedAssociationOverview
} from "./_InstanceAggregatedAssociationOverview";

/**
 * <p>Describes a filter for a specific list of instances. </p>
 */
export interface _InstanceInformation {
  /**
   * <p>The instance ID. </p>
   */
  InstanceId?: string;

  /**
   * <p>Connection status of SSM Agent. </p>
   */
  PingStatus?: "Online" | "ConnectionLost" | "Inactive" | string;

  /**
   * <p>The date and time when agent last pinged Systems Manager service. </p>
   */
  LastPingDateTime?: Date | string | number;

  /**
   * <p>The version of SSM Agent running on your Linux instance. </p>
   */
  AgentVersion?: string;

  /**
   * <p>Indicates whether latest version of SSM Agent is running on your instance. Some older versions of Windows Server use the EC2Config service to process SSM requests. For this reason, this field does not indicate whether or not the latest version is installed on Windows managed instances.</p>
   */
  IsLatestVersion?: boolean;

  /**
   * <p>The operating system platform type. </p>
   */
  PlatformType?: "Windows" | "Linux" | string;

  /**
   * <p>The name of the operating system platform running on your instance. </p>
   */
  PlatformName?: string;

  /**
   * <p>The version of the OS platform running on your instance. </p>
   */
  PlatformVersion?: string;

  /**
   * <p>The activation ID created by Systems Manager when the server or VM was registered.</p>
   */
  ActivationId?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role assigned to the on-premises Systems Manager managed instances. This call does not return the IAM role for Amazon EC2 instances. </p>
   */
  IamRole?: string;

  /**
   * <p>The date the server or VM was registered with AWS as a managed instance.</p>
   */
  RegistrationDate?: Date | string | number;

  /**
   * <p>The type of instance. Instances are either EC2 instances or managed instances. </p>
   */
  ResourceType?: "ManagedInstance" | "Document" | "EC2Instance" | string;

  /**
   * <p>The name of the managed instance.</p>
   */
  Name?: string;

  /**
   * <p>The IP address of the managed instance.</p>
   */
  IPAddress?: string;

  /**
   * <p>The fully qualified host name of the managed instance.</p>
   */
  ComputerName?: string;

  /**
   * <p>The status of the association.</p>
   */
  AssociationStatus?: string;

  /**
   * <p>The date the association was last run.</p>
   */
  LastAssociationExecutionDate?: Date | string | number;

  /**
   * <p>The last date the association was successfully run.</p>
   */
  LastSuccessfulAssociationExecutionDate?: Date | string | number;

  /**
   * <p>Information about the association.</p>
   */
  AssociationOverview?: _InstanceAggregatedAssociationOverview;
}

export interface _UnmarshalledInstanceInformation extends _InstanceInformation {
  /**
   * <p>The date and time when agent last pinged Systems Manager service. </p>
   */
  LastPingDateTime?: Date;

  /**
   * <p>The date the server or VM was registered with AWS as a managed instance.</p>
   */
  RegistrationDate?: Date;

  /**
   * <p>The date the association was last run.</p>
   */
  LastAssociationExecutionDate?: Date;

  /**
   * <p>The last date the association was successfully run.</p>
   */
  LastSuccessfulAssociationExecutionDate?: Date;

  /**
   * <p>Information about the association.</p>
   */
  AssociationOverview?: _UnmarshalledInstanceAggregatedAssociationOverview;
}
