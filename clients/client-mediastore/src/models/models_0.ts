// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MediaStoreServiceException as __BaseException } from "./MediaStoreServiceException";

export enum MethodName {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  PUT = "PUT",
}

export enum ContainerStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>This section describes operations that you can perform on an AWS Elemental MediaStore
 *          container.</p>
 */
export interface Container {
  /**
   * <p>The DNS endpoint of the container. Use the endpoint to identify the specific
   *          container when sending requests to the data plane. The service assigns this value when the
   *          container is created. Once the value has been assigned, it does not change.</p>
   */
  Endpoint?: string;

  /**
   * <p>Unix timestamp.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the container. The ARN has the following
   *          format:</p>
   *          <p>arn:aws:<region>:<account that owns this container>:container/<name of
   *          container> </p>
   *          <p>For example: arn:aws:mediastore:us-west-2:111122223333:container/movies </p>
   */
  ARN?: string;

  /**
   * <p>The name of the container.</p>
   */
  Name?: string;

  /**
   * <p>The status of container creation or deletion. The status is one of the following:
   *             <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the service
   *          is creating the container, the status is <code>CREATING</code>. When the endpoint is
   *          available, the status changes to <code>ACTIVE</code>.</p>
   */
  Status?: ContainerStatus | string;

  /**
   * <p>The state of access logging on the container. This value is <code>false</code> by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to <code>true</code>, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.</p>
   */
  AccessLoggingEnabled?: boolean;
}

/**
 * <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 */
export class ContainerInUseException extends __BaseException {
  readonly name: "ContainerInUseException" = "ContainerInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContainerInUseException, __BaseException>) {
    super({
      name: "ContainerInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContainerInUseException.prototype);
    this.Message = opts.Message;
  }
}

export enum ContainerLevelMetrics {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The container that you specified in the request does not exist.</p>
 */
export class ContainerNotFoundException extends __BaseException {
  readonly name: "ContainerNotFoundException" = "ContainerNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContainerNotFoundException, __BaseException>) {
    super({
      name: "ContainerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContainerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than
 *          one rule applies, the service uses the first applicable rule listed.</p>
 */
export interface CorsRule {
  /**
   * <p>One or more response headers that you want users to be able to access from their
   *          applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p>
   *          <p>Each CORS rule must have at least one <code>AllowedOrigins</code> element. The string
   *          value can include only one wildcard character (*), for example, http://*.example.com.
   *          Additionally, you can specify only one wildcard character to allow cross-origin access for
   *          all origins.</p>
   */
  AllowedOrigins: string[] | undefined;

  /**
   * <p>Identifies an HTTP method that the origin that is specified in the rule is allowed to
   *          execute.</p>
   *          <p>Each CORS rule must contain at least one <code>AllowedMethods</code> and one
   *             <code>AllowedOrigins</code> element.</p>
   */
  AllowedMethods?: (MethodName | string)[];

  /**
   * <p>Specifies which headers are allowed in a preflight <code>OPTIONS</code> request
   *          through the <code>Access-Control-Request-Headers</code> header. Each header name that is
   *          specified in <code>Access-Control-Request-Headers</code> must have a corresponding entry in
   *          the rule. Only the headers that were requested are sent back. </p>
   *          <p>This element can contain only one wildcard character (*).</p>
   */
  AllowedHeaders: string[] | undefined;

  /**
   * <p>The time in seconds that your browser caches the preflight response for the specified
   *          resource.</p>
   *          <p>A CORS rule can have only one <code>MaxAgeSeconds</code> element.</p>
   */
  MaxAgeSeconds?: number;

  /**
   * <p>One or more headers in the response that you want users to be able to access from
   *          their applications (for example, from a JavaScript <code>XMLHttpRequest</code>
   *          object).</p>
   *          <p>This element is optional for each rule.</p>
   */
  ExposeHeaders?: string[];
}

/**
 * <p>The CORS policy that you specified in the request does not exist.</p>
 */
export class CorsPolicyNotFoundException extends __BaseException {
  readonly name: "CorsPolicyNotFoundException" = "CorsPolicyNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CorsPolicyNotFoundException, __BaseException>) {
    super({
      name: "CorsPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CorsPolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key
 *             represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or
 *             "production"). You can add up to 50
 *             tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.</p>
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are
   *             case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or
   *             "companyB." Tag values are case-sensitive.</p>
   */
  Value?: string;
}

export interface CreateContainerInput {
  /**
   * <p>The name for the container. The name must be from 1 to 255 characters. Container
   *          names must be unique to your AWS account within a specific region. As an example, you could
   *          create a container named <code>movies</code> in every region, as long as you don’t have an
   *          existing container with that name.</p>
   */
  ContainerName: string | undefined;

  /**
   * <p>An array of key:value pairs that you define. These values can be anything that you want. Typically, the tag key represents a category (such as
   *            "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50
   *            tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.</p>
   */
  Tags?: Tag[];
}

export interface CreateContainerOutput {
  /**
   * <p>ContainerARN: The Amazon Resource Name (ARN) of the newly created container. The ARN
   *          has the following format: arn:aws:<region>:<account that owns this
   *          container>:container/<name of container>. For example:
   *          arn:aws:mediastore:us-west-2:111122223333:container/movies </p>
   *          <p>ContainerName: The container name as specified in the request.</p>
   *          <p>CreationTime: Unix time stamp.</p>
   *          <p>Status: The status of container creation or deletion. The status is one of the
   *          following: <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the
   *          service is creating the container, the status is <code>CREATING</code>. When an endpoint is
   *          available, the status changes to <code>ACTIVE</code>.</p>
   *          <p>The return value does not include the container's endpoint. To make downstream
   *          requests, you must obtain this value by using <a>DescribeContainer</a> or <a>ListContainers</a>.</p>
   */
  Container: Container | undefined;
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A service limit has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteContainerInput {
  /**
   * <p>The name of the container to delete. </p>
   */
  ContainerName: string | undefined;
}

export interface DeleteContainerOutput {}

export interface DeleteContainerPolicyInput {
  /**
   * <p>The name of the container that holds the policy.</p>
   */
  ContainerName: string | undefined;
}

export interface DeleteContainerPolicyOutput {}

/**
 * <p>The policy that you specified in the request does not exist.</p>
 */
export class PolicyNotFoundException extends __BaseException {
  readonly name: "PolicyNotFoundException" = "PolicyNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteCorsPolicyInput {
  /**
   * <p>The name of the container to remove the policy from.</p>
   */
  ContainerName: string | undefined;
}

export interface DeleteCorsPolicyOutput {}

export interface DeleteLifecyclePolicyInput {
  /**
   * <p>The name of the container that holds the object lifecycle policy.</p>
   */
  ContainerName: string | undefined;
}

export interface DeleteLifecyclePolicyOutput {}

export interface DeleteMetricPolicyInput {
  /**
   * <p>The name of the container that is associated with the metric policy that you want to delete.</p>
   */
  ContainerName: string | undefined;
}

export interface DeleteMetricPolicyOutput {}

export interface DescribeContainerInput {
  /**
   * <p>The name of the container to query.</p>
   */
  ContainerName?: string;
}

export interface DescribeContainerOutput {
  /**
   * <p>The name of the queried container.</p>
   */
  Container?: Container;
}

export interface GetContainerPolicyInput {
  /**
   * <p>The name of the container. </p>
   */
  ContainerName: string | undefined;
}

export interface GetContainerPolicyOutput {
  /**
   * <p>The contents of the access policy.</p>
   */
  Policy: string | undefined;
}

export interface GetCorsPolicyInput {
  /**
   * <p>The name of the container that the policy is assigned to.</p>
   */
  ContainerName: string | undefined;
}

export interface GetCorsPolicyOutput {
  /**
   * <p>The CORS policy assigned to the container.</p>
   */
  CorsPolicy: CorsRule[] | undefined;
}

export interface GetLifecyclePolicyInput {
  /**
   * <p>The name of the container that the object lifecycle policy is assigned to.</p>
   */
  ContainerName: string | undefined;
}

export interface GetLifecyclePolicyOutput {
  /**
   * <p>The object lifecycle policy that is assigned to the container.</p>
   */
  LifecyclePolicy: string | undefined;
}

export interface GetMetricPolicyInput {
  /**
   * <p>The name of the container that is associated with the metric policy.</p>
   */
  ContainerName: string | undefined;
}

/**
 * <p>A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.</p>
 */
export interface MetricPolicyRule {
  /**
   * <p>A path or file name that defines which objects to include in the group. Wildcards (*) are acceptable.</p>
   */
  ObjectGroup: string | undefined;

  /**
   * <p>A name that allows you to refer to the object group.</p>
   */
  ObjectGroupName: string | undefined;
}

/**
 * <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p>
 *          <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>
 */
export interface MetricPolicy {
  /**
   * <p>A setting to enable or disable metrics at the container level.</p>
   */
  ContainerLevelMetrics: ContainerLevelMetrics | string | undefined;

  /**
   * <p>A parameter that holds an array of rules that enable metrics at the object level. This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.</p>
   */
  MetricPolicyRules?: MetricPolicyRule[];
}

export interface GetMetricPolicyOutput {
  /**
   * <p>The metric policy that is associated with the specific container.</p>
   */
  MetricPolicy: MetricPolicy | undefined;
}

export interface ListContainersInput {
  /**
   * <p>Only if you used <code>MaxResults</code> in the first command, enter the token (which
   *          was included in the previous response) to obtain the next set of containers. This token is
   *          included in a response only if there actually are more containers to list.</p>
   */
  NextToken?: string;

  /**
   * <p>Enter the maximum number of containers in the response. Use from 1 to 255 characters.
   *       </p>
   */
  MaxResults?: number;
}

export interface ListContainersOutput {
  /**
   * <p>The names of the containers.</p>
   */
  Containers: Container[] | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is the token to use in the next call to <code>ListContainers</code>.
   *          This token is returned only if you included the <code>MaxResults</code> tag in the original
   *          command, and only if there are still containers to return. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the container.</p>
   */
  Resource: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>An array of key:value pairs that are assigned to the container.</p>
   */
  Tags?: Tag[];
}

export interface PutContainerPolicyInput {
  /**
   * <p>The name of the container.</p>
   */
  ContainerName: string | undefined;

  /**
   * <p>The contents of the policy, which includes the following: </p>
   *          <ul>
   *             <li>
   *                <p>One <code>Version</code> tag</p>
   *             </li>
   *             <li>
   *                <p>One <code>Statement</code> tag that contains the standard tags for the
   *                policy.</p>
   *             </li>
   *          </ul>
   */
  Policy: string | undefined;
}

export interface PutContainerPolicyOutput {}

export interface PutCorsPolicyInput {
  /**
   * <p>The name of the container that you want to assign the CORS policy to.</p>
   */
  ContainerName: string | undefined;

  /**
   * <p>The CORS policy to apply to the container.  </p>
   */
  CorsPolicy: CorsRule[] | undefined;
}

export interface PutCorsPolicyOutput {}

export interface PutLifecyclePolicyInput {
  /**
   * <p>The name of the container that you want to assign the object lifecycle policy to.</p>
   */
  ContainerName: string | undefined;

  /**
   * <p>The object lifecycle policy to apply to the container.</p>
   */
  LifecyclePolicy: string | undefined;
}

export interface PutLifecyclePolicyOutput {}

export interface PutMetricPolicyInput {
  /**
   * <p>The name of the container that you want to add the metric policy to.</p>
   */
  ContainerName: string | undefined;

  /**
   * <p>The metric policy that you want to associate with the container. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include up to five rules to define groups of objects that you want MediaStore to send object-level metrics for.  If you include rules in the policy, construct each rule with both of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An object group that defines which objects to include in the group. The definition can be a path or a file name, but it can't have more than 900 characters. Valid characters are: a-z, A-Z, 0-9, _ (underscore), = (equal), : (colon), . (period), - (hyphen), ~ (tilde), / (forward slash), and * (asterisk). Wildcards (*) are acceptable.</p>
   *             </li>
   *             <li>
   *                <p>An object group name that allows you to refer to the object group. The name can't have more than 30 characters. Valid characters are: a-z, A-Z, 0-9, and _ (underscore).</p>
   *             </li>
   *          </ul>
   */
  MetricPolicy: MetricPolicy | undefined;
}

export interface PutMetricPolicyOutput {}

export interface StartAccessLoggingInput {
  /**
   * <p>The name of the container that you want to start access logging on.</p>
   */
  ContainerName: string | undefined;
}

export interface StartAccessLoggingOutput {}

export interface StopAccessLoggingInput {
  /**
   * <p>The name of the container that you want to stop access logging on.</p>
   */
  ContainerName: string | undefined;
}

export interface StopAccessLoggingOutput {}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the container. </p>
   */
  Resource: string | undefined;

  /**
   * <p>An array of key:value pairs that you want to add to the container. You need to specify only the tags that you want to add or update. For example,
   *             suppose a container already has two tags (customer:CompanyA and priority:High). You want to change the priority tag and also add a third tag
   *             (type:Contract). For TagResource, you specify the following tags: priority:Medium, type:Contract. The result is that your container has three tags:
   *             customer:CompanyA, priority:Medium, and type:Contract.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceOutput {}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the container.</p>
   */
  Resource: string | undefined;

  /**
   * <p>A comma-separated list of keys for tags that you want to remove from the container. For example, if your container has two tags (customer:CompanyA
   *             and priority:High) and you want to remove one of the tags (priority:High), you specify the key for the tag that you want to remove
   *             (priority).</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ContainerFilterSensitiveLog = (obj: Container): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CorsRuleFilterSensitiveLog = (obj: CorsRule): any => ({
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
export const CreateContainerInputFilterSensitiveLog = (obj: CreateContainerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContainerOutputFilterSensitiveLog = (obj: CreateContainerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerInputFilterSensitiveLog = (obj: DeleteContainerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerOutputFilterSensitiveLog = (obj: DeleteContainerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerPolicyInputFilterSensitiveLog = (obj: DeleteContainerPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerPolicyOutputFilterSensitiveLog = (obj: DeleteContainerPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCorsPolicyInputFilterSensitiveLog = (obj: DeleteCorsPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCorsPolicyOutputFilterSensitiveLog = (obj: DeleteCorsPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecyclePolicyInputFilterSensitiveLog = (obj: DeleteLifecyclePolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecyclePolicyOutputFilterSensitiveLog = (obj: DeleteLifecyclePolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMetricPolicyInputFilterSensitiveLog = (obj: DeleteMetricPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMetricPolicyOutputFilterSensitiveLog = (obj: DeleteMetricPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContainerInputFilterSensitiveLog = (obj: DescribeContainerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContainerOutputFilterSensitiveLog = (obj: DescribeContainerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerPolicyInputFilterSensitiveLog = (obj: GetContainerPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerPolicyOutputFilterSensitiveLog = (obj: GetContainerPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCorsPolicyInputFilterSensitiveLog = (obj: GetCorsPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCorsPolicyOutputFilterSensitiveLog = (obj: GetCorsPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePolicyInputFilterSensitiveLog = (obj: GetLifecyclePolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePolicyOutputFilterSensitiveLog = (obj: GetLifecyclePolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMetricPolicyInputFilterSensitiveLog = (obj: GetMetricPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricPolicyRuleFilterSensitiveLog = (obj: MetricPolicyRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricPolicyFilterSensitiveLog = (obj: MetricPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMetricPolicyOutputFilterSensitiveLog = (obj: GetMetricPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContainersInputFilterSensitiveLog = (obj: ListContainersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContainersOutputFilterSensitiveLog = (obj: ListContainersOutput): any => ({
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
export const PutContainerPolicyInputFilterSensitiveLog = (obj: PutContainerPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutContainerPolicyOutputFilterSensitiveLog = (obj: PutContainerPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCorsPolicyInputFilterSensitiveLog = (obj: PutCorsPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutCorsPolicyOutputFilterSensitiveLog = (obj: PutCorsPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLifecyclePolicyInputFilterSensitiveLog = (obj: PutLifecyclePolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLifecyclePolicyOutputFilterSensitiveLog = (obj: PutLifecyclePolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetricPolicyInputFilterSensitiveLog = (obj: PutMetricPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetricPolicyOutputFilterSensitiveLog = (obj: PutMetricPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAccessLoggingInputFilterSensitiveLog = (obj: StartAccessLoggingInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAccessLoggingOutputFilterSensitiveLog = (obj: StartAccessLoggingOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAccessLoggingInputFilterSensitiveLog = (obj: StopAccessLoggingInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopAccessLoggingOutputFilterSensitiveLog = (obj: StopAccessLoggingOutput): any => ({
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
