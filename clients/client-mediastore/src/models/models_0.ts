// smithy-typescript generated code
import type { ContainerLevelMetrics, ContainerStatus, MethodName } from "./enums";

/**
 * This section describes operations that you can perform on an AWS Elemental MediaStore container.
 *
 * @public
 */
export interface Container {
  /**
   * The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * Unix timestamp.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container. The ARN has the following format:
   *
   * arn:aws:<region>:<account that owns this container>:container/<name of
   *          container>
   *
   * For example: arn:aws:mediastore:us-west-2:111122223333:container/movies
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the container.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of container creation or deletion. The status is one of the following: `CREATING`, `ACTIVE`, or `DELETING`. While the service is creating the container, the status is `CREATING`. When the endpoint is available, the status changes to `ACTIVE`.
   *
   * @public
   */
  Status?: ContainerStatus | undefined;

  /**
   * The state of access logging on the container. This value is `false` by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to `true`, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.
   *
   * @public
   */
  AccessLoggingEnabled?: boolean | undefined;
}

/**
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
 *
 * @public
 */
export interface CorsRule {
  /**
   * One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * Each CORS rule must have at least one `AllowedOrigins` element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.
   *
   * @public
   */
  AllowedOrigins: string[] | undefined;

  /**
   * Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.
   *
   * Each CORS rule must contain at least one `AllowedMethods` and one `AllowedOrigins` element.
   *
   * @public
   */
  AllowedMethods?: MethodName[] | undefined;

  /**
   * Specifies which headers are allowed in a preflight `OPTIONS` request through the `Access-Control-Request-Headers` header. Each header name that is specified in `Access-Control-Request-Headers` must have a corresponding entry in the rule. Only the headers that were requested are sent back.
   *
   * This element can contain only one wildcard character (*).
   *
   * @public
   */
  AllowedHeaders: string[] | undefined;

  /**
   * The time in seconds that your browser caches the preflight response for the specified resource.
   *
   * A CORS rule can have only one `MaxAgeSeconds` element.
   *
   * @public
   */
  MaxAgeSeconds?: number | undefined;

  /**
   * One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * This element is optional for each rule.
   *
   * @public
   */
  ExposeHeaders?: string[] | undefined;
}

/**
 * A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see [Tagging Resources in MediaStore](https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html).
 *
 * @public
 */
export interface Tag {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateContainerInput {
  /**
   * The name for the container. The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named `movies` in every region, as long as you don’t have an existing container with that name.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * An array of key:value pairs that you define. These values can be anything that you want. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see [Tagging Resources in MediaStore](https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContainerOutput {
  /**
   * ContainerARN: The Amazon Resource Name (ARN) of the newly created container. The ARN has the following format: arn:aws:<region>:<account that owns this
   *          container>:container/<name of container>. For example: arn:aws:mediastore:us-west-2:111122223333:container/movies
   *
   * ContainerName: The container name as specified in the request.
   *
   * CreationTime: Unix time stamp.
   *
   * Status: The status of container creation or deletion. The status is one of the following: `CREATING`, `ACTIVE`, or `DELETING`. While the service is creating the container, the status is `CREATING`. When an endpoint is available, the status changes to `ACTIVE`.
   *
   * The return value does not include the container's endpoint. To make downstream requests, you must obtain this value by using DescribeContainer or ListContainers.
   *
   * @public
   */
  Container: Container | undefined;
}

/**
 * @public
 */
export interface DeleteContainerInput {
  /**
   * The name of the container to delete.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerOutput {}

/**
 * @public
 */
export interface DeleteContainerPolicyInput {
  /**
   * The name of the container that holds the policy.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerPolicyOutput {}

/**
 * @public
 */
export interface DeleteCorsPolicyInput {
  /**
   * The name of the container to remove the policy from.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCorsPolicyOutput {}

/**
 * @public
 */
export interface DeleteLifecyclePolicyInput {
  /**
   * The name of the container that holds the object lifecycle policy.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyOutput {}

/**
 * @public
 */
export interface DeleteMetricPolicyInput {
  /**
   * The name of the container that is associated with the metric policy that you want to delete.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricPolicyOutput {}

/**
 * @public
 */
export interface DescribeContainerInput {
  /**
   * The name of the container to query.
   *
   * @public
   */
  ContainerName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContainerOutput {
  /**
   * The name of the queried container.
   *
   * @public
   */
  Container?: Container | undefined;
}

/**
 * @public
 */
export interface GetContainerPolicyInput {
  /**
   * The name of the container.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface GetContainerPolicyOutput {
  /**
   * The contents of the access policy.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface GetCorsPolicyInput {
  /**
   * The name of the container that the policy is assigned to.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface GetCorsPolicyOutput {
  /**
   * The CORS policy assigned to the container.
   *
   * @public
   */
  CorsPolicy: CorsRule[] | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyInput {
  /**
   * The name of the container that the object lifecycle policy is assigned to.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyOutput {
  /**
   * The object lifecycle policy that is assigned to the container.
   *
   * @public
   */
  LifecyclePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetMetricPolicyInput {
  /**
   * The name of the container that is associated with the metric policy.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also [request a quota increase](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
 *
 * @public
 */
export interface MetricPolicyRule {
  /**
   * A path or file name that defines which objects to include in the group. Wildcards (*) are acceptable.
   *
   * @public
   */
  ObjectGroup: string | undefined;

  /**
   * A name that allows you to refer to the object group.
   *
   * @public
   */
  ObjectGroupName: string | undefined;
}

/**
 * The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.
 *
 * To view examples of how to construct a metric policy for your use case, see [Example Metric Policies](https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html).
 *
 * @public
 */
export interface MetricPolicy {
  /**
   * A setting to enable or disable metrics at the container level.
   *
   * @public
   */
  ContainerLevelMetrics: ContainerLevelMetrics | undefined;

  /**
   * A parameter that holds an array of rules that enable metrics at the object level. This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also [request a quota increase](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
   *
   * @public
   */
  MetricPolicyRules?: MetricPolicyRule[] | undefined;
}

/**
 * @public
 */
export interface GetMetricPolicyOutput {
  /**
   * The metric policy that is associated with the specific container.
   *
   * @public
   */
  MetricPolicy: MetricPolicy | undefined;
}

/**
 * @public
 */
export interface ListContainersInput {
  /**
   * Only if you used `MaxResults` in the first command, enter the token (which was included in the previous response) to obtain the next set of containers. This token is included in a response only if there actually are more containers to list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Enter the maximum number of containers in the response. Use from 1 to 255 characters.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContainersOutput {
  /**
   * The names of the containers.
   *
   * @public
   */
  Containers: Container[] | undefined;

  /**
   * `NextToken` is the token to use in the next call to `ListContainers`. This token is returned only if you included the `MaxResults` tag in the original command, and only if there are still containers to return.
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
   * The Amazon Resource Name (ARN) for the container.
   *
   * @public
   */
  Resource: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * An array of key:value pairs that are assigned to the container.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutContainerPolicyInput {
  /**
   * The name of the container.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * The contents of the policy, which includes the following:
   *
   * - One `Version` tag
   * - One `Statement` tag that contains the standard tags for the policy.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutContainerPolicyOutput {}

/**
 * @public
 */
export interface PutCorsPolicyInput {
  /**
   * The name of the container that you want to assign the CORS policy to.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * The CORS policy to apply to the container.
   *
   * @public
   */
  CorsPolicy: CorsRule[] | undefined;
}

/**
 * @public
 */
export interface PutCorsPolicyOutput {}

/**
 * @public
 */
export interface PutLifecyclePolicyInput {
  /**
   * The name of the container that you want to assign the object lifecycle policy to.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * The object lifecycle policy to apply to the container.
   *
   * @public
   */
  LifecyclePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutLifecyclePolicyOutput {}

/**
 * @public
 */
export interface PutMetricPolicyInput {
  /**
   * The name of the container that you want to add the metric policy to.
   *
   * @public
   */
  ContainerName: string | undefined;

  /**
   * The metric policy that you want to associate with the container. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include up to five rules to define groups of objects that you want MediaStore to send object-level metrics for. If you include rules in the policy, construct each rule with both of the following:
   *
   * - An object group that defines which objects to include in the group. The definition can be a path or a file name, but it can't have more than 900 characters. Valid characters are: a-z, A-Z, 0-9, _ (underscore), = (equal), : (colon), . (period), - (hyphen), ~ (tilde), / (forward slash), and * (asterisk). Wildcards (*) are acceptable.
   * - An object group name that allows you to refer to the object group. The name can't have more than 30 characters. Valid characters are: a-z, A-Z, 0-9, and _ (underscore).
   *
   * @public
   */
  MetricPolicy: MetricPolicy | undefined;
}

/**
 * @public
 */
export interface PutMetricPolicyOutput {}

/**
 * @public
 */
export interface StartAccessLoggingInput {
  /**
   * The name of the container that you want to start access logging on.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface StartAccessLoggingOutput {}

/**
 * @public
 */
export interface StopAccessLoggingInput {
  /**
   * The name of the container that you want to stop access logging on.
   *
   * @public
   */
  ContainerName: string | undefined;
}

/**
 * @public
 */
export interface StopAccessLoggingOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) for the container.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * An array of key:value pairs that you want to add to the container. You need to specify only the tags that you want to add or update. For example, suppose a container already has two tags (customer:CompanyA and priority:High). You want to change the priority tag and also add a third tag (type:Contract). For TagResource, you specify the following tags: priority:Medium, type:Contract. The result is that your container has three tags: customer:CompanyA, priority:Medium, and type:Contract.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) for the container.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A comma-separated list of keys for tags that you want to remove from the container. For example, if your container has two tags (customer:CompanyA and priority:High) and you want to remove one of the tags (priority:High), you specify the key for the tag that you want to remove (priority).
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
