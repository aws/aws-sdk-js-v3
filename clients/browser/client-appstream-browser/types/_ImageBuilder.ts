import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";
import {
  _ImageBuilderStateChangeReason,
  _UnmarshalledImageBuilderStateChangeReason
} from "./_ImageBuilderStateChangeReason";
import {
  _DomainJoinInfo,
  _UnmarshalledDomainJoinInfo
} from "./_DomainJoinInfo";
import {
  _NetworkAccessConfiguration,
  _UnmarshalledNetworkAccessConfiguration
} from "./_NetworkAccessConfiguration";
import { _ResourceError, _UnmarshalledResourceError } from "./_ResourceError";

/**
 * <p>Describes a virtual machine that is used to create an image. </p>
 */
export interface _ImageBuilder {
  /**
   * <p>The name of the image builder.</p>
   */
  Name: string;

  /**
   * <p>The ARN for the image builder.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the image from which this builder was created.</p>
   */
  ImageArn?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The image builder name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The VPC configuration of the image builder.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>The instance type for the image builder.</p>
   */
  InstanceType?: string;

  /**
   * <p>The operating system platform of the image builder.</p>
   */
  Platform?: "WINDOWS" | "WINDOWS_SERVER_2016" | "WINDOWS_SERVER_2019" | string;

  /**
   * <p>The state of the image builder.</p>
   */
  State?:
    | "PENDING"
    | "UPDATING_AGENT"
    | "RUNNING"
    | "STOPPING"
    | "STOPPED"
    | "REBOOTING"
    | "SNAPSHOTTING"
    | "DELETING"
    | "FAILED"
    | string;

  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: _ImageBuilderStateChangeReason;

  /**
   * <p>The time stamp when the image builder was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>Enables or disables default internet access for the image builder.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: _DomainJoinInfo;

  /**
   * <p>Describes the network details of the fleet or image builder instance.</p>
   */
  NetworkAccessConfiguration?: _NetworkAccessConfiguration;

  /**
   * <p>The image builder errors.</p>
   */
  ImageBuilderErrors?: Array<_ResourceError> | Iterable<_ResourceError>;

  /**
   * <p>The version of the AppStream 2.0 agent that is currently being used by the image builder. </p>
   */
  AppstreamAgentVersion?: string;
}

export interface _UnmarshalledImageBuilder extends _ImageBuilder {
  /**
   * <p>The VPC configuration of the image builder.</p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: _UnmarshalledImageBuilderStateChangeReason;

  /**
   * <p>The time stamp when the image builder was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: _UnmarshalledDomainJoinInfo;

  /**
   * <p>Describes the network details of the fleet or image builder instance.</p>
   */
  NetworkAccessConfiguration?: _UnmarshalledNetworkAccessConfiguration;

  /**
   * <p>The image builder errors.</p>
   */
  ImageBuilderErrors?: Array<_UnmarshalledResourceError>;
}
