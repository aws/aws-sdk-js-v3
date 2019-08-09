import {
  _MemberDefinition,
  _UnmarshalledMemberDefinition
} from "./_MemberDefinition";
import {
  _NotificationConfiguration,
  _UnmarshalledNotificationConfiguration
} from "./_NotificationConfiguration";

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface _Workteam {
  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string;

  /**
   * <p>The Amazon Cognito user groups that make up the work team.</p>
   */
  MemberDefinitions: Array<_MemberDefinition> | Iterable<_MemberDefinition>;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: Array<string> | Iterable<string>;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date | string | number;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work teams.</p>
   */
  NotificationConfiguration?: _NotificationConfiguration;
}

export interface _UnmarshalledWorkteam extends _Workteam {
  /**
   * <p>The Amazon Cognito user groups that make up the work team.</p>
   */
  MemberDefinitions: Array<_UnmarshalledMemberDefinition>;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: Array<string>;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work teams.</p>
   */
  NotificationConfiguration?: _UnmarshalledNotificationConfiguration;
}
