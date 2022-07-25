// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { BackupGatewayServiceException as __BaseException } from "./BackupGatewayServiceException";

/**
 * <p>The operation cannot proceed because you have insufficient permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of why you have insufficient permissions.</p>
   */
  ErrorCode: string | undefined;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export interface AssociateGatewayToServerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the server that hosts your virtual machines.</p>
   */
  ServerArn: string | undefined;
}

export interface AssociateGatewayToServerOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of a gateway.</p>
   */
  GatewayArn?: string;
}

/**
 * <p>The operation cannot proceed because it is not supported.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of why the operation is not supported.</p>
   */
  ErrorCode: string | undefined;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>A description of which internal error occured.</p>
   */
  ErrorCode?: string;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation did not succeed because a validation error occurred.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of what caused the validation error.</p>
   */
  ErrorCode?: string;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export enum GatewayType {
  BACKUP_VM = "BACKUP_VM",
}

/**
 * <p>A key-value pair you can use to manage, filter, and search for your resources. Allowed
 *       characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ :
 *       /.</p>
 */
export interface Tag {
  /**
   * <p>The key part of a tag's key-value pair. The key can't start with <code>aws:</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value part of a tag's key-value pair.</p>
   */
  Value: string | undefined;
}

export interface CreateGatewayInput {
  /**
   * <p>The activation key of the created gateway.</p>
   */
  ActivationKey: string | undefined;

  /**
   * <p>The display name of the created gateway.</p>
   */
  GatewayDisplayName: string | undefined;

  /**
   * <p>The type of created gateway.</p>
   */
  GatewayType: GatewayType | string | undefined;

  /**
   * <p>A list of up to 50 tags to assign to the gateway. Each tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

export interface CreateGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you create.</p>
   */
  GatewayArn?: string;
}

export interface DeleteGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to delete.</p>
   */
  GatewayArn: string | undefined;
}

export interface DeleteGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you deleted.</p>
   */
  GatewayArn?: string;
}

/**
 * <p>A resource that is required for the action wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of which resource wasn't found.</p>
   */
  ErrorCode?: string;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

export interface DisassociateGatewayFromServerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to disassociate.</p>
   */
  GatewayArn: string | undefined;
}

export interface DisassociateGatewayFromServerOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you disassociated.</p>
   */
  GatewayArn?: string;
}

export interface GetGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * <p>The details of gateway.</p>
 */
export interface GatewayDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the
   *       gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and
   *       Amazon Web Services Region.</p>
   */
  GatewayArn?: string;

  /**
   * <p>The display name of the gateway.</p>
   */
  GatewayDisplayName?: string;

  /**
   * <p>The type of the gateway type.</p>
   */
  GatewayType?: GatewayType | string;

  /**
   * <p>The hypervisor ID of the gateway.</p>
   */
  HypervisorId?: string;

  /**
   * <p>Details showing the last time Backup gateway communicated
   *       with the cloud, in Unix format and UTC time.</p>
   */
  LastSeenTime?: Date;

  /**
   * <p>Details showing the next update availability time of the
   *       gateway.</p>
   */
  NextUpdateAvailabilityTime?: Date;

  /**
   * <p>The DNS name for the virtual private cloud (VPC) endpoint the gateway
   *       uses to connect to the cloud for backup gateway.</p>
   */
  VpcEndpoint?: string;
}

export interface GetGatewayOutput {
  /**
   * <p>By providing the ARN (Amazon Resource Name), this
   *       API returns the gateway.</p>
   */
  Gateway?: GatewayDetails;
}

export interface ListGatewaysInput {
  /**
   * <p>The maximum number of gateways to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>MaxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * <p>A gateway is an Backup Gateway appliance that runs on the customer's network
 *       to provide seamless connectivity to backup storage in the Amazon Web Services Cloud.</p>
 */
export interface Gateway {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayArn?: string;

  /**
   * <p>The display name of the gateway.</p>
   */
  GatewayDisplayName?: string;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: GatewayType | string;

  /**
   * <p>The hypervisor ID of the gateway.</p>
   */
  HypervisorId?: string;

  /**
   * <p>The last time Backup gateway communicated with the gateway, in Unix format and
   *       UTC time.</p>
   */
  LastSeenTime?: Date;
}

export interface ListGatewaysOutput {
  /**
   * <p>A list of your gateways.</p>
   */
  Gateways?: Gateway[];

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

export interface PutMaintenanceStartTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the gateway, used to specify its maintenance start
   *       time.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The hour of the day to start maintenance on a gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute of the hour to start maintenance on a gateway.</p>
   */
  MinuteOfHour: number | undefined;

  /**
   * <p>The day of the week to start maintenance on a gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * <p>The day of the month start maintenance on a gateway.</p>
   *          <p>Valid values range from <code>Sunday</code> to <code>Saturday</code>.</p>
   */
  DayOfMonth?: number;
}

export interface PutMaintenanceStartTimeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of a gateway for which you set the maintenance start
   *       time.</p>
   */
  GatewayArn?: string;
}

export interface TestHypervisorConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to the hypervisor to test.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host: string | undefined;

  /**
   * <p>The username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * <p>The password for the hypervisor.</p>
   */
  Password?: string;
}

export interface TestHypervisorConfigurationOutput {}

export interface UpdateGatewayInformationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to update.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The updated display name of the gateway.</p>
   */
  GatewayDisplayName?: string;
}

export interface UpdateGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you updated.</p>
   */
  GatewayArn?: string;
}

export interface UpdateGatewaySoftwareNowInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       to be updated.</p>
   */
  GatewayArn: string | undefined;
}

export interface UpdateGatewaySoftwareNowOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       you updated.</p>
   */
  GatewayArn?: string;
}

export interface DeleteHypervisorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor to delete.</p>
   */
  HypervisorArn: string | undefined;
}

export interface DeleteHypervisorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you deleted.</p>
   */
  HypervisorArn?: string;
}

export interface ImportHypervisorConfigurationInput {
  /**
   * <p>The name of the hypervisor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host: string | undefined;

  /**
   * <p>The username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * <p>The password for the hypervisor.</p>
   */
  Password?: string;

  /**
   * <p>The Key Management Service for the hypervisor.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The tags of the hypervisor configuration to import.</p>
   */
  Tags?: Tag[];
}

export interface ImportHypervisorConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you disassociated.</p>
   */
  HypervisorArn?: string;
}

export interface ListHypervisorsInput {
  /**
   * <p>The maximum number of hypervisors to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

export enum HypervisorState {
  ERROR = "ERROR",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  PENDING = "PENDING",
}

/**
 * <p>Represents the hypervisor's permissions to which the gateway will connect.</p>
 *          <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
 *       and allocates resources to them.</p>
 */
export interface Hypervisor {
  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service used to encrypt the
   *       hypervisor.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The name of the hypervisor.</p>
   */
  Name?: string;

  /**
   * <p>The state of the hypervisor.</p>
   */
  State?: HypervisorState | string;
}

export interface ListHypervisorsOutput {
  /**
   * <p>A list of your <code>Hypervisor</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   */
  Hypervisors?: Hypervisor[];

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

export interface UpdateHypervisorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor to update.</p>
   */
  HypervisorArn: string | undefined;

  /**
   * <p>The updated host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host?: string;

  /**
   * <p>The updated username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * <p>The updated password for the hypervisor.</p>
   */
  Password?: string;

  /**
   * <p>The updated name for the hypervisor</p>
   */
  Name?: string;
}

export interface UpdateHypervisorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you updated.</p>
   */
  HypervisorArn?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource's tags to list.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource's tags that you listed.</p>
   */
  ResourceArn?: string;

  /**
   * <p>A list of the resource's tags.</p>
   */
  Tags?: Tag[];
}

export interface ListVirtualMachinesInput {
  /**
   * <p>The maximum number of virtual machines to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * <p>A virtual machine that is on a hypervisor.</p>
 */
export interface VirtualMachine {
  /**
   * <p>The host name of the virtual machine.</p>
   */
  HostName?: string;

  /**
   * <p>The ID of the virtual machine's hypervisor.</p>
   */
  HypervisorId?: string;

  /**
   * <p>The name of the virtual machine.</p>
   */
  Name?: string;

  /**
   * <p>The path of the virtual machine.</p>
   */
  Path?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual machine. For example,
   *         <code>arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL</code>.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The most recent date a virtual machine was backed up, in Unix format and UTC time.</p>
   */
  LastBackupDate?: Date;
}

export interface ListVirtualMachinesOutput {
  /**
   * <p>A list of your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   */
  VirtualMachines?: VirtualMachine[];

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags to assign to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you tagged.</p>
   */
  ResourceARN?: string;
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys specifying which tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you removed tags.</p>
   */
  ResourceARN?: string;
}

/**
 * @internal
 */
export const AssociateGatewayToServerInputFilterSensitiveLog = (obj: AssociateGatewayToServerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateGatewayToServerOutputFilterSensitiveLog = (obj: AssociateGatewayToServerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGatewayInputFilterSensitiveLog = (obj: CreateGatewayInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGatewayOutputFilterSensitiveLog = (obj: CreateGatewayOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGatewayInputFilterSensitiveLog = (obj: DeleteGatewayInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGatewayOutputFilterSensitiveLog = (obj: DeleteGatewayOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateGatewayFromServerInputFilterSensitiveLog = (obj: DisassociateGatewayFromServerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateGatewayFromServerOutputFilterSensitiveLog = (
  obj: DisassociateGatewayFromServerOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGatewayInputFilterSensitiveLog = (obj: GetGatewayInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewayDetailsFilterSensitiveLog = (obj: GatewayDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGatewayOutputFilterSensitiveLog = (obj: GetGatewayOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGatewaysInputFilterSensitiveLog = (obj: ListGatewaysInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewayFilterSensitiveLog = (obj: Gateway): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGatewaysOutputFilterSensitiveLog = (obj: ListGatewaysOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMaintenanceStartTimeInputFilterSensitiveLog = (obj: PutMaintenanceStartTimeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMaintenanceStartTimeOutputFilterSensitiveLog = (obj: PutMaintenanceStartTimeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestHypervisorConfigurationInputFilterSensitiveLog = (obj: TestHypervisorConfigurationInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestHypervisorConfigurationOutputFilterSensitiveLog = (obj: TestHypervisorConfigurationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewayInformationInputFilterSensitiveLog = (obj: UpdateGatewayInformationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewayInformationOutputFilterSensitiveLog = (obj: UpdateGatewayInformationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewaySoftwareNowInputFilterSensitiveLog = (obj: UpdateGatewaySoftwareNowInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewaySoftwareNowOutputFilterSensitiveLog = (obj: UpdateGatewaySoftwareNowOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHypervisorInputFilterSensitiveLog = (obj: DeleteHypervisorInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHypervisorOutputFilterSensitiveLog = (obj: DeleteHypervisorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportHypervisorConfigurationInputFilterSensitiveLog = (obj: ImportHypervisorConfigurationInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportHypervisorConfigurationOutputFilterSensitiveLog = (
  obj: ImportHypervisorConfigurationOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHypervisorsInputFilterSensitiveLog = (obj: ListHypervisorsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HypervisorFilterSensitiveLog = (obj: Hypervisor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHypervisorsOutputFilterSensitiveLog = (obj: ListHypervisorsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHypervisorInputFilterSensitiveLog = (obj: UpdateHypervisorInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateHypervisorOutputFilterSensitiveLog = (obj: UpdateHypervisorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVirtualMachinesInputFilterSensitiveLog = (obj: ListVirtualMachinesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VirtualMachineFilterSensitiveLog = (obj: VirtualMachine): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVirtualMachinesOutputFilterSensitiveLog = (obj: ListVirtualMachinesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});
