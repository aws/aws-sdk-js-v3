// smithy-typescript generated code
import type { GatewayType, HypervisorState, SyncMetadataStatus } from "./enums";

/**
 * @public
 */
export interface AssociateGatewayToServerInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the `ListGateways` operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the server that hosts your virtual machines.
   *
   * @public
   */
  ServerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateGatewayToServerOutput {
  /**
   * The Amazon Resource Name (ARN) of a gateway.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the [`ListGateways`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html) operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.
 *
 * @public
 */
export interface BandwidthRateLimitInterval {
  /**
   * The average upload rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the upload rate limit is not set.
   *
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * The hour of the day to start the bandwidth rate limit interval.
   *
   * @public
   */
  StartHourOfDay: number | undefined;

  /**
   * The hour of the day to end the bandwidth rate limit interval.
   *
   * @public
   */
  EndHourOfDay: number | undefined;

  /**
   * The minute of the hour to start the bandwidth rate limit interval. The interval begins at the start of that minute. To begin an interval exactly at the start of the hour, use the value `0`.
   *
   * @public
   */
  StartMinuteOfHour: number | undefined;

  /**
   * The minute of the hour to end the bandwidth rate limit interval.
   *
   * > **Important:** The bandwidth rate limit interval ends at the end of the minute. To end an interval at the end of an hour, use the value `59`.
   *
   * @public
   */
  EndMinuteOfHour: number | undefined;

  /**
   * The days of the week component of the bandwidth rate limit interval, represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
   *
   * @public
   */
  DaysOfWeek: number[] | undefined;
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the [`ListGateways`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html) operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals have been scheduled, the array is empty.
   *
   * @public
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the [`ListGateways`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html) operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth rate limit intervals have been scheduled, the array is empty.
   *
   * @public
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the [`ListGateways`](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html) operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * A key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, and the following characters: + - = . _ : /. Spaces are not allowed in tag values.
 *
 * @public
 */
export interface Tag {
  /**
   * The key part of a tag's key-value pair. The key can't start with `aws:`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value part of a tag's key-value pair.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGatewayInput {
  /**
   * The activation key of the created gateway.
   *
   * @public
   */
  ActivationKey: string | undefined;

  /**
   * The display name of the created gateway.
   *
   * @public
   */
  GatewayDisplayName: string | undefined;

  /**
   * The type of created gateway.
   *
   * @public
   */
  GatewayType: GatewayType | undefined;

  /**
   * A list of up to 50 tags to assign to the gateway. Each tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway you create.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway to delete.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway you deleted.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway to disassociate.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway you disassociated.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * This is your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly.
 *
 * @public
 */
export interface MaintenanceStartTime {
  /**
   * The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.
   *
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.
   *
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * The hour component of the maintenance start time represented as *hh*, where *hh* is the hour (0 to 23). The hour of the day is in the time zone of the gateway.
   *
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * The minute component of the maintenance start time represented as *mm*, where *mm* is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.
   *
   * @public
   */
  MinuteOfHour: number | undefined;
}

/**
 * The details of gateway.
 *
 * @public
 */
export interface GatewayDetails {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the `ListGateways` operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * The display name of the gateway.
   *
   * @public
   */
  GatewayDisplayName?: string | undefined;

  /**
   * The type of the gateway type.
   *
   * @public
   */
  GatewayType?: GatewayType | undefined;

  /**
   * The hypervisor ID of the gateway.
   *
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * Details showing the last time Backup gateway communicated with the cloud, in Unix format and UTC time.
   *
   * @public
   */
  LastSeenTime?: Date | undefined;

  /**
   * Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly.
   *
   * @public
   */
  MaintenanceStartTime?: MaintenanceStartTime | undefined;

  /**
   * Details showing the next update availability time of the gateway.
   *
   * @public
   */
  NextUpdateAvailabilityTime?: Date | undefined;

  /**
   * The DNS name for the virtual private cloud (VPC) endpoint the gateway uses to connect to the cloud for backup gateway.
   *
   * @public
   */
  VpcEndpoint?: string | undefined;

  /**
   * Date after which this gateway will not receive software updates for new features and bug fixes.
   *
   * @public
   */
  DeprecationDate?: Date | undefined;

  /**
   * The version number of the software running on the gateway appliance.
   *
   * @public
   */
  SoftwareVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayOutput {
  /**
   * By providing the ARN (Amazon Resource Name), this API returns the gateway.
   *
   * @public
   */
  Gateway?: GatewayDetails | undefined;
}

/**
 * @public
 */
export interface ListGatewaysInput {
  /**
   * The maximum number of gateways to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `MaxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A gateway is an Backup Gateway appliance that runs on the customer's network to provide seamless connectivity to backup storage in the Amazon Web Services Cloud.
 *
 * @public
 */
export interface Gateway {
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the `ListGateways` operation to return a list of gateways for your account and Amazon Web Services Region.
   *
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * The display name of the gateway.
   *
   * @public
   */
  GatewayDisplayName?: string | undefined;

  /**
   * The type of the gateway.
   *
   * @public
   */
  GatewayType?: GatewayType | undefined;

  /**
   * The hypervisor ID of the gateway.
   *
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * The last time Backup gateway communicated with the gateway, in Unix format and UTC time.
   *
   * @public
   */
  LastSeenTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * A list of your gateways.
   *
   * @public
   */
  Gateways?: Gateway[] | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `maxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeInput {
  /**
   * The Amazon Resource Name (ARN) for the gateway, used to specify its maintenance start time.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The hour of the day to start maintenance on a gateway.
   *
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * The minute of the hour to start maintenance on a gateway.
   *
   * @public
   */
  MinuteOfHour: number | undefined;

  /**
   * The day of the week to start maintenance on a gateway.
   *
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * The day of the month start maintenance on a gateway.
   *
   * Valid values range from `Sunday` to `Saturday`.
   *
   * @public
   */
  DayOfMonth?: number | undefined;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeOutput {
  /**
   * The Amazon Resource Name (ARN) of a gateway for which you set the maintenance start time.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface TestHypervisorConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway to the hypervisor to test.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The username for the hypervisor.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password for the hypervisor.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * @public
 */
export interface TestHypervisorConfigurationOutput {}

/**
 * @public
 */
export interface UpdateGatewayInformationInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway to update.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The updated display name of the gateway.
   *
   * @public
   */
  GatewayDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInformationOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway you updated.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * The Amazon Resource Name (ARN) of the gateway to be updated.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * The Amazon Resource Name (ARN) of the gateway you updated.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHypervisorInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor to delete.
   *
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteHypervisorOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor you deleted.
   *
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface GetHypervisorInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * These are the details of the specified hypervisor. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 *
 * @public
 */
export interface HypervisorDetails {
  /**
   * The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS used to encrypt the hypervisor.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * This is the name of the specified hypervisor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group of gateways within the requested log.
   *
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * This is the current state of the specified hypervisor.
   *
   * The possible states are `PENDING`, `ONLINE`, `OFFLINE`, or `ERROR`.
   *
   * @public
   */
  State?: HypervisorState | undefined;

  /**
   * This is the time when the most recent successful sync of metadata occurred.
   *
   * @public
   */
  LastSuccessfulMetadataSyncTime?: Date | undefined;

  /**
   * This is the most recent status for the indicated metadata sync.
   *
   * @public
   */
  LatestMetadataSyncStatusMessage?: string | undefined;

  /**
   * This is the most recent status for the indicated metadata sync.
   *
   * @public
   */
  LatestMetadataSyncStatus?: SyncMetadataStatus | undefined;
}

/**
 * @public
 */
export interface GetHypervisorOutput {
  /**
   * Details about the requested hypervisor.
   *
   * @public
   */
  Hypervisor?: HypervisorDetails | undefined;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * This displays the mapping of VMware tags to the corresponding Amazon Web Services tags.
 *
 * @public
 */
export interface VmwareToAwsTagMapping {
  /**
   * The is the category of VMware.
   *
   * @public
   */
  VmwareCategory: string | undefined;

  /**
   * This is the user-defined name of a VMware tag.
   *
   * @public
   */
  VmwareTagName: string | undefined;

  /**
   * The key part of the Amazon Web Services tag's key-value pair.
   *
   * @public
   */
  AwsTagKey: string | undefined;

  /**
   * The value part of the Amazon Web Services tag's key-value pair.
   *
   * @public
   */
  AwsTagValue: string | undefined;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * This is a display of the mappings of VMware tags to the Amazon Web Services tags.
   *
   * @public
   */
  VmwareToAwsTagMappings?: VmwareToAwsTagMapping[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn: string | undefined;

  /**
   * This action requests the mappings of VMware tags to the Amazon Web Services tags.
   *
   * @public
   */
  VmwareToAwsTagMappings: VmwareToAwsTagMapping[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * @public
   */
  IamRoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationInput {
  /**
   * The name of the hypervisor.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
   *
   * @public
   */
  Host: string | undefined;

  /**
   * The username for the hypervisor.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password for the hypervisor.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The Key Management Service for the hypervisor.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The tags of the hypervisor configuration to import.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor you disassociated.
   *
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ListHypervisorsInput {
  /**
   * The maximum number of hypervisors to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `maxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the hypervisor's permissions to which the gateway will connect.
 *
 * A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 *
 * @public
 */
export interface Hypervisor {
  /**
   * The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service used to encrypt the hypervisor.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The name of the hypervisor.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the hypervisor.
   *
   * @public
   */
  State?: HypervisorState | undefined;
}

/**
 * @public
 */
export interface ListHypervisorsOutput {
  /**
   * A list of your `Hypervisor` objects, ordered by their Amazon Resource Names (ARNs).
   *
   * @public
   */
  Hypervisors?: Hypervisor[] | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `maxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor.
   *
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHypervisorInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor to update.
   *
   * @public
   */
  HypervisorArn: string | undefined;

  /**
   * The updated host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * The updated username for the hypervisor.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The updated password for the hypervisor.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The updated name for the hypervisor
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the group of gateways within the requested log.
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHypervisorOutput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor you updated.
   *
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource's tags to list.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource's tags that you listed.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A list of the resource's tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags to assign to the resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource you tagged.
   *
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource from which to remove tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of tag keys specifying which tags to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource from which you removed tags.
   *
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface GetVirtualMachineInput {
  /**
   * The Amazon Resource Name (ARN) of the virtual machine.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * A VMware tag is a tag attached to a specific virtual machine. A [tag](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html) is a key-value pair you can use to manage, filter, and search for your resources.
 *
 * The content of VMware tags can be matched to Amazon Web Services tags.
 *
 * @public
 */
export interface VmwareTag {
  /**
   * The is the category of VMware.
   *
   * @public
   */
  VmwareCategory?: string | undefined;

  /**
   * This is the user-defined name of a VMware tag.
   *
   * @public
   */
  VmwareTagName?: string | undefined;

  /**
   * This is a user-defined description of a VMware tag.
   *
   * @public
   */
  VmwareTagDescription?: string | undefined;
}

/**
 * Your `VirtualMachine` objects, ordered by their Amazon Resource Names (ARNs).
 *
 * @public
 */
export interface VirtualMachineDetails {
  /**
   * The host name of the virtual machine.
   *
   * @public
   */
  HostName?: string | undefined;

  /**
   * The ID of the virtual machine's hypervisor.
   *
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * The name of the virtual machine.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The path of the virtual machine.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the virtual machine. For example, `arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL`.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The most recent date a virtual machine was backed up, in Unix format and UTC time.
   *
   * @public
   */
  LastBackupDate?: Date | undefined;

  /**
   * These are the details of the VMware tags associated with the specified virtual machine.
   *
   * @public
   */
  VmwareTags?: VmwareTag[] | undefined;
}

/**
 * @public
 */
export interface GetVirtualMachineOutput {
  /**
   * This object contains the basic attributes of `VirtualMachine` contained by the output of `GetVirtualMachine`
   *
   * @public
   */
  VirtualMachine?: VirtualMachineDetails | undefined;
}

/**
 * @public
 */
export interface ListVirtualMachinesInput {
  /**
   * The Amazon Resource Name (ARN) of the hypervisor connected to your virtual machine.
   *
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * The maximum number of virtual machines to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `maxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A virtual machine that is on a hypervisor.
 *
 * @public
 */
export interface VirtualMachine {
  /**
   * The host name of the virtual machine.
   *
   * @public
   */
  HostName?: string | undefined;

  /**
   * The ID of the virtual machine's hypervisor.
   *
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * The name of the virtual machine.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The path of the virtual machine.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the virtual machine. For example, `arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL`.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The most recent date a virtual machine was backed up, in Unix format and UTC time.
   *
   * @public
   */
  LastBackupDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualMachinesOutput {
  /**
   * A list of your `VirtualMachine` objects, ordered by their Amazon Resource Names (ARNs).
   *
   * @public
   */
  VirtualMachines?: VirtualMachine[] | undefined;

  /**
   * The next item following a partial list of returned resources. For example, if a request is made to return `maxResults` number of resources, `NextToken` allows you to return more items in your list starting at the location pointed to by the next token.
   *
   * @public
   */
  NextToken?: string | undefined;
}
