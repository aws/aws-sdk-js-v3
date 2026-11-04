// smithy-typescript generated code
import type {
  AliasState,
  BatchGetPolicyErrorCode,
  CedarVersion,
  Decision,
  DeletionMode,
  DeletionProtection,
  OpenIdIssuer,
  PolicyEffect,
  PolicyType,
  ResourceType,
  ValidationMode,
} from "./enums";

/**
 * Contains information about an action for a request for which an authorization decision is made.
 *
 * This data type is used as a request parameter to the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
 * Example: `\{ "actionId": "<action name>", "actionType": "Action" \}`
 *
 * @public
 */
export interface ActionIdentifier {
  /**
   * The type of an action.
   *
   * @public
   */
  actionType: string | undefined;

  /**
   * The ID of an action.
   *
   * @public
   */
  actionId: string | undefined;
}

/**
 * Contains the identifier of an entity, including its ID and type.
 *
 * This data type is used as a request parameter for [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html) operation, and as a response parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html), [GetPolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html), and [UpdatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html) operations.
 *
 * Example: `\{"entityId":"string","entityType":"string"\}`
 *
 * @public
 */
export interface EntityIdentifier {
  /**
   * The type of an entity.
   *
   * Example: `"entityType":"typeName"`
   *
   * @public
   */
  entityType: string | undefined;

  /**
   * The identifier of an entity.
   *
   * `"entityId":"identifier"`
   *
   * @public
   */
  entityId: string | undefined;
}

/**
 * Information about a policy that you include in a `BatchGetPolicy` API request.
 *
 * @public
 */
export interface BatchGetPolicyInputItem {
  /**
   * The identifier of the policy store where the policy you want information about is stored.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The identifier of the policy you want information about.
   *
   * You can use the policy name in place of the policy ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `SPEXAMPLEabcdefg111111`
   * - Name: `name/example-policy`
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPolicyInput {
  /**
   * An array of up to 100 policies you want information about.
   *
   * @public
   */
  requests: BatchGetPolicyInputItem[] | undefined;
}

/**
 * Contains the information about an error resulting from a `BatchGetPolicy` API call.
 *
 * @public
 */
export interface BatchGetPolicyErrorItem {
  /**
   * The error code that was returned.
   *
   * @public
   */
  code: BatchGetPolicyErrorCode | undefined;

  /**
   * The identifier of the policy store associated with the failed request.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The identifier of the policy associated with the failed request.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * A detailed error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A structure that contains details about a static policy. It includes the description and policy body.
 *
 * This data type is used within a [PolicyDefinition](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html) structure as part of a request parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) operation.
 *
 * @public
 */
export interface StaticPolicyDefinitionDetail {
  /**
   * A description of the static policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The content of the static policy written in the Cedar policy language.
   *
   * @public
   */
  statement: string | undefined;
}

/**
 * Contains information about a policy that was created by instantiating a policy template.
 *
 * @public
 */
export interface TemplateLinkedPolicyDefinitionDetail {
  /**
   * The unique identifier of the policy template used to create this policy.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the `?principal` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the `?resource` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * A structure that describes a policy definition. It must always have either an `static` or a `templateLinked` element.
 *
 * This data type is used as a response parameter for the [GetPolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html) operation.
 *
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
   * Information about a static policy that wasn't created with a policy template.
   *
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionDetail;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * Information about a template-linked policy that was created by instantiating a policy template.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    static: (value: StaticPolicyDefinitionDetail) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinitionDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a policy returned from a `BatchGetPolicy` API request.
 *
 * @public
 */
export interface BatchGetPolicyOutputItem {
  /**
   * The identifier of the policy store where the policy you want information about is stored.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The identifier of the policy you want information about.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The type of the policy. This is one of the following values:
   *
   * - `STATIC`
   * - `TEMPLATE_LINKED`
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The policy definition of an item in the list of policies returned.
   *
   * @public
   */
  definition: PolicyDefinitionDetail | undefined;

  /**
   * The date and time the policy was created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The name of the policy, if one was assigned when the policy was created or last updated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPolicyOutput {
  /**
   * Information about the policies listed in the request that were successfully returned. These results are returned in the order they were requested.
   *
   * @public
   */
  results: BatchGetPolicyOutputItem[] | undefined;

  /**
   * Information about the policies from the request that resulted in an error. These results are returned in the order they were requested.
   *
   * @public
   */
  errors: BatchGetPolicyErrorItem[] | undefined;
}

/**
 * Details about a field that failed policy validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The path to the specific element that Verified Permissions found to be not valid.
   *
   * @public
   */
  path: string | undefined;

  /**
   * Describes the policy validation error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains information about one of the policies that determined an authorization decision.
 *
 * This data type is used as an element in a response parameter for the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
 * Example: `"determiningPolicies":[\{"policyId":"SPEXAMPLEabcdefg111111"\}]`
 *
 * @public
 */
export interface DeterminingPolicyItem {
  /**
   * The Id of a policy that determined to an authorization decision.
   *
   * Example: `"policyId":"SPEXAMPLEabcdefg111111"`
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * Contains a description of an evaluation error.
 *
 * This data type is a response parameter of the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
 * @public
 */
export interface EvaluationErrorItem {
  /**
   * The error description.
   *
   * @public
   */
  errorDescription: string | undefined;
}

/**
 * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
 *
 * This data type is part of a [CognitoUserPoolConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfiguration.html) structure and is a request parameter in [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * @public
 */
export interface CognitoGroupConfiguration {
  /**
   * The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
 *
 * This data type is part of an [CognitoUserPoolConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfigurationItem.html) structure and is a response parameter to [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * @public
 */
export interface CognitoGroupConfigurationDetail {
  /**
   * The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.
   *
   * @public
   */
  groupEntityType?: string | undefined;
}

/**
 * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
 *
 * This data type is part of an [CognitoUserPoolConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CognitoUserPoolConfigurationDetail.html) structure and is a response parameter to [ListIdentitySources](http://forums.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * @public
 */
export interface CognitoGroupConfigurationItem {
  /**
   * The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.
   *
   * @public
   */
  groupEntityType?: string | undefined;
}

/**
 * The configuration for an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions.
 *
 * This data type part of a [Configuration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html) structure that is used as a parameter to [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * Example:`"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}`
 *
 * @public
 */
export interface CognitoUserPoolConfiguration {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool that contains the identities to be authorized.
   *
   * Example: `"UserPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"`
   *
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * The unique application client IDs that are associated with the specified Amazon Cognito user pool.
   *
   * Example: `"ClientIds": ["&ExampleCogClientId;"]`
   *
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
   *
   * @public
   */
  groupConfiguration?: CognitoGroupConfiguration | undefined;
}

/**
 * The configuration for an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions.
 *
 * This data type is used as a field that is part of an [ConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html) structure that is part of the response to [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * Example:`"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}`
 *
 * @public
 */
export interface CognitoUserPoolConfigurationDetail {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool that contains the identities to be authorized.
   *
   * Example: `"userPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"`
   *
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * The unique application client IDs that are associated with the specified Amazon Cognito user pool.
   *
   * Example: `"clientIds": ["&ExampleCogClientId;"]`
   *
   * @public
   */
  clientIds: string[] | undefined;

  /**
   * The OpenID Connect (OIDC) `issuer` ID of the Amazon Cognito user pool that contains the identities to be authorized.
   *
   * Example: `"issuer": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5"`
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
   *
   * @public
   */
  groupConfiguration?: CognitoGroupConfigurationDetail | undefined;
}

/**
 * The configuration for an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions.
 *
 * This data type is used as a field that is part of the [ConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationItem.html) structure that is part of the response to [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * Example:`"CognitoUserPoolConfiguration":\{"UserPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","ClientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}`
 *
 * @public
 */
export interface CognitoUserPoolConfigurationItem {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool that contains the identities to be authorized.
   *
   * Example: `"userPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"`
   *
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * The unique application client IDs that are associated with the specified Amazon Cognito user pool.
   *
   * Example: `"clientIds": ["&ExampleCogClientId;"]`
   *
   * @public
   */
  clientIds: string[] | undefined;

  /**
   * The OpenID Connect (OIDC) `issuer` ID of the Amazon Cognito user pool that contains the identities to be authorized.
   *
   * Example: `"issuer": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5"`
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
   *
   * @public
   */
  groupConfiguration?: CognitoGroupConfigurationItem | undefined;
}

/**
 * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
 *
 * This data type is part of a [OpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectGroupConfiguration {
  /**
   * The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.
   *
   * @public
   */
  groupClaim: string | undefined;

  /**
   * The policy store entity type that you want to map your users' group claim to. For example, `MyCorp::UserGroup`. A group entity type is an entity that can have a user entity type as a member.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling access token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectAccessTokenConfiguration {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The access token `aud` claim values that you want to accept in your policy store. For example, `https://myapp.example.com, https://myapp2.example.com`.
   *
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID) token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectIdentityTokenConfiguration {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, `1example23456789, 2example10111213`.
   *
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
 *
 * This data type is part of a [OpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
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
   * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example `https://auth.example.com`, and the claim that you want to map to the principal, for example `sub`.
   *
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfiguration;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example `1example23456789`, and the claim that you want to map to the principal, for example `sub`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfiguration) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
 *
 * This data type is part of a [Configuration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html) structure, which is a parameter to [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectConfiguration {
  /**
   * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an `entityIdPrefix` of `MyOIDCProvider`, you can reference principals in your policies in the format `MyCorp::User::MyOIDCProvider|Carlos`.
   *
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
   *
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfiguration | undefined;

  /**
   * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
   *
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelection | undefined;
}

/**
 * Contains configuration information used when creating a new identity source.
 *
 * This data type is used as a request parameter for the [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) operation.
 *
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
   * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a Amazon Cognito user pool and one or more application client IDs.
   *
   * Example: `"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}\}`
   *
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
   *
   * Example:`"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfiguration) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
 *
 * This data type is part of a [OpenIdConnectConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationDetail.html) structure, which is a parameter of [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectGroupConfigurationDetail {
  /**
   * The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.
   *
   * @public
   */
  groupClaim: string | undefined;

  /**
   * The policy store entity type that you want to map your users' group claim to. For example, `MyCorp::UserGroup`. A group entity type is an entity that can have a user entity type as a member.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling access token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelectionDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionDetail.html) structure, which is a parameter of [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectAccessTokenConfigurationDetail {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The access token `aud` claim values that you want to accept in your policy store. For example, `https://myapp.example.com, https://myapp2.example.com`.
   *
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID) token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelectionDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionDetail.html) structure, which is a parameter of [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectIdentityTokenConfigurationDetail {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, `1example23456789, 2example10111213`.
   *
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
 *
 * This data type is part of a [OpenIdConnectConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationDetail.html) structure, which is a parameter of [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
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
   * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example `https://auth.example.com`, and the claim that you want to map to the principal, for example `sub`.
   *
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetail;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example `1example23456789`, and the claim that you want to map to the principal, for example `sub`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfigurationDetail) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfigurationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
 *
 * This data type is part of a [ConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html) structure, which is a parameter to [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html).
 *
 * @public
 */
export interface OpenIdConnectConfigurationDetail {
  /**
   * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an `entityIdPrefix` of `MyOIDCProvider`, you can reference principals in your policies in the format `MyCorp::User::MyOIDCProvider|Carlos`.
   *
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
   *
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfigurationDetail | undefined;

  /**
   * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
   *
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelectionDetail | undefined;
}

/**
 * Contains configuration information about an identity source.
 *
 * This data type is a response parameter to the [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html) operation.
 *
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
   * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a Amazon Cognito user pool, the policy store entity that you want to assign to user groups, and one or more application client IDs.
   *
   * Example: `"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}\}`
   *
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
   *
   * Example:`"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfigurationDetail) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfigurationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
 *
 * This data type is part of a [OpenIdConnectConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationItem.html) structure, which is a parameter of [ListIdentitySourcea](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * @public
 */
export interface OpenIdConnectGroupConfigurationItem {
  /**
   * The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.
   *
   * @public
   */
  groupClaim: string | undefined;

  /**
   * The policy store entity type that you want to map your users' group claim to. For example, `MyCorp::UserGroup`. A group entity type is an entity that can have a user entity type as a member.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling access token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelectionItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionItem.html) structure, which is a parameter of [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * @public
 */
export interface OpenIdConnectAccessTokenConfigurationItem {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The access token `aud` claim values that you want to accept in your policy store. For example, `https://myapp.example.com, https://myapp2.example.com`.
   *
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID) token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [OpenIdConnectTokenSelectionItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelectionItem.html) structure, which is a parameter of [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * @public
 */
export interface OpenIdConnectIdentityTokenConfigurationItem {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, `1example23456789, 2example10111213`.
   *
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
 *
 * This data type is part of a [OpenIdConnectConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfigurationItem.html) structure, which is a parameter of [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
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
   * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example `https://auth.example.com`, and the claim that you want to map to the principal, for example `sub`.
   *
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: OpenIdConnectAccessTokenConfigurationItem;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example `1example23456789`, and the claim that you want to map to the principal, for example `sub`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accessTokenOnly: (value: OpenIdConnectAccessTokenConfigurationItem) => T;
    identityTokenOnly: (value: OpenIdConnectIdentityTokenConfigurationItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
 *
 * This data type is part of a [ConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html) structure, which is a parameter to [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html).
 *
 * @public
 */
export interface OpenIdConnectConfigurationItem {
  /**
   * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an `entityIdPrefix` of `MyOIDCProvider`, you can reference principals in your policies in the format `MyCorp::User::MyOIDCProvider|Carlos`.
   *
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
   *
   * @public
   */
  groupConfiguration?: OpenIdConnectGroupConfigurationItem | undefined;

  /**
   * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
   *
   * @public
   */
  tokenSelection: OpenIdConnectTokenSelectionItem | undefined;
}

/**
 * Contains configuration information about an identity source.
 *
 * This data type is a response parameter to the [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html) operation.
 *
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
   * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a Amazon Cognito user pool, the policy store entity that you want to assign to user groups, and one or more application client IDs.
   *
   * Example: `"configuration":\{"cognitoUserPoolConfiguration":\{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": \{"groupEntityType": "MyCorp::Group"\}\}\}`
   *
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItem;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
   *
   * Example:`"configuration":\{"openIdConnectConfiguration":\{"issuer":"https://auth.example.com","tokenSelection":\{"accessTokenOnly":\{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"\}\},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":\{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"\}\}\}`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: CognitoUserPoolConfigurationItem) => T;
    openIdConnectConfiguration: (value: OpenIdConnectConfigurationItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a resource conflict.
 *
 * @public
 */
export interface ResourceConflict {
  /**
   * The unique identifier of the resource involved in a conflict.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource involved in a conflict.
   *
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceInput {
  /**
   * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `ConflictException` error.
   *
   * Verified Permissions recognizes a `ClientToken` for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of `ClientToken`.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the ID of the policy store in which you want to store this identity source. Only policies and requests made using this policy store can reference identities from the identity provider configured in the new identity source.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the details required to communicate with the identity provider (IdP) associated with this identity source.
   *
   * @public
   */
  configuration: Configuration | undefined;

  /**
   * Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
   *
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceOutput {
  /**
   * The date and time the identity source was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The unique ID of the new identity source.
   *
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * The date and time the identity source was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The ID of the policy store that contains the identity source.
   *
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * Contains information about a static policy.
 *
 * This data type is used as a field that is part of the [PolicyDefinitionDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinitionDetail.html) type.
 *
 * @public
 */
export interface StaticPolicyDefinition {
  /**
   * The description of the static policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The policy content of the static policy, written in the Cedar policy language.
   *
   * @public
   */
  statement: string | undefined;
}

/**
 * Contains information about a policy created by instantiating a policy template.
 *
 * @public
 */
export interface TemplateLinkedPolicyDefinition {
  /**
   * The unique identifier of the policy template used to create this policy.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the `?principal` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the `?resource` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * A structure that contains the details for a Cedar policy definition. It includes the policy type, a description, and a policy body. This is a top level data type used to create a policy.
 *
 * This data type is used as a request parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) operation. This structure must always have either an `static` or a `templateLinked` element.
 *
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
   * A structure that describes a static policy. An static policy doesn't use a template or allow placeholders for entities.
   *
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinition;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * A structure that describes a policy that was instantiated from a template. The template can specify placeholders for `principal` and `resource`. When you use [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) to create a policy from a template, you specify the exact principal and resource to use for the instantiated policy.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    static: (value: StaticPolicyDefinition) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePolicyInput {
  /**
   * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `ConflictException` error.
   *
   * Verified Permissions recognizes a `ClientToken` for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of `ClientToken`.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the `PolicyStoreId` of the policy store you want to store the policy in.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * A structure that specifies the policy type and content to use for the new policy. You must include either a static or a templateLinked element. The policy content must be written in the Cedar policy language.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * Specifies a name for the policy that is unique among all policies within the policy store. You can use the name in place of the policy ID in API operations that reference the policy. The name must be prefixed with `name/`.
   *
   * If you specify a name that is already associated with another policy in the policy store, you receive a `ConflictException` error.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyOutput {
  /**
   * The ID of the policy store that contains the new policy.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The unique ID of the new policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The policy type of the new policy.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The principal specified in the new policy's scope. This response element isn't present when `principal` isn't specified in the policy content.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource specified in the new policy's scope. This response element isn't present when the `resource` isn't specified in the policy content.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * The action that a policy permits or forbids. For example, `\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"\}]\}`.
   *
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * The date and time the policy was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy was last updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The effect of the decision that a policy returns to an authorization request. For example, `"effect": "Permit"`.
   *
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * A structure that contains the KMS encryption configuration for the policy store. The encryption settings determine what customer-managed KMS key will be used to encrypt all resources within the policy store, and any user-defined context key-value pairs to append during encryption processes.
 *
 * This data type is used as a field that is part of the [EncryptionSettings](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EncryptionSettings.html) type.
 *
 * @public
 */
export interface KmsEncryptionSettings {
  /**
   * The customer-managed KMS key [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html), alias or ID to be used for encryption processes.
   *
   * Users can provide the full KMS key ARN, a KMS key alias, or a KMS key ID, but it will be mapped to the full KMS key ARN after policy store creation, and referenced when encrypting child resources.
   *
   * @public
   */
  key: string | undefined;

  /**
   * User-defined, additional context to be added to encryption processes.
   *
   * @public
   */
  encryptionContext?: Record<string, string> | undefined;
}

/**
 * A structure that contains the encryption configuration for the policy store and child resources.
 *
 * This data type is used as a request parameter in the [CreatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html) operation.
 *
 * @public
 */
export type EncryptionSettings =
  | EncryptionSettings.DefaultMember
  | EncryptionSettings.KmsEncryptionSettingsMember
  | EncryptionSettings.$UnknownMember;

/**
 * @public
 */
export namespace EncryptionSettings {
  /**
   * The KMS encryption settings for this policy store to encrypt data with. It will contain the customer-managed KMS key, and a user-defined encryption context.
   *
   * @public
   */
  export interface KmsEncryptionSettingsMember {
    kmsEncryptionSettings: KmsEncryptionSettings;
    default?: never;
    $unknown?: never;
  }

  /**
   * This is the default encryption setting. The policy store uses an Amazon Web Services owned key for encrypting data.
   *
   * @public
   */
  export interface DefaultMember {
    kmsEncryptionSettings?: never;
    default: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kmsEncryptionSettings?: never;
    default?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kmsEncryptionSettings: (value: KmsEncryptionSettings) => T;
    default: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that contains Cedar policy validation settings for the policy store. The validation mode determines which validation failures that Cedar considers serious enough to block acceptance of a new or edited static policy or policy template.
 *
 * This data type is used as a request parameter in the [CreatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html) and [UpdatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html) operations.
 *
 * @public
 */
export interface ValidationSettings {
  /**
   * The validation mode currently configured for this policy store. The valid values are:
   *
   * - **OFF** – Neither Verified Permissions nor Cedar perform any validation on policies. No validation errors are reported by either service.
   * - **STRICT** – Requires a schema to be present in the policy store. Cedar performs validation on all submitted new or updated static policies and policy templates. Any that fail validation are rejected and Cedar doesn't store them in the policy store.
   *
   * > **Important:**
   * >
   * > If `Mode=STRICT` and the policy store doesn't contain a schema, Verified Permissions rejects all static policies and policy templates because there is no schema to validate against.
   * >
   * > To submit a static policy or policy template without a schema, you must turn off validation.
   *
   * @public
   */
  mode: ValidationMode | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreInput {
  /**
   * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `ConflictException` error.
   *
   * Verified Permissions recognizes a `ClientToken` for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of `ClientToken`.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the validation setting for this policy store.
   *
   * Currently, the only valid and required value is `Mode`.
   *
   * > **Important:** We recommend that you turn on `STRICT` mode only after you define a schema. If a schema doesn't exist, then `STRICT` mode causes any policy to fail validation, and Verified Permissions rejects the policy. You can turn off validation by using the [UpdatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore). Then, when you have a schema defined, use [UpdatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore) again to turn validation back on.
   *
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * Descriptive text that you can provide to help with identification of the current policy store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.
   *
   * The default state is `DISABLED`.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Specifies the encryption settings used to encrypt the policy store and their child resources. Allows for the ability to use a customer owned KMS key for encryption of data.
   *
   * This is an optional field to be used when providing a customer-managed KMS key for encryption.
   *
   * @public
   */
  encryptionSettings?: EncryptionSettings | undefined;

  /**
   * The list of key-value pairs to associate with the policy store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreOutput {
  /**
   * The unique ID of the new policy store.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new policy store.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time the policy store was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy store was last updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreAliasInput {
  /**
   * Specifies the name of the policy store alias to create. The name must be unique within your Amazon Web Services account and Amazon Web Services Region.
   *
   * > **Note:** The alias name must always be prefixed with `policy-store-alias/`.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * Specifies the ID of the policy store to associate with the alias.
   *
   * > **Note:** The associated policy store must be specified using its ID. The alias name cannot be used.
   *
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyStoreAliasOutput {
  /**
   * The name of the policy store alias.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * The ID of the policy store associated with the alias.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy store alias.
   *
   * @public
   */
  aliasArn: string | undefined;

  /**
   * The date and time the policy store alias was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateInput {
  /**
   * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value.](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `ConflictException` error.
   *
   * Verified Permissions recognizes a `ClientToken` for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of `ClientToken`.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the policy store in which to create the policy template.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies a description for the policy template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
   *
   * @public
   */
  statement: string | undefined;

  /**
   * Specifies a name for the policy template that is unique among all policy templates within the policy store. You can use the name in place of the policy template ID in API operations that reference the policy template. The name must be prefixed with `name/`.
   *
   * If you specify a name that is already associated with another policy template in the policy store, you receive a `ConflictException` error.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyTemplateOutput {
  /**
   * The ID of the policy store that contains the policy template.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The unique ID of the new policy template.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The date and time the policy template was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy template was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIdentitySourceInput {
  /**
   * Specifies the ID of the policy store that contains the identity source that you want to delete.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the identity source that you want to delete.
   *
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
   * Specifies the ID of the policy store that contains the policy that you want to delete.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy that you want to delete.
   *
   * You can use the policy name in place of the policy ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `SPEXAMPLEabcdefg111111`
   * - Name: `name/example-policy`
   *
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
   * Specifies the ID of the policy store that you want to delete.
   *
   * > **Note:** To specify a policy store, the alias name cannot be used. Only the ID can be used.
   *
   * @public
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
export interface DeletePolicyStoreAliasInput {
  /**
   * Specifies the name of the policy store alias that you want to delete.
   *
   * > **Note:** The alias name must always be prefixed with `policy-store-alias/`.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * Specifies the deletion mode for the policy store alias. The valid values are:
   *
   * - **SoftDelete** – The policy store alias enters the `PendingDeletion` state. This is the default behavior when no `deletionMode` is specified.
   * - **HardDelete** – The policy store alias is immediately deleted, bypassing the `PendingDeletion` state.
   *
   * @public
   */
  deletionMode?: DeletionMode | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStoreAliasOutput {}

/**
 * @public
 */
export interface DeletePolicyTemplateInput {
  /**
   * Specifies the ID of the policy store that contains the policy template that you want to delete.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy template that you want to delete.
   *
   * You can use the policy template name in place of the policy template ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `PTEXAMPLEabcdefg111111`
   * - Name: `name/example-policy-template`
   *
   * @public
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyTemplateOutput {}

/**
 * A structure that contains the KMS encryption configuration for the policy store. The encryption state shows what customer-managed KMS key is being used to encrypt all resources within the policy store, and any user-defined context key-value pairs added during encryption processes.
 *
 * This data type is used as a field that is part of the [EncryptionState](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EncryptionState.html) type.
 *
 * @public
 */
export interface KmsEncryptionState {
  /**
   * The customer-managed KMS key [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) being used for encryption processes.
   *
   * @public
   */
  key: string | undefined;

  /**
   * User-defined, additional context added to encryption processes.
   *
   * @public
   */
  encryptionContext: Record<string, string> | undefined;
}

/**
 * A structure that contains the encryption configuration for the policy store and child resources.
 *
 * This data type is used as a response parameter field for the [GetPolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicyStore.html) operation.
 *
 * @public
 */
export type EncryptionState =
  | EncryptionState.DefaultMember
  | EncryptionState.KmsEncryptionStateMember
  | EncryptionState.$UnknownMember;

/**
 * @public
 */
export namespace EncryptionState {
  /**
   * The KMS encryption settings currently configured for this policy store to encrypt data with. It contains the customer-managed KMS key, and a user-defined encryption context.
   *
   * @public
   */
  export interface KmsEncryptionStateMember {
    kmsEncryptionState: KmsEncryptionState;
    default?: never;
    $unknown?: never;
  }

  /**
   * This is the default encryption state. The policy store is encrypted using an Amazon Web Services owned key.
   *
   * @public
   */
  export interface DefaultMember {
    kmsEncryptionState?: never;
    default: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kmsEncryptionState?: never;
    default?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kmsEncryptionState: (value: KmsEncryptionState) => T;
    default: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a principal or resource that can be referenced in a Cedar policy.
 *
 * This data type is used as part of the [PolicyFilter](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyFilter.html) structure that is used as a request parameter for the [ListPolicies](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html) operation..
 *
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
   * Used to indicate that a principal or resource is not specified. This can be used to search for policies that are not associated with a specific principal or resource.
   *
   * @public
   */
  export interface UnspecifiedMember {
    unspecified: boolean;
    identifier?: never;
    $unknown?: never;
  }

  /**
   * The identifier of the entity. It can consist of either an EntityType and EntityId, a principal, or a resource.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    unspecified: (value: boolean) => T;
    identifier: (value: EntityIdentifier) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetIdentitySourceInput {
  /**
   * Specifies the ID of the policy store that contains the identity source you want information about.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the identity source you want information about.
   *
   * @public
   */
  identitySourceId: string | undefined;
}

/**
 * A structure that contains configuration of the identity source.
 *
 * This data type was a response parameter for the [GetIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html) operation. Replaced by [ConfigurationDetail](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationDetail.html).
 *
 * @deprecated This shape has been replaced by ConfigurationDetail.
 * @public
 */
export interface IdentitySourceDetails {
  /**
   * The application client IDs associated with the specified Amazon Cognito user pool that are enabled for this identity source.
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.clientIds.
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.userPoolArn.
   * @public
   */
  userPoolArn?: string | undefined;

  /**
   * The well-known URL that points to this user pool's OIDC discovery endpoint. This is a URL string in the following format. This URL replaces the placeholders for both the Amazon Web Services Region and the user pool identifier with those appropriate for this user pool.
   *
   * `https://cognito-idp.<region>.amazonaws.com/<user-pool-id>/.well-known/openid-configuration`
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.issuer.
   * @public
   */
  discoveryUrl?: string | undefined;

  /**
   * A string that identifies the type of OIDC service represented by this identity source.
   *
   * At this time, the only valid value is `cognito`.
   *
   * @deprecated This attribute has been replaced by configuration.
   * @public
   */
  openIdIssuer?: OpenIdIssuer | undefined;
}

/**
 * @public
 */
export interface GetIdentitySourceOutput {
  /**
   * The date and time that the identity source was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * A structure that describes the configuration of the identity source.
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.
   * @public
   */
  details?: IdentitySourceDetails | undefined;

  /**
   * The ID of the identity source.
   *
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * The date and time that the identity source was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The ID of the policy store that contains the identity source.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The data type of principals generated for identities authenticated by this identity source.
   *
   * @public
   */
  principalEntityType: string | undefined;

  /**
   * Contains configuration information about an identity source.
   *
   * @public
   */
  configuration?: ConfigurationDetail | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * Specifies the ID of the policy store that contains the policy that you want information about.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy you want information about.
   *
   * You can use the policy name in place of the policy ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `SPEXAMPLEabcdefg111111`
   * - Name: `name/example-policy`
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * The ID of the policy store that contains the policy that you want information about.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The unique ID of the policy that you want information about.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The type of the policy.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The principal specified in the policy's scope. This element isn't included in the response when `Principal` isn't present in the policy content.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource specified in the policy's scope. This element isn't included in the response when `Resource` isn't present in the policy content.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * The action that a policy permits or forbids. For example, `\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"\}]\}`.
   *
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * The definition of the requested policy.
   *
   * @public
   */
  definition: PolicyDefinitionDetail | undefined;

  /**
   * The date and time that the policy was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy was last updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The effect of the decision that a policy returns to an authorization request. For example, `"effect": "Permit"`.
   *
   * @public
   */
  effect?: PolicyEffect | undefined;

  /**
   * The name of the policy, if one was assigned when the policy was created or last updated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreInput {
  /**
   * Specifies the policy store that you want information about.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies whether to return the tags that are attached to the policy store. If this parameter is included in the API call, the tags are returned, otherwise they are not returned.
   *
   * > **Note:** If this parameter is included in the API call but there are no tags attached to the policy store, the `tags` response parameter is omitted from the response.
   *
   * @public
   */
  tags?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreOutput {
  /**
   * The ID of the policy store;
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy store.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current validation settings for the policy store.
   *
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * The date and time that the policy store was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy store was last updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * Descriptive text that you can provide to help with identification of the current policy store.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.
   *
   * The default state is `DISABLED`.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * A structure that contains the encryption configuration for the policy store.
   *
   * @public
   */
  encryptionState?: EncryptionState | undefined;

  /**
   * The version of the Cedar language used with policies, policy templates, and schemas in this policy store. For more information, see [Amazon Verified Permissions upgrade to Cedar v4 FAQ](https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/cedar4-faq.html).
   *
   * @public
   */
  cedarVersion?: CedarVersion | undefined;

  /**
   * The list of tags associated with the policy store.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreAliasInput {
  /**
   * Specifies the name of the policy store alias that you want information about.
   *
   * > **Note:** The alias name must always be prefixed with `policy-store-alias/`.
   *
   * @public
   */
  aliasName: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyStoreAliasOutput {
  /**
   * The name of the policy store alias.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * The ID of the policy store associated with the alias.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy store alias.
   *
   * @public
   */
  aliasArn: string | undefined;

  /**
   * The date and time the policy store alias was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The state of the policy store alias. Policy Store Aliases in the Active state can be used normally. When a policy store alias is deleted, it enters the PendingDeletion state. Policy Store Aliases in the PendingDeletion cannot be used, and creating a policy store alias with the same alias name will fail.
   *
   * @public
   */
  state: AliasState | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateInput {
  /**
   * Specifies the ID of the policy store that contains the policy template that you want information about.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy template that you want information about.
   *
   * You can use the policy template name in place of the policy template ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `PTEXAMPLEabcdefg111111`
   * - Name: `name/example-policy-template`
   *
   * @public
   */
  policyTemplateId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyTemplateOutput {
  /**
   * The ID of the policy store that contains the policy template.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The ID of the policy template.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The description of the policy template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The content of the body of the policy template written in the Cedar policy language.
   *
   * @public
   */
  statement: string | undefined;

  /**
   * The date and time that the policy template was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy template was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The name of the policy template, if one was assigned when the policy template was created or last updated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * Specifies the ID of the policy store that contains the schema.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * The ID of the policy store that contains the schema.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The body of the schema, written in Cedar schema JSON.
   *
   * @public
   */
  schema: string | undefined;

  /**
   * The date and time that the schema was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the schema was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The namespaces of the entities referenced by this schema.
   *
   * @public
   */
  namespaces?: string[] | undefined;
}

/**
 * A structure that defines characteristics of an identity source that you can use to filter.
 *
 * This data type is a request parameter for the [ListIdentityStores](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentityStores.html) operation.
 *
 * @public
 */
export interface IdentitySourceFilter {
  /**
   * The Cedar entity type of the principals returned by the identity provider (IdP) associated with this identity source.
   *
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesInput {
  /**
   * Specifies the ID of the policy store that contains the identity sources that you want to list.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * If you do not specify this parameter, the operation defaults to 10 identity sources per response. You can specify a maximum of 50 identity sources per response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies characteristics of an identity source that you can use to limit the output to matching identity sources.
   *
   * @public
   */
  filters?: IdentitySourceFilter[] | undefined;
}

/**
 * A structure that contains configuration of the identity source.
 *
 * This data type was a response parameter for the [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html) operation. Replaced by [ConfigurationItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ConfigurationItem.html).
 *
 * @deprecated This shape has been replaced by ConfigurationItem.
 * @public
 */
export interface IdentitySourceItemDetails {
  /**
   * The application client IDs associated with the specified Amazon Cognito user pool that are enabled for this identity source.
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.clientIds.
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * The Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.userPoolArn.
   * @public
   */
  userPoolArn?: string | undefined;

  /**
   * The well-known URL that points to this user pool's OIDC discovery endpoint. This is a URL string in the following format. This URL replaces the placeholders for both the Amazon Web Services Region and the user pool identifier with those appropriate for this user pool.
   *
   * `https://cognito-idp.<region>.amazonaws.com/<user-pool-id>/.well-known/openid-configuration`
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.issuer.
   * @public
   */
  discoveryUrl?: string | undefined;

  /**
   * A string that identifies the type of OIDC service represented by this identity source.
   *
   * At this time, the only valid value is `cognito`.
   *
   * @deprecated This attribute has been replaced by configuration.
   * @public
   */
  openIdIssuer?: OpenIdIssuer | undefined;
}

/**
 * A structure that defines an identity source.
 *
 * This data type is a response parameter to the [ListIdentitySources](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html) operation.
 *
 * @public
 */
export interface IdentitySourceItem {
  /**
   * The date and time the identity source was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * A structure that contains the details of the associated identity provider (IdP).
   *
   * @deprecated This attribute has been replaced by configuration.cognitoUserPoolConfiguration.
   * @public
   */
  details?: IdentitySourceItemDetails | undefined;

  /**
   * The unique identifier of the identity source.
   *
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * The date and time the identity source was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The identifier of the policy store that contains the identity source.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Cedar entity type of the principals returned from the IdP associated with this identity source.
   *
   * @public
   */
  principalEntityType: string | undefined;

  /**
   * Contains configuration information about an identity source.
   *
   * @public
   */
  configuration?: ConfigurationItem | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesOutput {
  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of identity sources stored in the specified policy store.
   *
   * @public
   */
  identitySources: IdentitySourceItem[] | undefined;
}

/**
 * The user group entities from an Amazon Cognito user pool identity source.
 *
 * @public
 */
export interface UpdateCognitoGroupConfiguration {
  /**
   * The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * Contains configuration details of a Amazon Cognito user pool for use with an identity source.
 *
 * @public
 */
export interface UpdateCognitoUserPoolConfiguration {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool associated with this identity source.
   *
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * The client ID of an app client that is configured for the specified Amazon Cognito user pool.
   *
   * @public
   */
  clientIds?: string[] | undefined;

  /**
   * The configuration of the user groups from an Amazon Cognito user pool identity source.
   *
   * @public
   */
  groupConfiguration?: UpdateCognitoGroupConfiguration | undefined;
}

/**
 * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
 *
 * This data type is part of a [UpdateOpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectConfiguration.html) structure, which is a parameter to [UpdateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html).
 *
 * @public
 */
export interface UpdateOpenIdConnectGroupConfiguration {
  /**
   * The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.
   *
   * @public
   */
  groupClaim: string | undefined;

  /**
   * The policy store entity type that you want to map your users' group claim to. For example, `MyCorp::UserGroup`. A group entity type is an entity that can have a user entity type as a member.
   *
   * @public
   */
  groupEntityType: string | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling access token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [UpdateOpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectTokenSelection.html) structure, which is a parameter to [UpdateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html).
 *
 * @public
 */
export interface UpdateOpenIdConnectAccessTokenConfiguration {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The access token `aud` claim values that you want to accept in your policy store. For example, `https://myapp.example.com, https://myapp2.example.com`.
   *
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID) token claims. Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
 *
 * This data type is part of a [UpdateOpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectTokenSelection.html) structure, which is a parameter to [UpdateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html).
 *
 * @public
 */
export interface UpdateOpenIdConnectIdentityTokenConfiguration {
  /**
   * The claim that determines the principal in OIDC access tokens. For example, `sub`.
   *
   * @public
   */
  principalIdClaim?: string | undefined;

  /**
   * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, `1example23456789, 2example10111213`.
   *
   * @public
   */
  clientIds?: string[] | undefined;
}

/**
 * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
 *
 * This data type is part of a [UpdateOpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateOpenIdConnectConfiguration.html) structure, which is a parameter to [UpdateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html).
 *
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
   * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example `https://auth.example.com`, and the claim that you want to map to the principal, for example `sub`.
   *
   * @public
   */
  export interface AccessTokenOnlyMember {
    accessTokenOnly: UpdateOpenIdConnectAccessTokenConfiguration;
    identityTokenOnly?: never;
    $unknown?: never;
  }

  /**
   * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example `1example23456789`, and the claim that you want to map to the principal, for example `sub`.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accessTokenOnly: (value: UpdateOpenIdConnectAccessTokenConfiguration) => T;
    identityTokenOnly: (value: UpdateOpenIdConnectIdentityTokenConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
 *
 * This data type is part of a [UpdateConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateConfiguration.html) structure, which is a parameter to [UpdateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html).
 *
 * @public
 */
export interface UpdateOpenIdConnectConfiguration {
  /**
   * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration`.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an `entityIdPrefix` of `MyOIDCProvider`, you can reference principals in your policies in the format `MyCorp::User::MyOIDCProvider|Carlos`.
   *
   * @public
   */
  entityIdPrefix?: string | undefined;

  /**
   * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup`.
   *
   * @public
   */
  groupConfiguration?: UpdateOpenIdConnectGroupConfiguration | undefined;

  /**
   * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
   *
   * @public
   */
  tokenSelection: UpdateOpenIdConnectTokenSelection | undefined;
}

/**
 * Contains an update to replace the configuration in an existing identity source.
 *
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
   * Contains configuration details of a Amazon Cognito user pool.
   *
   * @public
   */
  export interface CognitoUserPoolConfigurationMember {
    cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration;
    openIdConnectConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cognitoUserPoolConfiguration: (value: UpdateCognitoUserPoolConfiguration) => T;
    openIdConnectConfiguration: (value: UpdateOpenIdConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateIdentitySourceInput {
  /**
   * Specifies the ID of the policy store that contains the identity source that you want to update.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the identity source that you want to update.
   *
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * Specifies the details required to communicate with the identity provider (IdP) associated with this identity source.
   *
   * @public
   */
  updateConfiguration: UpdateConfiguration | undefined;

  /**
   * Specifies the data type of principals generated for identities authenticated by the identity source.
   *
   * @public
   */
  principalEntityType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentitySourceOutput {
  /**
   * The date and time that the updated identity source was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The ID of the updated identity source.
   *
   * @public
   */
  identitySourceId: string | undefined;

  /**
   * The date and time that the identity source was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The ID of the policy store that contains the updated identity source.
   *
   * @public
   */
  policyStoreId: string | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedOutput {
  /**
   * An authorization decision that indicates if the authorization request should be allowed or denied.
   *
   * @public
   */
  decision: Decision | undefined;

  /**
   * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
   *
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * Errors that occurred while making an authorization decision, for example, a policy references an Entity or entity Attribute that does not exist in the slice.
   *
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenOutput {
  /**
   * An authorization decision that indicates if the authorization request should be allowed or denied.
   *
   * @public
   */
  decision: Decision | undefined;

  /**
   * The list of determining policies used to make the authorization decision. For example, if there are multiple matching policies, where at least one is a forbid policy, then because forbid always overrides permit the forbid policies are the determining policies. If all matching policies are permit policies, then those policies are the determining policies. When no policies match and the response is the default DENY, there are no determining policies.
   *
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * Errors that occurred while making an authorization decision. For example, a policy references an entity or entity attribute that does not exist in the slice.
   *
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;

  /**
   * The identifier of the principal in the ID or access token.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;
}

/**
 * Contains information about a filter to refine policies returned in a query.
 *
 * This data type is used as a response parameter for the [ListPolicies](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html) operation.
 *
 * @public
 */
export interface PolicyFilter {
  /**
   * Filters the output to only policies that reference the specified principal.
   *
   * @public
   */
  principal?: EntityReference | undefined;

  /**
   * Filters the output to only policies that reference the specified resource.
   *
   * @public
   */
  resource?: EntityReference | undefined;

  /**
   * Filters the output to only policies of the specified type.
   *
   * @public
   */
  policyType?: PolicyType | undefined;

  /**
   * Filters the output to only template-linked policies that were instantiated from the specified policy template.
   *
   * @public
   */
  policyTemplateId?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesInput {
  /**
   * Specifies the ID of the policy store you want to list policies from.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * If you do not specify this parameter, the operation defaults to 10 policies per response. You can specify a maximum of 50 policies per response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies a filter that limits the response to only policies that match the specified criteria. For example, you list only the policies that reference a specified principal.
   *
   * @public
   */
  filter?: PolicyFilter | undefined;
}

/**
 * A structure that contains details about a static policy. It includes the description and policy statement.
 *
 * This data type is used within a [PolicyDefinition](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinition.html) structure as part of a request parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) operation.
 *
 * @public
 */
export interface StaticPolicyDefinitionItem {
  /**
   * A description of the static policy.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Contains information about a policy created by instantiating a policy template.
 *
 * @public
 */
export interface TemplateLinkedPolicyDefinitionItem {
  /**
   * The unique identifier of the policy template used to create this policy.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the `?principal` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the `?resource` placeholder in the policy template when it evaluates an authorization request.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;
}

/**
 * A structure that describes a [PolicyDefinintion](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PolicyDefinintion.html). It will always have either an `StaticPolicy` or a `TemplateLinkedPolicy` element.
 *
 * This data type is used as a response parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) and [ListPolicies](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html) operations.
 *
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
   * Information about a static policy that wasn't created with a policy template.
   *
   * @public
   */
  export interface StaticMember {
    static: StaticPolicyDefinitionItem;
    templateLinked?: never;
    $unknown?: never;
  }

  /**
   * Information about a template-linked policy that was created by instantiating a policy template.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    static: (value: StaticPolicyDefinitionItem) => T;
    templateLinked: (value: TemplateLinkedPolicyDefinitionItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a policy.
 *
 * This data type is used as a response parameter for the [ListPolicies](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html) operation.
 *
 * @public
 */
export interface PolicyItem {
  /**
   * The identifier of the policy store where the policy you want information about is stored.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The identifier of the policy you want information about.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The type of the policy. This is one of the following values:
   *
   * - `STATIC`
   * - `TEMPLATE_LINKED`
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The principal associated with the policy.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource associated with the policy.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * The action that a policy permits or forbids. For example, `\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"\}]\}`.
   *
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * The policy definition of an item in the list of policies returned.
   *
   * @public
   */
  definition: PolicyDefinitionItem | undefined;

  /**
   * The date and time the policy was created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The effect of the decision that a policy returns to an authorization request. For example, `"effect": "Permit"`.
   *
   * @public
   */
  effect?: PolicyEffect | undefined;

  /**
   * The name of the policy, if one was assigned when the policy was created or last updated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesOutput {
  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Lists all policies that are available in the specified policy store.
   *
   * @public
   */
  policies: PolicyItem[] | undefined;
}

/**
 * Contains filters for the `ListPolicyStoreAliases` operation.
 *
 * @public
 */
export interface PolicyStoreAliasFilter {
  /**
   * The ID of the policy store to filter by. Only policy store aliases associated with this policy store are returned.
   *
   * @public
   */
  policyStoreId?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoreAliasesInput {
  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * If you do not specify this parameter, the operation defaults to 5 policy store aliases per response. You can specify a maximum of 50 policy store aliases per response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies a filter to narrow the results. You can filter by `policyStoreId` to list only the policy store aliases associated with a specific policy store.
   *
   * @public
   */
  filter?: PolicyStoreAliasFilter | undefined;
}

/**
 * Contains information about a policy store alias.
 *
 * This data type is used as a response parameter for the [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html) operation.
 *
 * @public
 */
export interface PolicyStoreAliasItem {
  /**
   * The name of the policy store alias.
   *
   * @public
   */
  aliasName: string | undefined;

  /**
   * The ID of the policy store associated with the alias.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy store alias.
   *
   * @public
   */
  aliasArn: string | undefined;

  /**
   * The date and time the policy store alias was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The state of the policy store alias. Policy Store Aliases in the Active state can be used normally. When a policy store alias is deleted, it enters the PendingDeletion state. Policy Store Aliases in the PendingDeletion state cannot be used, and creating a policy store alias with the same alias name will fail.
   *
   * @public
   */
  state: AliasState | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoreAliasesOutput {
  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of policy store aliases in the account.
   *
   * @public
   */
  policyStoreAliases: PolicyStoreAliasItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresInput {
  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * If you do not specify this parameter, the operation defaults to 10 policy stores per response. You can specify a maximum of 50 policy stores per response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about a policy store.
 *
 * This data type is used as a response parameter for the [ListPolicyStores](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html) operation.
 *
 * @public
 */
export interface PolicyStoreItem {
  /**
   * The unique identifier of the policy store.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy store.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time the policy was created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time the policy store was most recently updated.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * Descriptive text that you can provide to help with identification of the current policy store.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyStoresOutput {
  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of policy stores in the account.
   *
   * @public
   */
  policyStores: PolicyStoreItem[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesInput {
  /**
   * Specifies the ID of the policy store that contains the policy templates you want to list.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies that you want to receive the next page of results. Valid only if you received a `NextToken` response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's `NextToken` response to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the `NextToken` response element is returned with a value (not null). Include the specified value as the `NextToken` request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * If you do not specify this parameter, the operation defaults to 10 policy templates per response. You can specify a maximum of 50 policy templates per response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains details about a policy template
 *
 * This data type is used as a response parameter for the [ListPolicyTemplates](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html) operation.
 *
 * @public
 */
export interface PolicyTemplateItem {
  /**
   * The unique identifier of the policy store that contains the template.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The unique identifier of the policy template.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The description attached to the policy template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time that the policy template was created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy template was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The name of the policy template, if one was assigned when the policy template was created or last updated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyTemplatesOutput {
  /**
   * If present, this value indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`. This indicates that this is the last page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of the policy templates in the specified policy store.
   *
   * @public
   */
  policyTemplates: PolicyTemplateItem[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource for which you want to view tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about an update to a static policy.
 *
 * @public
 */
export interface UpdateStaticPolicyDefinition {
  /**
   * Specifies the description to be added to or replaced on the static policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies the Cedar policy language text to be added to or replaced on the static policy.
   *
   * > **Important:**
   * >
   * > You can change only the following elements from the original content:
   * >
   * > - The `action` referenced by the policy.
   * > - Any conditional clauses, such as `when` or `unless` clauses.
   * >
   * > You **can't** change the following elements:
   * >
   * > - Changing from `StaticPolicy` to `TemplateLinkedPolicy`.
   * > - The effect (`permit` or `forbid`) of the policy.
   * > - The `principal` referenced by the policy.
   * > - The `resource` referenced by the policy.
   *
   * @public
   */
  statement: string | undefined;
}

/**
 * Contains information about updates to be applied to a policy.
 *
 * This data type is used as a request parameter in the [UpdatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html) operation.
 *
 * @public
 */
export type UpdatePolicyDefinition =
  | UpdatePolicyDefinition.StaticMember
  | UpdatePolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace UpdatePolicyDefinition {
  /**
   * Contains details about the updates to be applied to a static policy.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    static: (value: UpdateStaticPolicyDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdatePolicyInput {
  /**
   * Specifies the ID of the policy store that contains the policy that you want to update.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy that you want to update. To find this value, you can use [ListPolicies](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html).
   *
   * You can use the policy name in place of the policy ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `SPEXAMPLEabcdefg111111`
   * - Name: `name/example-policy`
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * Specifies the updated policy content that you want to replace on the specified policy. The content must be valid Cedar policy language text.
   *
   * If you don't specify this parameter, the existing policy definition remains unchanged.
   *
   * You can change only the following elements from the policy definition:
   *
   * - The `action` referenced by the policy.
   * - Any conditional clauses, such as `when` or `unless` clauses.
   *
   * You **can't** change the following elements:
   *
   * - Changing from `static` to `templateLinked`.
   * - Changing the effect of the policy from `permit` or `forbid`.
   * - The `principal` referenced by the policy.
   * - The `resource` referenced by the policy.
   *
   * @public
   */
  definition?: UpdatePolicyDefinition | undefined;

  /**
   * Specifies a name for the policy that is unique among all policies within the policy store. You can use the name in place of the policy ID in API operations that reference the policy. The name must be prefixed with `name/`.
   *
   * > **Note:** If you don't include the name in an update request, the existing name is unchanged. To remove a name, set it to an empty string (`""`).
   *
   * If you specify a name that is already associated with another policy in the policy store, you receive a `ConflictException` error.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyOutput {
  /**
   * The ID of the policy store that contains the policy that was updated.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The ID of the policy that was updated.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The type of the policy that was updated.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * The principal specified in the policy's scope. This element isn't included in the response when `Principal` isn't present in the policy content.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * The resource specified in the policy's scope. This element isn't included in the response when `Resource` isn't present in the policy content.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * The action that a policy permits or forbids. For example, `\{"actions": [\{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"\}, \{"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"\}]\}`.
   *
   * @public
   */
  actions?: ActionIdentifier[] | undefined;

  /**
   * The date and time that the policy was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;

  /**
   * The effect of the decision that a policy returns to an authorization request. For example, `"effect": "Permit"`.
   *
   * @public
   */
  effect?: PolicyEffect | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateInput {
  /**
   * Specifies the ID of the policy store that contains the policy template that you want to update.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the ID of the policy template that you want to update.
   *
   * You can use the policy template name in place of the policy template ID. When using a name, prefix it with `name/`. For example:
   *
   * - ID: `PTEXAMPLEabcdefg111111`
   * - Name: `name/example-policy-template`
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * Specifies a new description to apply to the policy template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies new statement content written in Cedar policy language to replace the current body of the policy template.
   *
   * You can change only the following elements of the policy body:
   *
   * - The `action` referenced by the policy template.
   * - Any conditional clauses, such as `when` or `unless` clauses.
   *
   * You **can't** change the following elements:
   *
   * - The effect (`permit` or `forbid`) of the policy template.
   * - The `principal` referenced by the policy template.
   * - The `resource` referenced by the policy template.
   *
   * @public
   */
  statement: string | undefined;

  /**
   * Specifies a name for the policy template that is unique among all policy templates within the policy store. You can use the name in place of the policy template ID in API operations that reference the policy template. The name must be prefixed with `name/`.
   *
   * > **Note:** If you don't include the name in an update request, the existing name is unchanged. To remove a name, set it to an empty string (`""`).
   *
   * If you specify a name that is already associated with another policy template in the policy store, you receive a `ConflictException` error.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyTemplateOutput {
  /**
   * The ID of the policy store that contains the updated policy template.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The ID of the updated policy template.
   *
   * @public
   */
  policyTemplateId: string | undefined;

  /**
   * The date and time that the policy template was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy template was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * Contains a list of principal types, resource types, and actions that can be specified in policies stored in the same policy store. If the validation mode for the policy store is set to `STRICT`, then policies that can't be validated by this schema are rejected by Verified Permissions and can't be stored in the policy store.
 *
 * @public
 */
export type SchemaDefinition =
  | SchemaDefinition.CedarJsonMember
  | SchemaDefinition.$UnknownMember;

/**
 * @public
 */
export namespace SchemaDefinition {
  /**
   * A JSON string representation of the schema supported by applications that use this policy store. To delete the schema, run [PutSchema](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PutSchema.html) with `\{\}` for this parameter. For more information, see [Policy store schema](https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/schema.html) in the *Amazon Verified Permissions User Guide*.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PutSchemaInput {
  /**
   * Specifies the ID of the policy store in which to place the schema.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the definition of the schema to be stored. The schema definition must be written in Cedar schema JSON.
   *
   * @public
   */
  definition: SchemaDefinition | undefined;
}

/**
 * @public
 */
export interface PutSchemaOutput {
  /**
   * The unique ID of the policy store that contains the schema.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Identifies the namespaces of the entities referenced by this schema.
   *
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * The date and time that the schema was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the schema was last updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreInput {
  /**
   * Specifies the ID of the policy store that you want to update
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * A structure that defines the validation settings that want to enable for the policy store.
   *
   * @public
   */
  validationSettings: ValidationSettings | undefined;

  /**
   * Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted.
   *
   * When you call `UpdatePolicyStore`, this parameter is unchanged unless explicitly included in the call.
   *
   * @public
   */
  deletionProtection?: DeletionProtection | undefined;

  /**
   * Descriptive text that you can provide to help with identification of the current policy store.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyStoreOutput {
  /**
   * The ID of the updated policy store.
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the updated policy store.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The date and time that the policy store was originally created.
   *
   * @public
   */
  createdDate: Date | undefined;

  /**
   * The date and time that the policy store was most recently updated.
   *
   * @public
   */
  lastUpdatedDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource that you're adding tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The ARN of the resource from which you are removing tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * The value of an attribute.
 *
 * Contains information about the runtime context for a request for which an authorization decision is made.
 *
 * This data type is used as a member of the [ContextDefinition](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ContextDefinition.html) structure which is used as a request parameter for the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
 * @public
 */
export type AttributeValue =
  | AttributeValue.BooleanMember
  | AttributeValue.DatetimeMember
  | AttributeValue.DecimalMember
  | AttributeValue.DurationMember
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
   * An attribute value of [Boolean](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-bool) type.
   *
   * Example: `\{"boolean": true\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of type [EntityIdentifier](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntityIdentifier.html).
   *
   * Example: `\{"entityIdentifier": \{ "entityId": "alice", "entityType": "User"\} \}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [Long](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-long) type.
   *
   * Example: `\{"long": 0\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [String](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-string) type.
   *
   * Example: `\{"string": "abc"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [Set](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-set) type.
   *
   * Example: `\{"set": [ \{\} ] \}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [Record](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-record) type.
   *
   * Example: `\{"record": \{ "keyName": \{\} \} \}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [ipaddr](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-ipaddr) type.
   *
   * Example: `\{"ip": "192.168.1.100"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [decimal](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-decimal) type.
   *
   * Example: `\{"decimal": "1.1"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [datetime](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-datetime) type.
   *
   * Example: `\{"datetime": "2024-10-15T11:35:00Z"\}`
   *
   * @public
   */
  export interface DatetimeMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    datetime: string;
    duration?: never;
    $unknown?: never;
  }

  /**
   * An attribute value of [duration](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-duration) type.
   *
   * Example: `\{"duration": "1h30m"\}`
   *
   * @public
   */
  export interface DurationMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    datetime?: never;
    duration: string;
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
    datetime?: never;
    duration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    boolean: (value: boolean) => T;
    entityIdentifier: (value: EntityIdentifier) => T;
    long: (value: number) => T;
    string: (value: string) => T;
    set: (value: AttributeValue[]) => T;
    record: (value: Record<string, AttributeValue>) => T;
    ipaddr: (value: string) => T;
    decimal: (value: string) => T;
    datetime: (value: string) => T;
    duration: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The value of an entity's Cedar tag.
 *
 * This data type is used as a member of the [EntityItem](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntityItem.html) structure that forms the body of the `Entities` request parameter for the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html), and [BatchIsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorizedWithToken.html) operations.
 *
 * @public
 */
export type CedarTagValue =
  | CedarTagValue.BooleanMember
  | CedarTagValue.DatetimeMember
  | CedarTagValue.DecimalMember
  | CedarTagValue.DurationMember
  | CedarTagValue.EntityIdentifierMember
  | CedarTagValue.IpaddrMember
  | CedarTagValue.LongMember
  | CedarTagValue.RecordMember
  | CedarTagValue.SetMember
  | CedarTagValue.StringMember
  | CedarTagValue.$UnknownMember;

/**
 * @public
 */
export namespace CedarTagValue {
  /**
   * A Cedar tag value of [Boolean](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-bool) type.
   *
   * Example: `\{"boolean": false\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of type [EntityIdentifier](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntityIdentifier.html).
   *
   * Example: `\{"entityIdentifier": \{ "entityId": "alice", "entityType": "User"\} \}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [Long](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-long) type.
   *
   * Example: `\{"long": 0\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [String](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-string) type.
   *
   * Example: `\{"string": "abc"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [Set](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-set) type.
   *
   * Example: `\{"set": [ \{ "string": "abc" \} ] \}`
   *
   * @public
   */
  export interface SetMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set: CedarTagValue[];
    record?: never;
    ipaddr?: never;
    decimal?: never;
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [Record](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-record) type.
   *
   * Example: `\{"record": \{ "keyName": \{\} \} \}`
   *
   * @public
   */
  export interface RecordMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record: Record<string, CedarTagValue>;
    ipaddr?: never;
    decimal?: never;
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [ipaddr](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-ipaddr) type.
   *
   * Example: `\{"ip": "10.50.0.0/24"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [decimal](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-decimal) type.
   *
   * Example: `\{"decimal": "-2.0"\}`
   *
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
    datetime?: never;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [datetime](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-datetime) type.
   *
   * Example: `\{"datetime": "2025-11-04T11:35:00.000+0100"\}`
   *
   * @public
   */
  export interface DatetimeMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    datetime: string;
    duration?: never;
    $unknown?: never;
  }

  /**
   * A Cedar tag value of [duration](https://docs.cedarpolicy.com/policies/syntax-datatypes.html#datatype-duration) type.
   *
   * Example: `\{"duration": "-1d12h"\}`
   *
   * @public
   */
  export interface DurationMember {
    boolean?: never;
    entityIdentifier?: never;
    long?: never;
    string?: never;
    set?: never;
    record?: never;
    ipaddr?: never;
    decimal?: never;
    datetime?: never;
    duration: string;
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
    datetime?: never;
    duration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    boolean: (value: boolean) => T;
    entityIdentifier: (value: EntityIdentifier) => T;
    long: (value: number) => T;
    string: (value: string) => T;
    set: (value: CedarTagValue[]) => T;
    record: (value: Record<string, CedarTagValue>) => T;
    ipaddr: (value: string) => T;
    decimal: (value: string) => T;
    datetime: (value: string) => T;
    duration: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains additional details about the context of the request. Verified Permissions evaluates this information in an authorization request as part of the `when` and `unless` clauses in a policy.
 *
 * This data type is used as a request parameter for the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html), [BatchIsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorized.html), and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
 * If you're passing context as part of the request, exactly one instance of `context` must be passed. If you don't want to pass context, omit the `context` parameter from your request rather than sending `context \{\}`.
 *
 * Example: `"context":\{"contextMap":\{"<KeyName1>":\{"boolean":true\},"<KeyName2>":\{"long":1234\}\}\}`
 *
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
   * An list of attributes that are needed to successfully evaluate an authorization request. Each attribute in this array must include a map of a data type and its value.
   *
   * Example: `"contextMap":\{"<KeyName1>":\{"boolean":true\},"<KeyName2>":\{"long":1234\}\}`
   *
   * @public
   */
  export interface ContextMapMember {
    contextMap: Record<string, AttributeValue>;
    cedarJson?: never;
    $unknown?: never;
  }

  /**
   * A Cedar JSON string representation of the context needed to successfully evaluate an authorization request.
   *
   * Example: `\{"cedarJson":"\{\"<KeyName1>\": true, \"<KeyName2>\": 1234\}" \}`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contextMap: (value: Record<string, AttributeValue>) => T;
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An authorization request that you include in a `BatchIsAuthorized` API request.
 *
 * @public
 */
export interface BatchIsAuthorizedInputItem {
  /**
   * Specifies the principal for which the authorization decision is to be made.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * Specifies the requested action to be authorized. For example, `PhotoFlash::ReadPhoto`.
   *
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * Specifies the resource that you want an authorization decision for. For example, `PhotoFlash::Photo`.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * Specifies additional context that can be used to make more granular authorization decisions.
   *
   * @public
   */
  context?: ContextDefinition | undefined;
}

/**
 * An authorization request that you include in a `BatchIsAuthorizedWithToken` API request.
 *
 * @public
 */
export interface BatchIsAuthorizedWithTokenInputItem {
  /**
   * Specifies the requested action to be authorized. For example, `PhotoFlash::ReadPhoto`.
   *
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * Specifies the resource that you want an authorization decision for. For example, `PhotoFlash::Photo`.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * Specifies additional context that can be used to make more granular authorization decisions.
   *
   * @public
   */
  context?: ContextDefinition | undefined;
}

/**
 * The decision, based on policy evaluation, from an individual authorization request in a `BatchIsAuthorized` API request.
 *
 * @public
 */
export interface BatchIsAuthorizedOutputItem {
  /**
   * The authorization request that initiated the decision.
   *
   * @public
   */
  request: BatchIsAuthorizedInputItem | undefined;

  /**
   * An authorization decision that indicates if the authorization request should be allowed or denied.
   *
   * @public
   */
  decision: Decision | undefined;

  /**
   * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
   *
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * Errors that occurred while making an authorization decision. For example, a policy might reference an entity or attribute that doesn't exist in the request.
   *
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * The decision, based on policy evaluation, from an individual authorization request in a `BatchIsAuthorizedWithToken` API request.
 *
 * @public
 */
export interface BatchIsAuthorizedWithTokenOutputItem {
  /**
   * The authorization request that initiated the decision.
   *
   * @public
   */
  request: BatchIsAuthorizedWithTokenInputItem | undefined;

  /**
   * An authorization decision that indicates if the authorization request should be allowed or denied.
   *
   * @public
   */
  decision: Decision | undefined;

  /**
   * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
   *
   * @public
   */
  determiningPolicies: DeterminingPolicyItem[] | undefined;

  /**
   * Errors that occurred while making an authorization decision. For example, a policy might reference an entity or attribute that doesn't exist in the request.
   *
   * @public
   */
  errors: EvaluationErrorItem[] | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedOutput {
  /**
   * A series of `Allow` or `Deny` decisions for each request, and the policies that produced them. These results are returned in the order they were requested.
   *
   * @public
   */
  results: BatchIsAuthorizedOutputItem[] | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedWithTokenOutput {
  /**
   * The identifier of the principal in the ID or access token.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * A series of `Allow` or `Deny` decisions for each request, and the policies that produced them. These results are returned in the order they were requested.
   *
   * @public
   */
  results: BatchIsAuthorizedWithTokenOutputItem[] | undefined;
}

/**
 * Contains information about an entity that can be referenced in a Cedar policy.
 *
 * This data type is used as one of the fields in the [EntitiesDefinition](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_EntitiesDefinition.html) structure.
 *
 * `\{ "identifier": \{ "entityType": "Photo", "entityId": "VacationPhoto94.jpg" \}, "attributes": \{\}, "parents": [ \{ "entityType": "Album", "entityId": "alice_folder" \} ] \}`
 *
 * @public
 */
export interface EntityItem {
  /**
   * The identifier of the entity.
   *
   * @public
   */
  identifier: EntityIdentifier | undefined;

  /**
   * A list of attributes for the entity.
   *
   * @public
   */
  attributes?: Record<string, AttributeValue> | undefined;

  /**
   * The parent entities in the hierarchy that contains the entity. A principal or resource entity can be defined with at most 99 *transitive parents* per authorization request.
   *
   * A transitive parent is an entity in the hierarchy of entities including all direct parents, and parents of parents. For example, a user can be a member of 91 groups if one of those groups is a member of eight groups, for a total of 100: one entity, 91 entity parents, and eight parents of parents.
   *
   * @public
   */
  parents?: EntityIdentifier[] | undefined;

  /**
   * A list of cedar tags for the entity.
   *
   * @public
   */
  tags?: Record<string, CedarTagValue> | undefined;
}

/**
 * Contains the list of entities to be considered during an authorization request. This includes all principals, resources, and actions required to successfully evaluate the request.
 *
 * This data type is used as a field in the response parameter for the [IsAuthorized](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html) and [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operations.
 *
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
   * An array of entities that are needed to successfully evaluate an authorization request. Each entity in this array must include an identifier for the entity, the attributes of the entity, and a list of any parent entities.
   *
   * > **Note:** If you include multiple entities with the same `identifier`, only the last one is processed in the request.
   *
   * @public
   */
  export interface EntityListMember {
    entityList: EntityItem[];
    cedarJson?: never;
    $unknown?: never;
  }

  /**
   * A Cedar JSON string representation of the entities needed to successfully evaluate an authorization request.
   *
   * Example: `\{"cedarJson": "[\{\"uid\":\{\"type\":\"Photo\",\"id\":\"VacationPhoto94.jpg\"\},\"attrs\":\{\"accessLevel\":\"public\"\},\"parents\":[]\}]"\}`
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    entityList: (value: EntityItem[]) => T;
    cedarJson: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface IsAuthorizedInput {
  /**
   * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies the principal for which the authorization decision is to be made.
   *
   * @public
   */
  principal?: EntityIdentifier | undefined;

  /**
   * Specifies the requested action to be authorized. For example, is the principal authorized to perform this action on the resource?
   *
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * Specifies the resource for which the authorization decision is to be made.
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * Specifies additional context that can be used to make more granular authorization decisions.
   *
   * @public
   */
  context?: ContextDefinition | undefined;

  /**
   * (Optional) Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.
   *
   * > **Note:** You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema.
   *
   * @public
   */
  entities?: EntitiesDefinition | undefined;
}

/**
 * @public
 */
export interface IsAuthorizedWithTokenInput {
  /**
   * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies an identity token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an `accessToken`, an `identityToken`, or both.
   *
   * Must be an ID token. Verified Permissions returns an error if the `token_use` claim in the submitted token isn't `id`.
   *
   * @public
   */
  identityToken?: string | undefined;

  /**
   * Specifies an access token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an `accessToken`, an `identityToken`, or both.
   *
   * Must be an access token. Verified Permissions returns an error if the `token_use` claim in the submitted token isn't `access`.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * Specifies the requested action to be authorized. Is the specified principal authorized to perform this action on the specified resource.
   *
   * @public
   */
  action?: ActionIdentifier | undefined;

  /**
   * Specifies the resource for which the authorization decision is made. For example, is the principal allowed to perform the action on the resource?
   *
   * @public
   */
  resource?: EntityIdentifier | undefined;

  /**
   * Specifies additional context that can be used to make more granular authorization decisions.
   *
   * @public
   */
  context?: ContextDefinition | undefined;

  /**
   * (Optional) Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.
   *
   * > **Important:**
   * >
   * > You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.
   * >
   * > - The `IsAuthorizedWithToken` operation takes principal attributes from ***only*** the `identityToken` or `accessToken` passed to the operation.
   * > - For action entities, you can include only their `Identifier` and `EntityType`.
   *
   * @public
   */
  entities?: EntitiesDefinition | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedInput {
  /**
   * Specifies the ID of the policy store. Policies in this policy store will be used to make the authorization decisions for the input.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * (Optional) Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.
   *
   * > **Note:** You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema.
   *
   * @public
   */
  entities?: EntitiesDefinition | undefined;

  /**
   * An array of up to 30 requests that you want Verified Permissions to evaluate.
   *
   * @public
   */
  requests: BatchIsAuthorizedInputItem[] | undefined;
}

/**
 * @public
 */
export interface BatchIsAuthorizedWithTokenInput {
  /**
   * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
   *
   * To specify a policy store, use its ID or alias name. When using an alias name, prefix it with `policy-store-alias/`. For example:
   *
   * - ID: `PSEXAMPLEabcdefg111111`
   * - Alias name: `policy-store-alias/example-policy-store`
   *
   * To view aliases, use [ListPolicyStoreAliases](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStoreAliases.html).
   *
   * @public
   */
  policyStoreId: string | undefined;

  /**
   * Specifies an identity (ID) token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an `accessToken`, an `identityToken`, or both.
   *
   * Must be an ID token. Verified Permissions returns an error if the `token_use` claim in the submitted token isn't `id`.
   *
   * @public
   */
  identityToken?: string | undefined;

  /**
   * Specifies an access token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an `accessToken`, an `identityToken`, or both.
   *
   * Must be an access token. Verified Permissions returns an error if the `token_use` claim in the submitted token isn't `access`.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * (Optional) Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.
   *
   * > **Important:**
   * >
   * > You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.
   * >
   * > - The `BatchIsAuthorizedWithToken` operation takes principal attributes from ***only*** the `identityToken` or `accessToken` passed to the operation.
   * > - For action entities, you can include only their `Identifier` and `EntityType`.
   *
   * @public
   */
  entities?: EntitiesDefinition | undefined;

  /**
   * An array of up to 30 requests that you want Verified Permissions to evaluate.
   *
   * @public
   */
  requests: BatchIsAuthorizedWithTokenInputItem[] | undefined;
}
