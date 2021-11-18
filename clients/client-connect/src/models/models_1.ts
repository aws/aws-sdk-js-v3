import {
  MediaConcurrency,
  OutboundCallerConfig,
  QueueStatus,
  QuickConnectConfig,
  RoutingProfileQueueConfig,
  UserIdentityInfo,
  UserPhoneConfig,
} from "./models_0";

export interface UpdateQueueNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The description of the queue.</p>
   */
  Description?: string;
}

export namespace UpdateQueueNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueOutboundCallerConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

export namespace UpdateQueueOutboundCallerConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueOutboundCallerConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The status of the queue.</p>
   */
  Status: QueueStatus | string | undefined;
}

export namespace UpdateQueueStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>Information about the configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

export namespace UpdateQuickConnectConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The description of the quick connect.</p>
   */
  Description?: string;
}

export namespace UpdateQuickConnectNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

export namespace UpdateRoutingProfileConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier for the default outbound queue.</p>
   */
  DefaultOutboundQueueId: string | undefined;
}

export namespace UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileDefaultOutboundQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name?: string;

  /**
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description?: string;
}

export namespace UpdateRoutingProfileNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to be updated for this routing profile.
   *    Queues must first be associated to the routing
   *    profile. You can do this using AssociateRoutingProfileQueues.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

export namespace UpdateRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileRequest {
  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The permissions granted to a security profile.</p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyGroupNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyGroupNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
}

export namespace HierarchyLevelUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyLevelUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the level hierarchy to update.</p>
 */
export interface HierarchyStructureUpdate {
  /**
   * <p>The
   *    update
   *    for level one.</p>
   */
  LevelOne?: HierarchyLevelUpdate;

  /**
   * <p>The update for level two.</p>
   */
  LevelTwo?: HierarchyLevelUpdate;

  /**
   * <p>The update for level three.</p>
   */
  LevelThree?: HierarchyLevelUpdate;

  /**
   * <p>The update for level four.</p>
   */
  LevelFour?: HierarchyLevelUpdate;

  /**
   * <p>The update for level five.</p>
   */
  LevelFive?: HierarchyLevelUpdate;
}

export namespace HierarchyStructureUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyStructureUpdate): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyStructureRequest {
  /**
   * <p>The hierarchy levels to update.</p>
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyStructureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyStructureRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserIdentityInfoRequest {
  /**
   * <p>The identity information for the user.</p>
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserIdentityInfoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserIdentityInfoRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserPhoneConfigRequest {
  /**
   * <p>Information about phone configuration settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserPhoneConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserPhoneConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserRoutingProfileRequest {
  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserRoutingProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRoutingProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserSecurityProfilesRequest {
  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserSecurityProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSecurityProfilesRequest): any => ({
    ...obj,
  });
}
