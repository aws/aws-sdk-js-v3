// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { VerifiedPermissionsServiceException as __BaseException } from "./VerifiedPermissionsServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Contains information about an action for a request for which an authorization decision
 *             is made.</p>
 *          <p>This data type is used as a request parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html">BatchIsAuthorized</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>
 *             operations.</p>
 *          <p>Example: <code>\{ "actionId": "&lt;action name&gt;", "actionType": "Action"
 *             \}</code>
 *          </p>
 * @public
 */
export interface ActionIdentifier {
  /**
   * <p>The type of an action.</p>
   * @public
   */
  actionType: string | undefined;

  /**
   * <p>The ID of an action.</p>
   * @public
   */
  actionId: string | undefined;
}

/**
 * <p>Contains the identifier of an entity, including its ID and type.</p>
 *          <p>This data type is used as a request parameter for <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> operation, and as a
 *             response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a>, and
 *                 <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operations.</p>
 *          <p>Example:
 *                     <code>\{"entityId":"<i>string</i>","entityType":"<i>string</i>"\}</code>
 *          </p>
 * @public
 */
export interface EntityIdentifier {
  /**
   * <p>The type of an entity.</p>
   *          <p>Example: <code>"entityType":"<i>typeName</i>"</code>
   *          </p>
   * @public
   */
  entityType: string | undefined;

  /**
   * <p>The identifier of an entity.</p>
   *          <p>
   *             <code>"entityId":"<i>identifier</i>"</code>
   *          </p>
   * @public
   */
  entityId: string | undefined;
}

/**
 * <p>Information about a policy that you include in a <code>BatchGetPolicy</code> API
 *             request.</p>
 * @public
 */
export interface BatchGetPolicyInputItem {
  /**
   * <p>The identifier of the policy store where the policy you want information about is
   *             stored.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The identifier of the policy you want information about.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPolicyInput {
  /**
   * <p>An array of up to 100 policies you want information about.</p>
   * @public
   */
  requests: BatchGetPolicyInputItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchGetPolicyErrorCode = {
  POLICY_NOT_FOUND: "POLICY_NOT_FOUND",
  POLICY_STORE_NOT_FOUND: "POLICY_STORE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type BatchGetPolicyErrorCode = (typeof BatchGetPolicyErrorCode)[keyof typeof BatchGetPolicyErrorCode];

/**
 * <p>Contains the information about an error resulting from a <code>BatchGetPolicy</code>
 *             API call.</p>
 * @public
 */
export interface BatchGetPolicyErrorItem {
  /**
   * <p>The error code that was returned.</p>
   * @public
   */
  code: BatchGetPolicyErrorCode | undefined;

  /**
   * <p>The identifier of the policy store associated with the failed request.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The identifier of the policy associated with the failed request.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>A detailed error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>A structure that contains details about a static policy. It includes the description and
 *             policy body.</p>
 *          <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as
 *             part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p>
 * @public
 */
export interface StaticPolicyDefinitionDetail {
  /**
   * <p>A description of the static policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The content of the static policy written in the Cedar policy language.</p>
   * @public
   */
  statement: string | undefined;
}

/**
 * <p>Contains information about a policy that was created by instantiating a policy
 *             template. </p>
 * @public
 */
export interface TemplateLinkedPolicyDefinitionDetail {
  /**
   * <p>The unique identifier of the policy template used to create this policy.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * <p>A structure that describes a policy definition. It must always have either an
 *                 <code>static</code> or a <code>templateLinked</code> element.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a> operation.</p>
 * @public
 */
export type PolicyDefinitionDetail =
  | PolicyDefinitionDetail.StaticMember
  | PolicyDefinitionDetail.TemplateLinkedMember
  | PolicyDefinitionDetail.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinitionDetail {
  /**
   * <p>Information about a static policy that wasn't created with a policy template.</p>
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionDetail;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a template-linked policy that was created by instantiating a policy template.</p>
   * @public
   */
  export interface TemplateLinkedMember {
    static?: never;
    templateLinked: TemplateLinkedPolicyDefinitionDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    static?: never;
    templateLinked?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    static: (value: StaticPolicyDefinitionDetail) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinitionDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyDefinitionDetail, visitor: Visitor<T>): T => {
    if (value.static !== undefined) return visitor.static(value.static);
    if (value.templateLinked !== undefined) return visitor.templateLinked(value.templateLinked);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const PolicyType = {
  STATIC: "STATIC",
  TEMPLATE_LINKED: "TEMPLATE_LINKED",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * <p>Contains information about a policy returned from a <code>BatchGetPolicy</code> API
 *             request.</p>
 * @public
 */
export interface BatchGetPolicyOutputItem {
  /**
   * <p>The identifier of the policy store where the policy you want information about is
   *             stored.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The identifier of the policy you want information about.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The type of the policy. This is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATIC</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE_LINKED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The policy definition of an item in the list of policies returned.</p>
   * @public
   */
  definition: PolicyDefinitionDetail | undefined;

  /**
   * <p>The date and time the policy was created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetPolicyOutput {
  /**
   * <p>Information about the policies listed in the request that were successfully returned. These results are returned in the order they were requested.</p>
   * @public
   */
  results: BatchGetPolicyOutputItem[] | undefined;

  /**
   * <p>Information about the policies from the request that resulted in an error. These results are returned in the order they were requested.</p>
   * @public
   */
  errors: BatchGetPolicyErrorItem[] | undefined;
}

/**
 * <p>The request failed because of an internal error. Try your request again later</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * <p>The request failed because it exceeded a throttling quota.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the Amazon Web Services service that owns the quota.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>Details about a field that failed policy validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The path to the specific element that Verified Permissions found to be not valid.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>Describes the policy validation error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The request failed because one or more input parameters don't satisfy their constraint
 *             requirements. The output is provided as a list of fields and a reason for each field that
 *             isn't valid.</p>
 *          <p>The possible reasons include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedEntityType</b>
 *                </p>
 *                <p>The policy includes an entity type that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedActionId</b>
 *                </p>
 *                <p>The policy includes an action id that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>InvalidActionApplication</b>
 *                </p>
 *                <p>The policy includes an action that, according to the schema, doesn't support
 *                     the specified principal and resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnexpectedType</b>
 *                </p>
 *                <p>The policy included an operand that isn't a valid type for the specified
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IncompatibleTypes</b>
 *                </p>
 *                <p>The types of elements included in a <code>set</code>, or the types of
 *                     expressions used in an <code>if...then...else</code> clause aren't compatible in
 *                     this context.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>MissingAttribute</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that isn't
 *                     specified in the schema. Test for the existence of the attribute first before
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ImpossiblePolicy</b>
 *                </p>
 *                <p>Cedar has determined that a policy condition always evaluates to false. If
 *                     the policy is always false, it can never apply to any query, and so it can never
 *                     affect an authorization decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>WrongNumberArguments</b>
 *                </p>
 *                <p>The policy references an extension type with the wrong number of
 *                     arguments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FunctionArgumentValidationError</b>
 *                </p>
 *                <p>Cedar couldn't parse the argument passed to an extension type. For example,
 *                     a string that is to be parsed as an IPv4 address can contain only digits and the
 *                     period character.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The list of fields that aren't valid.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * @enum
 */
export const Decision = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type Decision = (typeof Decision)[keyof typeof Decision];

/**
 * <p>Contains information about one of the policies that determined an authorization
 *             decision.</p>
 *          <p>This data type is used as an element in a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html">BatchIsAuthorized</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>
 *             operations.</p>
 *          <p>Example: <code>"determiningPolicies":[\{"policyId":"SPEXAMPLEabcdefg111111"\}]</code>
 *          </p>
 * @public
 */
export interface DeterminingPolicyItem {
  /**
   * <p>The Id of a policy that determined to an authorization decision.</p>
   *          <p>Example: <code>"policyId":"SPEXAMPLEabcdefg111111"</code>
   *          </p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * <p>Contains a description of an evaluation error.</p>
 *          <p>This data type is a response parameter of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html">BatchIsAuthorized</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 * @public
 */
export interface EvaluationErrorItem {
  /**
   * <p>The error description.</p>
   * @public
   */
  errorDescription: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  IDENTITY_SOURCE: "IDENTITY_SOURCE",
  POLICY: "POLICY",
  POLICY_STORE: "POLICY_STORE",
  POLICY_TEMPLATE: "POLICY_TEMPLATE",
  SCHEMA: "SCHEMA",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The request failed because it references a resource that doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique ID of the resource referenced in the failed request.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type of the resource referenced in the failed request.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
 *             pool identity source.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfiguration.html">CognitoUserPoolConfiguration</a> structure and is a request parameter in <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export interface CognitoGroupConfiguration {
  /**
   * <p>The name of the schema entity type that's mapped to the user pool group. Defaults
   *             to <code>AWS::CognitoGroup</code>.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
 *             pool identity source.</p>
 *          <p>This data type is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfigurationItem.html">CognitoUserPoolConfigurationDetail</a> structure and is a response parameter to
 *                 <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export interface CognitoGroupConfigurationDetail {
  /**
   * <p>The name of the schema entity type that's mapped to the user pool group. Defaults
   *             to <code>AWS::CognitoGroup</code>.</p>
   * @public
   */
  groupEntityType?: string | undefined;
}

/**
 * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
 *             pool identity source.</p>
 *          <p>This data type is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfigurationDetail.html">CognitoUserPoolConfigurationItem</a> structure and is a response parameter to
 *                 <a href="http://forums.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 * @public
 */
export interface CognitoGroupConfigurationItem {
  /**
   * <p>The name of the schema entity type that's mapped to the user pool group. Defaults
   *             to <code>AWS::CognitoGroup</code>.</p>
   * @public
   */
  groupEntityType?: string | undefined;
}

/**
 * <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used
 *             as an identity provider for Verified Permissions.</p>
 *          <p>This data type part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a> structure that is
 *             used as a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 *          <p>Example:<code>"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds":
 *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
 *                 "MyCorp::Group"\}\}</code>
 *          </p>
 * @public
 */
export interface CognitoUserPoolConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool that contains the identities to be
   *             authorized.</p>
   *          <p>Example: <code>"UserPoolArn":
   *                 "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"</code>
   *          </p>
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * <p>The unique application client IDs that are associated with the specified Amazon Cognito user
   *             pool.</p>
   *          <p>Example: <code>"ClientIds": ["&amp;ExampleCogClientId;"]</code>
   *          </p>
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
   *             pool identity source.</p>
   * @public
   */
  groupConfiguration?: CognitoGroupConfiguration | undefined;
}

/**
 * <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used
 *             as an identity provider for Verified Permissions.</p>
 *          <p>This data type is used as a field that is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html">ConfigurationDetail</a>
 *             structure that is part of the response to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 *          <p>Example:<code>"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds":
 *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
 *                 "MyCorp::Group"\}\}</code>
 *          </p>
 * @public
 */
export interface CognitoUserPoolConfigurationDetail {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool that contains the identities to be
   *             authorized.</p>
   *          <p>Example: <code>"userPoolArn":
   *                 "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"</code>
   *          </p>
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * <p>The unique application client IDs that are associated with the specified Amazon Cognito user
   *             pool.</p>
   *          <p>Example: <code>"clientIds": ["&amp;ExampleCogClientId;"]</code>
   *          </p>
   * @public
   */
  clientIds: string[] | undefined;

  /**
   * <p>The OpenID Connect (OIDC) <code>issuer</code> ID of the Amazon Cognito user pool that contains
   *             the identities to be authorized.</p>
   *          <p>Example: <code>"issuer":
   *                 "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5"</code>
   *          </p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
   *             pool identity source.</p>
   * @public
   */
  groupConfiguration?: CognitoGroupConfigurationDetail | undefined;
}

/**
 * <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used
 *             as an identity provider for Verified Permissions.</p>
 *          <p>This data type is used as a field that is part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationItem.html">ConfigurationItem</a> structure
 *             that is part of the response to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 *          <p>Example:<code>"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds":
 *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
 *                 "MyCorp::Group"\}\}</code>
 *          </p>
 * @public
 */
export interface CognitoUserPoolConfigurationItem {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool that contains the identities to be
   *             authorized.</p>
   *          <p>Example: <code>"userPoolArn":
   *                 "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"</code>
   *          </p>
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * <p>The unique application client IDs that are associated with the specified Amazon Cognito user
   *             pool.</p>
   *          <p>Example: <code>"clientIds": ["&amp;ExampleCogClientId;"]</code>
   *          </p>
   * @public
   */
  clientIds: string[] | undefined;

  /**
   * <p>The OpenID Connect (OIDC) <code>issuer</code> ID of the Amazon Cognito user pool that contains
   *             the identities to be authorized.</p>
   *          <p>Example: <code>"issuer":
   *                 "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5"</code>
   *          </p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The type of entity that a policy store maps to groups from an Amazon Cognito user
   *             pool identity source.</p>
   * @public
   */
  groupConfiguration?: CognitoGroupConfigurationItem | undefined;
}

/**
 * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
 *          the entity type that you want to map it to. For example, this object can map the contents
 *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html">OpenIdConnectConfiguration</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectGroupConfiguration {
  /**
   * <p>The token claim that you want Verified Permissions to interpret as group membership. For example,
   *             <code>groups</code>.</p>
   * @public
   */
  groupClaim: string | undefined;

  /**
   * <p>The policy store entity type that you want to map your users' group claim to. For example,
   *             <code>MyCorp::UserGroup</code>. A group entity type is an entity that can have a user
   *          entity type as a member.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling access token
 *          claims. Contains the claim that you want to identify as the principal in an authorization
 *          request, and the values of the <code>aud</code> claim, or audiences, that you want to
 *          accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html">OpenIdConnectTokenSelection</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectAccessTokenConfiguration {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The access token <code>aud</code> claim values that you want to accept in your policy
   *          store. For example, <code>https://myapp.example.com, https://myapp2.example.com</code>.</p>
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID)
 *          token claims. Contains the claim that you want to identify as the principal in an
 *          authorization request, and the values of the  <code>aud</code> claim, or audiences, that
 *          you want to accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html">OpenIdConnectTokenSelection</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectIdentityTokenConfiguration {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The ID token audience, or client ID, claim values that you want to accept in your policy
   *          store from an OIDC identity provider. For example, <code>1example23456789,
   *             2example10111213</code>.</p>
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * <p>The token type that you want to process from your OIDC identity provider. Your policy
 *          store can process either identity (ID) or access tokens from a given OIDC identity
 *          source.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html">OpenIdConnectConfiguration</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export type OpenIdConnectTokenSelection =
  | OpenIdConnectTokenSelection.AccessTokenOnlyMember
  | OpenIdConnectTokenSelection.IdentityTokenOnlyMember
  | OpenIdConnectTokenSelection.$UnknownMember;

/**
 * @public
 */
export namespace OpenIdConnectTokenSelection {
  /**
   * <p>The OIDC configuration for processing access tokens. Contains allowed audience claims,
   *          for example <code>https://auth.example.com</code>, and the claim that you want to map to the
   *          principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfiguration;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID
   *          claims, for example <code>1example23456789</code>, and the claim that you want to map to
   *          the principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface IdentityTokenOnlyMember {
    accessTokenOnly?: never;
    identityTokenOnly: OpenIdConnectIdentityTokenConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accessTokenOnly?: never;
    identityTokenOnly?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfiguration) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OpenIdConnectTokenSelection, visitor: Visitor<T>): T => {
    if (value.accessTokenOnly !== undefined) return visitor.accessTokenOnly(value.accessTokenOnly);
    if (value.identityTokenOnly !== undefined) return visitor.identityTokenOnly(value.identityTokenOnly);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
 *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
 *          specifies the issuer URL, token type that you want to use, and policy store entity
 *          details.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a> structure, which
 *             is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectConfiguration {
  /**
   * <p>The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery
   *          endpoint at the path <code>.well-known/openid-configuration</code>.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>A descriptive string that you want to prefix to user entities from your OIDC identity
   *          provider. For example, if you set an <code>entityIdPrefix</code> of
   *             <code>MyOIDCProvider</code>, you can reference principals in your policies in the format
   *             <code>MyCorp::User::MyOIDCProvider|Carlos</code>.</p>
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
   *          the entity type that you want to map it to. For example, this object can map the contents
   *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfiguration | undefined;

  /**
   * <p>The token type that you want to process from your OIDC identity provider. Your policy
   *          store can process either identity (ID) or access tokens from a given OIDC identity
   *          source.</p>
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelection | undefined;
}

/**
 * <p>Contains configuration information used when creating a new identity source.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>
 *             operation.</p>
 * @public
 */
export type Configuration =
  | Configuration.CognitoUserPoolConfigurationMember
  | Configuration.OpenIdConnectConfigurationMember
  | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * <p>Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of
   *             authenticated identities as entities. It specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a Amazon Cognito user pool
   *             and one or more application client IDs.</p>
   *          <p>Example:
   *                 <code>"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds":
   *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
   *                 "MyCorp::Group"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
   *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
   *          specifies the issuer URL, token type that you want to use, and policy store entity
   *          details.</p>
   *          <p>Example:<code>"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface OpenIdConnectConfigurationMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration: OpenIdConnectConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfiguration) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    if (value.openIdConnectConfiguration !== undefined)
      return visitor.openIdConnectConfiguration(value.openIdConnectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
 *          the entity type that you want to map it to. For example, this object can map the contents
 *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationDetail.html">OpenIdConnectConfigurationDetail</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectGroupConfigurationDetail {
  /**
   * <p>The token claim that you want Verified Permissions to interpret as group membership. For example,
   *             <code>groups</code>.</p>
   * @public
   */
  groupClaim: string | undefined;

  /**
   * <p>The policy store entity type that you want to map your users' group claim to. For example,
   *             <code>MyCorp::UserGroup</code>. A group entity type is an entity that can have a user
   *          entity type as a member.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling access token
 *          claims. Contains the claim that you want to identify as the principal in an authorization
 *          request, and the values of the <code>aud</code> claim, or audiences, that you want to
 *          accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionDetail.html">OpenIdConnectTokenSelectionDetail</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectAccessTokenConfigurationDetail {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The access token <code>aud</code> claim values that you want to accept in your policy
   *          store. For example, <code>https://myapp.example.com, https://myapp2.example.com</code>.</p>
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling identity
 *             (ID) token claims. Contains the claim that you want to identify as the principal in an
 *             authorization request, and the values of the <code>aud</code> claim, or audiences, that
 *             you want to accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionDetail.html">OpenIdConnectTokenSelectionDetail</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectIdentityTokenConfigurationDetail {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The ID token audience, or client ID, claim values that you want to accept in your policy
   *          store from an OIDC identity provider. For example, <code>1example23456789,
   *             2example10111213</code>.</p>
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * <p>The token type that you want to process from your OIDC identity provider. Your policy
 *          store can process either identity (ID) or access tokens from a given OIDC identity
 *          source.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationDetail.html">OpenIdConnectConfigurationDetail</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export type OpenIdConnectTokenSelectionDetail =
  | OpenIdConnectTokenSelectionDetail.AccessTokenOnlyMember
  | OpenIdConnectTokenSelectionDetail.IdentityTokenOnlyMember
  | OpenIdConnectTokenSelectionDetail.$UnknownMember;

/**
 * @public
 */
export namespace OpenIdConnectTokenSelectionDetail {
  /**
   * <p>The OIDC configuration for processing access tokens. Contains allowed audience claims,
   *          for example <code>https://auth.example.com</code>, and the claim that you want to map to the
   *          principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetail;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID
   *          claims, for example <code>1example23456789</code>, and the claim that you want to map to
   *          the principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface IdentityTokenOnlyMember {
    accessTokenOnly?: never;
    identityTokenOnly: OpenIdConnectIdentityTokenConfigurationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accessTokenOnly?: never;
    identityTokenOnly?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfigurationDetail) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfigurationDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OpenIdConnectTokenSelectionDetail, visitor: Visitor<T>): T => {
    if (value.accessTokenOnly !== undefined) return visitor.accessTokenOnly(value.accessTokenOnly);
    if (value.identityTokenOnly !== undefined) return visitor.identityTokenOnly(value.identityTokenOnly);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
 *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
 *          specifies the issuer URL, token type that you want to use, and policy store entity
 *          details.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html">ConfigurationDetail</a>
 *             structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>.</p>
 * @public
 */
export interface OpenIdConnectConfigurationDetail {
  /**
   * <p>The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery
   *          endpoint at the path <code>.well-known/openid-configuration</code>.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>A descriptive string that you want to prefix to user entities from your OIDC identity
   *          provider. For example, if you set an <code>entityIdPrefix</code> of
   *             <code>MyOIDCProvider</code>, you can reference principals in your policies in the format
   *             <code>MyCorp::User::MyOIDCProvider|Carlos</code>.</p>
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
   *          the entity type that you want to map it to. For example, this object can map the contents
   *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfigurationDetail | undefined;

  /**
   * <p>The token type that you want to process from your OIDC identity provider. Your policy
   *          store can process either identity (ID) or access tokens from a given OIDC identity
   *          source.</p>
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelectionDetail | undefined;
}

/**
 * <p>Contains configuration information about an identity source.</p>
 *          <p>This data type is a response parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a>
 *             operation.</p>
 * @public
 */
export type ConfigurationDetail =
  | ConfigurationDetail.CognitoUserPoolConfigurationMember
  | ConfigurationDetail.OpenIdConnectConfigurationMember
  | ConfigurationDetail.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationDetail {
  /**
   * <p>Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of
   *             authenticated identities as entities. It specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a Amazon Cognito user pool,
   *             the policy store entity that you want to assign to user groups, and one or more
   *             application client IDs.</p>
   *          <p>Example:
   *                 <code>"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds":
   *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
   *                 "MyCorp::Group"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
   *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
   *          specifies the issuer URL, token type that you want to use, and policy store entity
   *          details.</p>
   *          <p>Example:<code>"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface OpenIdConnectConfigurationMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration: OpenIdConnectConfigurationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfigurationDetail) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfigurationDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigurationDetail, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    if (value.openIdConnectConfiguration !== undefined)
      return visitor.openIdConnectConfiguration(value.openIdConnectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
 *          the entity type that you want to map it to. For example, this object can map the contents
 *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationItem.html">OpenIdConnectConfigurationItem</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySourcea</a>.</p>
 * @public
 */
export interface OpenIdConnectGroupConfigurationItem {
  /**
   * <p>The token claim that you want Verified Permissions to interpret as group membership. For example,
   *             <code>groups</code>.</p>
   * @public
   */
  groupClaim: string | undefined;

  /**
   * <p>The policy store entity type that you want to map your users' group claim to. For example,
   *             <code>MyCorp::UserGroup</code>. A group entity type is an entity that can have a user
   *          entity type as a member.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling access token
 *          claims. Contains the claim that you want to identify as the principal in an authorization
 *          request, and the values of the <code>aud</code> claim, or audiences, that you want to
 *          accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionItem.html">OpenIdConnectTokenSelectionItem</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 * @public
 */
export interface OpenIdConnectAccessTokenConfigurationItem {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The access token <code>aud</code> claim values that you want to accept in your policy
   *          store. For example, <code>https://myapp.example.com, https://myapp2.example.com</code>.</p>
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling identity
 *             (ID) token claims. Contains the claim that you want to identify as the principal in an
 *             authorization request, and the values of the <code>aud</code> claim, or audiences, that
 *             you want to accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionItem.html">OpenIdConnectTokenSelectionItem</a> structure, which is a parameter of <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 * @public
 */
export interface OpenIdConnectIdentityTokenConfigurationItem {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The ID token audience, or client ID, claim values that you want to accept in your policy
   *          store from an OIDC identity provider. For example, <code>1example23456789,
   *             2example10111213</code>.</p>
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * <p>The token type that you want to process from your OIDC identity provider. Your policy
 *          store can process either identity (ID) or access tokens from a given OIDC identity
 *          source.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationItem.html">OpenIdConnectConfigurationItem</a> structure, which is a parameter of <a href="http://amazonaws.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 * @public
 */
export type OpenIdConnectTokenSelectionItem =
  | OpenIdConnectTokenSelectionItem.AccessTokenOnlyMember
  | OpenIdConnectTokenSelectionItem.IdentityTokenOnlyMember
  | OpenIdConnectTokenSelectionItem.$UnknownMember;

/**
 * @public
 */
export namespace OpenIdConnectTokenSelectionItem {
  /**
   * <p>The OIDC configuration for processing access tokens. Contains allowed audience claims,
   *          for example <code>https://auth.example.com</code>, and the claim that you want to map to the
   *          principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfigurationItem;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID
   *          claims, for example <code>1example23456789</code>, and the claim that you want to map to
   *          the principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface IdentityTokenOnlyMember {
    accessTokenOnly?: never;
    identityTokenOnly: OpenIdConnectIdentityTokenConfigurationItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accessTokenOnly?: never;
    identityTokenOnly?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfigurationItem) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfigurationItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OpenIdConnectTokenSelectionItem, visitor: Visitor<T>): T => {
    if (value.accessTokenOnly !== undefined) return visitor.accessTokenOnly(value.accessTokenOnly);
    if (value.identityTokenOnly !== undefined) return visitor.identityTokenOnly(value.identityTokenOnly);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
 *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
 *          specifies the issuer URL, token type that you want to use, and policy store entity
 *          details.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html">ConfigurationItem</a>
 *             structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>.</p>
 * @public
 */
export interface OpenIdConnectConfigurationItem {
  /**
   * <p>The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery
   *          endpoint at the path <code>.well-known/openid-configuration</code>.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>A descriptive string that you want to prefix to user entities from your OIDC identity
   *          provider. For example, if you set an <code>entityIdPrefix</code> of
   *             <code>MyOIDCProvider</code>, you can reference principals in your policies in the format
   *             <code>MyCorp::User::MyOIDCProvider|Carlos</code>.</p>
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
   *          the entity type that you want to map it to. For example, this object can map the contents
   *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfigurationItem | undefined;

  /**
   * <p>The token type that you want to process from your OIDC identity provider. Your policy
   *          store can process either identity (ID) or access tokens from a given OIDC identity
   *          source.</p>
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelectionItem | undefined;
}

/**
 * <p>Contains configuration information about an identity source.</p>
 *          <p>This data type is a response parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>
 *             operation.</p>
 * @public
 */
export type ConfigurationItem =
  | ConfigurationItem.CognitoUserPoolConfigurationMember
  | ConfigurationItem.OpenIdConnectConfigurationMember
  | ConfigurationItem.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationItem {
  /**
   * <p>Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of
   *             authenticated identities as entities. It specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a Amazon Cognito user pool,
   *             the policy store entity that you want to assign to user groups, and one or more
   *             application client IDs.</p>
   *          <p>Example:
   *                 <code>"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds":
   *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType":
   *                 "MyCorp::Group"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItem;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
   *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
   *          specifies the issuer URL, token type that you want to use, and policy store entity
   *          details.</p>
   *          <p>Example:<code>"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}</code>
   *          </p>
   * @public
   */
  export interface OpenIdConnectConfigurationMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration: OpenIdConnectConfigurationItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfigurationItem) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfigurationItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigurationItem, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    if (value.openIdConnectConfiguration !== undefined)
      return visitor.openIdConnectConfiguration(value.openIdConnectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a resource conflict.</p>
 * @public
 */
export interface ResourceConflict {
  /**
   * <p>The unique identifier of the resource involved in a conflict.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource involved in a conflict.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * <p>The request failed because another request to modify a resource occurred at the
 *             same.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The list of resources referenced with this failed request.</p>
   * @public
   */
  resources: ResourceConflict[] | undefined;

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
    this.resources = opts.resources;
  }
}

/**
 * @public
 */
export interface CreateIdentitySourceInput {
  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>ConflictException</code>
   *              error.</p>
   *          <p>Verified Permissions recognizes a <code>ClientToken</code> for eight hours. After eight hours,
   *              the next request with the same parameters performs the operation again regardless of
   *              the value of <code>ClientToken</code>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the ID of the policy store in which you want to store this identity source. Only policies and
   *             requests made using this policy store can reference identities from the identity provider
   *             configured in the new identity source.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the details required to communicate with the identity provider (IdP)
   *             associated with this identity source.</p>
   * @public
   */
  configuration: Configuration | undefined;

  /**
   * <p>Specifies the namespace and data type of the principals generated for identities
   *             authenticated by the new identity source.</p>
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceOutput {
  /**
   * <p>The date and time the identity source was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The unique ID of the new identity source.</p>
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * <p>The date and time the identity source was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The ID of the policy store that contains the identity source.</p>
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * <p>The request failed because it would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique ID of the resource referenced in the failed request.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of the resource referenced in the failed request.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The code for the Amazon Web Services service that owns the quota.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>Contains information about a static policy.</p>
 *          <p>This data type is used as a field that is part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinitionDetail.html">PolicyDefinitionDetail</a>
 *             type.</p>
 * @public
 */
export interface StaticPolicyDefinition {
  /**
   * <p>The description of the static policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The policy content of the static policy, written in the Cedar policy language.</p>
   * @public
   */
  statement: string | undefined;
}

/**
 * <p>Contains information about a policy created by instantiating a policy template.</p>
 * @public
 */
export interface TemplateLinkedPolicyDefinition {
  /**
   * <p>The unique identifier of the policy template used to create this policy.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * <p>A structure that contains the details for a Cedar policy definition. It includes the
 *             policy type, a description, and a policy body. This is a top level data type used to
 *             create a policy.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation. This
 *             structure must always have either an <code>static</code> or a <code>templateLinked</code>
 *             element.</p>
 * @public
 */
export type PolicyDefinition =
  | PolicyDefinition.StaticMember
  | PolicyDefinition.TemplateLinkedMember
  | PolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinition {
  /**
   * <p>A structure that describes a static policy. An static policy doesn't use a template or allow
   *             placeholders for entities.</p>
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinition;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * <p>A structure that describes a policy that was instantiated from a template. The
   *             template can specify placeholders for <code>principal</code> and <code>resource</code>.
   *             When you use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> to create a policy from a template, you specify the exact
   *             principal and resource to use for the instantiated policy.</p>
   * @public
   */
  export interface TemplateLinkedMember {
    static?: never;
    templateLinked: TemplateLinkedPolicyDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    static?: never;
    templateLinked?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    static: (value: StaticPolicyDefinition) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyDefinition, visitor: Visitor<T>): T => {
    if (value.static !== undefined) return visitor.static(value.static);
    if (value.templateLinked !== undefined) return visitor.templateLinked(value.templateLinked);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePolicyInput {
  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>ConflictException</code>
   *              error.</p>
   *          <p>Verified Permissions recognizes a <code>ClientToken</code> for eight hours. After eight hours,
   *              the next request with the same parameters performs the operation again regardless of
   *              the value of <code>ClientToken</code>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the <code>PolicyStoreId</code> of the policy store you want to store the policy
   *             in.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>A structure that specifies the policy type and content to use for the new policy. You
   *             must include either a static or a templateLinked element. The policy content must be written
   *             in the Cedar policy language.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyEffect = {
  FORBID: "Forbid",
  PERMIT: "Permit",
} as const;

/**
 * @public
 */
export type PolicyEffect = (typeof PolicyEffect)[keyof typeof PolicyEffect];

/**
 * @public
 */
export interface CreatePolicyOutput {
  /**
   * <p>The ID of the policy store that contains the new policy.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The unique ID of the new policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The policy type of the new policy.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The principal specified in the new policy's scope. This response element isn't present
   *             when <code>principal</code> isn't specified in the policy content.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource specified in the new policy's scope. This response element isn't present
   *             when the <code>resource</code> isn't specified in the policy content.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>The action that a policy permits or forbids. For example,
   * <code>\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto",
   * "entityType": "PhotoFlash::Action"\}]\}</code>.</p>
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * <p>The date and time the policy was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy was last updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The effect of the decision that a policy returns to an authorization
   * request. For example, <code>"effect": "Permit"</code>.</p>
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 * @enum
 */
export const DeletionProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DeletionProtection = (typeof DeletionProtection)[keyof typeof DeletionProtection];

/**
 * @public
 * @enum
 */
export const ValidationMode = {
  OFF: "OFF",
  STRICT: "STRICT",
} as const;

/**
 * @public
 */
export type ValidationMode = (typeof ValidationMode)[keyof typeof ValidationMode];

/**
 * <p>A structure that contains Cedar policy validation settings for the policy store. The
 *             validation mode determines which validation failures that Cedar considers serious
 *             enough to block acceptance of a new or edited static policy or policy template. </p>
 *          <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html">CreatePolicyStore</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html">UpdatePolicyStore</a> operations.</p>
 * @public
 */
export interface ValidationSettings {
  /**
   * <p>The validation mode currently configured for this policy store. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>OFF</b> – Neither Verified Permissions nor Cedar
   *                     perform any validation on policies. No validation errors are reported by either
   *                     service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>STRICT</b> – Requires a schema to be
   *                     present in the policy store. Cedar performs validation on all submitted new or updated
   *                     static policies and policy templates. Any that fail validation are rejected and Cedar doesn't store
   *                     them in the policy store.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>If <code>Mode=STRICT</code> and the policy store doesn't contain a schema, Verified Permissions rejects
   *                 all static policies and policy templates because there is no schema to validate against. </p>
   *             <p>To submit a static policy or policy template without a schema, you must turn off validation.</p>
   *          </important>
   * @public
   */
  mode: ValidationMode | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreInput {
  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>ConflictException</code>
   *              error.</p>
   *          <p>Verified Permissions recognizes a <code>ClientToken</code> for eight hours. After eight hours,
   *              the next request with the same parameters performs the operation again regardless of
   *              the value of <code>ClientToken</code>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies the validation setting for this policy store.</p>
   *          <p>Currently, the only valid and required value is <code>Mode</code>.</p>
   *          <important>
   *             <p>We recommend that you turn on <code>STRICT</code> mode only after you define a
   *                 schema. If a schema doesn't exist, then <code>STRICT</code> mode causes any policy
   *                 to fail validation, and Verified Permissions rejects the policy. You can turn off validation by
   *                 using the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore">UpdatePolicyStore</a>. Then, when you have a schema defined, use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore">UpdatePolicyStore</a> again to turn validation back on.</p>
   *          </important>
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * <p>Descriptive text that you can provide to help with identification
   *             of the current policy store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.</p>
   *          <p>The default state is <code>DISABLED</code>.</p>
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreOutput {
  /**
   * <p>The unique ID of the new policy store.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new policy store.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time the policy store was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy store was last updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateInput {
  /**
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>ConflictException</code>
   *              error.</p>
   *          <p>Verified Permissions recognizes a <code>ClientToken</code> for eight hours. After eight hours,
   *              the next request with the same parameters performs the operation again regardless of
   *              the value of <code>ClientToken</code>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the policy store in which to create the policy template.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies a description for the policy template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies the content that you want to use for the new policy template, written in the Cedar
   *             policy language.</p>
   * @public
   */
  statement: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateOutput {
  /**
   * <p>The ID of the policy store that contains the policy template.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The unique ID of the new policy template.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The date and time the policy template was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy template was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIdentitySourceInput {
  /**
   * <p>Specifies the ID of the policy store that contains the identity source that you want to delete.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the identity source that you want to delete.</p>
   * @public
   */
  identitySourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentitySourceOutput {}

/**
 * @public
 */
export interface DeletePolicyInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy that you want to delete.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy that you want to delete.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyOutput {}

/**
 * @public
 */
export interface DeletePolicyStoreInput {
  /**
   * <p>Specifies the ID of the policy store that you want to delete.</p>
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStoreOutput {}

/**
 * <p>The policy store can't be deleted because deletion protection is enabled. To delete this policy store, disable deletion protection.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
  }
}

/**
 * @public
 */
export interface DeletePolicyTemplateInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy template that you want to delete.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy template that you want to delete.</p>
   * @public
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyTemplateOutput {}

/**
 * <p>Contains information about a principal or resource that can be referenced in a Cedar
 *             policy.</p>
 *          <p>This data type is used as part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyFilter.html">PolicyFilter</a> structure that is
 *             used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation..</p>
 * @public
 */
export type EntityReference =
  | EntityReference.IdentifierMember
  | EntityReference.UnspecifiedMember
  | EntityReference.$UnknownMember;

/**
 * @public
 */
export namespace EntityReference {
  /**
   * <p>Used to indicate that a principal or resource is not specified. This can be used to
   *             search for policies that are not associated with a specific principal or
   *             resource.</p>
   * @public
   */
  export interface UnspecifiedMember {
    unspecified: boolean;
    identifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The identifier of the entity. It can consist of either an EntityType and EntityId, a
   *             principal, or a resource.</p>
   * @public
   */
  export interface IdentifierMember {
    unspecified?: never;
    identifier: EntityIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    unspecified?: never;
    identifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    unspecified: (value: boolean) => T;
    identifier: (value: EntityIdentifier) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntityReference, visitor: Visitor<T>): T => {
    if (value.unspecified !== undefined) return visitor.unspecified(value.unspecified);
    if (value.identifier !== undefined) return visitor.identifier(value.identifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetIdentitySourceInput {
  /**
   * <p>Specifies the ID of the policy store that contains the identity source you want information about.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the identity source you want information about.</p>
   * @public
   */
  identitySourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OpenIdIssuer = {
  COGNITO: "COGNITO",
} as const;

/**
 * @public
 */
export type OpenIdIssuer = (typeof OpenIdIssuer)[keyof typeof OpenIdIssuer];

/**
 * <p>A structure that contains configuration of the identity source.</p>
 *          <p>This data type was a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html">GetIdentitySource</a> operation.
 *             Replaced by <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html">ConfigurationDetail</a>.</p>
 *
 * @deprecated This shape has been replaced by ConfigurationDetail
 * @public
 */
export interface IdentitySourceDetails {
  /**
   * <p>The application client IDs associated with the specified Amazon Cognito user pool that are
   *             enabled for this identity source.</p>
   *
   * @deprecated
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool whose identities are accessible to this Verified Permissions
   *             policy store.</p>
   *
   * @deprecated
   * @public
   */
  userPoolArn?: string | undefined;

  /**
   * <p>The well-known URL that points to this user pool's OIDC discovery endpoint. This is a
   *             URL string in the following format. This URL replaces the placeholders for both the
   *             Amazon Web Services Region and the user pool identifier with those appropriate for this user
   *             pool.</p>
   *          <p>
   *             <code>https://cognito-idp.<i>&lt;region&gt;</i>.amazonaws.com/<i>&lt;user-pool-id&gt;</i>/.well-known/openid-configuration</code>
   *          </p>
   *
   * @deprecated
   * @public
   */
  discoveryUrl?: string | undefined;

  /**
   * <p>A string that identifies the type of OIDC service represented by this identity source. </p>
   *          <p>At this time, the only valid value is <code>cognito</code>.</p>
   *
   * @deprecated
   * @public
   */
  openIdIssuer?: OpenIdIssuer | undefined;
}

/**
 * @public
 */
export interface GetIdentitySourceOutput {
  /**
   * <p>The date and time that the identity source was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>A structure that describes the configuration of the identity source.</p>
   *
   * @deprecated
   * @public
   */
  details?: IdentitySourceDetails | undefined;

  /**
   * <p>The ID of the identity source.</p>
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * <p>The date and time that the identity source was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The ID of the policy store that contains the identity source.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The data type of principals generated for identities authenticated by this
   *             identity source.</p>
   * @public
   */
  principalEntityType: string | undefined;

  /**
   * <p>Contains configuration information about an identity source.</p>
   * @public
   */
  configuration?: ConfigurationDetail | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy that you want information
   *             about.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy you want information about.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * <p>The ID of the policy store that contains the policy that you want information about.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The unique ID of the policy that you want information about.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The type of the policy.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The principal specified in the policy's scope. This element isn't included in the
   *             response when <code>Principal</code> isn't present in the policy content.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource specified in the policy's scope. This element isn't included in the
   *             response when <code>Resource</code> isn't present in the policy content.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>The action that a policy permits or forbids. For example,
   * <code>\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto",
   * "entityType": "PhotoFlash::Action"\}]\}</code>.</p>
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * <p>The definition of the requested policy.</p>
   * @public
   */
  definition: PolicyDefinitionDetail | undefined;

  /**
   * <p>The date and time that the policy was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy was last updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The effect of the decision that a policy returns to an authorization
   * request. For example, <code>"effect": "Permit"</code>.</p>
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreInput {
  /**
   * <p>Specifies the ID of the policy store that you want information about.</p>
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreOutput {
  /**
   * <p>The ID of the policy store;</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy store.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current validation settings for the policy store.</p>
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * <p>The date and time that the policy store was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy store was last updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>Descriptive text that you can provide to help with identification
   *             of the current policy store.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.</p>
   *          <p>The default state is <code>DISABLED</code>.</p>
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy template that you want information
   *             about.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy template that you want information about.</p>
   * @public
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateOutput {
  /**
   * <p>The ID of the policy store that contains the policy template.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The ID of the policy template.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The description of the policy template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The content of the body of the policy template written in the Cedar policy language.</p>
   * @public
   */
  statement: string | undefined;

  /**
   * <p>The date and time that the policy template was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy template was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>Specifies the ID of the policy store that contains the schema.</p>
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * <p>The ID of the policy store that contains the schema.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The body of the schema, written in Cedar schema JSON.</p>
   * @public
   */
  schema: string | undefined;

  /**
   * <p>The date and time that the schema was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the schema was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The namespaces of the entities referenced by this schema.</p>
   * @public
   */
  namespaces?: string[] | undefined;
}

/**
 * <p>A structure that defines characteristics of an identity source that you can use to
 *             filter.</p>
 *          <p>This data type is a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a>
 *             operation.</p>
 * @public
 */
export interface IdentitySourceFilter {
  /**
   * <p>The Cedar entity type of the principals returned by the identity provider (IdP)
   *             associated with this identity source.</p>
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesInput {
  /**
   * <p>Specifies the ID of the policy store that contains the identity sources that you want to list.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   *          <p>If you do not specify this parameter, the operation defaults to 10 identity sources per response.
   *             You can specify a maximum of 50 identity sources per response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies characteristics of an identity source that you can use to limit the output to matching
   *             identity sources.</p>
   * @public
   */
  filters?: IdentitySourceFilter[] | undefined;
}

/**
 * <p>A structure that contains configuration of the identity source.</p>
 *          <p>This data type was a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>
 *             operation. Replaced by <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationItem.html">ConfigurationItem</a>.</p>
 *
 * @deprecated This shape has been replaced by ConfigurationItem
 * @public
 */
export interface IdentitySourceItemDetails {
  /**
   * <p>The application client IDs associated with the specified Amazon Cognito user pool that are
   *             enabled for this identity source.</p>
   *
   * @deprecated
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * <p>The Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.</p>
   *
   * @deprecated
   * @public
   */
  userPoolArn?: string | undefined;

  /**
   * <p>The well-known URL that points to this user pool's OIDC discovery endpoint. This is a
   *             URL string in the following format. This URL replaces the placeholders for both the
   *             Amazon Web Services Region and the user pool identifier with those appropriate for this user
   *             pool.</p>
   *          <p>
   *             <code>https://cognito-idp.<i>&lt;region&gt;</i>.amazonaws.com/<i>&lt;user-pool-id&gt;</i>/.well-known/openid-configuration</code>
   *          </p>
   *
   * @deprecated
   * @public
   */
  discoveryUrl?: string | undefined;

  /**
   * <p>A string that identifies the type of OIDC service represented by this identity source. </p>
   *          <p>At this time, the only valid value is <code>cognito</code>.</p>
   *
   * @deprecated
   * @public
   */
  openIdIssuer?: OpenIdIssuer | undefined;
}

/**
 * <p>A structure that defines an identity source.</p>
 *          <p>This data type is a response parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html">ListIdentitySources</a>
 *             operation.</p>
 * @public
 */
export interface IdentitySourceItem {
  /**
   * <p>The date and time the identity source was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>A structure that contains the details of the associated identity provider
   *             (IdP).</p>
   *
   * @deprecated
   * @public
   */
  details?: IdentitySourceItemDetails | undefined;

  /**
   * <p>The unique identifier of the identity source.</p>
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * <p>The date and time the identity source was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The identifier of the policy store that contains the identity source.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The Cedar entity type of the principals returned from the IdP associated with this
   *             identity source.</p>
   * @public
   */
  principalEntityType: string | undefined;

  /**
   * <p>Contains configuration information about an identity source.</p>
   * @public
   */
  configuration?: ConfigurationItem | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesOutput {
  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of identity sources stored in the specified policy store.</p>
   * @public
   */
  identitySources: IdentitySourceItem[] | undefined;
}

/**
 * <p>The user group entities from an Amazon Cognito user pool identity source.</p>
 * @public
 */
export interface UpdateCognitoGroupConfiguration {
  /**
   * <p>The name of the schema entity type that's mapped to the user pool group. Defaults
   *             to <code>AWS::CognitoGroup</code>.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>Contains configuration details of a Amazon Cognito user pool for use with an identity source.</p>
 * @public
 */
export interface UpdateCognitoUserPoolConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool associated with this identity source.</p>
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * <p>The client ID of an app client that is configured for the specified Amazon Cognito user
   *             pool.</p>
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * <p>The configuration of the user groups from an Amazon Cognito user pool identity
   *             source.</p>
   * @public
   */
  groupConfiguration?: UpdateCognitoGroupConfiguration | undefined;
}

/**
 * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
 *          the entity type that you want to map it to. For example, this object can map the contents
 *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectConfiguration.html">UpdateOpenIdConnectConfiguration</a> structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html">UpdateIdentitySource</a>.</p>
 * @public
 */
export interface UpdateOpenIdConnectGroupConfiguration {
  /**
   * <p>The token claim that you want Verified Permissions to interpret as group membership. For example,
   *             <code>groups</code>.</p>
   * @public
   */
  groupClaim: string | undefined;

  /**
   * <p>The policy store entity type that you want to map your users' group claim to. For example,
   *             <code>MyCorp::UserGroup</code>. A group entity type is an entity that can have a user
   *          entity type as a member.</p>
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling access token
 *          claims. Contains the claim that you want to identify as the principal in an authorization
 *          request, and the values of the <code>aud</code> claim, or audiences, that you want to
 *          accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectTokenSelection.html">UpdateOpenIdConnectTokenSelection</a> structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html">UpdateIdentitySource</a>.</p>
 * @public
 */
export interface UpdateOpenIdConnectAccessTokenConfiguration {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The access token <code>aud</code> claim values that you want to accept in your policy
   *          store. For example, <code>https://myapp.example.com, https://myapp2.example.com</code>.</p>
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * <p>The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID)
 *          token claims. Contains the claim that you want to identify as the principal in an
 *          authorization request, and the values of the  <code>aud</code> claim, or audiences, that
 *          you want to accept.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectTokenSelection.html">UpdateOpenIdConnectTokenSelection</a> structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html">UpdateIdentitySource</a>.</p>
 * @public
 */
export interface UpdateOpenIdConnectIdentityTokenConfiguration {
  /**
   * <p>The claim that determines the principal in OIDC access tokens. For example,
   *             <code>sub</code>.</p>
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * <p>The ID token audience, or client ID, claim values that you want to accept in your policy
   *          store from an OIDC identity provider. For example, <code>1example23456789,
   *             2example10111213</code>.</p>
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * <p>The token type that you want to process from your OIDC identity provider. Your policy
 *          store can process either identity (ID) or access tokens from a given OIDC identity
 *          source.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectConfiguration.html">UpdateOpenIdConnectConfiguration</a> structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html">UpdateIdentitySource</a>.</p>
 * @public
 */
export type UpdateOpenIdConnectTokenSelection =
  | UpdateOpenIdConnectTokenSelection.AccessTokenOnlyMember
  | UpdateOpenIdConnectTokenSelection.IdentityTokenOnlyMember
  | UpdateOpenIdConnectTokenSelection.$UnknownMember;

/**
 * @public
 */
export namespace UpdateOpenIdConnectTokenSelection {
  /**
   * <p>The OIDC configuration for processing access tokens. Contains allowed audience claims,
   *          for example <code>https://auth.example.com</code>, and the claim that you want to map to the
   *          principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: UpdateOpenIdConnectAccessTokenConfiguration;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * <p>The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID
   *          claims, for example <code>1example23456789</code>, and the claim that you want to map to
   *          the principal, for example <code>sub</code>.</p>
   * @public
   */
  export interface IdentityTokenOnlyMember {
    accessTokenOnly?: never;
    identityTokenOnly: UpdateOpenIdConnectIdentityTokenConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accessTokenOnly?: never;
    identityTokenOnly?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accessTokenOnly: (value: UpdateOpenIdConnectAccessTokenConfiguration) => T;
    identityTokenOnly: (value: UpdateOpenIdConnectIdentityTokenConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateOpenIdConnectTokenSelection, visitor: Visitor<T>): T => {
    if (value.accessTokenOnly !== undefined) return visitor.accessTokenOnly(value.accessTokenOnly);
    if (value.identityTokenOnly !== undefined) return visitor.identityTokenOnly(value.identityTokenOnly);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
 *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
 *          specifies the issuer URL, token type that you want to use, and policy store entity
 *          details.</p>
 *          <p>This data type is part of a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateConfiguration.html">UpdateConfiguration</a>
 *             structure, which is a parameter to <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html">UpdateIdentitySource</a>.</p>
 * @public
 */
export interface UpdateOpenIdConnectConfiguration {
  /**
   * <p>The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery
   *          endpoint at the path <code>.well-known/openid-configuration</code>.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>A descriptive string that you want to prefix to user entities from your OIDC identity
   *          provider. For example, if you set an <code>entityIdPrefix</code> of
   *             <code>MyOIDCProvider</code>, you can reference principals in your policies in the format
   *             <code>MyCorp::User::MyOIDCProvider|Carlos</code>.</p>
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * <p>The claim in OIDC identity provider tokens that indicates a user's group membership, and
   *          the entity type that you want to map it to. For example, this object can map the contents
   *          of a <code>groups</code> claim to <code>MyCorp::UserGroup</code>.</p>
   * @public
   */
  groupConfiguration?: UpdateOpenIdConnectGroupConfiguration | undefined;

  /**
   * <p>The token type that you want to process from your OIDC identity provider. Your policy
   *          store can process either identity (ID) or access tokens from a given OIDC identity
   *          source.</p>
   * @public
   */
  tokenSelection: UpdateOpenIdConnectTokenSelection | undefined;
}

/**
 * <p>Contains an update to replace the configuration in an existing identity source.</p>
 * @public
 */
export type UpdateConfiguration =
  | UpdateConfiguration.CognitoUserPoolConfigurationMember
  | UpdateConfiguration.OpenIdConnectConfigurationMember
  | UpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace UpdateConfiguration {
  /**
   * <p>Contains configuration details of a Amazon Cognito user pool.</p>
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details of an OpenID Connect (OIDC) identity provider, or
   *          identity source, that Verified Permissions can use to generate entities from authenticated identities. It
   *          specifies the issuer URL, token type that you want to use, and policy store entity
   *          details.</p>
   * @public
   */
  export interface OpenIdConnectConfigurationMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration: UpdateOpenIdConnectConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    openIdConnectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: UpdateCognitoUserPoolConfiguration) => T;
    openIdConnectConfiguration: (value: UpdateOpenIdConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateConfiguration, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    if (value.openIdConnectConfiguration !== undefined)
      return visitor.openIdConnectConfiguration(value.openIdConnectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateIdentitySourceInput {
  /**
   * <p>Specifies the ID of the policy store that contains the identity source that you want to update.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the identity source that you want to update.</p>
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * <p>Specifies the details required to communicate with the identity provider (IdP)
   *             associated with this identity source.</p>
   * @public
   */
  updateConfiguration: UpdateConfiguration | undefined;

  /**
   * <p>Specifies the data type of principals generated for identities authenticated by the
   *             identity source.</p>
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentitySourceOutput {
  /**
   * <p>The date and time that the updated identity source was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The ID of the updated identity source.</p>
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * <p>The date and time that the identity source was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The ID of the policy store that contains the updated identity source.</p>
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedOutput {
  /**
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   * @public
   */
  decision: Decision | undefined;

  /**
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are two matching policies, where one is a forbid and the other is a permit,
   *             then the forbid policy will be the determining policy. In the case of multiple matching
   *             permit policies then there would be multiple determining policies. In the case that no
   *             policies match, and hence the response is DENY, there would be no determining
   *             policies.</p>
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * <p>Errors that occurred while making an authorization decision, for example, a policy
   *             references an Entity or entity Attribute that does not exist in the slice.</p>
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenOutput {
  /**
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   * @public
   */
  decision: Decision | undefined;

  /**
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are multiple matching policies, where at least one is a forbid policy, then
   *             because forbid always overrides permit the forbid policies are the determining policies.
   *             If all matching policies are permit policies, then those policies are the determining
   *             policies. When no policies match and the response is the default DENY, there are no
   *             determining policies.</p>
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * <p>Errors that occurred while making an authorization decision. For example, a policy
   *             references an entity or entity attribute that does not exist in the slice.</p>
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;

  /**
   * <p>The identifier of the principal in the ID or access token.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;
}

/**
 * <p>Contains information about a filter to refine policies returned in a query.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p>
 * @public
 */
export interface PolicyFilter {
  /**
   * <p>Filters the output to only policies that reference the specified principal.</p>
   * @public
   */
  principal?: EntityReference | undefined;

  /**
   * <p>Filters the output to only policies that reference the specified resource.</p>
   * @public
   */
  resource?: EntityReference | undefined;

  /**
   * <p>Filters the output to only policies of the specified type.</p>
   * @public
   */
  policyType?: PolicyType | undefined;

  /**
   * <p>Filters the output to only template-linked policies that were instantiated from the specified
   *             policy template.</p>
   * @public
   */
  policyTemplateId?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesInput {
  /**
   * <p>Specifies the ID of the policy store you want to list policies from.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   *          <p>If you do not specify this parameter, the operation defaults to 10 policies per
   *             response. You can specify a maximum of 50 policies per response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies a filter that limits the response to only policies that match the specified
   *             criteria. For example, you list only the policies that reference a specified
   *             principal.</p>
   * @public
   */
  filter?: PolicyFilter | undefined;
}

/**
 * <p>A structure that contains details about a static policy. It includes the description and
 *             policy statement.</p>
 *          <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as
 *             part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p>
 * @public
 */
export interface StaticPolicyDefinitionItem {
  /**
   * <p>A description of the static policy.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Contains information about a policy created by instantiating a policy template. </p>
 *          <p>This </p>
 * @public
 */
export interface TemplateLinkedPolicyDefinitionItem {
  /**
   * <p>The unique identifier of the policy template used to create this policy.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * <p>A structure that describes a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinintion.html">PolicyDefinintion</a>. It will
 *             always have either an <code>StaticPolicy</code> or a <code>TemplateLinkedPolicy</code>
 *             element.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a>
 *             operations. </p>
 * @public
 */
export type PolicyDefinitionItem =
  | PolicyDefinitionItem.StaticMember
  | PolicyDefinitionItem.TemplateLinkedMember
  | PolicyDefinitionItem.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinitionItem {
  /**
   * <p>Information about a static policy that wasn't created with a policy template.</p>
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionItem;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a template-linked policy that was created by instantiating a policy template.</p>
   * @public
   */
  export interface TemplateLinkedMember {
    static?: never;
    templateLinked: TemplateLinkedPolicyDefinitionItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    static?: never;
    templateLinked?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    static: (value: StaticPolicyDefinitionItem) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinitionItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PolicyDefinitionItem, visitor: Visitor<T>): T => {
    if (value.static !== undefined) return visitor.static(value.static);
    if (value.templateLinked !== undefined) return visitor.templateLinked(value.templateLinked);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a policy.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p>
 * @public
 */
export interface PolicyItem {
  /**
   * <p>The identifier of the policy store where the policy you want information about is
   *             stored.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The identifier of the policy you want information about.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The type of the policy. This is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STATIC</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE_LINKED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The principal associated with the policy.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource associated with the policy.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>The action that a policy permits or forbids. For example,
   * <code>\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto",
   * "entityType": "PhotoFlash::Action"\}]\}</code>.</p>
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * <p>The policy definition of an item in the list of policies returned.</p>
   * @public
   */
  definition: PolicyDefinitionItem | undefined;

  /**
   * <p>The date and time the policy was created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The effect of the decision that a policy returns to an authorization
   * request. For example, <code>"effect": "Permit"</code>.</p>
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 */
export interface ListPoliciesOutput {
  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Lists all policies that are available in the specified policy store.</p>
   * @public
   */
  policies: PolicyItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresInput {
  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   *          <p>If you do not specify this parameter, the operation defaults to 10 policy stores per response.
   *             You can specify a maximum of 50 policy stores per response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about a policy store.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html">ListPolicyStores</a>
 *             operation.</p>
 * @public
 */
export interface PolicyStoreItem {
  /**
   * <p>The unique identifier of the policy store.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy store.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time the policy was created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time the policy store was most recently updated.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>Descriptive text that you can provide to help with identification
   *             of the current policy store.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresOutput {
  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of policy stores in the account.</p>
   * @public
   */
  policyStores: PolicyStoreItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy templates you want to list.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   *          <p>If you do not specify this parameter, the operation defaults to 10 policy templates per response.
   *             You can specify a maximum of 50 policy templates per response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains details about a policy template</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html">ListPolicyTemplates</a>
 *             operation.</p>
 * @public
 */
export interface PolicyTemplateItem {
  /**
   * <p>The unique identifier of the policy store that contains the template.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The unique identifier of the policy template.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The description attached to the policy template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time that the policy template was created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy template was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesOutput {
  /**
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of the policy templates in the specified policy store.</p>
   * @public
   */
  policyTemplates: PolicyTemplateItem[] | undefined;
}

/**
 * <p>Contains information about an update to a static policy.</p>
 * @public
 */
export interface UpdateStaticPolicyDefinition {
  /**
   * <p>Specifies the description to be added to or replaced on the static policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies the Cedar policy language text to be added to or replaced on the static policy.</p>
   *          <important>
   *             <p>You can change only the following elements from the original content:</p>
   *             <ul>
   *                <li>
   *                   <p>The <code>action</code> referenced by the policy.</p>
   *                </li>
   *                <li>
   *                   <p>Any conditional clauses, such as <code>when</code> or <code>unless</code>
   *                         clauses.</p>
   *                </li>
   *             </ul>
   *             <p>You <b>can't</b> change the following elements:</p>
   *             <ul>
   *                <li>
   *                   <p>Changing from <code>StaticPolicy</code> to
   *                             <code>TemplateLinkedPolicy</code>.</p>
   *                </li>
   *                <li>
   *                   <p>The effect (<code>permit</code> or <code>forbid</code>) of the
   *                         policy.</p>
   *                </li>
   *                <li>
   *                   <p>The <code>principal</code> referenced by the policy.</p>
   *                </li>
   *                <li>
   *                   <p>The <code>resource</code> referenced by the policy.</p>
   *                </li>
   *             </ul>
   *          </important>
   * @public
   */
  statement: string | undefined;
}

/**
 * <p>Contains information about updates to be applied to a policy.</p>
 *          <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operation.</p>
 * @public
 */
export type UpdatePolicyDefinition = UpdatePolicyDefinition.StaticMember | UpdatePolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace UpdatePolicyDefinition {
  /**
   * <p>Contains details about the updates to be applied to a static policy.</p>
   * @public
   */
  export interface StaticMember {
    static: UpdateStaticPolicyDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    static?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    static: (value: UpdateStaticPolicyDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdatePolicyDefinition, visitor: Visitor<T>): T => {
    if (value.static !== undefined) return visitor.static(value.static);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdatePolicyInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy that you want to update.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy that you want to update. To find this value, you can
   *             use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a>.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>Specifies the updated policy content that you want to replace on the specified policy.
   *             The content must be valid Cedar policy language text.</p>
   *          <p>You can change only the following elements from the policy definition:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>action</code> referenced by the policy.</p>
   *             </li>
   *             <li>
   *                <p>Any conditional clauses, such as <code>when</code> or <code>unless</code>
   *                     clauses.</p>
   *             </li>
   *          </ul>
   *          <p>You <b>can't</b> change the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>Changing from <code>static</code> to <code>templateLinked</code>.</p>
   *             </li>
   *             <li>
   *                <p>Changing the effect of the policy from <code>permit</code> or
   *                         <code>forbid</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>principal</code> referenced by the policy.</p>
   *             </li>
   *             <li>
   *                <p>The <code>resource</code> referenced by the policy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  definition: UpdatePolicyDefinition | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyOutput {
  /**
   * <p>The ID of the policy store that contains the policy that was updated.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The ID of the policy that was updated.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The type of the policy that was updated.</p>
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * <p>The principal specified in the policy's scope. This element isn't included in the
   *             response when <code>Principal</code> isn't present in the policy content.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>The resource specified in the policy's scope. This element isn't included in the
   *             response when <code>Resource</code> isn't present in the policy content.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>The action that a policy permits or forbids. For example,
   * <code>\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto",
   * "entityType": "PhotoFlash::Action"\}]\}</code>.</p>
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * <p>The date and time that the policy was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * <p>The effect of the decision that a policy returns to an authorization
   * request. For example, <code>"effect": "Permit"</code>.</p>
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateInput {
  /**
   * <p>Specifies the ID of the policy store that contains the policy template that you want to update.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the ID of the policy template that you want to update.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>Specifies a new description to apply to the policy template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies new statement content written in Cedar policy language to replace the
   *             current body of the policy template.</p>
   *          <p>You can change only the following elements of the policy body:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>action</code> referenced by the policy template.</p>
   *             </li>
   *             <li>
   *                <p>Any conditional clauses, such as <code>when</code> or <code>unless</code>
   *                     clauses.</p>
   *             </li>
   *          </ul>
   *          <p>You <b>can't</b> change the following elements:</p>
   *          <ul>
   *             <li>
   *                <p>The effect (<code>permit</code> or <code>forbid</code>) of the policy template.</p>
   *             </li>
   *             <li>
   *                <p>The <code>principal</code> referenced by the policy template.</p>
   *             </li>
   *             <li>
   *                <p>The <code>resource</code> referenced by the policy template.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statement: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateOutput {
  /**
   * <p>The ID of the policy store that contains the updated policy template.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The ID of the updated policy template.</p>
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * <p>The date and time that the policy template was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy template was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * <p>Contains a list of principal types, resource types, and actions that can be specified
 *             in policies stored in the same policy store. If the validation mode for the policy store is set to
 *                 <code>STRICT</code>, then policies that can't be validated by this schema are
 *             rejected by Verified Permissions and can't be stored in the policy store.</p>
 * @public
 */
export type SchemaDefinition = SchemaDefinition.CedarJsonMember | SchemaDefinition.$UnknownMember;

/**
 * @public
 */
export namespace SchemaDefinition {
  /**
   * <p>A JSON string representation of the schema supported by applications that use this
   *             policy store. To delete the schema, run <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PutSchema.html">PutSchema</a> with <code>\{\}</code> for
   *             this parameter. For more information, see <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/schema.html">Policy store schema</a> in the
   *                 <i>Amazon Verified Permissions User Guide</i>.</p>
   * @public
   */
  export interface CedarJsonMember {
    cedarJson: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cedarJson?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SchemaDefinition, visitor: Visitor<T>): T => {
    if (value.cedarJson !== undefined) return visitor.cedarJson(value.cedarJson);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PutSchemaInput {
  /**
   * <p>Specifies the ID of the policy store in which to place the schema.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the definition of the schema to be stored. The schema definition must be
   *             written in Cedar schema JSON.</p>
   * @public
   */
  definition: SchemaDefinition | undefined;
}

/**
 * @public
 */
export interface PutSchemaOutput {
  /**
   * <p>The unique ID of the policy store that contains the schema.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Identifies the namespaces of the entities referenced by this schema.</p>
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The date and time that the schema was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the schema was last updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreInput {
  /**
   * <p>Specifies the ID of the policy store that you want to update</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>A structure that defines the validation settings that want to enable for the
   *             policy store.</p>
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * <p>Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.</p>
   *          <p>When you call <code>UpdatePolicyStore</code>, this parameter is unchanged unless explicitly included in the call.</p>
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * <p>Descriptive text that you can provide to help with identification
   *             of the current policy store.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreOutput {
  /**
   * <p>The ID of the updated policy store.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the updated policy store.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time that the policy store was originally created.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date and time that the policy store was most recently updated.</p>
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * <p>The value of an attribute.</p>
 *          <p>Contains information about the runtime context for a request for which an
 *             authorization decision is made. </p>
 *          <p>This data type is used as a member of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ContextDefinition.html">ContextDefinition</a> structure
 *             which is uses as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html">BatchIsAuthorized</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>
 *             operations.</p>
 * @public
 */
export type AttributeValue =
  | AttributeValue.BooleanMember
  | AttributeValue.DecimalMember
  | AttributeValue.EntityIdentifierMember
  | AttributeValue.IpaddrMember
  | AttributeValue.LongMember
  | AttributeValue.RecordMember
  | AttributeValue.SetMember
  | AttributeValue.StringMember
  | AttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace AttributeValue {
  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#boolean">Boolean</a>
   *             type.</p>
   *          <p>Example: <code>\{"boolean": true\}</code>
   *          </p>
   * @public
   */
  export interface BooleanMember {
    boolean: boolean;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of type <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntityIdentifier.html">EntityIdentifier</a>.</p>
   *          <p>Example: <code>"entityIdentifier": \{ "entityId": "&lt;id&gt;", "entityType":
   *                 "&lt;entity type&gt;"\}</code>
   *          </p>
   * @public
   */
  export interface EntityIdentifierMember {
    boolean?: never;
    entityIdentifier: EntityIdentifier;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#long">Long</a> type.</p>
   *          <p>Example: <code>\{"long": 0\}</code>
   *          </p>
   * @public
   */
  export interface LongMember {
    boolean?: never;
    entityIdentifier?: never;
    long: number;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#string">String</a>
   *             type.</p>
   *          <p>Example: <code>\{"string": "abc"\}</code>
   *          </p>
   * @public
   */
  export interface StringMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string: string;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#set">Set</a> type.</p>
   *          <p>Example: <code>\{"set": [ \{\} ] \}</code>
   *          </p>
   * @public
   */
  export interface SetMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set: AttributeValue[];
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#record">Record</a>
   *             type.</p>
   *          <p>Example: <code>\{"record": \{ "keyName": \{\} \} \}</code>
   *          </p>
   * @public
   */
  export interface RecordMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record: Record<string, AttributeValue>;
    ipaddr?: never;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-ipaddr">ipaddr</a>
   *             type.</p>
   *          <p>Example: <code>\{"ip": "192.168.1.100"\}</code>
   *          </p>
   * @public
   */
  export interface IpaddrMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr: string;
    decimal?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-decimal">decimal</a> type.</p>
   *          <p>Example: <code>\{"decimal": "1.1"\}</code>
   *          </p>
   * @public
   */
  export interface DecimalMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    boolean: (value: boolean) => T;
    entityIdentifier: (value: EntityIdentifier) => T;
    long: (value: number) => T;
    string: (value: string) => T;
    set: (value: AttributeValue[]) => T;
    record: (value: Record<string, AttributeValue>) => T;
    ipaddr: (value: string) => T;
    decimal: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AttributeValue, visitor: Visitor<T>): T => {
    if (value.boolean !== undefined) return visitor.boolean(value.boolean);
    if (value.entityIdentifier !== undefined) return visitor.entityIdentifier(value.entityIdentifier);
    if (value.long !== undefined) return visitor.long(value.long);
    if (value.string !== undefined) return visitor.string(value.string);
    if (value.set !== undefined) return visitor.set(value.set);
    if (value.record !== undefined) return visitor.record(value.record);
    if (value.ipaddr !== undefined) return visitor.ipaddr(value.ipaddr);
    if (value.decimal !== undefined) return visitor.decimal(value.decimal);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains additional details about the context of the request. Verified Permissions evaluates this
 *             information in an authorization request as part of the <code>when</code> and
 *                 <code>unless</code> clauses in a policy.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html">BatchIsAuthorized</a>, and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a>
 *             operations.</p>
 *          <p>If you're passing context as part of the request, exactly one instance of
 *             <code>context</code> must be passed. If you don't want to pass context, omit the
 *                 <code>context</code> parameter from your request rather than sending <code>context
 *                 \{\}</code>.</p>
 *          <p>Example:
 *                 <code>"context":\{"contextMap":\{"&lt;KeyName1&gt;":\{"boolean":true\},"&lt;KeyName2&gt;":\{"long":1234\}\}\}</code>
 *          </p>
 * @public
 */
export type ContextDefinition =
  | ContextDefinition.CedarJsonMember
  | ContextDefinition.ContextMapMember
  | ContextDefinition.$UnknownMember;

/**
 * @public
 */
export namespace ContextDefinition {
  /**
   * <p>An list of attributes that are needed to successfully evaluate an authorization
   *             request. Each attribute in this array must include a map of a data type and its
   *             value.</p>
   *          <p>Example:
   *                 <code>"contextMap":\{"&lt;KeyName1&gt;":\{"boolean":true\},"&lt;KeyName2&gt;":\{"long":1234\}\}</code>
   *          </p>
   * @public
   */
  export interface ContextMapMember {
    contextMap: Record<string, AttributeValue>;
    cedarJson?: never;
    $unknown?: never;
  }

  /**
   * <p>A Cedar JSON string representation of the context needed to successfully evaluate an authorization
   *             request.</p>
   *          <p>Example:
   *             <code>\{"cedarJson":"\{\"&lt;KeyName1&gt;\": true, \"&lt;KeyName2&gt;\": 1234\}" \}</code>
   *          </p>
   * @public
   */
  export interface CedarJsonMember {
    contextMap?: never;
    cedarJson: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contextMap?: never;
    cedarJson?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contextMap: (value: Record<string, AttributeValue>) => T;
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContextDefinition, visitor: Visitor<T>): T => {
    if (value.contextMap !== undefined) return visitor.contextMap(value.contextMap);
    if (value.cedarJson !== undefined) return visitor.cedarJson(value.cedarJson);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about an entity that can be referenced in a Cedar
 *             policy.</p>
 *          <p>This data type is used as one of the fields in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntitiesDefinition.html">EntitiesDefinition</a>
 *             structure.</p>
 *          <p>
 *             <code>\{ "identifier": \{ "entityType": "Photo", "entityId": "VacationPhoto94.jpg" \},
 *                 "attributes": \{\}, "parents": [ \{ "entityType": "Album", "entityId": "alice_folder" \}
 *                 ] \}</code>
 *          </p>
 * @public
 */
export interface EntityItem {
  /**
   * <p>The identifier of the entity.</p>
   * @public
   */
  identifier: EntityIdentifier | undefined;

  /**
   * <p>A list of attributes for the entity.</p>
   * @public
   */
  attributes?: Record<string, AttributeValue> | undefined;

  /**
   * <p>The parent entities in the hierarchy that contains the entity. A principal or resource
   *             entity can be defined with at most 99 <i>transitive parents</i> per
   *             authorization request. </p>
   *          <p>A transitive parent is an entity in the hierarchy of entities including all direct
   *             parents, and parents of parents. For example, a user can be a member of 91 groups if one
   *             of those groups is a member of eight groups, for a total of 100: one entity, 91 entity
   *             parents, and eight parents of parents. </p>
   * @public
   */
  parents?: EntityIdentifier[] | undefined;
}

/**
 * <p>An authorization request that you include in a <code>BatchIsAuthorized</code> API
 *             request.</p>
 * @public
 */
export interface BatchIsAuthorizedInputItem {
  /**
   * <p>Specifies the principal for which the authorization decision is to be made.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>Specifies the requested action to be authorized. For example,
   *                 <code>PhotoFlash::ReadPhoto</code>.</p>
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * <p>Specifies the resource that you want an authorization decision for. For example,
   *                 <code>PhotoFlash::Photo</code>.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   * @public
   */
  context?: ContextDefinition | undefined;
}

/**
 * <p>An authorization request that you include in a <code>BatchIsAuthorizedWithToken</code>
 *             API request.</p>
 * @public
 */
export interface BatchIsAuthorizedWithTokenInputItem {
  /**
   * <p>Specifies the requested action to be authorized. For example,
   *                 <code>PhotoFlash::ReadPhoto</code>.</p>
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * <p>Specifies the resource that you want an authorization decision for. For example,
   *                 <code>PhotoFlash::Photo</code>.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   * @public
   */
  context?: ContextDefinition | undefined;
}

/**
 * <p>The decision, based on policy evaluation, from an individual authorization request in
 *             a <code>BatchIsAuthorized</code> API request.</p>
 * @public
 */
export interface BatchIsAuthorizedOutputItem {
  /**
   * <p>The authorization request that initiated the decision.</p>
   * @public
   */
  request: BatchIsAuthorizedInputItem | undefined;

  /**
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   * @public
   */
  decision: Decision | undefined;

  /**
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are two matching policies, where one is a forbid and the other is a permit,
   *             then the forbid policy will be the determining policy. In the case of multiple matching
   *             permit policies then there would be multiple determining policies. In the case that no
   *             policies match, and hence the response is DENY, there would be no determining
   *             policies.</p>
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * <p>Errors that occurred while making an authorization decision. For example, a policy
   *             might reference an entity or attribute that doesn't exist in the request.</p>
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * <p>The decision, based on policy evaluation, from an individual authorization request in
 *             a <code>BatchIsAuthorizedWithToken</code> API request.</p>
 * @public
 */
export interface BatchIsAuthorizedWithTokenOutputItem {
  /**
   * <p>The authorization request that initiated the decision.</p>
   * @public
   */
  request: BatchIsAuthorizedWithTokenInputItem | undefined;

  /**
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   * @public
   */
  decision: Decision | undefined;

  /**
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are two matching policies, where one is a forbid and the other is a permit,
   *             then the forbid policy will be the determining policy. In the case of multiple matching
   *             permit policies then there would be multiple determining policies. In the case that no
   *             policies match, and hence the response is DENY, there would be no determining
   *             policies.</p>
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * <p>Errors that occurred while making an authorization decision. For example, a policy
   *             might reference an entity or attribute that doesn't exist in the request.</p>
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * <p>Contains the list of entities to be considered during an authorization request. This
 *             includes all principals, resources, and actions required to successfully evaluate the
 *             request.</p>
 *          <p>This data type is used as a field in the response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>
 *             and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 * @public
 */
export type EntitiesDefinition =
  | EntitiesDefinition.CedarJsonMember
  | EntitiesDefinition.EntityListMember
  | EntitiesDefinition.$UnknownMember;

/**
 * @public
 */
export namespace EntitiesDefinition {
  /**
   * <p>An array of entities that are needed to successfully evaluate an authorization
   *             request. Each entity in this array must include an identifier for the entity, the
   *             attributes of the entity, and a list of any parent entities.</p>
   *          <note>
   *             <p>If you include multiple entities with the same <code>identifier</code>, only the
   *                 last one is processed in the request.</p>
   *          </note>
   * @public
   */
  export interface EntityListMember {
    entityList: EntityItem[];
    cedarJson?: never;
    $unknown?: never;
  }

  /**
   * <p>A Cedar JSON string representation of the entities needed to successfully evaluate an authorization
   *             request.</p>
   *          <p>Example:
   *             <code>\{"cedarJson": "[\{\"uid\":\{\"type\":\"Photo\",\"id\":\"VacationPhoto94.jpg\"\},\"attrs\":\{\"accessLevel\":\"public\"\},\"parents\":[]\}]"\}</code>
   *          </p>
   * @public
   */
  export interface CedarJsonMember {
    entityList?: never;
    cedarJson: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    entityList?: never;
    cedarJson?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    entityList: (value: EntityItem[]) => T;
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntitiesDefinition, visitor: Visitor<T>): T => {
    if (value.entityList !== undefined) return visitor.entityList(value.entityList);
    if (value.cedarJson !== undefined) return visitor.cedarJson(value.cedarJson);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface BatchIsAuthorizedOutput {
  /**
   * <p>A series of <code>Allow</code> or <code>Deny</code> decisions for each request, and
   *             the policies that produced them. These results are returned in the order they were requested.</p>
   * @public
   */
  results: BatchIsAuthorizedOutputItem[] | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedWithTokenOutput {
  /**
   * <p>The identifier of the principal in the ID or access token.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>A series of <code>Allow</code> or <code>Deny</code> decisions for each request, and
   *             the policies that produced them.  These results are returned in the order they were requested.</p>
   * @public
   */
  results: BatchIsAuthorizedWithTokenOutputItem[] | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedInput {
  /**
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make an
   *             authorization decision for the input.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the principal for which the authorization decision is to be made.</p>
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * <p>Specifies the requested action to be authorized. For example, is the principal
   *             authorized to perform this action on the resource?</p>
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * <p>Specifies the resource for which the authorization decision is to be made.</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   * @public
   */
  context?: ContextDefinition | undefined;

  /**
   * <p>Specifies the list of resources and principals and their associated attributes that
   *             Verified Permissions can examine when evaluating the policies. </p>
   *          <note>
   *             <p>You can include only principal and resource entities in this parameter; you can't
   *                 include actions. You must specify actions in the schema.</p>
   *          </note>
   * @public
   */
  entities?: EntitiesDefinition | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenInput {
  /**
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make an
   *             authorization decision for the input.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies an identity token for the principal to be authorized. This token is provided
   *             to you by the identity provider (IdP) associated with the specified identity source. You must
   *             specify either an <code>accessToken</code>, an <code>identityToken</code>, or
   *             both.</p>
   *          <p>Must be an ID token. Verified Permissions returns an error if the <code>token_use</code> claim in the
   *             submitted token isn't <code>id</code>.</p>
   * @public
   */
  identityToken?: string | undefined;

  /**
   * <p>Specifies an access token for the principal to be authorized. This token is provided
   *             to you by the identity provider (IdP) associated with the specified identity source. You must
   *             specify either an <code>accessToken</code>, an <code>identityToken</code>, or
   *             both.</p>
   *          <p>Must be an access token. Verified Permissions returns an error if the <code>token_use</code> claim in
   *             the submitted token isn't <code>access</code>.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Specifies the requested action to be authorized. Is the specified principal authorized
   *             to perform this action on the specified resource.</p>
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * <p>Specifies the resource for which the authorization decision is made. For example, is
   *             the principal allowed to perform the action on the resource?</p>
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   * @public
   */
  context?: ContextDefinition | undefined;

  /**
   * <p>Specifies the list of resources and their associated attributes that Verified Permissions can examine
   *             when evaluating the policies. </p>
   *          <important>
   *             <p>You can't include principals in this parameter, only resource and action entities.
   *                 This parameter can't include any entities of a type that matches the user or group
   *                 entity types that you defined in your identity source.</p>
   *             <ul>
   *                <li>
   *                   <p>The <code>IsAuthorizedWithToken</code> operation takes principal
   *                         attributes from <b>
   *                         <i>only</i>
   *                      </b>
   *                         the <code>identityToken</code> or <code>accessToken</code> passed to the
   *                         operation.</p>
   *                </li>
   *                <li>
   *                   <p>For action entities, you can include only their <code>Identifier</code>
   *                         and <code>EntityType</code>. </p>
   *                </li>
   *             </ul>
   *          </important>
   * @public
   */
  entities?: EntitiesDefinition | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedInput {
  /**
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make the
   *             authorization decisions for the input.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies the list of resources and principals and their associated attributes that
   *             Verified Permissions can examine when evaluating the policies. </p>
   *          <note>
   *             <p>You can include only principal and resource entities in this parameter; you can't
   *                 include actions. You must specify actions in the schema.</p>
   *          </note>
   * @public
   */
  entities?: EntitiesDefinition | undefined;

  /**
   * <p>An array of up to 30 requests that you want Verified Permissions to evaluate.</p>
   * @public
   */
  requests: BatchIsAuthorizedInputItem[] | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedWithTokenInput {
  /**
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make an
   *             authorization decision for the input.</p>
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * <p>Specifies an identity (ID) token for the principal that you want to authorize in each
   *             request. This token is provided to you by the identity provider (IdP) associated with
   *             the specified identity source. You must specify either an <code>accessToken</code>, an
   *                 <code>identityToken</code>, or both.</p>
   *          <p>Must be an ID token. Verified Permissions returns an error if the <code>token_use</code> claim in the
   *             submitted token isn't <code>id</code>.</p>
   * @public
   */
  identityToken?: string | undefined;

  /**
   * <p>Specifies an access token for the principal that you want to authorize in each
   *             request. This token is provided to you by the identity provider (IdP) associated with
   *             the specified identity source. You must specify either an <code>accessToken</code>, an
   *                 <code>identityToken</code>, or both.</p>
   *          <p>Must be an access token. Verified Permissions returns an error if the <code>token_use</code> claim in
   *             the submitted token isn't <code>access</code>.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Specifies the list of resources and their associated attributes that Verified Permissions can examine
   *             when evaluating the policies. </p>
   *          <important>
   *             <p>You can't include principals in this parameter, only resource and action entities.
   *                 This parameter can't include any entities of a type that matches the user or group
   *                 entity types that you defined in your identity source.</p>
   *             <ul>
   *                <li>
   *                   <p>The <code>BatchIsAuthorizedWithToken</code> operation takes principal
   *                         attributes from <b>
   *                         <i>only</i>
   *                      </b>
   *                         the <code>identityToken</code> or <code>accessToken</code> passed to the
   *                         operation.</p>
   *                </li>
   *                <li>
   *                   <p>For action entities, you can include only their <code>Identifier</code>
   *                         and <code>EntityType</code>. </p>
   *                </li>
   *             </ul>
   *          </important>
   * @public
   */
  entities?: EntitiesDefinition | undefined;

  /**
   * <p>An array of up to 30 requests that you want Verified Permissions to evaluate.</p>
   * @public
   */
  requests: BatchIsAuthorizedWithTokenInputItem[] | undefined;
}

/**
 * @internal
 */
export const ActionIdentifierFilterSensitiveLog = (obj: ActionIdentifier): any => ({
  ...obj,
  ...(obj.actionType && { actionType: SENSITIVE_STRING }),
  ...(obj.actionId && { actionId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EntityIdentifierFilterSensitiveLog = (obj: EntityIdentifier): any => ({
  ...obj,
  ...(obj.entityType && { entityType: SENSITIVE_STRING }),
  ...(obj.entityId && { entityId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StaticPolicyDefinitionDetailFilterSensitiveLog = (obj: StaticPolicyDefinitionDetail): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateLinkedPolicyDefinitionDetailFilterSensitiveLog = (
  obj: TemplateLinkedPolicyDefinitionDetail
): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
});

/**
 * @internal
 */
export const PolicyDefinitionDetailFilterSensitiveLog = (obj: PolicyDefinitionDetail): any => {
  if (obj.static !== undefined) return { static: StaticPolicyDefinitionDetailFilterSensitiveLog(obj.static) };
  if (obj.templateLinked !== undefined)
    return { templateLinked: TemplateLinkedPolicyDefinitionDetailFilterSensitiveLog(obj.templateLinked) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const BatchGetPolicyOutputItemFilterSensitiveLog = (obj: BatchGetPolicyOutputItem): any => ({
  ...obj,
  ...(obj.definition && { definition: PolicyDefinitionDetailFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const BatchGetPolicyOutputFilterSensitiveLog = (obj: BatchGetPolicyOutput): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => BatchGetPolicyOutputItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EvaluationErrorItemFilterSensitiveLog = (obj: EvaluationErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoGroupConfigurationFilterSensitiveLog = (obj: CognitoGroupConfiguration): any => ({
  ...obj,
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CognitoGroupConfigurationDetailFilterSensitiveLog = (obj: CognitoGroupConfigurationDetail): any => ({
  ...obj,
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CognitoGroupConfigurationItemFilterSensitiveLog = (obj: CognitoGroupConfigurationItem): any => ({
  ...obj,
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CognitoUserPoolConfigurationFilterSensitiveLog = (obj: CognitoUserPoolConfiguration): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: CognitoGroupConfigurationFilterSensitiveLog(obj.groupConfiguration),
  }),
});

/**
 * @internal
 */
export const CognitoUserPoolConfigurationDetailFilterSensitiveLog = (obj: CognitoUserPoolConfigurationDetail): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: CognitoGroupConfigurationDetailFilterSensitiveLog(obj.groupConfiguration),
  }),
});

/**
 * @internal
 */
export const CognitoUserPoolConfigurationItemFilterSensitiveLog = (obj: CognitoUserPoolConfigurationItem): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: CognitoGroupConfigurationItemFilterSensitiveLog(obj.groupConfiguration),
  }),
});

/**
 * @internal
 */
export const OpenIdConnectGroupConfigurationFilterSensitiveLog = (obj: OpenIdConnectGroupConfiguration): any => ({
  ...obj,
  ...(obj.groupClaim && { groupClaim: SENSITIVE_STRING }),
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectAccessTokenConfigurationFilterSensitiveLog = (
  obj: OpenIdConnectAccessTokenConfiguration
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectIdentityTokenConfigurationFilterSensitiveLog = (
  obj: OpenIdConnectIdentityTokenConfiguration
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectTokenSelectionFilterSensitiveLog = (obj: OpenIdConnectTokenSelection): any => {
  if (obj.accessTokenOnly !== undefined)
    return { accessTokenOnly: OpenIdConnectAccessTokenConfigurationFilterSensitiveLog(obj.accessTokenOnly) };
  if (obj.identityTokenOnly !== undefined)
    return { identityTokenOnly: OpenIdConnectIdentityTokenConfigurationFilterSensitiveLog(obj.identityTokenOnly) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OpenIdConnectConfigurationFilterSensitiveLog = (obj: OpenIdConnectConfiguration): any => ({
  ...obj,
  ...(obj.entityIdPrefix && { entityIdPrefix: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: OpenIdConnectGroupConfigurationFilterSensitiveLog(obj.groupConfiguration),
  }),
  ...(obj.tokenSelection && { tokenSelection: OpenIdConnectTokenSelectionFilterSensitiveLog(obj.tokenSelection) }),
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => {
  if (obj.cognitoUserPoolConfiguration !== undefined)
    return {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationFilterSensitiveLog(obj.cognitoUserPoolConfiguration),
    };
  if (obj.openIdConnectConfiguration !== undefined)
    return { openIdConnectConfiguration: OpenIdConnectConfigurationFilterSensitiveLog(obj.openIdConnectConfiguration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OpenIdConnectGroupConfigurationDetailFilterSensitiveLog = (
  obj: OpenIdConnectGroupConfigurationDetail
): any => ({
  ...obj,
  ...(obj.groupClaim && { groupClaim: SENSITIVE_STRING }),
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectAccessTokenConfigurationDetailFilterSensitiveLog = (
  obj: OpenIdConnectAccessTokenConfigurationDetail
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectIdentityTokenConfigurationDetailFilterSensitiveLog = (
  obj: OpenIdConnectIdentityTokenConfigurationDetail
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectTokenSelectionDetailFilterSensitiveLog = (obj: OpenIdConnectTokenSelectionDetail): any => {
  if (obj.accessTokenOnly !== undefined)
    return { accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetailFilterSensitiveLog(obj.accessTokenOnly) };
  if (obj.identityTokenOnly !== undefined)
    return {
      identityTokenOnly: OpenIdConnectIdentityTokenConfigurationDetailFilterSensitiveLog(obj.identityTokenOnly),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OpenIdConnectConfigurationDetailFilterSensitiveLog = (obj: OpenIdConnectConfigurationDetail): any => ({
  ...obj,
  ...(obj.entityIdPrefix && { entityIdPrefix: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: OpenIdConnectGroupConfigurationDetailFilterSensitiveLog(obj.groupConfiguration),
  }),
  ...(obj.tokenSelection && {
    tokenSelection: OpenIdConnectTokenSelectionDetailFilterSensitiveLog(obj.tokenSelection),
  }),
});

/**
 * @internal
 */
export const ConfigurationDetailFilterSensitiveLog = (obj: ConfigurationDetail): any => {
  if (obj.cognitoUserPoolConfiguration !== undefined)
    return {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetailFilterSensitiveLog(
        obj.cognitoUserPoolConfiguration
      ),
    };
  if (obj.openIdConnectConfiguration !== undefined)
    return {
      openIdConnectConfiguration: OpenIdConnectConfigurationDetailFilterSensitiveLog(obj.openIdConnectConfiguration),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OpenIdConnectGroupConfigurationItemFilterSensitiveLog = (
  obj: OpenIdConnectGroupConfigurationItem
): any => ({
  ...obj,
  ...(obj.groupClaim && { groupClaim: SENSITIVE_STRING }),
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectAccessTokenConfigurationItemFilterSensitiveLog = (
  obj: OpenIdConnectAccessTokenConfigurationItem
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectIdentityTokenConfigurationItemFilterSensitiveLog = (
  obj: OpenIdConnectIdentityTokenConfigurationItem
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenIdConnectTokenSelectionItemFilterSensitiveLog = (obj: OpenIdConnectTokenSelectionItem): any => {
  if (obj.accessTokenOnly !== undefined)
    return { accessTokenOnly: OpenIdConnectAccessTokenConfigurationItemFilterSensitiveLog(obj.accessTokenOnly) };
  if (obj.identityTokenOnly !== undefined)
    return { identityTokenOnly: OpenIdConnectIdentityTokenConfigurationItemFilterSensitiveLog(obj.identityTokenOnly) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OpenIdConnectConfigurationItemFilterSensitiveLog = (obj: OpenIdConnectConfigurationItem): any => ({
  ...obj,
  ...(obj.entityIdPrefix && { entityIdPrefix: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: OpenIdConnectGroupConfigurationItemFilterSensitiveLog(obj.groupConfiguration),
  }),
  ...(obj.tokenSelection && { tokenSelection: OpenIdConnectTokenSelectionItemFilterSensitiveLog(obj.tokenSelection) }),
});

/**
 * @internal
 */
export const ConfigurationItemFilterSensitiveLog = (obj: ConfigurationItem): any => {
  if (obj.cognitoUserPoolConfiguration !== undefined)
    return {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItemFilterSensitiveLog(
        obj.cognitoUserPoolConfiguration
      ),
    };
  if (obj.openIdConnectConfiguration !== undefined)
    return {
      openIdConnectConfiguration: OpenIdConnectConfigurationItemFilterSensitiveLog(obj.openIdConnectConfiguration),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateIdentitySourceInputFilterSensitiveLog = (obj: CreateIdentitySourceInput): any => ({
  ...obj,
  ...(obj.configuration && { configuration: ConfigurationFilterSensitiveLog(obj.configuration) }),
  ...(obj.principalEntityType && { principalEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StaticPolicyDefinitionFilterSensitiveLog = (obj: StaticPolicyDefinition): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateLinkedPolicyDefinitionFilterSensitiveLog = (obj: TemplateLinkedPolicyDefinition): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
});

/**
 * @internal
 */
export const PolicyDefinitionFilterSensitiveLog = (obj: PolicyDefinition): any => {
  if (obj.static !== undefined) return { static: StaticPolicyDefinitionFilterSensitiveLog(obj.static) };
  if (obj.templateLinked !== undefined)
    return { templateLinked: TemplateLinkedPolicyDefinitionFilterSensitiveLog(obj.templateLinked) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreatePolicyInputFilterSensitiveLog = (obj: CreatePolicyInput): any => ({
  ...obj,
  ...(obj.definition && { definition: PolicyDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const CreatePolicyOutputFilterSensitiveLog = (obj: CreatePolicyOutput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.actions && { actions: obj.actions.map((item) => ActionIdentifierFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreatePolicyStoreInputFilterSensitiveLog = (obj: CreatePolicyStoreInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePolicyTemplateInputFilterSensitiveLog = (obj: CreatePolicyTemplateInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EntityReferenceFilterSensitiveLog = (obj: EntityReference): any => {
  if (obj.unspecified !== undefined) return { unspecified: obj.unspecified };
  if (obj.identifier !== undefined) return { identifier: EntityIdentifierFilterSensitiveLog(obj.identifier) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const IdentitySourceDetailsFilterSensitiveLog = (obj: IdentitySourceDetails): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetIdentitySourceOutputFilterSensitiveLog = (obj: GetIdentitySourceOutput): any => ({
  ...obj,
  ...(obj.details && { details: IdentitySourceDetailsFilterSensitiveLog(obj.details) }),
  ...(obj.principalEntityType && { principalEntityType: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: ConfigurationDetailFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const GetPolicyOutputFilterSensitiveLog = (obj: GetPolicyOutput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.actions && { actions: obj.actions.map((item) => ActionIdentifierFilterSensitiveLog(item)) }),
  ...(obj.definition && { definition: PolicyDefinitionDetailFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const GetPolicyStoreOutputFilterSensitiveLog = (obj: GetPolicyStoreOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPolicyTemplateOutputFilterSensitiveLog = (obj: GetPolicyTemplateOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSchemaOutputFilterSensitiveLog = (obj: GetSchemaOutput): any => ({
  ...obj,
  ...(obj.schema && { schema: SENSITIVE_STRING }),
  ...(obj.namespaces && { namespaces: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IdentitySourceFilterFilterSensitiveLog = (obj: IdentitySourceFilter): any => ({
  ...obj,
  ...(obj.principalEntityType && { principalEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListIdentitySourcesInputFilterSensitiveLog = (obj: ListIdentitySourcesInput): any => ({
  ...obj,
  ...(obj.filters && { filters: obj.filters.map((item) => IdentitySourceFilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const IdentitySourceItemDetailsFilterSensitiveLog = (obj: IdentitySourceItemDetails): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IdentitySourceItemFilterSensitiveLog = (obj: IdentitySourceItem): any => ({
  ...obj,
  ...(obj.details && { details: IdentitySourceItemDetailsFilterSensitiveLog(obj.details) }),
  ...(obj.principalEntityType && { principalEntityType: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: ConfigurationItemFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const ListIdentitySourcesOutputFilterSensitiveLog = (obj: ListIdentitySourcesOutput): any => ({
  ...obj,
  ...(obj.identitySources && {
    identitySources: obj.identitySources.map((item) => IdentitySourceItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateCognitoGroupConfigurationFilterSensitiveLog = (obj: UpdateCognitoGroupConfiguration): any => ({
  ...obj,
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateCognitoUserPoolConfigurationFilterSensitiveLog = (obj: UpdateCognitoUserPoolConfiguration): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: UpdateCognitoGroupConfigurationFilterSensitiveLog(obj.groupConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateOpenIdConnectGroupConfigurationFilterSensitiveLog = (
  obj: UpdateOpenIdConnectGroupConfiguration
): any => ({
  ...obj,
  ...(obj.groupClaim && { groupClaim: SENSITIVE_STRING }),
  ...(obj.groupEntityType && { groupEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateOpenIdConnectAccessTokenConfigurationFilterSensitiveLog = (
  obj: UpdateOpenIdConnectAccessTokenConfiguration
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateOpenIdConnectIdentityTokenConfigurationFilterSensitiveLog = (
  obj: UpdateOpenIdConnectIdentityTokenConfiguration
): any => ({
  ...obj,
  ...(obj.principalIdClaim && { principalIdClaim: SENSITIVE_STRING }),
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateOpenIdConnectTokenSelectionFilterSensitiveLog = (obj: UpdateOpenIdConnectTokenSelection): any => {
  if (obj.accessTokenOnly !== undefined)
    return { accessTokenOnly: UpdateOpenIdConnectAccessTokenConfigurationFilterSensitiveLog(obj.accessTokenOnly) };
  if (obj.identityTokenOnly !== undefined)
    return {
      identityTokenOnly: UpdateOpenIdConnectIdentityTokenConfigurationFilterSensitiveLog(obj.identityTokenOnly),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const UpdateOpenIdConnectConfigurationFilterSensitiveLog = (obj: UpdateOpenIdConnectConfiguration): any => ({
  ...obj,
  ...(obj.entityIdPrefix && { entityIdPrefix: SENSITIVE_STRING }),
  ...(obj.groupConfiguration && {
    groupConfiguration: UpdateOpenIdConnectGroupConfigurationFilterSensitiveLog(obj.groupConfiguration),
  }),
  ...(obj.tokenSelection && {
    tokenSelection: UpdateOpenIdConnectTokenSelectionFilterSensitiveLog(obj.tokenSelection),
  }),
});

/**
 * @internal
 */
export const UpdateConfigurationFilterSensitiveLog = (obj: UpdateConfiguration): any => {
  if (obj.cognitoUserPoolConfiguration !== undefined)
    return {
      cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfigurationFilterSensitiveLog(
        obj.cognitoUserPoolConfiguration
      ),
    };
  if (obj.openIdConnectConfiguration !== undefined)
    return {
      openIdConnectConfiguration: UpdateOpenIdConnectConfigurationFilterSensitiveLog(obj.openIdConnectConfiguration),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const UpdateIdentitySourceInputFilterSensitiveLog = (obj: UpdateIdentitySourceInput): any => ({
  ...obj,
  ...(obj.updateConfiguration && {
    updateConfiguration: UpdateConfigurationFilterSensitiveLog(obj.updateConfiguration),
  }),
  ...(obj.principalEntityType && { principalEntityType: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsAuthorizedOutputFilterSensitiveLog = (obj: IsAuthorizedOutput): any => ({
  ...obj,
  ...(obj.errors && { errors: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsAuthorizedWithTokenOutputFilterSensitiveLog = (obj: IsAuthorizedWithTokenOutput): any => ({
  ...obj,
  ...(obj.errors && { errors: SENSITIVE_STRING }),
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
});

/**
 * @internal
 */
export const PolicyFilterFilterSensitiveLog = (obj: PolicyFilter): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityReferenceFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityReferenceFilterSensitiveLog(obj.resource) }),
});

/**
 * @internal
 */
export const ListPoliciesInputFilterSensitiveLog = (obj: ListPoliciesInput): any => ({
  ...obj,
  ...(obj.filter && { filter: PolicyFilterFilterSensitiveLog(obj.filter) }),
});

/**
 * @internal
 */
export const StaticPolicyDefinitionItemFilterSensitiveLog = (obj: StaticPolicyDefinitionItem): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TemplateLinkedPolicyDefinitionItemFilterSensitiveLog = (obj: TemplateLinkedPolicyDefinitionItem): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
});

/**
 * @internal
 */
export const PolicyDefinitionItemFilterSensitiveLog = (obj: PolicyDefinitionItem): any => {
  if (obj.static !== undefined) return { static: StaticPolicyDefinitionItemFilterSensitiveLog(obj.static) };
  if (obj.templateLinked !== undefined)
    return { templateLinked: TemplateLinkedPolicyDefinitionItemFilterSensitiveLog(obj.templateLinked) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PolicyItemFilterSensitiveLog = (obj: PolicyItem): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.actions && { actions: obj.actions.map((item) => ActionIdentifierFilterSensitiveLog(item)) }),
  ...(obj.definition && { definition: PolicyDefinitionItemFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const ListPoliciesOutputFilterSensitiveLog = (obj: ListPoliciesOutput): any => ({
  ...obj,
  ...(obj.policies && { policies: obj.policies.map((item) => PolicyItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PolicyStoreItemFilterSensitiveLog = (obj: PolicyStoreItem): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPolicyStoresOutputFilterSensitiveLog = (obj: ListPolicyStoresOutput): any => ({
  ...obj,
  ...(obj.policyStores && { policyStores: obj.policyStores.map((item) => PolicyStoreItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PolicyTemplateItemFilterSensitiveLog = (obj: PolicyTemplateItem): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPolicyTemplatesOutputFilterSensitiveLog = (obj: ListPolicyTemplatesOutput): any => ({
  ...obj,
  ...(obj.policyTemplates && {
    policyTemplates: obj.policyTemplates.map((item) => PolicyTemplateItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateStaticPolicyDefinitionFilterSensitiveLog = (obj: UpdateStaticPolicyDefinition): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePolicyDefinitionFilterSensitiveLog = (obj: UpdatePolicyDefinition): any => {
  if (obj.static !== undefined) return { static: UpdateStaticPolicyDefinitionFilterSensitiveLog(obj.static) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const UpdatePolicyInputFilterSensitiveLog = (obj: UpdatePolicyInput): any => ({
  ...obj,
  ...(obj.definition && { definition: UpdatePolicyDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const UpdatePolicyOutputFilterSensitiveLog = (obj: UpdatePolicyOutput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.actions && { actions: obj.actions.map((item) => ActionIdentifierFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdatePolicyTemplateInputFilterSensitiveLog = (obj: UpdatePolicyTemplateInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.statement && { statement: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SchemaDefinitionFilterSensitiveLog = (obj: SchemaDefinition): any => {
  if (obj.cedarJson !== undefined) return { cedarJson: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PutSchemaInputFilterSensitiveLog = (obj: PutSchemaInput): any => ({
  ...obj,
  ...(obj.definition && { definition: SchemaDefinitionFilterSensitiveLog(obj.definition) }),
});

/**
 * @internal
 */
export const PutSchemaOutputFilterSensitiveLog = (obj: PutSchemaOutput): any => ({
  ...obj,
  ...(obj.namespaces && { namespaces: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePolicyStoreInputFilterSensitiveLog = (obj: UpdatePolicyStoreInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AttributeValueFilterSensitiveLog = (obj: AttributeValue): any => {
  if (obj.boolean !== undefined) return { boolean: SENSITIVE_STRING };
  if (obj.entityIdentifier !== undefined)
    return { entityIdentifier: EntityIdentifierFilterSensitiveLog(obj.entityIdentifier) };
  if (obj.long !== undefined) return { long: SENSITIVE_STRING };
  if (obj.string !== undefined) return { string: SENSITIVE_STRING };
  if (obj.set !== undefined) return { set: obj.set.map((item) => AttributeValueFilterSensitiveLog(item)) };
  if (obj.record !== undefined)
    return {
      record: Object.entries(obj.record).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => (
          (acc[key] = AttributeValueFilterSensitiveLog(value)), acc
        ),
        {}
      ),
    };
  if (obj.ipaddr !== undefined) return { ipaddr: SENSITIVE_STRING };
  if (obj.decimal !== undefined) return { decimal: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContextDefinitionFilterSensitiveLog = (obj: ContextDefinition): any => {
  if (obj.contextMap !== undefined) return { contextMap: SENSITIVE_STRING };
  if (obj.cedarJson !== undefined) return { cedarJson: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EntityItemFilterSensitiveLog = (obj: EntityItem): any => ({
  ...obj,
  ...(obj.identifier && { identifier: EntityIdentifierFilterSensitiveLog(obj.identifier) }),
  ...(obj.attributes && {
    attributes: Object.entries(obj.attributes).reduce(
      (acc: any, [key, value]: [string, AttributeValue]) => ((acc[key] = AttributeValueFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.parents && { parents: obj.parents.map((item) => EntityIdentifierFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedInputItemFilterSensitiveLog = (obj: BatchIsAuthorizedInputItem): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.action && { action: ActionIdentifierFilterSensitiveLog(obj.action) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.context && { context: ContextDefinitionFilterSensitiveLog(obj.context) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedWithTokenInputItemFilterSensitiveLog = (
  obj: BatchIsAuthorizedWithTokenInputItem
): any => ({
  ...obj,
  ...(obj.action && { action: ActionIdentifierFilterSensitiveLog(obj.action) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.context && { context: ContextDefinitionFilterSensitiveLog(obj.context) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedOutputItemFilterSensitiveLog = (obj: BatchIsAuthorizedOutputItem): any => ({
  ...obj,
  ...(obj.request && { request: BatchIsAuthorizedInputItemFilterSensitiveLog(obj.request) }),
  ...(obj.errors && { errors: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedWithTokenOutputItemFilterSensitiveLog = (
  obj: BatchIsAuthorizedWithTokenOutputItem
): any => ({
  ...obj,
  ...(obj.request && { request: BatchIsAuthorizedWithTokenInputItemFilterSensitiveLog(obj.request) }),
  ...(obj.errors && { errors: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EntitiesDefinitionFilterSensitiveLog = (obj: EntitiesDefinition): any => {
  if (obj.entityList !== undefined)
    return { entityList: obj.entityList.map((item) => EntityItemFilterSensitiveLog(item)) };
  if (obj.cedarJson !== undefined) return { cedarJson: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const BatchIsAuthorizedOutputFilterSensitiveLog = (obj: BatchIsAuthorizedOutput): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => BatchIsAuthorizedOutputItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedWithTokenOutputFilterSensitiveLog = (obj: BatchIsAuthorizedWithTokenOutput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.results && {
    results: obj.results.map((item) => BatchIsAuthorizedWithTokenOutputItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const IsAuthorizedInputFilterSensitiveLog = (obj: IsAuthorizedInput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.action && { action: ActionIdentifierFilterSensitiveLog(obj.action) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.context && { context: ContextDefinitionFilterSensitiveLog(obj.context) }),
  ...(obj.entities && { entities: EntitiesDefinitionFilterSensitiveLog(obj.entities) }),
});

/**
 * @internal
 */
export const IsAuthorizedWithTokenInputFilterSensitiveLog = (obj: IsAuthorizedWithTokenInput): any => ({
  ...obj,
  ...(obj.identityToken && { identityToken: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.action && { action: ActionIdentifierFilterSensitiveLog(obj.action) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.context && { context: ContextDefinitionFilterSensitiveLog(obj.context) }),
  ...(obj.entities && { entities: EntitiesDefinitionFilterSensitiveLog(obj.entities) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedInputFilterSensitiveLog = (obj: BatchIsAuthorizedInput): any => ({
  ...obj,
  ...(obj.entities && { entities: EntitiesDefinitionFilterSensitiveLog(obj.entities) }),
  ...(obj.requests && { requests: obj.requests.map((item) => BatchIsAuthorizedInputItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchIsAuthorizedWithTokenInputFilterSensitiveLog = (obj: BatchIsAuthorizedWithTokenInput): any => ({
  ...obj,
  ...(obj.identityToken && { identityToken: SENSITIVE_STRING }),
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.entities && { entities: EntitiesDefinitionFilterSensitiveLog(obj.entities) }),
  ...(obj.requests && {
    requests: obj.requests.map((item) => BatchIsAuthorizedWithTokenInputItemFilterSensitiveLog(item)),
  }),
});
