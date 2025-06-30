// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IAMServiceException as __BaseException } from "./IAMServiceException";

import {
  AssertionEncryptionModeType,
  ContextEntry,
  Role,
  ServerCertificateMetadata,
  SigningCertificate,
  SSHPublicKey,
  StatusType,
  Tag,
} from "./models_0";

/**
 * @public
 * @enum
 */
export const PolicyEvaluationDecisionType = {
  ALLOWED: "allowed",
  EXPLICIT_DENY: "explicitDeny",
  IMPLICIT_DENY: "implicitDeny",
} as const;

/**
 * @public
 */
export type PolicyEvaluationDecisionType =
  (typeof PolicyEvaluationDecisionType)[keyof typeof PolicyEvaluationDecisionType];

/**
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a
 *          policy document.</p>
 *          <p>This data type is used as a member of the <code>
 *                <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_Statement.html">Statement</a>
 *             </code> type.</p>
 * @public
 */
export interface Position {
  /**
   * <p>The line containing the specified position in the document.</p>
   * @public
   */
  Line?: number | undefined;

  /**
   * <p>The column in the line containing the specified position in the document.</p>
   * @public
   */
  Column?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicySourceType = {
  AWS_MANAGED: "aws-managed",
  GROUP: "group",
  NONE: "none",
  RESOURCE: "resource",
  ROLE: "role",
  USER: "user",
  USER_MANAGED: "user-managed",
} as const;

/**
 * @public
 */
export type PolicySourceType = (typeof PolicySourceType)[keyof typeof PolicySourceType];

/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that
 *          determines the result of the simulation.</p>
 *          <p>This data type is used by the <code>MatchedStatements</code> member of the <code>
 *                <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_EvaluationResult.html">EvaluationResult</a>
 *             </code> type.</p>
 * @public
 */
export interface Statement {
  /**
   * <p>The identifier of the policy that was provided as an input.</p>
   * @public
   */
  SourcePolicyId?: string | undefined;

  /**
   * <p>The type of the policy.</p>
   * @public
   */
  SourcePolicyType?: PolicySourceType | undefined;

  /**
   * <p>The row and column of the beginning of the <code>Statement</code> in an IAM
   *          policy.</p>
   * @public
   */
  StartPosition?: Position | undefined;

  /**
   * <p>The row and column of the end of a <code>Statement</code> in an IAM policy.</p>
   * @public
   */
  EndPosition?: Position | undefined;
}

/**
 * <p>Contains information about the effect that Organizations has on a policy simulation.</p>
 * @public
 */
export interface OrganizationsDecisionDetail {
  /**
   * <p>Specifies whether the simulated operation is allowed by the Organizations service control
   *          policies that impact the simulated user's account.</p>
   * @public
   */
  AllowedByOrganizations?: boolean | undefined;
}

/**
 * <p>Contains information about the effect that a permissions boundary has on a policy
 *          simulation when the boundary is applied to an IAM entity.</p>
 * @public
 */
export interface PermissionsBoundaryDecisionDetail {
  /**
   * <p>Specifies whether an action is allowed by a permissions boundary that is applied to an
   *          IAM entity (user or role). A value of <code>true</code> means that the permissions
   *          boundary does not deny the action. This means that the policy includes an
   *             <code>Allow</code> statement that matches the request. In this case, if an
   *          identity-based policy also allows the action, the request is allowed. A value of
   *             <code>false</code> means that either the requested action is not allowed (implicitly
   *          denied) or that the action is explicitly denied by the permissions boundary. In both of
   *          these cases, the action is not allowed, regardless of the identity-based policy.</p>
   * @public
   */
  AllowedByPermissionsBoundary?: boolean | undefined;
}

/**
 * <p>Contains the result of the simulation of a single API operation call on a single
 *          resource.</p>
 *          <p>This data type is used by a member of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_EvaluationResult.html">EvaluationResult</a> data
 *          type.</p>
 * @public
 */
export interface ResourceSpecificResult {
  /**
   * <p>The name of the simulated resource, in Amazon Resource Name (ARN) format.</p>
   * @public
   */
  EvalResourceName: string | undefined;

  /**
   * <p>The result of the simulation of the simulated API operation on the resource specified in
   *             <code>EvalResourceName</code>.</p>
   * @public
   */
  EvalResourceDecision: PolicyEvaluationDecisionType | undefined;

  /**
   * <p>A list of the statements in the input policies that determine the result for this part
   *          of the simulation. Remember that even if multiple statements allow the operation on the
   *          resource, if <i>any</i> statement denies that operation, then the explicit
   *          deny overrides any allow. In addition, the deny statement is the only entry included in the
   *          result.</p>
   * @public
   */
  MatchedStatements?: Statement[] | undefined;

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when a list of ARNs is
   *          included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify
   *          individual resources, by setting <code>ResourceArns</code> to "*" or by not including the
   *             <code>ResourceArns</code> parameter, then any missing context values are instead
   *          included under the <code>EvaluationResults</code> section. To discover the context keys
   *          used by a set of policies, you can call <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a>.</p>
   * @public
   */
  MissingContextValues?: string[] | undefined;

  /**
   * <p>Additional details about the results of the evaluation decision on a single resource.
   *          This parameter is returned only for cross-account simulations. This parameter explains how
   *          each policy type contributes to the resource-specific evaluation decision.</p>
   * @public
   */
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;

  /**
   * <p>Contains information about the effect that a permissions boundary has on a policy
   *          simulation when that boundary is applied to an IAM entity.</p>
   * @public
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;
}

/**
 * <p>Contains the results of a simulation.</p>
 *          <p>This data type is used by the return parameter of <code>
 *                <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html">SimulateCustomPolicy</a>
 *             </code> and <code>
 *                <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html">SimulatePrincipalPolicy</a>
 *             </code>.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>The name of the API operation tested on the indicated resource.</p>
   * @public
   */
  EvalActionName: string | undefined;

  /**
   * <p>The ARN of the resource that the indicated API operation was tested on.</p>
   * @public
   */
  EvalResourceName?: string | undefined;

  /**
   * <p>The result of the simulation.</p>
   * @public
   */
  EvalDecision: PolicyEvaluationDecisionType | undefined;

  /**
   * <p>A list of the statements in the input policies that determine the result for this
   *          scenario. Remember that even if multiple statements allow the operation on the resource, if
   *          only one statement denies that operation, then the explicit deny overrides any allow. In
   *          addition, the deny statement is the only entry included in the result.</p>
   * @public
   */
  MatchedStatements?: Statement[] | undefined;

  /**
   * <p>A list of context keys that are required by the included input policies but that were
   *          not provided by one of the input parameters. This list is used when the resource in a
   *          simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter
   *          blank. If you include a list of resources, then any missing context values are instead
   *          included under the <code>ResourceSpecificResults</code> section. To discover the context
   *          keys used by a set of policies, you can call <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a>.</p>
   * @public
   */
  MissingContextValues?: string[] | undefined;

  /**
   * <p>A structure that details how Organizations and its service control policies affect the results of
   *          the simulation. Only applies if the simulated user's account is part of an
   *          organization.</p>
   * @public
   */
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail | undefined;

  /**
   * <p>Contains information about the effect that a permissions boundary has on a policy
   *          simulation when the boundary is applied to an IAM entity.</p>
   * @public
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;

  /**
   * <p>Additional details about the results of the cross-account evaluation decision. This
   *          parameter is populated for only cross-account simulations. It contains a brief summary of
   *          how each policy type contributes to the final evaluation decision.</p>
   *          <p>If the simulation evaluates policies within the same account and includes a resource
   *          ARN, then the parameter is present but the response is empty. If the simulation evaluates
   *          policies within the same account and specifies all resources (<code>*</code>), then the
   *          parameter is not returned.</p>
   *          <p>When you make a cross-account request, Amazon Web Services evaluates the request in the trusting
   *          account and the trusted account. The request is allowed only if both evaluations return
   *             <code>true</code>. For more information about how policies are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies within a single account</a>.</p>
   *          <p>If an Organizations SCP included in the evaluation denies access, the simulation ends. In
   *          this case, policy evaluation does not proceed any further and this parameter is not
   *          returned.</p>
   * @public
   */
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;

  /**
   * <p>The individual results of the simulation of the API operation specified in
   *          EvalActionName on each resource.</p>
   * @public
   */
  ResourceSpecificResults?: ResourceSpecificResult[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html">SimulatePrincipalPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html">SimulateCustomPolicy</a>
 *       request.</p>
 * @public
 */
export interface SimulatePolicyResponse {
  /**
   * <p>The results of the simulation.</p>
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface SimulatePrincipalPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to
   *             include in the simulation. If you specify a user, group, or role, the simulation
   *             includes all policies that are associated with that entity. If you specify a user, the
   *             simulation also includes all policies that are attached to any groups the user belongs
   *             to.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicySourceArn: string | undefined;

  /**
   * <p>An optional list of additional policy documents to include in the simulation. Each
   *             document is specified as a string containing the complete, valid JSON text of an IAM
   *             policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyInputList?: string[] | undefined;

  /**
   * <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the
   *             maximum permissions that the entity can have. You can input only one permissions
   *             boundary when you pass a policy to this operation. An IAM entity can only have one
   *             permissions boundary in effect at a time. For example, if a permissions boundary is
   *             attached to an entity and you pass in a different permissions boundary policy using this
   *             parameter, then the new permissions boundary policy is used for the simulation. For more
   *             information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *                 entities</a> in the <i>IAM User Guide</i>. The policy input is
   *             specified as a string containing the complete, valid JSON text of a permissions boundary
   *             policy.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionsBoundaryPolicyInputList?: string[] | undefined;

  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *             evaluated for each resource. Each operation must include the service identifier, such as
   *                 <code>iam:CreateUser</code>.</p>
   * @public
   */
  ActionNames: string[] | undefined;

  /**
   * <p>A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is
   *             not provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *                 <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *             simulation determines the access result (allowed or denied) of each combination and
   *             reports it in the response. You can simulate resources that don't exist in your
   *             account.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources.
   *             If you want to include a resource policy in the simulation, then you must include the
   *             policy as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *          <note>
   *             <p>Simulation of resource-based policies isn't supported for IAM roles.</p>
   *          </note>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each
   *             resource in the simulation is treated as if it had this policy attached. You can include
   *             only one resource-based policy in a simulation.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Simulation of resource-based policies isn't supported for IAM roles.</p>
   *          </note>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID that specifies the owner of any simulated resource that does not
   *             identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket
   *             or object. If <code>ResourceOwner</code> is specified, it is also used as the account
   *             owner of any <code>ResourcePolicy</code> included in the simulation. If the
   *                 <code>ResourceOwner</code> parameter is not specified, then the owner of the
   *             resources and the resource policy defaults to the account of the identity provided in
   *                 <code>CallerArn</code>. This parameter is required only if you specify a
   *             resource-based policy and account that owns the resource is different from the account
   *             that owns the simulated calling user <code>CallerArn</code>.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The ARN of the IAM user that you want to specify as the simulated caller of the API
   *             operations. If you do not specify a <code>CallerArn</code>, it defaults to the ARN of
   *             the user that you specify in <code>PolicySourceArn</code>, if you specified a user. If
   *             you include both a <code>PolicySourceArn</code> (for example,
   *                 <code>arn:aws:iam::123456789012:user/David</code>) and a <code>CallerArn</code> (for
   *             example, <code>arn:aws:iam::123456789012:user/Bob</code>), the result is that you
   *             simulate calling the API operations as Bob, as if Bob had David's policies.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an
   *             assumed role, federated user, or a service principal.</p>
   *          <p>
   *             <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code> and
   *             the <code>PolicySourceArn</code> is not the ARN for an IAM user. This is required so
   *             that the resource-based policy's <code>Principal</code> element has a value to use in
   *             evaluating the policy.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  CallerArn?: string | undefined;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *             context key is evaluated in one of the simulated IAM permissions policies, the
   *             corresponding value is supplied.</p>
   * @public
   */
  ContextEntries?: ContextEntry[] | undefined;

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *             resource-based policies require different combinations of resources. By specifying the
   *             type of simulation to run, you enable the policy simulator to enforce the presence of
   *             the required resources to ensure reliable simulation results. If your simulation does
   *             not match one of the following scenarios, then you can omit this parameter. The
   *             following list shows each of the supported scenario values and the resources that you
   *             must define to run the simulation.</p>
   *          <p>Each of the Amazon EC2 scenarios requires that you specify instance, image, and security
   *             group resources. If your scenario includes an EBS volume, then you must specify that
   *             volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the
   *             network interface resource. If it includes an IP subnet, then you must specify the
   *             subnet resource. For more information on the Amazon EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported platforms</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group, network interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security group, network interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet, volume</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceHandlingOption?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface TagInstanceProfileRequest {
  /**
   * <p>The name of the IAM instance profile to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM instance profile.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagMFADeviceRequest {
  /**
   * <p>The unique identifier for the IAM virtual MFA device to which you want to add tags.
   *       For virtual MFA devices, the serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM virtual MFA device.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagOpenIDConnectProviderRequest {
  /**
   * <p>The ARN of the OIDC identity provider in IAM to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the OIDC identity provider in IAM.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagPolicyRequest {
  /**
   * <p>The ARN of the IAM customer managed policy to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM customer managed policy.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagRoleRequest {
  /**
   * <p>The name of the IAM role to which you want to add tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM role. Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagSAMLProviderRequest {
  /**
   * <p>The ARN of the SAML identity provider in IAM to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the SAML identity provider in IAM.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagServerCertificateRequest {
  /**
   * <p>The name of the IAM server certificate to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM server certificate.
   *       Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagUserRequest {
  /**
   * <p>The name of the IAM user to which you want to add tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The list of tags that you want to attach to the IAM user. Each tag consists of a key name and an associated value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagInstanceProfileRequest {
  /**
   * <p>The name of the IAM instance profile from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified instance profile.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagMFADeviceRequest {
  /**
   * <p>The unique identifier for the IAM virtual MFA device from which you want to remove
   *       tags. For virtual MFA devices, the serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified instance profile.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagOpenIDConnectProviderRequest {
  /**
   * <p>The ARN of the OIDC provider in IAM from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified OIDC provider.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagPolicyRequest {
  /**
   * <p>The ARN of the IAM customer managed policy from which you want to remove
   *       tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified policy.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagRoleRequest {
  /**
   * <p>The name of the IAM role from which you want to remove tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified role.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagSAMLProviderRequest {
  /**
   * <p>The ARN of the SAML identity provider in IAM from which you want to remove
   *       tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified SAML identity provider.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagServerCertificateRequest {
  /**
   * <p>The name of the IAM server certificate from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified IAM server certificate.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagUserRequest {
  /**
   * <p>The name of the IAM user from which you want to remove tags.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>A list of key names as a simple array of strings. The tags with matching keys are
   *       removed from the specified user.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessKeyRequest {
  /**
   * <p>The name of the user whose key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The access key ID of the secret access key you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * <p> The status you want to assign to the secret access key. <code>Active</code> means
   *             that the key can be used for programmatic calls to Amazon Web Services, while <code>Inactive</code>
   *             means that the key cannot be used.</p>
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPasswordPolicyRequest {
  /**
   * <p>The minimum number of characters allowed in an IAM user password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>6</code>.</p>
   * @public
   */
  MinimumPasswordLength?: number | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *             non-alphanumeric characters:</p>
   *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             symbol character.</p>
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0
   *             to 9).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             numeric character.</p>
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character
   *             from the ISO basic Latin alphabet (A to Z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             uppercase character.</p>
   * @public
   */
  RequireUppercaseCharacters?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character
   *             from the ISO basic Latin alphabet (a to z).</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that passwords do not require at least one
   *             lowercase character.</p>
   * @public
   */
  RequireLowercaseCharacters?: boolean | undefined;

  /**
   * <p> Allows all IAM users in your account to use the Amazon Web Services Management Console to change their own
   *             passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_enable-user-change.html">Permitting
   *                 IAM users to change their own passwords</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users in the account do not
   *             automatically have permissions to change their own password.</p>
   * @public
   */
  AllowUsersToChangePassword?: boolean | undefined;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   * @public
   */
  MaxPasswordAge?: number | undefined;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *             reusing.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>0</code>. The result is that IAM users are not prevented from reusing
   *             previous passwords.</p>
   * @public
   */
  PasswordReusePrevention?: number | undefined;

  /**
   * <p> Prevents IAM users who are accessing the account via the Amazon Web Services Management Console from setting a
   *             new console password after their password has expired. The IAM user cannot access the
   *             console until an administrator resets the password.</p>
   *          <p>If you do not specify a value for this parameter, then the operation uses the default
   *             value of <code>false</code>. The result is that IAM users can change their passwords
   *             after they expire and continue to sign in as the user.</p>
   *          <note>
   *             <p> In the Amazon Web Services Management Console, the custom password policy option <b>Allow
   *                     users to change their own password</b> gives IAM users permissions to
   *                     <code>iam:ChangePassword</code> for only their user and to the
   *                     <code>iam:GetAccountPasswordPolicy</code> action. This option does not attach a
   *                 permissions policy to each user, rather the permissions are applied at the
   *                 account-level for all users by IAM. IAM users with
   *                     <code>iam:ChangePassword</code> permission and active access keys can reset
   *                 their own expired console password using the CLI or API.</p>
   *          </note>
   * @public
   */
  HardExpiry?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAssumeRolePolicyRequest {
  /**
   * <p>The name of the role to update with the new policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>Name of the IAM group to update. If you're changing the name of the group, this is
   *             the original name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>New path for the IAM group. Only include this if changing the group's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  NewPath?: string | undefined;

  /**
   * <p>New name for the IAM group. Only include this if changing the group's name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   * @public
   */
  NewGroupName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLoginProfileRequest {
  /**
   * <p>The name of the user whose password you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The new password for the specified IAM user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <p>However, the format can be further restricted by the account administrator by setting
   *             a password policy on the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html">UpdateAccountPasswordPolicy</a>.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Allows this new password to be used only once by requiring the specified IAM user to
   *             set a new password on next sign-in.</p>
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which
   *             you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OpenID
   *             Connect provider. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>. </p>
   * @public
   */
  ThumbprintList: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoleRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *             If you do not specify a value for this setting, the default value of one hour is
   *             applied. This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the CLI or API can use the
   *                 <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code>
   *             CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *             determines the maximum duration that can be requested using the
   *                 <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *                 <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *             hour by default. This applies when you use the <code>AssumeRole*</code> API operations
   *             or the <code>assume-role*</code> CLI operations but does not apply when you use those
   *             operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM
   *                 roles</a> in the <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>IAM role credentials provided by Amazon EC2 instances assigned to the role are not
   *                 subject to the specified maximum session duration.</p>
   *          </note>
   * @public
   */
  MaxSessionDuration?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRoleResponse {}

/**
 * @public
 */
export interface UpdateRoleDescriptionRequest {
  /**
   * <p>The name of the role that you want to modify.</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The new description that you want to apply to the specified role.</p>
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoleDescriptionResponse {
  /**
   * <p>A structure that contains details about the modified role.</p>
   * @public
   */
  Role?: Role | undefined;
}

/**
 * @public
 */
export interface UpdateSAMLProviderRequest {
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *             document includes the issuer's name, expiration information, and keys that can be used
   *             to validate the SAML authentication response (assertions) that are received from the
   *             IdP. You must generate the metadata document using the identity management software that
   *             is used as your IdP.</p>
   * @public
   */
  SAMLMetadataDocument?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * <p>Specifies the encryption setting for the SAML provider.</p>
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * <p>Specifies the new private key from your external identity provider. The private key
   *             must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML
   *             assertions.</p>
   * @public
   */
  AddPrivateKey?: string | undefined;

  /**
   * <p>The Key ID of the private key to remove.</p>
   * @public
   */
  RemovePrivateKey?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html">UpdateSAMLProvider</a>
 *       request. </p>
 * @public
 */
export interface UpdateSAMLProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider that was updated.</p>
   * @public
   */
  SAMLProviderArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServerCertificateRequest {
  /**
   * <p>The name of the server certificate that you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The new path for the server certificate. Include this only if you are updating the
   *             server certificate's path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  NewPath?: string | undefined;

  /**
   * <p>The new name for the server certificate. Include this only if you are updating the
   *             server certificate's name. The name of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  NewServerCertificateName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If you do
   *             not specify this value, then the operation assumes the user whose credentials are used
   *             to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The status to be assigned to the service-specific credential.</p>
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSigningCertificateRequest {
  /**
   * <p>The name of the IAM user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The ID of the signing certificate you want to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  CertificateId: string | undefined;

  /**
   * <p> The status you want to assign to the certificate. <code>Active</code> means that the
   *             certificate can be used for programmatic calls to Amazon Web Services <code>Inactive</code> means that
   *             the certificate cannot be used.</p>
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status to assign to the SSH public key. <code>Active</code> means that the key can
   *             be used for authentication with an CodeCommit repository. <code>Inactive</code> means that
   *             the key cannot be used.</p>
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>Name of the user to update. If you're changing the name of the user, this is the
   *             original user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>New path for the IAM user. Include this parameter only if you're changing the user's
   *             path.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  NewPath?: string | undefined;

  /**
   * <p>New name for the user. Include this parameter only if you're changing the user's
   *             name.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   * @public
   */
  NewUserName?: string | undefined;
}

/**
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 * @public
 */
export class KeyPairMismatchException extends __BaseException {
  readonly name: "KeyPairMismatchException" = "KeyPairMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyPairMismatchException, __BaseException>) {
    super({
      name: "KeyPairMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyPairMismatchException.prototype);
  }
}

/**
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 * @public
 */
export class MalformedCertificateException extends __BaseException {
  readonly name: "MalformedCertificateException" = "MalformedCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedCertificateException, __BaseException>) {
    super({
      name: "MalformedCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedCertificateException.prototype);
  }
}

/**
 * @public
 */
export interface UploadServerCertificateRequest {
  /**
   * <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).
   *             This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p> If you are uploading a server certificate specifically for use with Amazon
   *                 CloudFront distributions, you must specify a path using the <code>path</code>
   *                 parameter. The path must begin with <code>/cloudfront</code> and must include a
   *                 trailing slash (for example, <code>/cloudfront/test/</code>).</p>
   *          </note>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The name for the server certificate. Do not include the path in this value. The name
   *             of the certificate cannot contain any spaces.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>The contents of the public key certificate in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the private key in PEM-encoded format.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PrivateKey: string | undefined;

  /**
   * <p>The contents of the certificate chain. This is typically a concatenation of the
   *             PEM-encoded public key certificates of the chain.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new IAM server certificate resource.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html">UploadServerCertificate</a> request. </p>
 * @public
 */
export interface UploadServerCertificateResponse {
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body,
   *             certificate chain, and private key.</p>
   * @public
   */
  ServerCertificateMetadata?: ServerCertificateMetadata | undefined;

  /**
   * <p>A list of tags that are attached to the new IAM server certificate. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 * @public
 */
export class DuplicateCertificateException extends __BaseException {
  readonly name: "DuplicateCertificateException" = "DuplicateCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateCertificateException, __BaseException>) {
    super({
      name: "DuplicateCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateCertificateException.prototype);
  }
}

/**
 * <p>The request was rejected because the certificate is invalid.</p>
 * @public
 */
export class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException" = "InvalidCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>) {
    super({
      name: "InvalidCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateException.prototype);
  }
}

/**
 * @public
 */
export interface UploadSigningCertificateRequest {
  /**
   * <p>The name of the user the signing certificate is for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The contents of the signing certificate.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateBody: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html">UploadSigningCertificate</a> request. </p>
 * @public
 */
export interface UploadSigningCertificateResponse {
  /**
   * <p>Information about the certificate.</p>
   * @public
   */
  Certificate: SigningCertificate | undefined;
}

/**
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 * @public
 */
export class DuplicateSSHPublicKeyException extends __BaseException {
  readonly name: "DuplicateSSHPublicKeyException" = "DuplicateSSHPublicKeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateSSHPublicKeyException, __BaseException>) {
    super({
      name: "DuplicateSSHPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateSSHPublicKeyException.prototype);
  }
}

/**
 * <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 * @public
 */
export class InvalidPublicKeyException extends __BaseException {
  readonly name: "InvalidPublicKeyException" = "InvalidPublicKeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPublicKeyException, __BaseException>) {
    super({
      name: "InvalidPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPublicKeyException.prototype);
  }
}

/**
 * @public
 */
export interface UploadSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user to associate the SSH public key with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
   *             The minimum bit-length of the public key is 2048 bits. For example, you can generate a
   *             2048-bit key, and the resulting PEM file is 1679 bytes long.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  SSHPublicKeyBody: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html">UploadSSHPublicKey</a>
 *       request.</p>
 * @public
 */
export interface UploadSSHPublicKeyResponse {
  /**
   * <p>Contains information about the SSH public key.</p>
   * @public
   */
  SSHPublicKey?: SSHPublicKey | undefined;
}

/**
 * @internal
 */
export const UpdateLoginProfileRequestFilterSensitiveLog = (obj: UpdateLoginProfileRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSAMLProviderRequestFilterSensitiveLog = (obj: UpdateSAMLProviderRequest): any => ({
  ...obj,
  ...(obj.AddPrivateKey && { AddPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadServerCertificateRequestFilterSensitiveLog = (obj: UploadServerCertificateRequest): any => ({
  ...obj,
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});
