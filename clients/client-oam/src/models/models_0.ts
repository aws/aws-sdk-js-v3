// smithy-typescript generated code
import type { ResourceType } from "./enums";

/**
 * This structure contains the `Filter` parameter which you can use to specify which log groups are to share log events from this source account to the monitoring account.
 *
 * @public
 */
export interface LogGroupConfiguration {
  /**
   * Use this field to specify which log groups are to share their log events with the monitoring account. Use the term `LogGroupName` and one or more of the following operands. Use single quotation marks (') around log group names. The matching of log group names is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are `AND` and `OR`.
   *
   * - `=` and `!=`
   * - `AND`
   * - `OR`
   * - `LIKE` and `NOT LIKE`. These can be used only as prefix searches. Include a `%` at the end of the string that you want to search for and include.
   * - `IN` and `NOT IN`, using parentheses `( )`
   *
   * Examples:
   *
   * - `LogGroupName IN ('This-Log-Group', 'Other-Log-Group')` includes only the log groups with names `This-Log-Group` and `Other-Log-Group`.
   * - `LogGroupName NOT IN ('Private-Log-Group', 'Private-Log-Group-2')` includes all log groups except the log groups with names `Private-Log-Group` and `Private-Log-Group-2`.
   * - `LogGroupName LIKE 'aws/lambda/%' OR LogGroupName LIKE 'AWSLogs%'` includes all log groups that have names that start with `aws/lambda/` or `AWSLogs`.
   *
   * > **Note:** If you are updating a link that uses filters, you can specify `*` as the only value for the `filter` parameter to delete the filter and share all log groups with the monitoring account.
   *
   * @public
   */
  Filter: string | undefined;
}

/**
 * This structure contains the `Filter` parameter which you can use to specify which metric namespaces are to be shared from this source account to the monitoring account.
 *
 * @public
 */
export interface MetricConfiguration {
  /**
   * Use this field to specify which metrics are to be shared with the monitoring account. Use the term `Namespace` and one or more of the following operands. Use single quotation marks (') around namespace names. The matching of namespace names is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are `AND` and `OR`.
   *
   * - `=` and `!=`
   * - `AND`
   * - `OR`
   * - `LIKE` and `NOT LIKE`. These can be used only as prefix searches. Include a `%` at the end of the string that you want to search for and include.
   * - `IN` and `NOT IN`, using parentheses `( )`
   *
   * Examples:
   *
   * - `Namespace NOT LIKE 'AWS/%'` includes only namespaces that don't start with `AWS/`, such as custom namespaces.
   * - `Namespace IN ('AWS/EC2', 'AWS/ELB', 'AWS/S3')` includes only the metrics in the EC2, Elastic Load Balancing, and Amazon S3 namespaces.
   * - `Namespace = 'AWS/EC2' OR Namespace NOT LIKE 'AWS/%'` includes only the EC2 namespace and your custom namespaces.
   *
   * > **Note:** If you are updating a link that uses filters, you can specify `*` as the only value for the `filter` parameter to delete the filter and share all metric namespaces with the monitoring account.
   *
   * @public
   */
  Filter: string | undefined;
}

/**
 * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
 *
 * @public
 */
export interface LinkConfiguration {
  /**
   * Use this structure to filter which log groups are to send log events from the source account to the monitoring account.
   *
   * @public
   */
  LogGroupConfiguration?: LogGroupConfiguration | undefined;

  /**
   * Use this structure to filter which metric namespaces are to be shared from the source account to the monitoring account.
   *
   * @public
   */
  MetricConfiguration?: MetricConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateLinkInput {
  /**
   * Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
   *
   * You can use a custom label or use the following variables:
   *
   * - `$AccountName` is the name of the account
   * - `$AccountEmail` is the globally unique email address of the account
   * - `$AccountEmailNoDomain` is the email address of the account without the domain name
   *
   * > **Note:** In the Amazon Web Services GovCloud (US-East) and Amazon Web Services GovCloud (US-West) Regions, the only supported option is to use custom labels, and the `$AccountName`, `$AccountEmail`, and `$AccountEmailNoDomain` variables all resolve as *account-id* instead of the specified variable.
   *
   * @public
   */
  LabelTemplate: string | undefined;

  /**
   * An array of strings that define which types of data that the source account shares with the monitoring account.
   *
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;

  /**
   * The ARN of the sink to use to create this link. You can use [ListSinks](https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html) to find the ARNs of sinks.
   *
   * For more information about sinks, see [CreateSink](https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html).
   *
   * @public
   */
  SinkIdentifier: string | undefined;

  /**
   * Assigns one or more tags (key-value pairs) to the link.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * For more information about using tags to control access, see [Controlling access to Amazon Web Services resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
   *
   * @public
   */
  LinkConfiguration?: LinkConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateLinkOutput {
  /**
   * The ARN of the link that is newly created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the link ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The label that you assigned to this link. If the `labelTemplate` includes variables, this field displays the variables resolved to their actual values.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The exact label template that you specified, with the variables not resolved.
   *
   * @public
   */
  LabelTemplate?: string | undefined;

  /**
   * The resource types supported by this link.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The ARN of the sink that is used for this link.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The tags assigned to the link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
   *
   * @public
   */
  LinkConfiguration?: LinkConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSinkInput {
  /**
   * A name for the sink.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Assigns one or more tags (key-value pairs) to the link.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * For more information about using tags to control access, see [Controlling access to Amazon Web Services resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSinkOutput {
  /**
   * The ARN of the sink that is newly created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the sink.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The tags assigned to the sink.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteLinkInput {
  /**
   * The ARN of the link to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLinkOutput {}

/**
 * @public
 */
export interface DeleteSinkInput {
  /**
   * The ARN of the sink to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSinkOutput {}

/**
 * @public
 */
export interface GetLinkInput {
  /**
   * The ARN of the link to retrieve information for.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Specifies whether to include the tags associated with the link in the response. When `IncludeTags` is set to `true` and the caller has the required permission, `oam:ListTagsForResource`, the API will return the tags for the specified resource. If the caller doesn't have the required permission, `oam:ListTagsForResource`, the API will raise an exception.
   *
   * The default value is `false`.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLinkOutput {
  /**
   * The ARN of the link.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the link ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The label that you assigned to this link, with the variables resolved to their actual values.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The exact label template that was specified when the link was created, with the template variables not resolved.
   *
   * @public
   */
  LabelTemplate?: string | undefined;

  /**
   * The resource types supported by this link.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The ARN of the sink that is used for this link.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The tags assigned to the link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
   *
   * @public
   */
  LinkConfiguration?: LinkConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSinkInput {
  /**
   * The ARN of the sink to retrieve information for.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Specifies whether to include the tags associated with the sink in the response. When `IncludeTags` is set to `true` and the caller has the required permission, `oam:ListTagsForResource`, the API will return the tags for the specified resource. If the caller doesn't have the required permission, `oam:ListTagsForResource`, the API will raise an exception.
   *
   * The default value is `false`.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSinkOutput {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the sink.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The tags assigned to the sink.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetSinkPolicyInput {
  /**
   * The ARN of the sink to retrieve the policy of.
   *
   * @public
   */
  SinkIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSinkPolicyOutput {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  SinkId?: string | undefined;

  /**
   * The policy that you specified, in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedLinksInput {
  /**
   * Limits the number of returned links to the specified number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. You received this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the sink that you want to retrieve links for.
   *
   * @public
   */
  SinkIdentifier: string | undefined;
}

/**
 * A structure that contains information about one link attached to this monitoring account sink.
 *
 * @public
 */
export interface ListAttachedLinksItem {
  /**
   * The label that was assigned to this link at creation, with the variables resolved to their actual values.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The ARN of the link.
   *
   * @public
   */
  LinkArn?: string | undefined;

  /**
   * The resource types supported by this link.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAttachedLinksOutput {
  /**
   * An array of structures that contain the information about the attached links.
   *
   * @public
   */
  Items: ListAttachedLinksItem[] | undefined;

  /**
   * The token to use when requesting the next set of links.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLinksInput {
  /**
   * Limits the number of returned links to the specified number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. You received this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains information about one of this source account's links to a monitoring account.
 *
 * @public
 */
export interface ListLinksItem {
  /**
   * The ARN of the link.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the link ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The label that was assigned to this link at creation, with the variables resolved to their actual values.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The resource types supported by this link.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The ARN of the sink that this link is attached to.
   *
   * @public
   */
  SinkArn?: string | undefined;
}

/**
 * @public
 */
export interface ListLinksOutput {
  /**
   * An array of structures that contain the information about the returned links.
   *
   * @public
   */
  Items: ListLinksItem[] | undefined;

  /**
   * The token to use when requesting the next set of links.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSinksInput {
  /**
   * Limits the number of returned links to the specified number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. You received this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains information about one of this monitoring account's sinks.
 *
 * @public
 */
export interface ListSinksItem {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the sink.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListSinksOutput {
  /**
   * An array of structures that contain the information about the returned sinks.
   *
   * @public
   */
  Items: ListSinksItem[] | undefined;

  /**
   * The token to use when requesting the next set of sinks.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource that you want to view tags for.
   *
   * The ARN format of a sink is `arn:aws:oam:Region:account-id:sink/sink-id`
   *
   * The ARN format of a link is `arn:aws:oam:Region:account-id:link/link-id`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
   *
   * > **Important:** Unlike tagging permissions in other Amazon Web Services services, to retrieve the list of tags for links or sinks you must have the `oam:RequestTag` permission. The `aws:ReguestTag` permission does not allow you to tag and untag links and sinks.
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
   * The list of tags associated with the requested resource.&gt;
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSinkPolicyInput {
  /**
   * The ARN of the sink to attach this policy to.
   *
   * @public
   */
  SinkIdentifier: string | undefined;

  /**
   * The JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.
   *
   * The policy must be in JSON string format with quotation marks escaped and no newlines.
   *
   * For examples of different types of policies, see the **Examples** section on this page.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutSinkPolicyOutput {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  SinkId?: string | undefined;

  /**
   * The policy that you specified.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource that you're adding tags to.
   *
   * The ARN format of a sink is `arn:aws:oam:Region:account-id:sink/sink-id`
   *
   * The ARN format of a link is `arn:aws:oam:Region:account-id:link/link-id`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource that you're removing tags from.
   *
   * The ARN format of a sink is `arn:aws:oam:Region:account-id:sink/sink-id`
   *
   * The ARN format of a link is `arn:aws:oam:Region:account-id:link/link-id`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateLinkInput {
  /**
   * The ARN of the link that you want to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An array of strings that define which types of data that the source account will send to the monitoring account.
   *
   * Your input here replaces the current set of data types that are shared.
   *
   * @public
   */
  ResourceTypes: ResourceType[] | undefined;

  /**
   * Use this structure to filter which metric namespaces and which log groups are to be shared from the source account to the monitoring account.
   *
   * @public
   */
  LinkConfiguration?: LinkConfiguration | undefined;

  /**
   * Specifies whether to include the tags associated with the link in the response after the update operation. When `IncludeTags` is set to `true` and the caller has the required permission, `oam:ListTagsForResource`, the API will return the tags for the specified resource. If the caller doesn't have the required permission, `oam:ListTagsForResource`, the API will raise an exception.
   *
   * The default value is `false`.
   *
   * @public
   */
  IncludeTags?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLinkOutput {
  /**
   * The ARN of the link that you have updated.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The random ID string that Amazon Web Services generated as part of the sink ARN.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The label assigned to this link, with the variables resolved to their actual values.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The exact label template that was specified when the link was created, with the template variables not resolved.
   *
   * @public
   */
  LabelTemplate?: string | undefined;

  /**
   * The resource types now supported by this link.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The ARN of the sink that is used for this link.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The tags assigned to the link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
   *
   * @public
   */
  LinkConfiguration?: LinkConfiguration | undefined;
}
