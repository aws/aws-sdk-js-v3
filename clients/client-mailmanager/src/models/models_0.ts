// smithy-typescript generated code
import type {
  AcceptAction,
  ActionFailurePolicy,
  ArchiveBooleanEmailAttribute,
  ArchiveBooleanOperator,
  ArchiveState,
  ArchiveStringEmailAttribute,
  ArchiveStringOperator,
  ExportState,
  ImportDataType,
  ImportJobStatus,
  IngressAddressListEmailAttribute,
  IngressBooleanOperator,
  IngressIpOperator,
  IngressIpv4Attribute,
  IngressIpv6Attribute,
  IngressPointStatus,
  IngressPointStatusToUpdate,
  IngressPointType,
  IngressStringEmailAttribute,
  IngressStringOperator,
  IngressTlsAttribute,
  IngressTlsProtocolAttribute,
  IngressTlsProtocolOperator,
  IpType,
  LambdaInvocationType,
  MailFrom,
  RetentionPeriod,
  RuleAddressListEmailAttribute,
  RuleBooleanEmailAttribute,
  RuleBooleanOperator,
  RuleClientCertificateAttribute,
  RuleDmarcOperator,
  RuleDmarcPolicy,
  RuleIpEmailAttribute,
  RuleIpOperator,
  RuleNumberEmailAttribute,
  RuleNumberOperator,
  RuleStringEmailAttribute,
  RuleStringOperator,
  RuleVerdict,
  RuleVerdictAttribute,
  RuleVerdictOperator,
  SearchState,
  SnsNotificationEncoding,
  SnsNotificationPayloadType,
  TlsPolicy,
  TrustStoreResponseOption,
} from "./enums";

/**
 * The action to add a header to a message. When executed, this action will add the given header to the message.
 *
 * @public
 */
export interface AddHeaderAction {
  /**
   * The name of the header to add to an email. The header must be prefixed with "X-". Headers are added regardless of whether the header name pre-existed in the email.
   *
   * @public
   */
  HeaderName: string | undefined;

  /**
   * The value of the header to add to the email.
   *
   * @public
   */
  HeaderValue: string | undefined;
}

/**
 * An Add On instance represents a specific configuration of an Add On.
 *
 * @public
 */
export interface AddonInstance {
  /**
   * The unique ID of the Add On instance.
   *
   * @public
   */
  AddonInstanceId?: string | undefined;

  /**
   * The subscription ID for the instance.
   *
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * The name of the Add On for the instance.
   *
   * @public
   */
  AddonName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Add On instance.
   *
   * @public
   */
  AddonInstanceArn?: string | undefined;

  /**
   * The timestamp of when the Add On instance was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * A key-value pair (the value is optional), that you can define and assign to Amazon Web Services resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the key-value tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key-value tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAddonInstanceRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique ID of a previously created subscription that an Add On instance is created for. You can only have one instance per subscription.
   *
   * @public
   */
  AddonSubscriptionId: string | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAddonInstanceResponse {
  /**
   * The unique ID of the Add On instance created by this API.
   *
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonInstanceRequest {
  /**
   * The Add On instance ID to delete.
   *
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonInstanceResponse {}

/**
 * @public
 */
export interface GetAddonInstanceRequest {
  /**
   * The Add On instance ID to retrieve information for.
   *
   * @public
   */
  AddonInstanceId: string | undefined;
}

/**
 * @public
 */
export interface GetAddonInstanceResponse {
  /**
   * The subscription ID associated to the instance.
   *
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * The name of the Add On provider associated to the subscription of the instance.
   *
   * @public
   */
  AddonName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Add On instance.
   *
   * @public
   */
  AddonInstanceArn?: string | undefined;

  /**
   * The timestamp of when the Add On instance was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAddonInstancesRequest {
  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddonInstancesResponse {
  /**
   * The list of ingress endpoints.
   *
   * @public
   */
  AddonInstances?: AddonInstance[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A subscription for an Add On representing the acceptance of its terms of use and additional pricing.
 *
 * @public
 */
export interface AddonSubscription {
  /**
   * The unique ID of the Add On subscription.
   *
   * @public
   */
  AddonSubscriptionId?: string | undefined;

  /**
   * The name of the Add On.
   *
   * @public
   */
  AddonName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Add On subscription.
   *
   * @public
   */
  AddonSubscriptionArn?: string | undefined;

  /**
   * The timestamp of when the Add On subscription was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAddonSubscriptionRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the Add On to subscribe to. You can only have one subscription for each Add On name.
   *
   * @public
   */
  AddonName: string | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAddonSubscriptionResponse {
  /**
   * The unique ID of the Add On subscription created by this API.
   *
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonSubscriptionRequest {
  /**
   * The Add On subscription ID to delete.
   *
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddonSubscriptionResponse {}

/**
 * @public
 */
export interface GetAddonSubscriptionRequest {
  /**
   * The Add On subscription ID to retrieve information for.
   *
   * @public
   */
  AddonSubscriptionId: string | undefined;
}

/**
 * @public
 */
export interface GetAddonSubscriptionResponse {
  /**
   * The name of the Add On for the subscription.
   *
   * @public
   */
  AddonName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the subscription.
   *
   * @public
   */
  AddonSubscriptionArn?: string | undefined;

  /**
   * The timestamp of when the Add On subscription was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAddonSubscriptionsRequest {
  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddonSubscriptionsResponse {
  /**
   * The list of ingress endpoints.
   *
   * @public
   */
  AddonSubscriptions?: AddonSubscription[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filtering options for ListMembersOfAddressList operation.
 *
 * @public
 */
export interface AddressFilter {
  /**
   * Filter to limit the results to addresses having the provided prefix.
   *
   * @public
   */
  AddressPrefix?: string | undefined;
}

/**
 * An address list contains a list of emails and domains that are used in MailManager Ingress endpoints and Rules for email management.
 *
 * @public
 */
export interface AddressList {
  /**
   * The identifier of the address list.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the address list.
   *
   * @public
   */
  AddressListArn: string | undefined;

  /**
   * The user-friendly name of the address list.
   *
   * @public
   */
  AddressListName: string | undefined;

  /**
   * The timestamp of when the address list was created.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The timestamp of when the address list was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateAddressListRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A user-friendly name for the address list.
   *
   * @public
   */
  AddressListName: string | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAddressListResponse {
  /**
   * The identifier of the created address list.
   *
   * @public
   */
  AddressListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddressListRequest {
  /**
   * The identifier of an existing address list resource to delete.
   *
   * @public
   */
  AddressListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddressListResponse {}

/**
 * @public
 */
export interface GetAddressListRequest {
  /**
   * The identifier of an existing address list resource to be retrieved.
   *
   * @public
   */
  AddressListId: string | undefined;
}

/**
 * @public
 */
export interface GetAddressListResponse {
  /**
   * The identifier of the address list resource.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the address list resource.
   *
   * @public
   */
  AddressListArn: string | undefined;

  /**
   * A user-friendly name for the address list resource.
   *
   * @public
   */
  AddressListName: string | undefined;

  /**
   * The date of when then address list was created.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The date of when the address list was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListAddressListsRequest {
  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of address list resources that are returned per call. You can use NextToken to retrieve the next page of address lists.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddressListsResponse {
  /**
   * The list of address lists.
   *
   * @public
   */
  AddressLists: AddressList[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The result of an analysis can be used in conditions to trigger actions. Analyses can inspect the email content and report a certain aspect of the email.
 *
 * @public
 */
export interface Analysis {
  /**
   * The Amazon Resource Name (ARN) of an Add On.
   *
   * @public
   */
  Analyzer: string | undefined;

  /**
   * The returned value from an Add On.
   *
   * @public
   */
  ResultField: string | undefined;
}

/**
 * An archive resource for storing and retaining emails.
 *
 * @public
 */
export interface Archive {
  /**
   * The unique identifier of the archive.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * The unique name assigned to the archive.
   *
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * The current state of the archive:
   *
   * - `ACTIVE` – The archive is ready and available for use.
   * - `PENDING_DELETION` – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state.
   *
   * @public
   */
  ArchiveState?: ArchiveState | undefined;

  /**
   * The timestamp of when the archive was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * The action to archive the email by delivering the email to an Amazon SES archive.
 *
 * @public
 */
export interface ArchiveAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified archive has been deleted.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The identifier of the archive to send the email to.
   *
   * @public
   */
  TargetArchive: string | undefined;
}

/**
 * The attribute to evaluate in a boolean expression.
 *
 * @public
 */
export type ArchiveBooleanToEvaluate =
  | ArchiveBooleanToEvaluate.AttributeMember
  | ArchiveBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveBooleanToEvaluate {
  /**
   * The name of the email attribute to evaluate.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: ArchiveBooleanEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: ArchiveBooleanEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A boolean expression to evaluate email attribute values.
 *
 * @public
 */
export interface ArchiveBooleanExpression {
  /**
   * The email attribute value to evaluate.
   *
   * @public
   */
  Evaluate: ArchiveBooleanToEvaluate | undefined;

  /**
   * The boolean operator to use for evaluation.
   *
   * @public
   */
  Operator: ArchiveBooleanOperator | undefined;
}

/**
 * Specifies the email attribute to evaluate in a string expression.
 *
 * @public
 */
export type ArchiveStringToEvaluate =
  | ArchiveStringToEvaluate.AttributeMember
  | ArchiveStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveStringToEvaluate {
  /**
   * The name of the email attribute to evaluate.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: ArchiveStringEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: ArchiveStringEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A string expression to evaluate an email attribute value against one or more string values.
 *
 * @public
 */
export interface ArchiveStringExpression {
  /**
   * The attribute of the email to evaluate.
   *
   * @public
   */
  Evaluate: ArchiveStringToEvaluate | undefined;

  /**
   * The operator to use when evaluating the string values.
   *
   * @public
   */
  Operator: ArchiveStringOperator | undefined;

  /**
   * The list of string values to evaluate the email attribute against.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * A filter condition used to include or exclude emails when exporting from or searching an archive.
 *
 * @public
 */
export type ArchiveFilterCondition =
  | ArchiveFilterCondition.BooleanExpressionMember
  | ArchiveFilterCondition.StringExpressionMember
  | ArchiveFilterCondition.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveFilterCondition {
  /**
   * A string expression to evaluate against email attributes.
   *
   * @public
   */
  export interface StringExpressionMember {
    StringExpression: ArchiveStringExpression;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * A boolean expression to evaluate against email attributes.
   *
   * @public
   */
  export interface BooleanExpressionMember {
    StringExpression?: never;
    BooleanExpression: ArchiveBooleanExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringExpression?: never;
    BooleanExpression?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringExpression: (value: ArchiveStringExpression) => T;
    BooleanExpression: (value: ArchiveBooleanExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A set of filter conditions to include and/or exclude emails.
 *
 * @public
 */
export interface ArchiveFilters {
  /**
   * The filter conditions for emails to include.
   *
   * @public
   */
  Include?: ArchiveFilterCondition[] | undefined;

  /**
   * The filter conditions for emails to exclude.
   *
   * @public
   */
  Unless?: ArchiveFilterCondition[] | undefined;
}

/**
 * The retention policy for an email archive that specifies how long emails are kept before being automatically deleted.
 *
 * @public
 */
export type ArchiveRetention =
  | ArchiveRetention.RetentionPeriodMember
  | ArchiveRetention.$UnknownMember;

/**
 * @public
 */
export namespace ArchiveRetention {
  /**
   * The enum value sets the period for retaining emails in an archive.
   *
   * @public
   */
  export interface RetentionPeriodMember {
    RetentionPeriod: RetentionPeriod;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RetentionPeriod?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RetentionPeriod: (value: RetentionPeriod) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The request to create a new email archive.
 *
 * @public
 */
export interface CreateArchiveRequest {
  /**
   * A unique token Amazon SES uses to recognize retries of this request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A unique name for the new archive.
   *
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * The period for retaining emails in the archive before automatic deletion.
   *
   * @public
   */
  Retention?: ArchiveRetention | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The response from creating a new email archive.
 *
 * @public
 */
export interface CreateArchiveResponse {
  /**
   * The unique identifier for the newly created archive.
   *
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * The request to initiate deletion of an email archive.
 *
 * @public
 */
export interface DeleteArchiveRequest {
  /**
   * The identifier of the archive to delete.
   *
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * The response indicating if the archive deletion was successfully initiated.
 *
 * On success, returns an HTTP 200 status code. On failure, returns an error message.
 *
 * @public
 */
export interface DeleteArchiveResponse {}

/**
 * The request to retrieve details of an email archive.
 *
 * @public
 */
export interface GetArchiveRequest {
  /**
   * The identifier of the archive to retrieve.
   *
   * @public
   */
  ArchiveId: string | undefined;
}

/**
 * The response containing details of the requested archive.
 *
 * @public
 */
export interface GetArchiveResponse {
  /**
   * The unique identifier of the archive.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * The unique name assigned to the archive.
   *
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the archive.
   *
   * @public
   */
  ArchiveArn: string | undefined;

  /**
   * The current state of the archive:
   *
   * - `ACTIVE` – The archive is ready and available for use.
   * - `PENDING_DELETION` – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state.
   *
   * @public
   */
  ArchiveState: ArchiveState | undefined;

  /**
   * The retention period for emails in this archive.
   *
   * @public
   */
  Retention: ArchiveRetention | undefined;

  /**
   * The timestamp of when the archive was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the archive was modified.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the archive.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * The request to list email archives in your account.
 *
 * @public
 */
export interface ListArchivesRequest {
  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of archives that are returned per call. You can use NextToken to obtain further pages of archives.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The response containing a list of your email archives.
 *
 * @public
 */
export interface ListArchivesResponse {
  /**
   * The list of archive details.
   *
   * @public
   */
  Archives: Archive[] | undefined;

  /**
   * If present, use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request to update properties of an existing email archive.
 *
 * @public
 */
export interface UpdateArchiveRequest {
  /**
   * The identifier of the archive to update.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * A new, unique name for the archive.
   *
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * A new retention period for emails in the archive.
   *
   * @public
   */
  Retention?: ArchiveRetention | undefined;
}

/**
 * The response indicating if the archive update succeeded or failed.
 *
 * On success, returns an HTTP 200 status code. On failure, returns an error message.
 *
 * @public
 */
export interface UpdateArchiveResponse {}

/**
 * The action to send a bounce response for the email. When executed, this action generates a non-delivery report (bounce) back to the sender.
 *
 * @public
 */
export interface BounceAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the caller does not have the permissions to call the SendBounce API.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to use to send the bounce message.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The sender email address of the bounce message.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The enhanced status code for the bounce, in the format of x.y.z (e.g. 5.1.1).
   *
   * @public
   */
  StatusCode: string | undefined;

  /**
   * The SMTP reply code for the bounce, as defined by RFC 5321.
   *
   * @public
   */
  SmtpReplyCode: string | undefined;

  /**
   * The diagnostic message included in the Diagnostic-Code header of the bounce.
   *
   * @public
   */
  DiagnosticMessage: string | undefined;

  /**
   * The human-readable text to include in the bounce message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The import data format contains the specifications of the input file that would be passed to the address list import job.
 *
 * @public
 */
export interface ImportDataFormat {
  /**
   * The type of file that would be passed as an input for the address list import job.
   *
   * @public
   */
  ImportDataType: ImportDataType | undefined;
}

/**
 * @public
 */
export interface CreateAddressListImportJobRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the address list for importing addresses to.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * A user-friendly name for the import job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The format of the input for an import job.
   *
   * @public
   */
  ImportDataFormat: ImportDataFormat | undefined;
}

/**
 * @public
 */
export interface CreateAddressListImportJobResponse {
  /**
   * The identifier of the created import job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The pre-signed URL target for uploading the input file.
   *
   * @public
   */
  PreSignedUrl: string | undefined;
}

/**
 * The trust store used for mutual TLS authentication. It contains the certificate authority (CA) certificates and optional certificate revocation list (CRL).
 *
 * @public
 */
export interface TrustStore {
  /**
   * The PEM-encoded certificate authority (CA) certificates bundle for the trust store.
   *
   * @public
   */
  CAContent: string | undefined;

  /**
   * The PEM-encoded certificate revocation lists (CRLs) for the trust store. There can be one CRL per certificate authority (CA) in the trust store.
   *
   * @public
   */
  CrlContent?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the trust store contents.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * The mutual TLS authentication configuration for an ingress endpoint.
 *
 * @public
 */
export interface TlsAuthConfiguration {
  /**
   * The trust store configuration for mutual TLS authentication.
   *
   * @public
   */
  TrustStore?: TrustStore | undefined;
}

/**
 * The configuration of the ingress endpoint resource.
 *
 * @public
 */
export type IngressPointConfiguration =
  | IngressPointConfiguration.SecretArnMember
  | IngressPointConfiguration.SmtpPasswordMember
  | IngressPointConfiguration.TlsAuthConfigurationMember
  | IngressPointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace IngressPointConfiguration {
  /**
   * The password of the ingress endpoint resource.
   *
   * @public
   */
  export interface SmtpPasswordMember {
    SmtpPassword: string;
    SecretArn?: never;
    TlsAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The SecretsManager::Secret ARN of the ingress endpoint resource.
   *
   * @public
   */
  export interface SecretArnMember {
    SmtpPassword?: never;
    SecretArn: string;
    TlsAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The mutual TLS authentication configuration of the ingress endpoint resource.
   *
   * @public
   */
  export interface TlsAuthConfigurationMember {
    SmtpPassword?: never;
    SecretArn?: never;
    TlsAuthConfiguration: TlsAuthConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SmtpPassword?: never;
    SecretArn?: never;
    TlsAuthConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SmtpPassword: (value: string) => T;
    SecretArn: (value: string) => T;
    TlsAuthConfiguration: (value: TlsAuthConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the network configuration for the private ingress point.
 *
 * @public
 */
export interface PrivateNetworkConfiguration {
  /**
   * The identifier of the VPC endpoint to associate with this private ingress point.
   *
   * @public
   */
  VpcEndpointId: string | undefined;
}

/**
 * Specifies the network configuration for the public ingress point.
 *
 * @public
 */
export interface PublicNetworkConfiguration {
  /**
   * The IP address type for the public ingress point. Valid values are IPV4 and DUAL_STACK.
   *
   * @public
   */
  IpType: IpType | undefined;
}

/**
 * The network type (IPv4-only, Dual-Stack, PrivateLink) of the ingress endpoint resource.
 *
 * @public
 */
export type NetworkConfiguration =
  | NetworkConfiguration.PrivateNetworkConfigurationMember
  | NetworkConfiguration.PublicNetworkConfigurationMember
  | NetworkConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace NetworkConfiguration {
  /**
   * Specifies the network configuration for the public ingress point.
   *
   * @public
   */
  export interface PublicNetworkConfigurationMember {
    PublicNetworkConfiguration: PublicNetworkConfiguration;
    PrivateNetworkConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Specifies the network configuration for the private ingress point.
   *
   * @public
   */
  export interface PrivateNetworkConfigurationMember {
    PublicNetworkConfiguration?: never;
    PrivateNetworkConfiguration: PrivateNetworkConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PublicNetworkConfiguration?: never;
    PrivateNetworkConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PublicNetworkConfiguration: (value: PublicNetworkConfiguration) => T;
    PrivateNetworkConfiguration: (value: PrivateNetworkConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIngressPointRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A user friendly name for an ingress endpoint resource.
   *
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * The type of the ingress endpoint to create.
   *
   * @public
   */
  Type: IngressPointType | undefined;

  /**
   * The identifier of an existing rule set that you attach to an ingress endpoint resource.
   *
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret ARN.
   *
   * @public
   */
  IngressPointConfiguration?: IngressPointConfiguration | undefined;

  /**
   * Specifies the network configuration for the ingress point. This allows you to create an IPv4-only, Dual-Stack, or PrivateLink type of ingress point. If not specified, the default network type is IPv4-only.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The Transport Layer Security (TLS) policy for the ingress point. The FIPS value is only valid in US and Canada regions.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIngressPointResponse {
  /**
   * The unique identifier for a previously created ingress endpoint.
   *
   * @public
   */
  IngressPointId: string | undefined;
}

/**
 * Explicitly indicate that the relay destination server does not require SMTP credential authentication.
 *
 * @public
 */
export interface NoAuthentication {}

/**
 * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored, or specify an empty NoAuthentication structure if the relay destination server does not require SMTP credential authentication.
 *
 * @public
 */
export type RelayAuthentication =
  | RelayAuthentication.NoAuthenticationMember
  | RelayAuthentication.SecretArnMember
  | RelayAuthentication.$UnknownMember;

/**
 * @public
 */
export namespace RelayAuthentication {
  /**
   * The ARN of the secret created in secrets manager where the relay server's SMTP credentials are stored.
   *
   * @public
   */
  export interface SecretArnMember {
    SecretArn: string;
    NoAuthentication?: never;
    $unknown?: never;
  }

  /**
   * Keep an empty structure if the relay destination server does not require SMTP credential authentication.
   *
   * @public
   */
  export interface NoAuthenticationMember {
    SecretArn?: never;
    NoAuthentication: NoAuthentication;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretArn?: never;
    NoAuthentication?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretArn: (value: string) => T;
    NoAuthentication: (value: NoAuthentication) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRelayRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique name of the relay resource.
   *
   * @public
   */
  RelayName: string | undefined;

  /**
   * The destination relay server address.
   *
   * @public
   */
  ServerName: string | undefined;

  /**
   * The destination relay server port.
   *
   * @public
   */
  ServerPort: number | undefined;

  /**
   * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
   *
   * @public
   */
  Authentication: RelayAuthentication | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRelayResponse {
  /**
   * A unique identifier of the created relay resource.
   *
   * @public
   */
  RelayId: string | undefined;
}

/**
 * This action to delivers an email to a mailbox.
 *
 * @public
 */
export interface DeliverToMailboxAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the mailbox ARN is no longer valid.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of a WorkMail organization to deliver the email to.
   *
   * @public
   */
  MailboxArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role to use to execute this action. The role must have access to the workmail:DeliverToMailbox API.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * The action to deliver incoming emails to an Amazon Q Business application for indexing.
 *
 * @public
 */
export interface DeliverToQBusinessAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified application has been deleted or the role lacks necessary permissions to call the `qbusiness:BatchPutDocument` API.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The unique identifier of the Amazon Q Business application instance where the email content will be delivered.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The identifier of the knowledge base index within the Amazon Q Business application where the email content will be stored and indexed.
   *
   * @public
   */
  IndexId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Role to use while delivering to Amazon Q Business. This role must have access to the `qbusiness:BatchPutDocument` API for the given application and index.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * This action causes processing to stop and the email to be dropped. If the action applies only to certain recipients, only those recipients are dropped, and processing continues for other recipients.
 *
 * @public
 */
export interface DropAction {}

/**
 * The action to invoke an Amazon Web Services Lambda function for processing the email.
 *
 * @public
 */
export interface InvokeLambdaAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the Amazon Web Services Lambda function no longer exists.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function to invoke.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The invocation type of the Lambda function. Use EVENT for asynchronous invocation or REQUEST_RESPONSE for synchronous invocation.
   *
   * @public
   */
  InvocationType: LambdaInvocationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to use to invoke the Lambda function.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The maximum time in minutes that the email processing can be retried if the Lambda invocation fails. The maximum value is 2160 minutes (36 hours).
   *
   * @public
   */
  RetryTimeMinutes?: number | undefined;
}

/**
 * The action to publish the email content to an Amazon SNS topic. When executed, this action will send the email as a notification to the specified SNS topic.
 *
 * @public
 */
export interface SnsAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, specified SNS topic has been deleted or the role lacks necessary permissions to call the `sns:Publish` API.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS Topic to which notification for the email received will be published.
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Role to use while writing to Amazon SNS. This role must have access to the `sns:Publish` API for the given topic.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The encoding to use for the email within the Amazon SNS notification. The default value is `UTF-8`. Use `BASE64` if you need to preserve all special characters, especially when the original message uses a different encoding format.
   *
   * @public
   */
  Encoding?: SnsNotificationEncoding | undefined;

  /**
   * The expected payload type within the Amazon SNS notification. `CONTENT` attempts to publish the full email content with 20KB of headers content. `HEADERS` extracts up to 100KB of header content to include in the notification, email content will not be included to the notification. The default value is `CONTENT`.
   *
   * @public
   */
  PayloadType?: SnsNotificationPayloadType | undefined;
}

/**
 * The action relays the email via SMTP to another specific SMTP server.
 *
 * @public
 */
export interface RelayAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified relay has been deleted.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The identifier of the relay resource to be used when relaying an email.
   *
   * @public
   */
  Relay: string | undefined;

  /**
   * This action specifies whether to preserve or replace original mail from address while relaying received emails to a destination server.
   *
   * @public
   */
  MailFrom?: MailFrom | undefined;
}

/**
 * This action replaces the email envelope recipients with the given list of recipients. If the condition of this action applies only to a subset of recipients, only those recipients are replaced with the recipients specified in the action. The message contents and headers are unaffected by this action, only the envelope recipients are updated.
 *
 * @public
 */
export interface ReplaceRecipientAction {
  /**
   * This action specifies the replacement recipient email addresses to insert.
   *
   * @public
   */
  ReplaceWith?: string[] | undefined;
}

/**
 * Sends the email to the internet using the ses:SendRawEmail API.
 *
 * @public
 */
export interface SendAction {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the caller does not have the permissions to call the sendRawEmail API.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to use for this action. This role must have access to the ses:SendRawEmail API.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * Writes the MIME content of the email to an S3 bucket.
 *
 * @public
 */
export interface S3Action {
  /**
   * A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified the bucket has been deleted.
   *
   * @public
   */
  ActionFailurePolicy?: ActionFailurePolicy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Role to use while writing to S3. This role must have access to the s3:PutObject, kms:Encrypt, and kms:GenerateDataKey APIs for the given bucket.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The bucket name of the S3 bucket to write to.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The S3 prefix to use for the write to the s3 bucket.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The KMS Key ID to use to encrypt the message in S3.
   *
   * @public
   */
  S3SseKmsKeyId?: string | undefined;
}

/**
 * The action for a rule to take. Only one of the contained actions can be set.
 *
 * @public
 */
export type RuleAction =
  | RuleAction.AddHeaderMember
  | RuleAction.ArchiveMember
  | RuleAction.BounceMember
  | RuleAction.DeliverToMailboxMember
  | RuleAction.DeliverToQBusinessMember
  | RuleAction.DropMember
  | RuleAction.InvokeLambdaMember
  | RuleAction.PublishToSnsMember
  | RuleAction.RelayMember
  | RuleAction.ReplaceRecipientMember
  | RuleAction.SendMember
  | RuleAction.WriteToS3Member
  | RuleAction.$UnknownMember;

/**
 * @public
 */
export namespace RuleAction {
  /**
   * This action terminates the evaluation of rules in the rule set.
   *
   * @public
   */
  export interface DropMember {
    Drop: DropAction;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action relays the email to another SMTP server.
   *
   * @public
   */
  export interface RelayMember {
    Drop?: never;
    Relay: RelayAction;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action archives the email. This can be used to deliver an email to an archive.
   *
   * @public
   */
  export interface ArchiveMember {
    Drop?: never;
    Relay?: never;
    Archive: ArchiveAction;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action writes the MIME content of the email to an S3 bucket.
   *
   * @public
   */
  export interface WriteToS3Member {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3: S3Action;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action sends the email to the internet.
   *
   * @public
   */
  export interface SendMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send: SendAction;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action adds a header. This can be used to add arbitrary email headers.
   *
   * @public
   */
  export interface AddHeaderMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader: AddHeaderAction;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * The action replaces certain or all recipients with a different set of recipients.
   *
   * @public
   */
  export interface ReplaceRecipientMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient: ReplaceRecipientAction;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action delivers an email to a WorkMail mailbox.
   *
   * @public
   */
  export interface DeliverToMailboxMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox: DeliverToMailboxAction;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action delivers an email to an Amazon Q Business application for ingestion into its knowledge base.
   *
   * @public
   */
  export interface DeliverToQBusinessMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness: DeliverToQBusinessAction;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action publishes the email content to an Amazon SNS topic.
   *
   * @public
   */
  export interface PublishToSnsMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns: SnsAction;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action sends a bounce response for the email.
   *
   * @public
   */
  export interface BounceMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce: BounceAction;
    InvokeLambda?: never;
    $unknown?: never;
  }

  /**
   * This action invokes an Amazon Web Services Lambda function to process the email.
   *
   * @public
   */
  export interface InvokeLambdaMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda: InvokeLambdaAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Drop?: never;
    Relay?: never;
    Archive?: never;
    WriteToS3?: never;
    Send?: never;
    AddHeader?: never;
    ReplaceRecipient?: never;
    DeliverToMailbox?: never;
    DeliverToQBusiness?: never;
    PublishToSns?: never;
    Bounce?: never;
    InvokeLambda?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Drop: (value: DropAction) => T;
    Relay: (value: RelayAction) => T;
    Archive: (value: ArchiveAction) => T;
    WriteToS3: (value: S3Action) => T;
    Send: (value: SendAction) => T;
    AddHeader: (value: AddHeaderAction) => T;
    ReplaceRecipient: (value: ReplaceRecipientAction) => T;
    DeliverToMailbox: (value: DeliverToMailboxAction) => T;
    DeliverToQBusiness: (value: DeliverToQBusinessAction) => T;
    PublishToSns: (value: SnsAction) => T;
    Bounce: (value: BounceAction) => T;
    InvokeLambda: (value: InvokeLambdaAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure type for a boolean condition that provides the address lists and address list attribute to evaluate.
 *
 * @public
 */
export interface RuleIsInAddressList {
  /**
   * The email attribute that needs to be evaluated against the address list.
   *
   * @public
   */
  Attribute: RuleAddressListEmailAttribute | undefined;

  /**
   * The address lists that will be used for evaluation.
   *
   * @public
   */
  AddressLists: string[] | undefined;
}

/**
 * The union type representing the allowed types of operands for a boolean condition.
 *
 * @public
 */
export type RuleBooleanToEvaluate =
  | RuleBooleanToEvaluate.AnalysisMember
  | RuleBooleanToEvaluate.AttributeMember
  | RuleBooleanToEvaluate.IsInAddressListMember
  | RuleBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleBooleanToEvaluate {
  /**
   * The boolean type representing the allowed attribute types for an email.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleBooleanEmailAttribute;
    Analysis?: never;
    IsInAddressList?: never;
    $unknown?: never;
  }

  /**
   * The Add On ARN and its returned value to evaluate in a boolean condition expression.
   *
   * @public
   */
  export interface AnalysisMember {
    Attribute?: never;
    Analysis: Analysis;
    IsInAddressList?: never;
    $unknown?: never;
  }

  /**
   * The structure representing the address lists and address list attribute that will be used in evaluation of boolean expression.
   *
   * @public
   */
  export interface IsInAddressListMember {
    Attribute?: never;
    Analysis?: never;
    IsInAddressList: RuleIsInAddressList;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    Analysis?: never;
    IsInAddressList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: RuleBooleanEmailAttribute) => T;
    Analysis: (value: Analysis) => T;
    IsInAddressList: (value: RuleIsInAddressList) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A boolean expression to be used in a rule condition.
 *
 * @public
 */
export interface RuleBooleanExpression {
  /**
   * The operand on which to perform a boolean condition operation.
   *
   * @public
   */
  Evaluate: RuleBooleanToEvaluate | undefined;

  /**
   * The matching operator for a boolean condition expression.
   *
   * @public
   */
  Operator: RuleBooleanOperator | undefined;
}

/**
 * A DMARC policy expression. The condition matches if the given DMARC policy matches that of the incoming email.
 *
 * @public
 */
export interface RuleDmarcExpression {
  /**
   * The operator to apply to the DMARC policy of the incoming email.
   *
   * @public
   */
  Operator: RuleDmarcOperator | undefined;

  /**
   * The values to use for the given DMARC policy operator. For the operator EQUALS, if multiple values are given, they are evaluated as an OR. That is, if any of the given values match, the condition is deemed to match. For the operator NOT_EQUALS, if multiple values are given, they are evaluated as an AND. That is, only if the email's DMARC policy is not equal to any of the given values, then the condition is deemed to match.
   *
   * @public
   */
  Values: RuleDmarcPolicy[] | undefined;
}

/**
 * The IP address to evaluate for this condition.
 *
 * @public
 */
export type RuleIpToEvaluate =
  | RuleIpToEvaluate.AttributeMember
  | RuleIpToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleIpToEvaluate {
  /**
   * The attribute of the email to evaluate.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleIpEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: RuleIpEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An IP address expression matching certain IP addresses within a given range of IP addresses.
 *
 * @public
 */
export interface RuleIpExpression {
  /**
   * The IP address to evaluate in this condition.
   *
   * @public
   */
  Evaluate: RuleIpToEvaluate | undefined;

  /**
   * The operator to evaluate the IP address.
   *
   * @public
   */
  Operator: RuleIpOperator | undefined;

  /**
   * The IP CIDR blocks in format "x.y.z.w/n" (eg 10.0.0.0/8) to match with the email's IP address. For the operator CIDR_MATCHES, if multiple values are given, they are evaluated as an OR. That is, if the IP address is contained within any of the given CIDR ranges, the condition is deemed to match. For NOT_CIDR_MATCHES, if multiple CIDR ranges are given, the condition is deemed to match if the IP address is not contained in any of the given CIDR ranges.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The number to evaluate in a numeric condition expression.
 *
 * @public
 */
export type RuleNumberToEvaluate =
  | RuleNumberToEvaluate.AttributeMember
  | RuleNumberToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleNumberToEvaluate {
  /**
   * An email attribute that is used as the number to evaluate.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleNumberEmailAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: RuleNumberEmailAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A number expression to match numeric conditions with integers from the incoming email.
 *
 * @public
 */
export interface RuleNumberExpression {
  /**
   * The number to evaluate in a numeric condition expression.
   *
   * @public
   */
  Evaluate: RuleNumberToEvaluate | undefined;

  /**
   * The operator for a numeric condition expression.
   *
   * @public
   */
  Operator: RuleNumberOperator | undefined;

  /**
   * The value to evaluate in a numeric condition expression.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The string to evaluate in a string condition expression.
 *
 * @public
 */
export type RuleStringToEvaluate =
  | RuleStringToEvaluate.AnalysisMember
  | RuleStringToEvaluate.AttributeMember
  | RuleStringToEvaluate.ClientCertificateAttributeMember
  | RuleStringToEvaluate.MimeHeaderAttributeMember
  | RuleStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleStringToEvaluate {
  /**
   * The email attribute to evaluate in a string condition expression.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleStringEmailAttribute;
    MimeHeaderAttribute?: never;
    Analysis?: never;
    ClientCertificateAttribute?: never;
    $unknown?: never;
  }

  /**
   * The email MIME X-Header attribute to evaluate in a string condition expression.
   *
   * @public
   */
  export interface MimeHeaderAttributeMember {
    Attribute?: never;
    MimeHeaderAttribute: string;
    Analysis?: never;
    ClientCertificateAttribute?: never;
    $unknown?: never;
  }

  /**
   * The Add On ARN and its returned value to evaluate in a string condition expression.
   *
   * @public
   */
  export interface AnalysisMember {
    Attribute?: never;
    MimeHeaderAttribute?: never;
    Analysis: Analysis;
    ClientCertificateAttribute?: never;
    $unknown?: never;
  }

  /**
   * The client certificate attribute to evaluate in a string condition expression.
   *
   * @public
   */
  export interface ClientCertificateAttributeMember {
    Attribute?: never;
    MimeHeaderAttribute?: never;
    Analysis?: never;
    ClientCertificateAttribute: RuleClientCertificateAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    MimeHeaderAttribute?: never;
    Analysis?: never;
    ClientCertificateAttribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: RuleStringEmailAttribute) => T;
    MimeHeaderAttribute: (value: string) => T;
    Analysis: (value: Analysis) => T;
    ClientCertificateAttribute: (value: RuleClientCertificateAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A string expression is evaluated against strings or substrings of the email.
 *
 * @public
 */
export interface RuleStringExpression {
  /**
   * The string to evaluate in a string condition expression.
   *
   * @public
   */
  Evaluate: RuleStringToEvaluate | undefined;

  /**
   * The matching operator for a string condition expression.
   *
   * @public
   */
  Operator: RuleStringOperator | undefined;

  /**
   * The string(s) to be evaluated in a string condition expression. For all operators, except for NOT_EQUALS, if multiple values are given, the values are processed as an OR. That is, if any of the values match the email's string using the given operator, the condition is deemed to match. However, for NOT_EQUALS, the condition is only deemed to match if none of the given strings match the email's string.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The verdict to evaluate in a verdict condition expression.
 *
 * @public
 */
export type RuleVerdictToEvaluate =
  | RuleVerdictToEvaluate.AnalysisMember
  | RuleVerdictToEvaluate.AttributeMember
  | RuleVerdictToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace RuleVerdictToEvaluate {
  /**
   * The email verdict attribute to evaluate in a string verdict expression.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: RuleVerdictAttribute;
    Analysis?: never;
    $unknown?: never;
  }

  /**
   * The Add On ARN and its returned value to evaluate in a verdict condition expression.
   *
   * @public
   */
  export interface AnalysisMember {
    Attribute?: never;
    Analysis: Analysis;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    Analysis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: RuleVerdictAttribute) => T;
    Analysis: (value: Analysis) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A verdict expression is evaluated against verdicts of the email.
 *
 * @public
 */
export interface RuleVerdictExpression {
  /**
   * The verdict to evaluate in a verdict condition expression.
   *
   * @public
   */
  Evaluate: RuleVerdictToEvaluate | undefined;

  /**
   * The matching operator for a verdict condition expression.
   *
   * @public
   */
  Operator: RuleVerdictOperator | undefined;

  /**
   * The values to match with the email's verdict using the given operator. For the EQUALS operator, if multiple values are given, the condition is deemed to match if any of the given verdicts match that of the email. For the NOT_EQUALS operator, if multiple values are given, the condition is deemed to match of none of the given verdicts match the verdict of the email.
   *
   * @public
   */
  Values: RuleVerdict[] | undefined;
}

/**
 * The conditional expression used to evaluate an email for determining if a rule action should be taken.
 *
 * @public
 */
export type RuleCondition =
  | RuleCondition.BooleanExpressionMember
  | RuleCondition.DmarcExpressionMember
  | RuleCondition.IpExpressionMember
  | RuleCondition.NumberExpressionMember
  | RuleCondition.StringExpressionMember
  | RuleCondition.VerdictExpressionMember
  | RuleCondition.$UnknownMember;

/**
 * @public
 */
export namespace RuleCondition {
  /**
   * The condition applies to a boolean expression passed in this field.
   *
   * @public
   */
  export interface BooleanExpressionMember {
    BooleanExpression: RuleBooleanExpression;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * The condition applies to a string expression passed in this field.
   *
   * @public
   */
  export interface StringExpressionMember {
    BooleanExpression?: never;
    StringExpression: RuleStringExpression;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * The condition applies to a number expression passed in this field.
   *
   * @public
   */
  export interface NumberExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression: RuleNumberExpression;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * The condition applies to an IP address expression passed in this field.
   *
   * @public
   */
  export interface IpExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression: RuleIpExpression;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * The condition applies to a verdict expression passed in this field.
   *
   * @public
   */
  export interface VerdictExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression: RuleVerdictExpression;
    DmarcExpression?: never;
    $unknown?: never;
  }

  /**
   * The condition applies to a DMARC policy expression passed in this field.
   *
   * @public
   */
  export interface DmarcExpressionMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression: RuleDmarcExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BooleanExpression?: never;
    StringExpression?: never;
    NumberExpression?: never;
    IpExpression?: never;
    VerdictExpression?: never;
    DmarcExpression?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BooleanExpression: (value: RuleBooleanExpression) => T;
    StringExpression: (value: RuleStringExpression) => T;
    NumberExpression: (value: RuleNumberExpression) => T;
    IpExpression: (value: RuleIpExpression) => T;
    VerdictExpression: (value: RuleVerdictExpression) => T;
    DmarcExpression: (value: RuleDmarcExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A rule contains conditions, "unless conditions" and actions. For each envelope recipient of an email, if all conditions match and none of the "unless conditions" match, then all of the actions are executed sequentially. If no conditions are provided, the rule always applies and the actions are implicitly executed. If only "unless conditions" are provided, the rule applies if the email does not match the evaluation of the "unless conditions".
 *
 * @public
 */
export interface Rule {
  /**
   * The user-friendly name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The conditions of this rule. All conditions must match the email for the actions to be executed. An empty list of conditions means that all emails match, but are still subject to any "unless conditions"
   *
   * @public
   */
  Conditions?: RuleCondition[] | undefined;

  /**
   * The "unless conditions" of this rule. None of the conditions can match the email for the actions to be executed. If any of these conditions do match the email, then the actions are not executed.
   *
   * @public
   */
  Unless?: RuleCondition[] | undefined;

  /**
   * The list of actions to execute when the conditions match the incoming email, and none of the "unless conditions" match.
   *
   * @public
   */
  Actions: RuleAction[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleSetRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A user-friendly name for the rule set.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * Conditional rules that are evaluated for determining actions on email.
   *
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleSetResponse {
  /**
   * The identifier of the created rule set.
   *
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * The Add On ARN and its returned value that is evaluated in a policy statement's conditional expression to either deny or block the incoming email.
 *
 * @public
 */
export interface IngressAnalysis {
  /**
   * The Amazon Resource Name (ARN) of an Add On.
   *
   * @public
   */
  Analyzer: string | undefined;

  /**
   * The returned value from an Add On.
   *
   * @public
   */
  ResultField: string | undefined;
}

/**
 * The address lists and the address list attribute value that is evaluated in a policy statement's conditional expression to either deny or block the incoming email.
 *
 * @public
 */
export interface IngressIsInAddressList {
  /**
   * The email attribute that needs to be evaluated against the address list.
   *
   * @public
   */
  Attribute: IngressAddressListEmailAttribute | undefined;

  /**
   * The address lists that will be used for evaluation.
   *
   * @public
   */
  AddressLists: string[] | undefined;
}

/**
 * The union type representing the allowed types of operands for a boolean condition.
 *
 * @public
 */
export type IngressBooleanToEvaluate =
  | IngressBooleanToEvaluate.AnalysisMember
  | IngressBooleanToEvaluate.IsInAddressListMember
  | IngressBooleanToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressBooleanToEvaluate {
  /**
   * The structure type for a boolean condition stating the Add On ARN and its returned value.
   *
   * @public
   */
  export interface AnalysisMember {
    Analysis: IngressAnalysis;
    IsInAddressList?: never;
    $unknown?: never;
  }

  /**
   * The structure type for a boolean condition that provides the address lists to evaluate incoming traffic on.
   *
   * @public
   */
  export interface IsInAddressListMember {
    Analysis?: never;
    IsInAddressList: IngressIsInAddressList;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Analysis?: never;
    IsInAddressList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Analysis: (value: IngressAnalysis) => T;
    IsInAddressList: (value: IngressIsInAddressList) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure for a boolean condition matching on the incoming mail.
 *
 * @public
 */
export interface IngressBooleanExpression {
  /**
   * The operand on which to perform a boolean condition operation.
   *
   * @public
   */
  Evaluate: IngressBooleanToEvaluate | undefined;

  /**
   * The matching operator for a boolean condition expression.
   *
   * @public
   */
  Operator: IngressBooleanOperator | undefined;
}

/**
 * The structure for an IP based condition matching on the incoming mail.
 *
 * @public
 */
export type IngressIpToEvaluate =
  | IngressIpToEvaluate.AttributeMember
  | IngressIpToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressIpToEvaluate {
  /**
   * An enum type representing the allowed attribute types for an IP condition.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressIpv4Attribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: IngressIpv4Attribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The union type representing the allowed types for the left hand side of an IP condition.
 *
 * @public
 */
export interface IngressIpv4Expression {
  /**
   * The left hand side argument of an IP condition expression.
   *
   * @public
   */
  Evaluate: IngressIpToEvaluate | undefined;

  /**
   * The matching operator for an IP condition expression.
   *
   * @public
   */
  Operator: IngressIpOperator | undefined;

  /**
   * The right hand side argument of an IP condition expression.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The structure for an IPv6 based condition matching on the incoming mail.
 *
 * @public
 */
export type IngressIpv6ToEvaluate =
  | IngressIpv6ToEvaluate.AttributeMember
  | IngressIpv6ToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressIpv6ToEvaluate {
  /**
   * An enum type representing the allowed attribute types for an IPv6 condition.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressIpv6Attribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: IngressIpv6Attribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The union type representing the allowed types for the left hand side of an IPv6 condition.
 *
 * @public
 */
export interface IngressIpv6Expression {
  /**
   * The left hand side argument of an IPv6 condition expression.
   *
   * @public
   */
  Evaluate: IngressIpv6ToEvaluate | undefined;

  /**
   * The matching operator for an IPv6 condition expression.
   *
   * @public
   */
  Operator: IngressIpOperator | undefined;

  /**
   * The right hand side argument of an IPv6 condition expression.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The union type representing the allowed types for the left hand side of a string condition.
 *
 * @public
 */
export type IngressStringToEvaluate =
  | IngressStringToEvaluate.AnalysisMember
  | IngressStringToEvaluate.AttributeMember
  | IngressStringToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressStringToEvaluate {
  /**
   * The enum type representing the allowed attribute types for a string condition.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressStringEmailAttribute;
    Analysis?: never;
    $unknown?: never;
  }

  /**
   * The structure type for a string condition stating the Add On ARN and its returned value.
   *
   * @public
   */
  export interface AnalysisMember {
    Attribute?: never;
    Analysis: IngressAnalysis;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    Analysis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: IngressStringEmailAttribute) => T;
    Analysis: (value: IngressAnalysis) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure for a string based condition matching on the incoming mail.
 *
 * @public
 */
export interface IngressStringExpression {
  /**
   * The left hand side argument of a string condition expression.
   *
   * @public
   */
  Evaluate: IngressStringToEvaluate | undefined;

  /**
   * The matching operator for a string condition expression.
   *
   * @public
   */
  Operator: IngressStringOperator | undefined;

  /**
   * The right hand side argument of a string condition expression.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * The union type representing the allowed types for the left hand side of a TLS condition.
 *
 * @public
 */
export type IngressTlsProtocolToEvaluate =
  | IngressTlsProtocolToEvaluate.AttributeMember
  | IngressTlsProtocolToEvaluate.$UnknownMember;

/**
 * @public
 */
export namespace IngressTlsProtocolToEvaluate {
  /**
   * The enum type representing the allowed attribute types for the TLS condition.
   *
   * @public
   */
  export interface AttributeMember {
    Attribute: IngressTlsAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Attribute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Attribute: (value: IngressTlsAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure for a TLS related condition matching on the incoming mail.
 *
 * @public
 */
export interface IngressTlsProtocolExpression {
  /**
   * The left hand side argument of a TLS condition expression.
   *
   * @public
   */
  Evaluate: IngressTlsProtocolToEvaluate | undefined;

  /**
   * The matching operator for a TLS condition expression.
   *
   * @public
   */
  Operator: IngressTlsProtocolOperator | undefined;

  /**
   * The right hand side argument of a TLS condition expression.
   *
   * @public
   */
  Value: IngressTlsProtocolAttribute | undefined;
}

/**
 * The email traffic filtering conditions which are contained in a traffic policy resource.
 *
 * @public
 */
export type PolicyCondition =
  | PolicyCondition.BooleanExpressionMember
  | PolicyCondition.IpExpressionMember
  | PolicyCondition.Ipv6ExpressionMember
  | PolicyCondition.StringExpressionMember
  | PolicyCondition.TlsExpressionMember
  | PolicyCondition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyCondition {
  /**
   * This represents a string based condition matching on the incoming mail. It performs the string operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   *
   * @public
   */
  export interface StringExpressionMember {
    StringExpression: IngressStringExpression;
    IpExpression?: never;
    Ipv6Expression?: never;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * This represents an IP based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   *
   * @public
   */
  export interface IpExpressionMember {
    StringExpression?: never;
    IpExpression: IngressIpv4Expression;
    Ipv6Expression?: never;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * This represents an IPv6 based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   *
   * @public
   */
  export interface Ipv6ExpressionMember {
    StringExpression?: never;
    IpExpression?: never;
    Ipv6Expression: IngressIpv6Expression;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * This represents a TLS based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   *
   * @public
   */
  export interface TlsExpressionMember {
    StringExpression?: never;
    IpExpression?: never;
    Ipv6Expression?: never;
    TlsExpression: IngressTlsProtocolExpression;
    BooleanExpression?: never;
    $unknown?: never;
  }

  /**
   * This represents a boolean type condition matching on the incoming mail. It performs the boolean operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   *
   * @public
   */
  export interface BooleanExpressionMember {
    StringExpression?: never;
    IpExpression?: never;
    Ipv6Expression?: never;
    TlsExpression?: never;
    BooleanExpression: IngressBooleanExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringExpression?: never;
    IpExpression?: never;
    Ipv6Expression?: never;
    TlsExpression?: never;
    BooleanExpression?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringExpression: (value: IngressStringExpression) => T;
    IpExpression: (value: IngressIpv4Expression) => T;
    Ipv6Expression: (value: IngressIpv6Expression) => T;
    TlsExpression: (value: IngressTlsProtocolExpression) => T;
    BooleanExpression: (value: IngressBooleanExpression) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure containing traffic policy conditions and actions.
 *
 * @public
 */
export interface PolicyStatement {
  /**
   * The list of conditions to apply to incoming messages for filtering email traffic.
   *
   * @public
   */
  Conditions: PolicyCondition[] | undefined;

  /**
   * The action that informs a traffic policy resource to either allow or block the email if it matches a condition in the policy statement.
   *
   * @public
   */
  Action: AcceptAction | undefined;
}

/**
 * @public
 */
export interface CreateTrafficPolicyRequest {
  /**
   * A unique token that Amazon SES uses to recognize subsequent retries of the same request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A user-friendly name for the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * Conditional statements for filtering email traffic.
   *
   * @public
   */
  PolicyStatements: PolicyStatement[] | undefined;

  /**
   * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
   *
   * @public
   */
  DefaultAction: AcceptAction | undefined;

  /**
   * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
   *
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrafficPolicyResponse {
  /**
   * The identifier of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngressPointRequest {
  /**
   * The identifier of the ingress endpoint resource that you want to delete.
   *
   * @public
   */
  IngressPointId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngressPointResponse {}

/**
 * @public
 */
export interface DeleteRelayRequest {
  /**
   * The unique relay identifier.
   *
   * @public
   */
  RelayId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelayResponse {}

/**
 * @public
 */
export interface DeleteRuleSetRequest {
  /**
   * The identifier of an existing rule set resource to delete.
   *
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleSetResponse {}

/**
 * @public
 */
export interface DeleteTrafficPolicyRequest {
  /**
   * The identifier of the traffic policy that you want to delete.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficPolicyResponse {}

/**
 * @public
 */
export interface DeregisterMemberFromAddressListRequest {
  /**
   * The unique identifier of the address list to remove the address from.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The address to be removed from the address list.
   *
   * @public
   */
  Address: string | undefined;
}

/**
 * @public
 */
export interface DeregisterMemberFromAddressListResponse {}

/**
 * The SMTP envelope information of the email.
 *
 * @public
 */
export interface Envelope {
  /**
   * The HELO used by the host from which the email was received.
   *
   * @public
   */
  Helo?: string | undefined;

  /**
   * The RCPT FROM given by the host from which the email was received.
   *
   * @public
   */
  From?: string | undefined;

  /**
   * All SMTP TO entries given by the host from which the email was received.
   *
   * @public
   */
  To?: string[] | undefined;
}

/**
 * The configuration for exporting email data to an Amazon S3 bucket.
 *
 * @public
 */
export interface S3ExportDestinationConfiguration {
  /**
   * The S3 location to deliver the exported email data.
   *
   * @public
   */
  S3Location?: string | undefined;
}

/**
 * The destination configuration for delivering exported email data.
 *
 * @public
 */
export type ExportDestinationConfiguration =
  | ExportDestinationConfiguration.S3Member
  | ExportDestinationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExportDestinationConfiguration {
  /**
   * Configuration for delivering to an Amazon S3 bucket.
   *
   * @public
   */
  export interface S3Member {
    S3: S3ExportDestinationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3: (value: S3ExportDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The current status of an archive export job.
 *
 * @public
 */
export interface ExportStatus {
  /**
   * The timestamp of when the export job was submitted.
   *
   * @public
   */
  SubmissionTimestamp?: Date | undefined;

  /**
   * The timestamp of when the export job completed (if finished).
   *
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * The current state of the export job.
   *
   * @public
   */
  State?: ExportState | undefined;

  /**
   * An error message if the export job failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Summary statuses of an archive export job.
 *
 * @public
 */
export interface ExportSummary {
  /**
   * The unique identifier of the export job.
   *
   * @public
   */
  ExportId?: string | undefined;

  /**
   * The current status of the export job.
   *
   * @public
   */
  Status?: ExportStatus | undefined;
}

/**
 * @public
 */
export interface GetAddressListImportJobRequest {
  /**
   * The identifier of the import job that needs to be retrieved.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetAddressListImportJobResponse {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * A user-friendly name for the import job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  Status: ImportJobStatus | undefined;

  /**
   * The pre-signed URL target for uploading the input file.
   *
   * @public
   */
  PreSignedUrl: string | undefined;

  /**
   * The number of input addresses successfully imported into the address list.
   *
   * @public
   */
  ImportedItemsCount?: number | undefined;

  /**
   * The number of input addresses that failed to be imported into the address list.
   *
   * @public
   */
  FailedItemsCount?: number | undefined;

  /**
   * The format of the input for an import job.
   *
   * @public
   */
  ImportDataFormat: ImportDataFormat | undefined;

  /**
   * The unique identifier of the address list the import job was created for.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The timestamp of when the import job was created.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The timestamp of when the import job was started.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The timestamp of when the import job was completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * The reason for failure of an import job.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * The request to retrieve details of a specific archive export job.
 *
 * @public
 */
export interface GetArchiveExportRequest {
  /**
   * The identifier of the export job to get details for.
   *
   * @public
   */
  ExportId: string | undefined;
}

/**
 * The response containing details of the specified archive export job.
 *
 * @public
 */
export interface GetArchiveExportResponse {
  /**
   * The identifier of the archive the email export was performed from.
   *
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * The criteria used to filter emails included in the export.
   *
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * The start of the timestamp range the exported emails cover.
   *
   * @public
   */
  FromTimestamp?: Date | undefined;

  /**
   * The end of the date range the exported emails cover.
   *
   * @public
   */
  ToTimestamp?: Date | undefined;

  /**
   * The maximum number of email items included in the export.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Where the exported emails are being delivered.
   *
   * @public
   */
  ExportDestinationConfiguration?: ExportDestinationConfiguration | undefined;

  /**
   * The current status of the export job.
   *
   * @public
   */
  Status?: ExportStatus | undefined;
}

/**
 * The request to get details of a specific email message stored in an archive.
 *
 * @public
 */
export interface GetArchiveMessageRequest {
  /**
   * The unique identifier of the archived email message.
   *
   * @public
   */
  ArchivedMessageId: string | undefined;
}

/**
 * The metadata about the email.
 *
 * @public
 */
export interface Metadata {
  /**
   * The timestamp of when the email was received.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The ID of the ingress endpoint through which the email was received.
   *
   * @public
   */
  IngressPointId?: string | undefined;

  /**
   * The ID of the traffic policy that was in effect when the email was received.
   *
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * The ID of the rule set that processed the email.
   *
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * The name of the host from which the email was received.
   *
   * @public
   */
  SenderHostname?: string | undefined;

  /**
   * The IP address of the host from which the email was received.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The TLS cipher suite used to communicate with the host from which the email was received.
   *
   * @public
   */
  TlsCipherSuite?: string | undefined;

  /**
   * The TLS protocol used to communicate with the host from which the email was received.
   *
   * @public
   */
  TlsProtocol?: string | undefined;

  /**
   * The name of the API call used when sent through a configuration set with archiving enabled.
   *
   * @public
   */
  SendingMethod?: string | undefined;

  /**
   * The identity name used to authorize the sending action when sent through a configuration set with archiving enabled.
   *
   * @public
   */
  SourceIdentity?: string | undefined;

  /**
   * The name of the dedicated IP pool used when sent through a configuration set with archiving enabled.
   *
   * @public
   */
  SendingPool?: string | undefined;

  /**
   * The name of the configuration set used when sent through a configuration set with archiving enabled.
   *
   * @public
   */
  ConfigurationSet?: string | undefined;

  /**
   * Specifies the archived email source, identified by either a Rule Set's ARN with an Archive action, or a Configuration Set's Archive ARN.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * The response containing details about the requested archived email message.
 *
 * @public
 */
export interface GetArchiveMessageResponse {
  /**
   * A pre-signed URL to temporarily download the full message content.
   *
   * @public
   */
  MessageDownloadLink?: string | undefined;

  /**
   * The metadata about the email.
   *
   * @public
   */
  Metadata?: Metadata | undefined;

  /**
   * The SMTP envelope information of the email.
   *
   * @public
   */
  Envelope?: Envelope | undefined;
}

/**
 * The request to get the textual content of a specific email message stored in an archive.
 *
 * @public
 */
export interface GetArchiveMessageContentRequest {
  /**
   * The unique identifier of the archived email message.
   *
   * @public
   */
  ArchivedMessageId: string | undefined;
}

/**
 * The textual body content of an email message.
 *
 * @public
 */
export interface MessageBody {
  /**
   * The plain text body content of the message.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The HTML body content of the message.
   *
   * @public
   */
  Html?: string | undefined;

  /**
   * A flag indicating if the email was malformed.
   *
   * @public
   */
  MessageMalformed?: boolean | undefined;
}

/**
 * The response containing the textual content of the requested archived email message.
 *
 * @public
 */
export interface GetArchiveMessageContentResponse {
  /**
   * The textual body content of the email message.
   *
   * @public
   */
  Body?: MessageBody | undefined;
}

/**
 * The request to retrieve details of a specific archive search job.
 *
 * @public
 */
export interface GetArchiveSearchRequest {
  /**
   * The identifier of the search job to get details for.
   *
   * @public
   */
  SearchId: string | undefined;
}

/**
 * The current status of an archive search job.
 *
 * @public
 */
export interface SearchStatus {
  /**
   * The timestamp of when the search was submitted.
   *
   * @public
   */
  SubmissionTimestamp?: Date | undefined;

  /**
   * The timestamp of when the search completed (if finished).
   *
   * @public
   */
  CompletionTimestamp?: Date | undefined;

  /**
   * The current state of the search job.
   *
   * @public
   */
  State?: SearchState | undefined;

  /**
   * An error message if the search failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * The response containing details of the specified archive search job.
 *
 * @public
 */
export interface GetArchiveSearchResponse {
  /**
   * The identifier of the archive the email search was performed in.
   *
   * @public
   */
  ArchiveId?: string | undefined;

  /**
   * The criteria used to filter emails included in the search.
   *
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * The start timestamp of the range the searched emails cover.
   *
   * @public
   */
  FromTimestamp?: Date | undefined;

  /**
   * The end timestamp of the range the searched emails cover.
   *
   * @public
   */
  ToTimestamp?: Date | undefined;

  /**
   * The maximum number of search results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The current status of the search job.
   *
   * @public
   */
  Status?: SearchStatus | undefined;
}

/**
 * The request to retrieve results from a completed archive search job.
 *
 * @public
 */
export interface GetArchiveSearchResultsRequest {
  /**
   * The identifier of the completed search job.
   *
   * @public
   */
  SearchId: string | undefined;
}

/**
 * A result row containing metadata for an archived email message.
 *
 * @public
 */
export interface Row {
  /**
   * The unique identifier of the archived message.
   *
   * @public
   */
  ArchivedMessageId?: string | undefined;

  /**
   * The timestamp of when the email was received.
   *
   * @public
   */
  ReceivedTimestamp?: Date | undefined;

  /**
   * The date the email was sent.
   *
   * @public
   */
  Date?: string | undefined;

  /**
   * The email addresses in the To header.
   *
   * @public
   */
  To?: string | undefined;

  /**
   * The email address of the sender.
   *
   * @public
   */
  From?: string | undefined;

  /**
   * The email addresses in the CC header.
   *
   * @public
   */
  Cc?: string | undefined;

  /**
   * The subject header value of the email.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The unique message ID of the email.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * A flag indicating if the email has attachments.
   *
   * @public
   */
  HasAttachments?: boolean | undefined;

  /**
   * The received headers from the email delivery path.
   *
   * @public
   */
  ReceivedHeaders?: string[] | undefined;

  /**
   * The email message ID this is a reply to.
   *
   * @public
   */
  InReplyTo?: string | undefined;

  /**
   * The user agent that sent the email.
   *
   * @public
   */
  XMailer?: string | undefined;

  /**
   * The original user agent that sent the email.
   *
   * @public
   */
  XOriginalMailer?: string | undefined;

  /**
   * The priority level of the email.
   *
   * @public
   */
  XPriority?: string | undefined;

  /**
   * The ID of the ingress endpoint through which the email was received.
   *
   * @public
   */
  IngressPointId?: string | undefined;

  /**
   * The name of the host from which the email was received.
   *
   * @public
   */
  SenderHostname?: string | undefined;

  /**
   * - Mail archived with Mail Manager: The IP address of the client that connects to the ingress endpoint.
   * - Mail sent through a configuration set with the archiving option enabled: The IP address of the client that makes the SendEmail API call.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The SMTP envelope information of the email.
   *
   * @public
   */
  Envelope?: Envelope | undefined;

  /**
   * Specifies the archived email source, identified by either a Rule Set's ARN with an Archive action, or a Configuration Set's Archive ARN.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * The response containing search results from a completed archive search.
 *
 * @public
 */
export interface GetArchiveSearchResultsResponse {
  /**
   * The list of email result objects matching the search criteria.
   *
   * @public
   */
  Rows?: Row[] | undefined;
}

/**
 * @public
 */
export interface GetIngressPointRequest {
  /**
   * The identifier of an ingress endpoint.
   *
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * Whether to include the trust store contents in the response. Use INCLUDE to retrieve trust store certificate and CRL contents.
   *
   * @public
   */
  IncludeTrustStoreContents?: TrustStoreResponseOption | undefined;
}

/**
 * The password configuration of the ingress endpoint resource.
 *
 * @public
 */
export interface IngressPointPasswordConfiguration {
  /**
   * The current password expiry timestamp of the ingress endpoint resource.
   *
   * @public
   */
  SmtpPasswordVersion?: string | undefined;

  /**
   * The previous password version of the ingress endpoint resource.
   *
   * @public
   */
  PreviousSmtpPasswordVersion?: string | undefined;

  /**
   * The previous password expiry timestamp of the ingress endpoint resource.
   *
   * @public
   */
  PreviousSmtpPasswordExpiryTimestamp?: Date | undefined;
}

/**
 * The authentication configuration for the ingress endpoint resource.
 *
 * @public
 */
export interface IngressPointAuthConfiguration {
  /**
   * The ingress endpoint password configuration for the ingress endpoint resource.
   *
   * @public
   */
  IngressPointPasswordConfiguration?: IngressPointPasswordConfiguration | undefined;

  /**
   * The ingress endpoint SecretsManager::Secret ARN configuration for the ingress endpoint resource.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The mutual TLS authentication configuration for the ingress endpoint resource.
   *
   * @public
   */
  TlsAuthConfiguration?: TlsAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface GetIngressPointResponse {
  /**
   * The identifier of an ingress endpoint resource.
   *
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * A user friendly name for the ingress endpoint.
   *
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingress endpoint resource.
   *
   * @public
   */
  IngressPointArn?: string | undefined;

  /**
   * The status of the ingress endpoint resource.
   *
   * @public
   */
  Status?: IngressPointStatus | undefined;

  /**
   * The type of ingress endpoint.
   *
   * @public
   */
  Type?: IngressPointType | undefined;

  /**
   * The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.
   *
   * @public
   */
  ARecord?: string | undefined;

  /**
   * The identifier of a rule set resource associated with the ingress endpoint.
   *
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * The identifier of the traffic policy resource associated with the ingress endpoint.
   *
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * The authentication configuration of the ingress endpoint resource.
   *
   * @public
   */
  IngressPointAuthConfiguration?: IngressPointAuthConfiguration | undefined;

  /**
   * The network configuration for the ingress point.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The selected Transport Layer Security (TLS) policy of the ingress point.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;

  /**
   * The timestamp of when the ingress endpoint was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the ingress endpoint was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetMemberOfAddressListRequest {
  /**
   * The unique identifier of the address list to retrieve the address from.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The address to be retrieved from the address list.
   *
   * @public
   */
  Address: string | undefined;
}

/**
 * @public
 */
export interface GetMemberOfAddressListResponse {
  /**
   * The address retrieved from the address list.
   *
   * @public
   */
  Address: string | undefined;

  /**
   * The timestamp of when the address was created.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetRelayRequest {
  /**
   * A unique relay identifier.
   *
   * @public
   */
  RelayId: string | undefined;
}

/**
 * @public
 */
export interface GetRelayResponse {
  /**
   * The unique relay identifier.
   *
   * @public
   */
  RelayId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the relay.
   *
   * @public
   */
  RelayArn?: string | undefined;

  /**
   * The unique name of the relay.
   *
   * @public
   */
  RelayName?: string | undefined;

  /**
   * The destination relay server address.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The destination relay server port.
   *
   * @public
   */
  ServerPort?: number | undefined;

  /**
   * The authentication attribute—contains the secret ARN where the customer relay server credentials are stored.
   *
   * @public
   */
  Authentication?: RelayAuthentication | undefined;

  /**
   * The timestamp of when the relay was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when relay was last updated.
   *
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRuleSetRequest {
  /**
   * The identifier of an existing rule set to be retrieved.
   *
   * @public
   */
  RuleSetId: string | undefined;
}

/**
 * @public
 */
export interface GetRuleSetResponse {
  /**
   * The identifier of the rule set resource.
   *
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule set resource.
   *
   * @public
   */
  RuleSetArn: string | undefined;

  /**
   * A user-friendly name for the rule set resource.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The date of when then rule set was created.
   *
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * The date of when the rule set was last modified.
   *
   * @public
   */
  LastModificationDate: Date | undefined;

  /**
   * The rules contained in the rule set.
   *
   * @public
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficPolicyRequest {
  /**
   * The identifier of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;
}

/**
 * @public
 */
export interface GetTrafficPolicyResponse {
  /**
   * A user-friendly name for the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * The identifier of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyArn?: string | undefined;

  /**
   * The list of conditions which are in the traffic policy resource.
   *
   * @public
   */
  PolicyStatements?: PolicyStatement[] | undefined;

  /**
   * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
   *
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;

  /**
   * The default action of the traffic policy.
   *
   * @public
   */
  DefaultAction?: AcceptAction | undefined;

  /**
   * The timestamp of when the traffic policy was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the traffic policy was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * Details about an import job.
 *
 * @public
 */
export interface ImportJob {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * A user-friendly name for the import job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  Status: ImportJobStatus | undefined;

  /**
   * The pre-signed URL target for uploading the input file.
   *
   * @public
   */
  PreSignedUrl: string | undefined;

  /**
   * The number of addresses in the input that were successfully imported into the address list.
   *
   * @public
   */
  ImportedItemsCount?: number | undefined;

  /**
   * The number of addresses in the input that failed to get imported into address list.
   *
   * @public
   */
  FailedItemsCount?: number | undefined;

  /**
   * The format of the input for the import job.
   *
   * @public
   */
  ImportDataFormat: ImportDataFormat | undefined;

  /**
   * The unique identifier of the address list the import job was created for.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The timestamp of when the import job was created.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;

  /**
   * The timestamp of when the import job was started.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * The timestamp of when the import job was completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * The reason for failure of an import job.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * The structure of an ingress endpoint resource.
 *
 * @public
 */
export interface IngressPoint {
  /**
   * A user friendly name for the ingress endpoint resource.
   *
   * @public
   */
  IngressPointName: string | undefined;

  /**
   * The identifier of the ingress endpoint resource.
   *
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * The status of the ingress endpoint resource.
   *
   * @public
   */
  Status: IngressPointStatus | undefined;

  /**
   * The type of ingress endpoint resource.
   *
   * @public
   */
  Type: IngressPointType | undefined;

  /**
   * The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.
   *
   * @public
   */
  ARecord?: string | undefined;
}

/**
 * @public
 */
export interface ListIngressPointsRequest {
  /**
   * The maximum number of ingress endpoint resources that are returned per call. You can use NextToken to obtain further ingress endpoints.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngressPointsResponse {
  /**
   * The list of ingress endpoints.
   *
   * @public
   */
  IngressPoints?: IngressPoint[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIngressPointRequest {
  /**
   * The identifier for the ingress endpoint you want to update.
   *
   * @public
   */
  IngressPointId: string | undefined;

  /**
   * A user friendly name for the ingress endpoint resource.
   *
   * @public
   */
  IngressPointName?: string | undefined;

  /**
   * The update status of an ingress endpoint.
   *
   * @public
   */
  StatusToUpdate?: IngressPointStatusToUpdate | undefined;

  /**
   * The identifier of an existing rule set that you attach to an ingress endpoint resource.
   *
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
   *
   * @public
   */
  TrafficPolicyId?: string | undefined;

  /**
   * If you choose an Authenticated ingress endpoint, you must configure either an SMTP password or a secret ARN.
   *
   * @public
   */
  IngressPointConfiguration?: IngressPointConfiguration | undefined;

  /**
   * The Transport Layer Security (TLS) policy for the ingress point. Valid values are REQUIRED, OPTIONAL. Only ingress endpoints using REQUIRED or OPTIONAL as TlsPolicy can be updated.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateIngressPointResponse {}

/**
 * @public
 */
export interface ListAddressListImportJobsRequest {
  /**
   * The unique identifier of the address list for listing import jobs.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of import jobs that are returned per call. You can use NextToken to retrieve the next page of jobs.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAddressListImportJobsResponse {
  /**
   * The list of import jobs.
   *
   * @public
   */
  ImportJobs: ImportJob[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request to list archive export jobs in your account.
 *
 * @public
 */
export interface ListArchiveExportsRequest {
  /**
   * The identifier of the archive.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of archive export jobs that are returned per call. You can use NextToken to obtain further pages of archives.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The response containing a list of archive export jobs and their statuses.
 *
 * @public
 */
export interface ListArchiveExportsResponse {
  /**
   * The list of export job identifiers and statuses.
   *
   * @public
   */
  Exports?: ExportSummary[] | undefined;

  /**
   * If present, use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request to list archive search jobs in your account.
 *
 * @public
 */
export interface ListArchiveSearchesRequest {
  /**
   * The identifier of the archive.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of archive search jobs that are returned per call. You can use NextToken to obtain further pages of archives.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Summary details of an archive search job.
 *
 * @public
 */
export interface SearchSummary {
  /**
   * The unique identifier of the search job.
   *
   * @public
   */
  SearchId?: string | undefined;

  /**
   * The current status of the search job.
   *
   * @public
   */
  Status?: SearchStatus | undefined;
}

/**
 * The response containing a list of archive search jobs and their statuses.
 *
 * @public
 */
export interface ListArchiveSearchesResponse {
  /**
   * The list of search job identifiers and statuses.
   *
   * @public
   */
  Searches?: SearchSummary[] | undefined;

  /**
   * If present, use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersOfAddressListRequest {
  /**
   * The unique identifier of the address list to list the addresses from.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * Filter to be used to limit the results.
   *
   * @public
   */
  Filter?: AddressFilter | undefined;

  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of address list members that are returned per call. You can use NextToken to retrieve the next page of members.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * An address that is a member of an address list.
 *
 * @public
 */
export interface SavedAddress {
  /**
   * The email or domain that constitutes the address.
   *
   * @public
   */
  Address: string | undefined;

  /**
   * The timestamp of when the address was added to the address list.
   *
   * @public
   */
  CreatedTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListMembersOfAddressListResponse {
  /**
   * The list of addresses.
   *
   * @public
   */
  Addresses: SavedAddress[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRelaysRequest {
  /**
   * The number of relays to be returned in one request.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The relay resource that can be used as a rule to relay receiving emails to the destination relay server.
 *
 * @public
 */
export interface Relay {
  /**
   * The unique relay identifier.
   *
   * @public
   */
  RelayId?: string | undefined;

  /**
   * The unique relay name.
   *
   * @public
   */
  RelayName?: string | undefined;

  /**
   * The timestamp of when the relay was last modified.
   *
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListRelaysResponse {
  /**
   * The list of returned relays.
   *
   * @public
   */
  Relays: Relay[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleSetsRequest {
  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of rule set resources that are returned per call. You can use NextToken to obtain further rule sets.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A rule set contains a list of rules that are evaluated in order. Each rule is evaluated sequentially for each email.
 *
 * @public
 */
export interface RuleSet {
  /**
   * The identifier of the rule set.
   *
   * @public
   */
  RuleSetId?: string | undefined;

  /**
   * A user-friendly name for the rule set.
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * The last modification date of the rule set.
   *
   * @public
   */
  LastModificationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListRuleSetsResponse {
  /**
   * The list of rule sets.
   *
   * @public
   */
  RuleSets: RuleSet[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to retrieve tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTrafficPoliciesRequest {
  /**
   * The maximum number of traffic policy resources that are returned per call. You can use NextToken to obtain further traffic policies.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * If you received a pagination token from a previous call to this API, you can provide it here to continue paginating through the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The structure of a traffic policy resource which is a container for policy statements.
 *
 * @public
 */
export interface TrafficPolicy {
  /**
   * A user-friendly name of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyName: string | undefined;

  /**
   * The identifier of the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
   *
   * @public
   */
  DefaultAction: AcceptAction | undefined;
}

/**
 * @public
 */
export interface ListTrafficPoliciesResponse {
  /**
   * The list of traffic policies.
   *
   * @public
   */
  TrafficPolicies?: TrafficPolicy[] | undefined;

  /**
   * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterMemberToAddressListRequest {
  /**
   * The unique identifier of the address list where the address should be added.
   *
   * @public
   */
  AddressListId: string | undefined;

  /**
   * The address to be added to the address list.
   *
   * @public
   */
  Address: string | undefined;
}

/**
 * @public
 */
export interface RegisterMemberToAddressListResponse {}

/**
 * @public
 */
export interface UpdateRelayRequest {
  /**
   * The unique relay identifier.
   *
   * @public
   */
  RelayId: string | undefined;

  /**
   * The name of the relay resource.
   *
   * @public
   */
  RelayName?: string | undefined;

  /**
   * The destination relay server address.
   *
   * @public
   */
  ServerName?: string | undefined;

  /**
   * The destination relay server port.
   *
   * @public
   */
  ServerPort?: number | undefined;

  /**
   * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
   *
   * @public
   */
  Authentication?: RelayAuthentication | undefined;
}

/**
 * @public
 */
export interface UpdateRelayResponse {}

/**
 * @public
 */
export interface UpdateRuleSetRequest {
  /**
   * The identifier of a rule set you want to update.
   *
   * @public
   */
  RuleSetId: string | undefined;

  /**
   * A user-friendly name for the rule set resource.
   *
   * @public
   */
  RuleSetName?: string | undefined;

  /**
   * A new set of rules to replace the current rules of the rule set—these rules will override all the rules of the rule set.
   *
   * @public
   */
  Rules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleSetResponse {}

/**
 * @public
 */
export interface StartAddressListImportJobRequest {
  /**
   * The identifier of the import job that needs to be started.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StartAddressListImportJobResponse {}

/**
 * The request to initiate an export of emails from an archive.
 *
 * @public
 */
export interface StartArchiveExportRequest {
  /**
   * The identifier of the archive to export emails from.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * Criteria to filter which emails are included in the export.
   *
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * The start of the timestamp range to include emails from.
   *
   * @public
   */
  FromTimestamp: Date | undefined;

  /**
   * The end of the timestamp range to include emails from.
   *
   * @public
   */
  ToTimestamp: Date | undefined;

  /**
   * The maximum number of email items to include in the export.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Details on where to deliver the exported email data.
   *
   * @public
   */
  ExportDestinationConfiguration: ExportDestinationConfiguration | undefined;

  /**
   * Whether to include message metadata as JSON files in the export.
   *
   * @public
   */
  IncludeMetadata?: boolean | undefined;
}

/**
 * The response from initiating an archive export.
 *
 * @public
 */
export interface StartArchiveExportResponse {
  /**
   * The unique identifier for the initiated export job.
   *
   * @public
   */
  ExportId?: string | undefined;
}

/**
 * The request to initiate a search across emails in an archive.
 *
 * @public
 */
export interface StartArchiveSearchRequest {
  /**
   * The identifier of the archive to search emails in.
   *
   * @public
   */
  ArchiveId: string | undefined;

  /**
   * Criteria to filter which emails are included in the search results.
   *
   * @public
   */
  Filters?: ArchiveFilters | undefined;

  /**
   * The start timestamp of the range to search emails from.
   *
   * @public
   */
  FromTimestamp: Date | undefined;

  /**
   * The end timestamp of the range to search emails from.
   *
   * @public
   */
  ToTimestamp: Date | undefined;

  /**
   * The maximum number of search results to return.
   *
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * The response from initiating an archive search.
 *
 * @public
 */
export interface StartArchiveSearchResponse {
  /**
   * The unique identifier for the initiated search job.
   *
   * @public
   */
  SearchId?: string | undefined;
}

/**
 * @public
 */
export interface StopAddressListImportJobRequest {
  /**
   * The identifier of the import job that needs to be stopped.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopAddressListImportJobResponse {}

/**
 * The request to stop an in-progress archive export job.
 *
 * @public
 */
export interface StopArchiveExportRequest {
  /**
   * The identifier of the export job to stop.
   *
   * @public
   */
  ExportId: string | undefined;
}

/**
 * The response indicating if the request to stop the export job succeeded.
 *
 * On success, returns an HTTP 200 status code. On failure, returns an error message.
 *
 * @public
 */
export interface StopArchiveExportResponse {}

/**
 * The request to stop an in-progress archive search job.
 *
 * @public
 */
export interface StopArchiveSearchRequest {
  /**
   * The identifier of the search job to stop.
   *
   * @public
   */
  SearchId: string | undefined;
}

/**
 * The response indicating if the request to stop the search job succeeded.
 *
 * On success, returns an HTTP 200 status code. On failure, returns an error message.
 *
 * @public
 */
export interface StopArchiveSearchResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for the resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UpdateTrafficPolicyRequest {
  /**
   * The identifier of the traffic policy that you want to update.
   *
   * @public
   */
  TrafficPolicyId: string | undefined;

  /**
   * A user-friendly name for the traffic policy resource.
   *
   * @public
   */
  TrafficPolicyName?: string | undefined;

  /**
   * The list of conditions to be updated for filtering email traffic.
   *
   * @public
   */
  PolicyStatements?: PolicyStatement[] | undefined;

  /**
   * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
   *
   * @public
   */
  DefaultAction?: AcceptAction | undefined;

  /**
   * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
   *
   * @public
   */
  MaxMessageSizeBytes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTrafficPolicyResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
