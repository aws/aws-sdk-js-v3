// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { VerifiedPermissionsServiceException as __BaseException } from "./VerifiedPermissionsServiceException";

/**
 * @public
 * <p>You don't have sufficient access to perform this action.</p>
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
 * @public
 * <p>Contains information about an action for a request for which an authorization decision
 *             is made.</p>
 *          <p>This data type is used as an request parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 *          <p>Example: <code>\{ "actionId": "&lt;action name&gt;", "actionType": "Action"
 *             \}</code>
 *          </p>
 */
export interface ActionIdentifier {
  /**
   * @public
   * <p>The type of an action.</p>
   */
  actionType: string | undefined;

  /**
   * @public
   * <p>The ID of an action.</p>
   */
  actionId: string | undefined;
}

/**
 * @public
 * <p>Contains the identifier of an entity, including its ID and type.</p>
 *          <p>This data type is used as a request parameter for <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> operation, and as a
 *             response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a>, <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a>, and
 *                 <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operations.</p>
 *          <p>Example:
 *                     <code>\{"entityId":"<i>string</i>","entityType":"<i>string</i>"\}</code>
 *          </p>
 */
export interface EntityIdentifier {
  /**
   * @public
   * <p>The type of an entity.</p>
   *          <p>Example: <code>"entityType":"<i>typeName</i>"</code>
   *          </p>
   */
  entityType: string | undefined;

  /**
   * @public
   * <p>The identifier of an entity.</p>
   *          <p>
   *             <code>"entityId":"<i>identifier</i>"</code>
   *          </p>
   */
  entityId: string | undefined;
}

/**
 * @public
 * <p>The configuration for an identity source that represents a connection to an Amazon Cognito user pool used
 *             as an identity provider for Verified Permissions.</p>
 *          <p>This data type is used as a field that is part of an <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a> structure that is
 *             used as a parameter to the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html">Configuration</a>.</p>
 *          <p>Example:<code>"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds":
 *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"]\}</code>
 *          </p>
 */
export interface CognitoUserPoolConfiguration {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool that contains the identities to be
   *             authorized.</p>
   *          <p>Example: <code>"UserPoolArn":
   *                 "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"</code>
   *          </p>
   */
  userPoolArn: string | undefined;

  /**
   * @public
   * <p>The unique application client IDs that are associated with the specified Amazon Cognito user
   *             pool.</p>
   *          <p>Example: <code>"ClientIds": ["&amp;ExampleCogClientId;"]</code>
   *          </p>
   */
  clientIds?: string[];
}

/**
 * @public
 * <p>Contains configuration information used when creating a new identity source.</p>
 *          <note>
 *             <p>At this time, the only valid member of this structure is a Amazon Cognito user pool
 *                 configuration.</p>
 *             <p>You must specify a <code>userPoolArn</code>, and optionally, a
 *                     <code>ClientId</code>.</p>
 *          </note>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>
 *             operation.</p>
 */
export type Configuration = Configuration.CognitoUserPoolConfigurationMember | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * @public
   * <p>Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of
   *             authenticated identities as entities. It specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a Amazon Cognito user pool
   *             and one or more application client IDs.</p>
   *          <p>Example:
   *                 <code>"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds":
   *                 ["a1b2c3d4e5f6g7h8i9j0kalbmc"]\}\}</code>
   *          </p>
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * <p>Contains information about a resource conflict.</p>
 */
export interface ResourceConflict {
  /**
   * @public
   * <p>The unique identifier of the resource involved in a conflict.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource involved in a conflict.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 * <p>The request failed because another request to modify a resource occurred at the
 *             same.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The list of resources referenced with this failed request.</p>
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
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the ID of the policy store in which you want to store this identity source. Only policies and
   *             requests made using this policy store can reference identities from the identity provider
   *             configured in the new identity source.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the details required to communicate with the identity provider (IdP)
   *             associated with this identity source.</p>
   *          <note>
   *             <p>At this time, the only valid member of this structure is a Amazon Cognito user pool
   *                 configuration.</p>
   *             <p>You must specify a <code>UserPoolArn</code>, and optionally, a
   *                     <code>ClientId</code>.</p>
   *          </note>
   */
  configuration: Configuration | undefined;

  /**
   * @public
   * <p>Specifies the namespace and data type of the principals generated for identities
   *             authenticated by the new identity source.</p>
   */
  principalEntityType?: string;
}

/**
 * @public
 */
export interface CreateIdentitySourceOutput {
  /**
   * @public
   * <p>The date and time the identity source was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The unique ID of the new identity source.</p>
   */
  identitySourceId: string | undefined;

  /**
   * @public
   * <p>The date and time the identity source was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;

  /**
   * @public
   * <p>The ID of the policy store that contains the identity source.</p>
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 * <p>The request failed because of an internal error. Try your request again later</p>
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
 * @public
 * <p>The request failed because it references a resource that doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique ID of the resource referenced in the failed request.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type of the resource referenced in the failed request.</p>
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
 * @public
 * <p>The request failed because it would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique ID of the resource referenced in the failed request.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The resource type of the resource referenced in the failed request.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The code for the Amazon Web Service that owns the quota.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   */
  quotaCode?: string;

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
 * @public
 * <p>The request failed because it exceeded a throttling quota.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The code for the Amazon Web Service that owns the quota.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The quota code recognized by the Amazon Web Services Service Quotas service.</p>
   */
  quotaCode?: string;

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
 * @public
 * <p>Details about a field that failed policy validation.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The path to the specific element that Verified Permissions found to be not valid.</p>
   */
  path: string | undefined;

  /**
   * @public
   * <p>Describes the policy validation error.</p>
   */
  message: string | undefined;
}

/**
 * @public
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
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
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
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The list of fields that aren't valid.</p>
   */
  fieldList?: ValidationExceptionField[];

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
 * <p>Contains information about a static policy.</p>
 *          <p>This data type is used as a field that is part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinitionDetail.html">PolicyDefinitionDetail</a>
 *             type.</p>
 */
export interface StaticPolicyDefinition {
  /**
   * @public
   * <p>The description of the static policy.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The policy content of the static policy, written in the Cedar policy language.</p>
   */
  statement: string | undefined;
}

/**
 * @public
 * <p>Contains information about a policy created by instantiating a policy template.</p>
 */
export interface TemplateLinkedPolicyDefinition {
  /**
   * @public
   * <p>The unique identifier of the policy template used to create this policy.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  resource?: EntityIdentifier;
}

/**
 * @public
 * <p>A structure that contains the details for a Cedar policy definition. It includes the
 *             policy type, a description, and a policy body. This is a top level data type used to
 *             create a policy.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation. This
 *             structure must always have either an <code>static</code> or a <code>templateLinked</code>
 *             element.</p>
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
   * @public
   * <p>A structure that describes a static policy. An static policy doesn't use a template or allow
   *             placeholders for entities.</p>
   */
  export interface StaticMember {
    static: StaticPolicyDefinition;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A structure that describes a policy that was instantiated from a template. The
   *             template can specify placeholders for <code>principal</code> and <code>resource</code>.
   *             When you use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> to create a policy from a template, you specify the exact
   *             principal and resource to use for the instantiated policy.</p>
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
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the <code>PolicyStoreId</code> of the policy store you want to store the policy
   *             in.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>A structure that specifies the policy type and content to use for the new policy. You
   *             must include either a static or a templateLinked element. The policy content must be written
   *             in the Cedar policy language.</p>
   */
  definition: PolicyDefinition | undefined;
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
 * @public
 */
export interface CreatePolicyOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the new policy.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the new policy.</p>
   */
  policyId: string | undefined;

  /**
   * @public
   * <p>The policy type of the new policy.</p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>The principal specified in the new policy's scope. This response element isn't present
   *             when <code>principal</code> isn't specified in the policy content.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource specified in the new policy's scope. This response element isn't present
   *             when the <code>resource</code> isn't specified in the policy content.</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>The date and time the policy was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time the policy was last updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

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
 * @public
 * <p>A structure that contains Cedar policy validation settings for the policy store. The
 *             validation mode determines which validation failures that Cedar considers serious
 *             enough to block acceptance of a new or edited static policy or policy template. </p>
 *          <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html">CreatePolicyStore</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html">UpdatePolicyStore</a> operations.</p>
 */
export interface ValidationSettings {
  /**
   * @public
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
   */
  mode: ValidationMode | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreInput {
  /**
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Specifies the validation setting for this policy store.</p>
   *          <p>Currently, the only valid and required value is <code>Mode</code>.</p>
   *          <important>
   *             <p>We recommend that you turn on <code>STRICT</code> mode only after you define a
   *                 schema. If a schema doesn't exist, then <code>STRICT</code> mode causes any policy
   *                 to fail validation, and Verified Permissions rejects the policy. You can turn off validation by
   *                 using the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore">UpdatePolicyStore</a>. Then, when you have a schema defined, use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore">UpdatePolicyStore</a> again to turn validation back on.</p>
   *          </important>
   */
  validationSettings: ValidationSettings | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreOutput {
  /**
   * @public
   * <p>The unique ID of the new policy store.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new policy store.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The date and time the policy store was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time the policy store was last updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateInput {
  /**
   * @public
   * <p>Specifies a unique, case-sensitive ID that you provide to
   *              ensure the idempotency of the request. This lets you safely retry the request without
   *              accidentally performing the same operation a second time. Passing the same value to a
   *              later call to an operation requires that you also pass the same value for all other
   *              parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *              value.</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *              you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with
   *              different parameters, the retry fails with an <code>IdempotentParameterMismatch</code>
   *              error.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the policy store in which to create the policy template.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies a description for the policy template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Specifies the content that you want to use for the new policy template, written in the Cedar
   *             policy language.</p>
   */
  statement: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the policy template.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the new policy template.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The date and time the policy template was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time the policy template was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
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
 * @public
 */
export interface DeleteIdentitySourceInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the identity source that you want to delete.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the identity source that you want to delete.</p>
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
   * @public
   * <p>Specifies the ID of the policy store that contains the policy that you want to delete.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy that you want to delete.</p>
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
   * @public
   * <p>Specifies the ID of the policy store that you want to delete.</p>
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStoreOutput {}

/**
 * @public
 */
export interface DeletePolicyTemplateInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the policy template that you want to delete.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy template that you want to delete.</p>
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyTemplateOutput {}

/**
 * @public
 * <p>Contains information about one of the policies that determined an authorization
 *             decision.</p>
 *          <p>This data type is used as an element in a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>
 *             and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 *          <p>Example: <code>"determiningPolicies":[\{"policyId":"SPEXAMPLEabcdefg111111"\}]</code>
 *          </p>
 */
export interface DeterminingPolicyItem {
  /**
   * @public
   * <p>The Id of a policy that determined to an authorization decision.</p>
   *          <p>Example: <code>"policyId":"SPEXAMPLEabcdefg111111"</code>
   *          </p>
   */
  policyId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a principal or resource that can be referenced in a Cedar
 *             policy.</p>
 *          <p>This data type is used as part of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyFilter.html">PolicyFilter</a> structure that is
 *             used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation..</p>
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
   * @public
   * <p>Used to indicate that a principal or resource is not specified. This can be used to
   *             search for policies that are not associated with a specific principal or
   *             resource.</p>
   */
  export interface UnspecifiedMember {
    unspecified: boolean;
    identifier?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The identifier of the entity. It can consist of either an EntityType and EntityId, a
   *             principal, or a resource.</p>
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
 * <p>Contains a description of an evaluation error.</p>
 *          <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 */
export interface EvaluationErrorItem {
  /**
   * @public
   * <p>The error description.</p>
   */
  errorDescription: string | undefined;
}

/**
 * @public
 */
export interface GetIdentitySourceInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the identity source you want information about.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the identity source you want information about.</p>
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
 * @public
 * <p>A structure that contains configuration of the identity source.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>
 *             operation.</p>
 */
export interface IdentitySourceDetails {
  /**
   * @public
   * <p>The application client IDs associated with the specified Amazon Cognito user pool that are
   *             enabled for this identity source.</p>
   */
  clientIds?: string[];

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool whose identities are accessible to this Verified Permissions
   *             policy store.</p>
   */
  userPoolArn?: string;

  /**
   * @public
   * <p>The well-known URL that points to this user pool's OIDC discovery endpoint. This is a
   *             URL string in the following format. This URL replaces the placeholders for both the
   *             Amazon Web Services Region and the user pool identifier with those appropriate for this user
   *             pool.</p>
   *          <p>
   *             <code>https://cognito-idp.<i>&lt;region&gt;</i>.amazonaws.com/<i>&lt;user-pool-id&gt;</i>/.well-known/openid-configuration</code>
   *          </p>
   */
  discoveryUrl?: string;

  /**
   * @public
   * <p>A string that identifies the type of OIDC service represented by this identity source. </p>
   *          <p>At this time, the only valid value is <code>cognito</code>.</p>
   */
  openIdIssuer?: OpenIdIssuer;
}

/**
 * @public
 */
export interface GetIdentitySourceOutput {
  /**
   * @public
   * <p>The date and time that the identity source was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>A structure that describes the configuration of the identity source.</p>
   */
  details: IdentitySourceDetails | undefined;

  /**
   * @public
   * <p>The ID of the identity source.</p>
   */
  identitySourceId: string | undefined;

  /**
   * @public
   * <p>The date and time that the identity source was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;

  /**
   * @public
   * <p>The ID of the policy store that contains the identity source.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The data type of principals generated for identities authenticated by this
   *             identity source.</p>
   */
  principalEntityType: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the policy that you want information
   *             about.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy you want information about.</p>
   */
  policyId: string | undefined;
}

/**
 * @public
 * <p>A structure that contains details about a static policy. It includes the description and
 *             policy body.</p>
 *          <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as
 *             part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p>
 */
export interface StaticPolicyDefinitionDetail {
  /**
   * @public
   * <p>A description of the static policy.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The content of the static policy written in the Cedar policy language.</p>
   */
  statement: string | undefined;
}

/**
 * @public
 * <p>Contains information about a policy that was </p>
 *          <p/>
 *          <p>created by instantiating a policy template. </p>
 *          <p>This </p>
 */
export interface TemplateLinkedPolicyDefinitionDetail {
  /**
   * @public
   * <p>The unique identifier of the policy template used to create this policy.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  resource?: EntityIdentifier;
}

/**
 * @public
 * <p>A structure that describes a policy definition. It must always have either an
 *                 <code>static</code> or a <code>templateLinked</code> element.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html">GetPolicy</a> operation.</p>
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
   * @public
   * <p>Information about a static policy that wasn't created with a policy template.</p>
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionDetail;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a template-linked policy that was created by instantiating a policy template.</p>
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
 */
export interface GetPolicyOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the policy that you want information about.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the policy that you want information about.</p>
   */
  policyId: string | undefined;

  /**
   * @public
   * <p>The type of the policy.</p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>The principal specified in the policy's scope. This element isn't included in the
   *             response when <code>Principal</code> isn't present in the policy content.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource specified in the policy's scope. This element isn't included in the
   *             response when <code>Resource</code> isn't present in the policy content.</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>The definition of the requested policy.</p>
   */
  definition: PolicyDefinitionDetail | undefined;

  /**
   * @public
   * <p>The date and time that the policy was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy was last updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that you want information about.</p>
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreOutput {
  /**
   * @public
   * <p>The ID of the policy store;</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy store.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The current validation settings for the policy store.</p>
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * @public
   * <p>The date and time that the policy store was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy store was last updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the policy template that you want information
   *             about.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy template that you want information about.</p>
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the policy template.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy template.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The description of the policy template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The content of the body of the policy template written in the Cedar policy language.</p>
   */
  statement: string | undefined;

  /**
   * @public
   * <p>The date and time that the policy template was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy template was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the schema.</p>
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the schema.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The body of the schema, written in Cedar schema JSON.</p>
   */
  schema: string | undefined;

  /**
   * @public
   * <p>The date and time that the schema was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the schema was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 * <p>A structure that defines characteristics of an identity source that you can use to
 *             filter.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a>
 *             operation.</p>
 */
export interface IdentitySourceFilter {
  /**
   * @public
   * <p>The Cedar entity type of the principals returned by the identity provider (IdP)
   *             associated with this identity source.</p>
   */
  principalEntityType?: string;
}

/**
 * @public
 */
export interface ListIdentitySourcesInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the identity sources that you want to list.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies the total number of results that you want included in each
   *              response. If additional items exist beyond the number you specify, the
   *              <code>NextToken</code> response element is returned with a value (not null). Include the
   *              specified value as the <code>NextToken</code> request parameter in the next call to the
   *              operation to get the next set of results. Note that the service might return fewer
   *              results than the maximum even when there are more results available. You should check
   *              <code>NextToken</code> after every operation to ensure that you receive all of the
   *              results.</p>
   *          <p>If you do not specify this parameter, the operation defaults to 10 identity sources per response.
   *             You can specify a maximum of 200 identity sources per response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specifies characteristics of an identity source that you can use to limit the output to matching
   *             identity sources.</p>
   */
  filters?: IdentitySourceFilter[];
}

/**
 * @public
 * <p>A structure that contains configuration of the identity source.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html">CreateIdentitySource</a>
 *             operation.</p>
 */
export interface IdentitySourceItemDetails {
  /**
   * @public
   * <p>The application client IDs associated with the specified Amazon Cognito user pool that are
   *             enabled for this identity source.</p>
   */
  clientIds?: string[];

  /**
   * @public
   * <p>The Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.</p>
   */
  userPoolArn?: string;

  /**
   * @public
   * <p>The well-known URL that points to this user pool's OIDC discovery endpoint. This is a
   *             URL string in the following format. This URL replaces the placeholders for both the
   *             Amazon Web Services Region and the user pool identifier with those appropriate for this user
   *             pool.</p>
   *          <p>
   *             <code>https://cognito-idp.<i>&lt;region&gt;</i>.amazonaws.com/<i>&lt;user-pool-id&gt;</i>/.well-known/openid-configuration</code>
   *          </p>
   */
  discoveryUrl?: string;

  /**
   * @public
   * <p>A string that identifies the type of OIDC service represented by this identity source. </p>
   *          <p>At this time, the only valid value is <code>cognito</code>.</p>
   */
  openIdIssuer?: OpenIdIssuer;
}

/**
 * @public
 * <p>A structure that defines an identity source.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html">ListIdentityStores</a>
 *             operation.</p>
 */
export interface IdentitySourceItem {
  /**
   * @public
   * <p>The date and time the identity source was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>A structure that contains the details of the associated identity provider
   *             (IdP).</p>
   */
  details: IdentitySourceItemDetails | undefined;

  /**
   * @public
   * <p>The unique identifier of the identity source.</p>
   */
  identitySourceId: string | undefined;

  /**
   * @public
   * <p>The date and time the identity source was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;

  /**
   * @public
   * <p>The identifier of the policy store that contains the identity source.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The Cedar entity type of the principals returned from the IdP associated with this
   *             identity source.</p>
   */
  principalEntityType: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesOutput {
  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of identity sources stored in the specified policy store.</p>
   */
  identitySources: IdentitySourceItem[] | undefined;
}

/**
 * @public
 * <p>Contains configuration details of a Amazon Cognito user pool for use with an identity source.</p>
 */
export interface UpdateCognitoUserPoolConfiguration {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the Amazon Cognito user pool associated with this identity source.</p>
   */
  userPoolArn: string | undefined;

  /**
   * @public
   * <p>The client ID of an app client that is configured for the specified Amazon Cognito user
   *             pool.</p>
   */
  clientIds?: string[];
}

/**
 * @public
 * <p>Contains an updated configuration to replace the configuration in an existing
 *             identity source.</p>
 *          <note>
 *             <p>At this time, the only valid member of this structure is a Amazon Cognito user pool
 *                 configuration.</p>
 *             <p>You must specify a <code>userPoolArn</code>, and optionally, a
 *                     <code>ClientId</code>.</p>
 *          </note>
 */
export type UpdateConfiguration =
  | UpdateConfiguration.CognitoUserPoolConfigurationMember
  | UpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace UpdateConfiguration {
  /**
   * @public
   * <p>Contains configuration details of a Amazon Cognito user pool.</p>
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cognitoUserPoolConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: UpdateCognitoUserPoolConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateConfiguration, visitor: Visitor<T>): T => {
    if (value.cognitoUserPoolConfiguration !== undefined)
      return visitor.cognitoUserPoolConfiguration(value.cognitoUserPoolConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateIdentitySourceInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the identity source that you want to update.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the identity source that you want to update.</p>
   */
  identitySourceId: string | undefined;

  /**
   * @public
   * <p>Specifies the details required to communicate with the identity provider (IdP)
   *             associated with this identity source.</p>
   *          <note>
   *             <p>At this time, the only valid member of this structure is a Amazon Cognito user pool
   *                 configuration.</p>
   *             <p>You must specify a <code>userPoolArn</code>, and optionally, a
   *                     <code>ClientId</code>.</p>
   *          </note>
   */
  updateConfiguration: UpdateConfiguration | undefined;

  /**
   * @public
   * <p>Specifies the data type of principals generated for identities authenticated by the
   *             identity source.</p>
   */
  principalEntityType?: string;
}

/**
 * @public
 */
export interface UpdateIdentitySourceOutput {
  /**
   * @public
   * <p>The date and time that the updated identity source was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The ID of the updated identity source.</p>
   */
  identitySourceId: string | undefined;

  /**
   * @public
   * <p>The date and time that the identity source was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;

  /**
   * @public
   * <p>The ID of the policy store that contains the updated identity source.</p>
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedOutput {
  /**
   * @public
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   */
  decision: Decision | undefined;

  /**
   * @public
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are two matching policies, where one is a forbid and the other is a permit,
   *             then the forbid policy will be the determining policy. In the case of multiple matching
   *             permit policies then there would be multiple determining policies. In the case that no
   *             policies match, and hence the response is DENY, there would be no determining
   *             policies.</p>
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * @public
   * <p>Errors that occurred while making an authorization decision, for example, a policy
   *             references an Entity or entity Attribute that does not exist in the slice.</p>
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenOutput {
  /**
   * @public
   * <p>An authorization decision that indicates if the authorization request should be
   *             allowed or denied.</p>
   */
  decision: Decision | undefined;

  /**
   * @public
   * <p>The list of determining policies used to make the authorization decision. For example,
   *             if there are multiple matching policies, where at least one is a forbid policy, then
   *             because forbid always overrides permit the forbid policies are the determining policies.
   *             If all matching policies are permit policies, then those policies are the determining
   *             policies. When no policies match and the response is the default DENY, there are no
   *             determining policies.</p>
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * @public
   * <p>Errors that occurred while making an authorization decision. For example, a policy
   *             references an entity or entity attribute that does not exist in the slice.</p>
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * @public
 * <p>Contains information about a filter to refine policies returned in a query.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p>
 */
export interface PolicyFilter {
  /**
   * @public
   * <p>Filters the output to only policies that reference the specified principal.</p>
   */
  principal?: EntityReference;

  /**
   * @public
   * <p>Filters the output to only policies that reference the specified resource.</p>
   */
  resource?: EntityReference;

  /**
   * @public
   * <p>Filters the output to only policies of the specified type.</p>
   */
  policyType?: PolicyType;

  /**
   * @public
   * <p>Filters the output to only template-linked policies that were instantiated from the specified
   *             policy template.</p>
   */
  policyTemplateId?: string;
}

/**
 * @public
 */
export interface ListPoliciesInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store you want to list policies from.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specifies a filter that limits the response to only policies that match the specified
   *             criteria. For example, you list only the policies that reference a specified
   *             principal.</p>
   */
  filter?: PolicyFilter;
}

/**
 * @public
 * <p>A structure that contains details about a static policy. It includes the description and
 *             policy statement.</p>
 *          <p>This data type is used within a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html">PolicyDefinition</a> structure as
 *             part of a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> operation.</p>
 */
export interface StaticPolicyDefinitionItem {
  /**
   * @public
   * <p>A description of the static policy.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Contains information about a policy created by instantiating a policy template. </p>
 *          <p>This </p>
 */
export interface TemplateLinkedPolicyDefinitionItem {
  /**
   * @public
   * <p>The unique identifier of the policy template used to create this policy.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the
   *                 <code>?principal</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the
   *                 <code>?resource</code> placeholder in the policy template when it evaluates an authorization
   *             request.</p>
   */
  resource?: EntityIdentifier;
}

/**
 * @public
 * <p>A structure that describes a <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinintion.html">PolicyDefinintion</a>. It will
 *             always have either an <code>StaticPolicy</code> or a <code>TemplateLinkedPolicy</code>
 *             element.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html">CreatePolicy</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a>
 *             operations. </p>
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
   * @public
   * <p>Information about a static policy that wasn't created with a policy template.</p>
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionItem;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information about a template-linked policy that was created by instantiating a policy template.</p>
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
 * @public
 * <p>Contains information about a policy.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a> operation.</p>
 */
export interface PolicyItem {
  /**
   * @public
   * <p>The identifier of the PolicyStore where the policy you want information about is
   *             stored.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The identifier of the policy you want information about.</p>
   */
  policyId: string | undefined;

  /**
   * @public
   * <p>The type of the policy. This is one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>static</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>templateLinked</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>The principal associated with the policy.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource associated with the policy.</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>The policy definition of an item in the list of policies returned.</p>
   */
  definition: PolicyDefinitionItem | undefined;

  /**
   * @public
   * <p>The date and time the policy was created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time the policy was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPoliciesOutput {
  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Lists all policies that are available in the specified policy store.</p>
   */
  policies: PolicyItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresInput {
  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains information about a policy store.</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html">ListPolicyStores</a>
 *             operation.</p>
 */
export interface PolicyStoreItem {
  /**
   * @public
   * <p>The unique identifier of the policy store.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy store.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The date and time the policy was created.</p>
   */
  createdDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresOutput {
  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of policy stores in the account.</p>
   */
  policyStores: PolicyStoreItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the policy templates you want to list.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to receive the next page of results. Valid
   *              only if you received a <code>NextToken</code> response in the previous request. If you
   *              did, it indicates that more output is available. Set this parameter to the value
   *              provided by the previous call's <code>NextToken</code> response to request the
   *              next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains details about a policy template</p>
 *          <p>This data type is used as a response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html">ListPolicyTemplates</a>
 *             operation.</p>
 */
export interface PolicyTemplateItem {
  /**
   * @public
   * <p>The unique identifier of the policy store that contains the template.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the policy template.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The description attached to the policy template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date and time that the policy template was created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy template was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesOutput {
  /**
   * @public
   * <p>If present, this value indicates that more output is available than
   *              is included in the current response. Use this value in the <code>NextToken</code>
   *              request parameter in a subsequent call to the operation to get the next part of the
   *              output. You should repeat this until the <code>NextToken</code> response element comes
   *              back as <code>null</code>. This indicates that this is the last page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of the policy templates in the specified policy store.</p>
   */
  policyTemplates: PolicyTemplateItem[] | undefined;
}

/**
 * @public
 * <p>Contains information about an update to a static policy.</p>
 */
export interface UpdateStaticPolicyDefinition {
  /**
   * @public
   * <p>Specifies the description to be added to or replaced on the static policy.</p>
   */
  description?: string;

  /**
   * @public
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
   */
  statement: string | undefined;
}

/**
 * @public
 * <p>Contains information about updates to be applied to a policy.</p>
 *          <p>This data type is used as a request parameter in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html">UpdatePolicy</a> operation.</p>
 */
export type UpdatePolicyDefinition = UpdatePolicyDefinition.StaticMember | UpdatePolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace UpdatePolicyDefinition {
  /**
   * @public
   * <p>Contains details about the updates to be applied to a static policy.</p>
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
   * @public
   * <p>Specifies the ID of the policy store that contains the policy that you want to update.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy that you want to update. To find this value, you can
   *             use <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html">ListPolicies</a>.</p>
   */
  policyId: string | undefined;

  /**
   * @public
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
   */
  definition: UpdatePolicyDefinition | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the policy that was updated.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The ID of the policy that was updated.</p>
   */
  policyId: string | undefined;

  /**
   * @public
   * <p>The type of the policy that was updated.</p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>The principal specified in the policy's scope. This element isn't included in the
   *             response when <code>Principal</code> isn't present in the policy content.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>The resource specified in the policy's scope. This element isn't included in the
   *             response when <code>Resource</code> isn't present in the policy content.</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>The date and time that the policy was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that contains the policy template that you want to update.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the policy template that you want to update.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>Specifies a new description to apply to the policy template.</p>
   */
  description?: string;

  /**
   * @public
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
   */
  statement: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateOutput {
  /**
   * @public
   * <p>The ID of the policy store that contains the updated policy template.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The ID of the updated policy template.</p>
   */
  policyTemplateId: string | undefined;

  /**
   * @public
   * <p>The date and time that the policy template was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy template was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 * <p>Contains a list of principal types, resource types, and actions that can be specified
 *             in policies stored in the same policy store. If the validation mode for the policy store is set to
 *                 <code>STRICT</code>, then policies that can't be validated by this schema are
 *             rejected by Verified Permissions and can't be stored in the policy store.</p>
 */
export type SchemaDefinition = SchemaDefinition.CedarJsonMember | SchemaDefinition.$UnknownMember;

/**
 * @public
 */
export namespace SchemaDefinition {
  /**
   * @public
   * <p>A JSON string representation of the schema supported by applications that use this
   *             policy store. For more information, see <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/schema.html">Policy store schema</a> in the
   *                 <i>Amazon Verified Permissions User Guide</i>.</p>
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
   * @public
   * <p>Specifies the ID of the policy store in which to place the schema.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the definition of the schema to be stored. The schema definition must be
   *             written in Cedar schema JSON.</p>
   */
  definition: SchemaDefinition | undefined;
}

/**
 * @public
 */
export interface PutSchemaOutput {
  /**
   * @public
   * <p>The unique ID of the policy store that contains the schema.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Identifies the namespaces of the entities referenced by this schema.</p>
   */
  namespaces: string[] | undefined;

  /**
   * @public
   * <p>The date and time that the schema was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the schema was last updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store that you want to update</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>A structure that defines the validation settings that want to enable for the
   *             policy store.</p>
   */
  validationSettings: ValidationSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreOutput {
  /**
   * @public
   * <p>The ID of the updated policy store.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the updated policy store.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The date and time that the policy store was originally created.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date and time that the policy store was most recently updated.</p>
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 * <p>The value of an attribute.</p>
 *          <p>Contains information about the runtime context for a request for which an
 *             authorization decision is made. </p>
 *          <p>This data type is used as a member of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ContextDefinition.html">ContextDefinition</a> structure
 *             which is uses as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 */
export type AttributeValue =
  | AttributeValue.BooleanMember
  | AttributeValue.EntityIdentifierMember
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
   * @public
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/syntax-datatypes.html#boolean">Boolean</a> type.</p>
   *          <p>Example: <code>\{"boolean": true\}</code>
   *          </p>
   */
  export interface BooleanMember {
    boolean: boolean;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An attribute value of type <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntityIdentifier.html">EntityIdentifier</a>.</p>
   *          <p>Example: <code>"entityIdentifier": \{ "entityId": "&lt;id&gt;", "entityType":
   *                 "&lt;entity type&gt;"\}</code>
   *          </p>
   */
  export interface EntityIdentifierMember {
    boolean?: never;
    entityIdentifier: EntityIdentifier;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/syntax-datatypes.html#long">Long</a> type.</p>
   *          <p>Example: <code>\{"long": 0\}</code>
   *          </p>
   */
  export interface LongMember {
    boolean?: never;
    entityIdentifier?: never;
    long: number;
    string?: never;
    set?: never;
    record?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/syntax-datatypes.html#string">String</a> type.</p>
   *          <p>Example: <code>\{"string": "abc"\}</code>
   *          </p>
   */
  export interface StringMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string: string;
    set?: never;
    record?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/syntax-datatypes.html#set">Set</a> type.</p>
   *          <p>Example: <code>\{"set": [ \{\} ] \}</code>
   *          </p>
   */
  export interface SetMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set: AttributeValue[];
    record?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An attribute value of <a href="https://docs.cedarpolicy.com/syntax-datatypes.html#record">Record</a> type.</p>
   *          <p>Example: <code>\{"record": \{ "keyName": \{\} \} \}</code>
   *          </p>
   */
  export interface RecordMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record: Record<string, AttributeValue>;
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
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    boolean: (value: boolean) => T;
    entityIdentifier: (value: EntityIdentifier) => T;
    long: (value: number) => T;
    string: (value: string) => T;
    set: (value: AttributeValue[]) => T;
    record: (value: Record<string, AttributeValue>) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AttributeValue, visitor: Visitor<T>): T => {
    if (value.boolean !== undefined) return visitor.boolean(value.boolean);
    if (value.entityIdentifier !== undefined) return visitor.entityIdentifier(value.entityIdentifier);
    if (value.long !== undefined) return visitor.long(value.long);
    if (value.string !== undefined) return visitor.string(value.string);
    if (value.set !== undefined) return visitor.set(value.set);
    if (value.record !== undefined) return visitor.record(value.record);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains additional details about the context of the request. Verified Permissions evaluates this
 *             information in an authorization request as part of the <code>when</code> and
 *                 <code>unless</code> clauses in a policy.</p>
 *          <p>This data type is used as a request parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a> and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 *          <p>Example:
 *                 <code>"context":\{"Context":\{"&lt;KeyName1&gt;":\{"boolean":true\},"&lt;KeyName2&gt;":\{"long":1234\}\}\}</code>
 *          </p>
 */
export type ContextDefinition = ContextDefinition.ContextMapMember | ContextDefinition.$UnknownMember;

/**
 * @public
 */
export namespace ContextDefinition {
  /**
   * @public
   * <p>An list of attributes that are needed to successfully evaluate an authorization
   *             request. Each attribute in this array must include a map of a data type and its
   *             value.</p>
   *          <p>Example:
   *                 <code>"Context":\{"&lt;KeyName1&gt;":\{"boolean":true\},"&lt;KeyName2&gt;":\{"long":1234\}\}</code>
   *          </p>
   */
  export interface ContextMapMember {
    contextMap: Record<string, AttributeValue>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contextMap?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contextMap: (value: Record<string, AttributeValue>) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContextDefinition, visitor: Visitor<T>): T => {
    if (value.contextMap !== undefined) return visitor.contextMap(value.contextMap);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains information about an entity that can be referenced in a Cedar
 *             policy.</p>
 *          <p>This data type is used as one of the fields in the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntitiesDefinition.html">EntitiesDefinition</a>
 *             structure.</p>
 *          <p>
 *             <code>\{ "identifier": \{ "entityType": "Photo", "entityId": "VacationPhoto94.jpg" \},
 *                 "attributes": \{\}, "parents": [ \{ "entityType": "Album", "entityId": "alice_folder" \}
 *                 ] \}</code>
 *          </p>
 */
export interface EntityItem {
  /**
   * @public
   * <p>The identifier of the entity.</p>
   */
  identifier: EntityIdentifier | undefined;

  /**
   * @public
   * <p>A list of attributes for the entity.</p>
   */
  attributes?: Record<string, AttributeValue>;

  /**
   * @public
   * <p>The parents in the hierarchy that contains the entity.</p>
   */
  parents?: EntityIdentifier[];
}

/**
 * @public
 * <p>Contains the list of entities to be considered during an authorization request. This
 *             includes all principals, resources, and actions required to successfully evaluate the
 *             request.</p>
 *          <p>This data type is used as a field in the response parameter for the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html">IsAuthorized</a>
 *             and <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html">IsAuthorizedWithToken</a> operations.</p>
 */
export type EntitiesDefinition = EntitiesDefinition.EntityListMember | EntitiesDefinition.$UnknownMember;

/**
 * @public
 */
export namespace EntitiesDefinition {
  /**
   * @public
   * <p>An array of entities that are needed to successfully evaluate an authorization
   *             request. Each entity in this array must include an identifier for the entity, the
   *             attributes of the entity, and a list of any parent entities.</p>
   */
  export interface EntityListMember {
    entityList: EntityItem[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    entityList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    entityList: (value: EntityItem[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntitiesDefinition, visitor: Visitor<T>): T => {
    if (value.entityList !== undefined) return visitor.entityList(value.entityList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface IsAuthorizedInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make an
   *             authorization decision for the input.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies the principal for which the authorization decision is to be made.</p>
   */
  principal?: EntityIdentifier;

  /**
   * @public
   * <p>Specifies the requested action to be authorized. For example, is the principal
   *             authorized to perform this action on the resource?</p>
   */
  action?: ActionIdentifier;

  /**
   * @public
   * <p>Specifies the resource for which the authorization decision is to be made.</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   */
  context?: ContextDefinition;

  /**
   * @public
   * <p>Specifies the list of resources and principals and their associated attributes that
   *             Verified Permissions can examine when evaluating the policies. </p>
   *          <note>
   *             <p>You can include only principal and resource entities in this parameter; you can't
   *                 include actions. You must specify actions in the schema.</p>
   *          </note>
   */
  entities?: EntitiesDefinition;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenInput {
  /**
   * @public
   * <p>Specifies the ID of the policy store. Policies in this policy store will be used to make an
   *             authorization decision for the input.</p>
   */
  policyStoreId: string | undefined;

  /**
   * @public
   * <p>Specifies an identity token for the principal to be authorized. This token is provided
   *             to you by the identity provider (IdP) associated with the specified identity source. You must
   *             specify either an <code>AccessToken</code> or an <code>IdentityToken</code>, or
   *             both.</p>
   */
  identityToken?: string;

  /**
   * @public
   * <p>Specifies an access token for the principal to be authorized. This token is provided
   *             to you by the identity provider (IdP) associated with the specified identity source. You must
   *             specify either an <code>AccessToken</code>, or an <code>IdentityToken</code>, or
   *             both.</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p>Specifies the requested action to be authorized. Is the specified principal authorized
   *             to perform this action on the specified resource.</p>
   */
  action?: ActionIdentifier;

  /**
   * @public
   * <p>Specifies the resource for which the authorization decision is made. For example, is
   *             the principal allowed to perform the action on the resource?</p>
   */
  resource?: EntityIdentifier;

  /**
   * @public
   * <p>Specifies additional context that can be used to make more granular authorization
   *             decisions.</p>
   */
  context?: ContextDefinition;

  /**
   * @public
   * <p>Specifies the list of resources and their associated attributes that Verified Permissions can examine
   *             when evaluating the policies. </p>
   *          <note>
   *             <p>You can include only resource and action entities in this parameter; you can't
   *                 include principals.</p>
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
   *          </note>
   */
  entities?: EntitiesDefinition;
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
export const CognitoUserPoolConfigurationFilterSensitiveLog = (obj: CognitoUserPoolConfiguration): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => {
  if (obj.cognitoUserPoolConfiguration !== undefined)
    return {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationFilterSensitiveLog(obj.cognitoUserPoolConfiguration),
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
export const EvaluationErrorItemFilterSensitiveLog = (obj: EvaluationErrorItem): any => ({
  ...obj,
});

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
export const GetPolicyOutputFilterSensitiveLog = (obj: GetPolicyOutput): any => ({
  ...obj,
  ...(obj.principal && { principal: EntityIdentifierFilterSensitiveLog(obj.principal) }),
  ...(obj.resource && { resource: EntityIdentifierFilterSensitiveLog(obj.resource) }),
  ...(obj.definition && { definition: PolicyDefinitionDetailFilterSensitiveLog(obj.definition) }),
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
export const UpdateCognitoUserPoolConfigurationFilterSensitiveLog = (obj: UpdateCognitoUserPoolConfiguration): any => ({
  ...obj,
  ...(obj.clientIds && { clientIds: SENSITIVE_STRING }),
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
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContextDefinitionFilterSensitiveLog = (obj: ContextDefinition): any => {
  if (obj.contextMap !== undefined)
    return {
      contextMap: Object.entries(obj.contextMap).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => (
          (acc[key] = AttributeValueFilterSensitiveLog(value)), acc
        ),
        {}
      ),
    };
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
export const EntitiesDefinitionFilterSensitiveLog = (obj: EntitiesDefinition): any => {
  if (obj.entityList !== undefined)
    return { entityList: obj.entityList.map((item) => EntityItemFilterSensitiveLog(item)) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

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
