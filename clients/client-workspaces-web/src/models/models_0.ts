// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { WorkSpacesWebServiceException as __BaseException } from "./WorkSpacesWebServiceException";

/**
 * @public
 * <p>Access is denied.</p>
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
 */
export interface AssociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateBrowserSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 * <p>There is a conflict.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   */
  resourceId?: string;

  /**
   * <p>Type of the resource affected.</p>
   */
  resourceType?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>There is an internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The resource cannot be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Hypothetical identifier of the resource affected.</p>
   */
  resourceId?: string;

  /**
   * <p>Hypothetical type of the resource affected.</p>
   */
  resourceType?: string;

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
 * <p>There is a throttling error.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The originating service.</p>
   */
  serviceCode?: string;

  /**
   * <p>The originating quota.</p>
   */
  quotaCode?: string;

  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Information about a field passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   */
  name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>There is a validation error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reason the request failed validation</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>The field that caused the error.</p>
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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the IP access settings resource.</p>
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  IAM_IDENTITY_CENTER: "IAM_Identity_Center",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * <p>The tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateBrowserSettingsRequest {
  /**
   * <p>The tags to add to the browser settings resource. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>The custom managed key of the browser settings.</p>
   */
  customerManagedKey?: string;

  /**
   * <p>Additional encryption context of the browser settings.</p>
   */
  additionalEncryptionContext?: Record<string, string>;

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions.</p>
   */
  browserPolicy: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS SDK. </p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateBrowserSettingsResponse {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 * <p>The service quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   */
  resourceId?: string;

  /**
   * <p> Type of the resource affected.</p>
   */
  resourceType?: string;

  /**
   * <p>The originating service.</p>
   */
  serviceCode?: string;

  /**
   * <p>The originating quota.</p>
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
 * @enum
 */
export const IdentityProviderType = {
  Facebook: "Facebook",
  Google: "Google",
  LoginWithAmazon: "LoginWithAmazon",
  OIDC: "OIDC",
  SAML: "SAML",
  SignInWithApple: "SignInWithApple",
} as const;

/**
 * @public
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

/**
 * @public
 */
export interface CreateIdentityProviderRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The identity provider name.</p>
   */
  identityProviderName: string | undefined;

  /**
   * <p>The identity provider type.</p>
   */
  identityProviderType: IdentityProviderType | string | undefined;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys for
   *          each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code> (boolean)
   *                <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  identityProviderDetails: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateIdentityProviderResponse {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 * <p>The IP rules of the IP access settings.</p>
 */
export interface IpRule {
  /**
   * <p>The IP range of the IP rule.</p>
   */
  ipRange: string | undefined;

  /**
   * <p>The description of the IP rule.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsRequest {
  /**
   * <p>The display name of the IP access settings.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the IP access settings.</p>
   */
  description?: string;

  /**
   * <p>The tags to add to the browser settings resource. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>The custom managed key of the IP access settings.</p>
   */
  customerManagedKey?: string;

  /**
   * <p>Additional encryption context of the IP access settings.</p>
   */
  additionalEncryptionContext?: Record<string, string>;

  /**
   * <p>The IP rules of the IP access settings.</p>
   */
  ipRules: IpRule[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsResponse {
  /**
   * <p>The ARN of the IP access settings resource.</p>
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSettingsRequest {
  /**
   * <p>The VPC that streaming instances will connect to.</p>
   */
  vpcId: string | undefined;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>One or more security groups used to control access from streaming instances to your VPC.</p>
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The tags to add to the network settings resource. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateNetworkSettingsResponse {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * <p>The name of the web portal. This is not visible to users who log into the web portal.</p>
   */
  displayName?: string;

  /**
   * <p>The tags to add to the web portal. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>The customer managed key of the web portal.</p>
   */
  customerManagedKey?: string;

  /**
   * <p>The additional encryption context of the portal.</p>
   */
  additionalEncryptionContext?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity
   *          Center (successor to AWS Single Sign-On). They provide additional features, such as
   *          IdP-initiated authentication. Identity sources (including external identity provider
   *          integration), plus user and group access to your web portal, can be configured in the IAM
   *          Identity Center.</p>
   */
  authenticationType?: AuthenticationType | string;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming sessions.</p>
   */
  portalEndpoint: string | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreRequest {
  /**
   * <p>A list of CA certificates to be added to the trust store.</p>
   */
  certificateList: Uint8Array[] | undefined;

  /**
   * <p>The tags to add to the trust store. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface CreateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the Kinesis stream.</p>
   */
  kinesisStreamArn: string | undefined;

  /**
   * <p>The tags to add to the user settings resource. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateUserAccessLoggingSettingsResponse {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnabledType = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type EnabledType = (typeof EnabledType)[keyof typeof EnabledType];

/**
 * @public
 */
export interface CreateUserSettingsRequest {
  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   */
  copyAllowed: EnabledType | string | undefined;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   */
  pasteAllowed: EnabledType | string | undefined;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   */
  downloadAllowed: EnabledType | string | undefined;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   */
  uploadAllowed: EnabledType | string | undefined;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   */
  printAllowed: EnabledType | string | undefined;

  /**
   * <p>The tags to add to the user settings resource. A tag is a key-value pair.</p>
   */
  tags?: Tag[];

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect.</p>
   */
  disconnectTimeoutInMinutes?: number;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.</p>
   */
  idleDisconnectTimeoutInMinutes?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateUserSettingsResponse {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserSettingsResponse {}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderResponse {}

/**
 * @public
 */
export interface DeleteIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpAccessSettingsResponse {}

/**
 * @public
 */
export interface DeleteNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSettingsResponse {}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalResponse {}

/**
 * @public
 */
export interface DeleteTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreResponse {}

/**
 * @public
 */
export interface DeleteUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserAccessLoggingSettingsResponse {}

/**
 * @public
 */
export interface DeleteUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserSettingsResponse {}

/**
 * @public
 */
export interface DisassociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBrowserSettingsResponse {}

/**
 * @public
 */
export interface DisassociateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpAccessSettingsResponse {}

/**
 * @public
 */
export interface DisassociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateNetworkSettingsResponse {}

/**
 * @public
 */
export interface DisassociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrustStoreResponse {}

/**
 * @public
 */
export interface DisassociateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserAccessLoggingSettingsResponse {}

/**
 * @public
 */
export interface DisassociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserSettingsResponse {}

/**
 * @public
 */
export interface GetBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 * <p>The browser settings resource that can be associated with a web portal. Once associated
 *          with a web portal, browser settings control how the browser will behave once a user starts
 *          a streaming session for the web portal. </p>
 */
export interface BrowserSettings {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this browser settings is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions.</p>
   */
  browserPolicy?: string;
}

/**
 * @public
 */
export interface GetBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings?: BrowserSettings;
}

/**
 * @public
 */
export interface GetIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 * <p>The identity provider.</p>
 */
export interface IdentityProvider {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;

  /**
   * <p>The identity provider name.</p>
   */
  identityProviderName?: string;

  /**
   * <p>The identity provider type.</p>
   */
  identityProviderType?: IdentityProviderType | string;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys for
   *          each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code>
   *                         <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  identityProviderDetails?: Record<string, string>;
}

/**
 * @public
 */
export interface GetIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider?: IdentityProvider;
}

/**
 * @public
 */
export interface GetIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 * <p>The IP access settings resource that can be associated with a web portal. </p>
 */
export interface IpAccessSettings {
  /**
   * <p>The ARN of the IP access settings resource.</p>
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this IP access settings resource is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>The IP rules of the IP access settings.</p>
   */
  ipRules?: IpRule[];

  /**
   * <p> The display name of the IP access settings.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the IP access settings.</p>
   */
  description?: string;

  /**
   * <p>The creation date timestamp of the IP access settings.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface GetIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   */
  ipAccessSettings?: IpAccessSettings;
}

/**
 * @public
 */
export interface GetNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 * <p>A network settings resource that can be associated with a web portal. Once associated
 *          with a web portal, network settings define how streaming instances will connect with your
 *          specified VPC. </p>
 */
export interface NetworkSettings {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this network settings is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>The VPC that streaming instances will connect to.</p>
   */
  vpcId?: string;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.</p>
   */
  subnetIds?: string[];

  /**
   * <p>One or more security groups used to control access from streaming instances to your VPC. </p>
   */
  securityGroupIds?: string[];
}

/**
 * @public
 */
export interface GetNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings?: NetworkSettings;
}

/**
 * @public
 */
export interface GetPortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BrowserType = {
  CHROME: "Chrome",
} as const;

/**
 * @public
 */
export type BrowserType = (typeof BrowserType)[keyof typeof BrowserType];

/**
 * @public
 * @enum
 */
export const PortalStatus = {
  ACTIVE: "Active",
  INCOMPLETE: "Incomplete",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type PortalStatus = (typeof PortalStatus)[keyof typeof PortalStatus];

/**
 * @public
 * @enum
 */
export const RendererType = {
  APPSTREAM: "AppStream",
} as const;

/**
 * @public
 */
export type RendererType = (typeof RendererType)[keyof typeof RendererType];

/**
 * @public
 * <p>The web portal.</p>
 */
export interface Portal {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn?: string;

  /**
   * <p>The renderer that is used in streaming sessions.</p>
   */
  rendererType?: RendererType | string;

  /**
   * <p>The browser that users see when using a streaming session.</p>
   */
  browserType?: BrowserType | string;

  /**
   * <p>The status of the web portal.</p>
   */
  portalStatus?: PortalStatus | string;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming
   *          sessions.</p>
   */
  portalEndpoint?: string;

  /**
   * <p>The name of the web portal.</p>
   */
  displayName?: string;

  /**
   * <p>The creation date of the web portal.</p>
   */
  creationDate?: Date;

  /**
   * <p>The ARN of the browser settings that is associated with this web portal.</p>
   */
  browserSettingsArn?: string;

  /**
   * <p>The ARN of the user settings that is associated with the web portal.</p>
   */
  userSettingsArn?: string;

  /**
   * <p>The ARN of the network settings that is associated with the web portal.</p>
   */
  networkSettingsArn?: string;

  /**
   * <p>The ARN of the trust store that is associated with the web portal.</p>
   */
  trustStoreArn?: string;

  /**
   * <p>A message that explains why the web portal is in its current status.</p>
   */
  statusReason?: string;

  /**
   * <p>The ARN of the user access logging settings that is associated with the web portal.</p>
   */
  userAccessLoggingSettingsArn?: string;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity
   *          Center (successor to AWS Single Sign-On). They provide additional features, such as
   *          IdP-initiated authentication. Identity sources (including external identity provider
   *          integration), plus user and group access to your web portal, can be configured in the IAM
   *          Identity Center.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn?: string;
}

/**
 * @public
 */
export interface GetPortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataResponse {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The service provider SAML metadata.</p>
   */
  serviceProviderSamlMetadata?: string;
}

/**
 * @public
 */
export interface GetTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 * <p>A trust store that can be associated with a web portal. A trust store contains
 *          certificate authority (CA) certificates. Once associated with a web portal, the browser in
 *          a streaming session will recognize certificates that have been issued using any of the CAs
 *          in the trust store. If your organization has internal websites that use certificates issued
 *          by private CAs, you should add the private CA certificate to the trust store. </p>
 */
export interface TrustStore {
  /**
   * <p>A list of web portal ARNs that this trust store is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn?: string;
}

/**
 * @public
 */
export interface GetTrustStoreResponse {
  /**
   * <p>The trust store.</p>
   */
  trustStore?: TrustStore;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateRequest {
  /**
   * <p>The ARN of the trust store certificate.</p>
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The thumbprint of the trust store certificate.</p>
   */
  thumbprint: string | undefined;
}

/**
 * @public
 * <p>The certificate.</p>
 */
export interface Certificate {
  /**
   * <p>A hexadecimal identifier for the certificate.</p>
   */
  thumbprint?: string;

  /**
   * <p>The entity the certificate belongs to.</p>
   */
  subject?: string;

  /**
   * <p>The entity that issued the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notValidBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notValidAfter?: Date;

  /**
   * <p>The body of the certificate.</p>
   */
  body?: Uint8Array;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateResponse {
  /**
   * <p>The ARN of the trust store certificate.</p>
   */
  trustStoreArn?: string;

  /**
   * <p>The certificate of the trust store certificate.</p>
   */
  certificate?: Certificate;
}

/**
 * @public
 */
export interface GetUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 * <p>A user access logging settings resource that can be associated with a web portal.</p>
 */
export interface UserAccessLoggingSettings {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this user access logging settings is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>The ARN of the Kinesis stream.</p>
   */
  kinesisStreamArn?: string;
}

/**
 * @public
 */
export interface GetUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   */
  userAccessLoggingSettings?: UserAccessLoggingSettings;
}

/**
 * @public
 */
export interface GetUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 * <p>A user settings resource that can be associated with a web portal. Once associated with
 *          a web portal, user settings control how users can transfer data between a streaming session
 *          and the their local devices. </p>
 */
export interface UserSettings {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this user settings is associated with.</p>
   */
  associatedPortalArns?: string[];

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   */
  copyAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   */
  pasteAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   */
  downloadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   */
  uploadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   */
  printAllowed?: EnabledType | string;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect.</p>
   */
  disconnectTimeoutInMinutes?: number;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.</p>
   */
  idleDisconnectTimeoutInMinutes?: number;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings?: UserSettings;
}

/**
 * @public
 */
export interface ListBrowserSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary for browser settings.</p>
 */
export interface BrowserSettingsSummary {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn?: string;
}

/**
 * @public
 */
export interface ListBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings?: BrowserSettingsSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;

  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

/**
 * @public
 * <p>The summary of the identity provider.</p>
 */
export interface IdentityProviderSummary {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn?: string;

  /**
   * <p>The identity provider name.</p>
   */
  identityProviderName?: string;

  /**
   * <p>The identity provider type.</p>
   */
  identityProviderType?: IdentityProviderType | string;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The identity providers.</p>
   */
  identityProviders?: IdentityProviderSummary[];
}

/**
 * @public
 */
export interface ListIpAccessSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of IP access settings.</p>
 */
export interface IpAccessSettingsSummary {
  /**
   * <p>The ARN of IP access settings.</p>
   */
  ipAccessSettingsArn?: string;

  /**
   * <p>The display name of the IP access settings.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the IP access settings.</p>
   */
  description?: string;

  /**
   * <p>The creation date timestamp of the IP access settings.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface ListIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   */
  ipAccessSettings?: IpAccessSettingsSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListNetworkSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of network settings.</p>
 */
export interface NetworkSettingsSummary {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn?: string;

  /**
   * <p>The VPC ID of the network settings.</p>
   */
  vpcId?: string;
}

/**
 * @public
 */
export interface ListNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings?: NetworkSettingsSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of the portal.</p>
 */
export interface PortalSummary {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn?: string;

  /**
   * <p>The renderer that is used in streaming sessions.</p>
   */
  rendererType?: RendererType | string;

  /**
   * <p>The browser type of the web portal.</p>
   */
  browserType?: BrowserType | string;

  /**
   * <p>The status of the web portal.</p>
   */
  portalStatus?: PortalStatus | string;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming
   *          sessions.</p>
   */
  portalEndpoint?: string;

  /**
   * <p>The name of the web portal.</p>
   */
  displayName?: string;

  /**
   * <p>The creation date of the web portal.</p>
   */
  creationDate?: Date;

  /**
   * <p>The ARN of the browser settings that is associated with the web portal.</p>
   */
  browserSettingsArn?: string;

  /**
   * <p>The ARN of the user settings that is associated with the web portal.</p>
   */
  userSettingsArn?: string;

  /**
   * <p>The ARN of the network settings that is associated with the web portal.</p>
   */
  networkSettingsArn?: string;

  /**
   * <p>The ARN of the trust that is associated with this web portal.</p>
   */
  trustStoreArn?: string;

  /**
   * <p>The ARN of the user access logging settings that is associated with the web portal.</p>
   */
  userAccessLoggingSettingsArn?: string;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity
   *          Center (successor to AWS Single Sign-On). They provide additional features, such as
   *          IdP-initiated authentication. Identity sources (including external identity provider
   *          integration), plus user and group access to your web portal, can be configured in the IAM
   *          Identity Center.</p>
   */
  authenticationType?: AuthenticationType | string;

  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn?: string;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * <p>The portals in the list.</p>
   */
  portals?: PortalSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesRequest {
  /**
   * <p>The ARN of the trust store</p>
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of the certificate.</p>
 */
export interface CertificateSummary {
  /**
   * <p>A hexadecimal identifier for the certificate.</p>
   */
  thumbprint?: string;

  /**
   * <p>The entity the certificate belongs to.</p>
   */
  subject?: string;

  /**
   * <p>The entity that issued the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notValidBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notValidAfter?: Date;
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesResponse {
  /**
   * <p>The certificate list.</p>
   */
  certificateList?: CertificateSummary[];

  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn?: string;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.&gt;</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTrustStoresRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of the trust store.</p>
 */
export interface TrustStoreSummary {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn?: string;
}

/**
 * @public
 */
export interface ListTrustStoresResponse {
  /**
   * <p>The trust stores.</p>
   */
  trustStores?: TrustStoreSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of user access logging settings.</p>
 */
export interface UserAccessLoggingSettingsSummary {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn?: string;

  /**
   * <p>The ARN of the Kinesis stream.</p>
   */
  kinesisStreamArn?: string;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   */
  userAccessLoggingSettings?: UserAccessLoggingSettingsSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUserSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The summary of user settings.</p>
 */
export interface UserSettingsSummary {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn?: string;

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   */
  copyAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   */
  pasteAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   */
  downloadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   */
  uploadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   */
  printAllowed?: EnabledType | string;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect.</p>
   */
  disconnectTimeoutInMinutes?: number;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.</p>
   */
  idleDisconnectTimeoutInMinutes?: number;
}

/**
 * @public
 */
export interface ListUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings?: UserSettingsSummary[];

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags of the resource.</p>
   */
  tags: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>There are too many tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Name of the resource affected.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions. </p>
   */
  browserPolicy?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings: BrowserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;

  /**
   * <p>The name of the identity provider.</p>
   */
  identityProviderName?: string;

  /**
   * <p>The type of the identity provider.</p>
   */
  identityProviderType?: IdentityProviderType | string;

  /**
   * <p>The details of the identity provider. The following list describes the provider detail keys for
   *          each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by
   *                   <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by
   *                   <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by
   *                   <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by
   *                   <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code> (boolean)
   *                <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  identityProviderDetails?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider: IdentityProvider | undefined;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * <p>The display name of the IP access settings.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the IP access settings.</p>
   */
  description?: string;

  /**
   * <p>The updated IP rules of the IP access settings.</p>
   */
  ipRules?: IpRule[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   */
  ipAccessSettings: IpAccessSettings | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;

  /**
   * <p>The VPC that streaming instances will connect to.</p>
   */
  vpcId?: string;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.</p>
   */
  subnetIds?: string[];

  /**
   * <p>One or more security groups used to control access from streaming instances to your VPC.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;

  /**
   * <p>The name of the web portal. This is not visible to users who log into the web portal.</p>
   */
  displayName?: string;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM_Identity_Center</code> web portals are authenticated through AWS IAM Identity
   *          Center (successor to AWS Single Sign-On). They provide additional features, such as
   *          IdP-initiated authentication. Identity sources (including external identity provider
   *          integration), plus user and group access to your web portal, can be configured in the IAM
   *          Identity Center.</p>
   */
  authenticationType?: AuthenticationType | string;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

/**
 * @public
 */
export interface UpdateTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;

  /**
   * <p>A list of CA certificates to add to the trust store.</p>
   */
  certificatesToAdd?: Uint8Array[];

  /**
   * <p>A list of CA certificates to delete from a trust store.</p>
   */
  certificatesToDelete?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * <p>The ARN of the Kinesis stream.</p>
   */
  kinesisStreamArn?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   */
  userAccessLoggingSettings: UserAccessLoggingSettings | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   */
  copyAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   */
  pasteAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   */
  downloadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   */
  uploadAllowed?: EnabledType | string;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   */
  printAllowed?: EnabledType | string;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect.</p>
   */
  disconnectTimeoutInMinutes?: number;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.</p>
   */
  idleDisconnectTimeoutInMinutes?: number;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings: UserSettings | undefined;
}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBrowserSettingsRequestFilterSensitiveLog = (obj: CreateBrowserSettingsRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.browserPolicy && { browserPolicy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateIdentityProviderRequestFilterSensitiveLog = (obj: CreateIdentityProviderRequest): any => ({
  ...obj,
  ...(obj.identityProviderName && { identityProviderName: SENSITIVE_STRING }),
  ...(obj.identityProviderDetails && { identityProviderDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IpRuleFilterSensitiveLog = (obj: IpRule): any => ({
  ...obj,
  ...(obj.ipRange && { ipRange: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateIpAccessSettingsRequestFilterSensitiveLog = (obj: CreateIpAccessSettingsRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.ipRules && { ipRules: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNetworkSettingsRequestFilterSensitiveLog = (obj: CreateNetworkSettingsRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePortalRequestFilterSensitiveLog = (obj: CreatePortalRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTrustStoreRequestFilterSensitiveLog = (obj: CreateTrustStoreRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: CreateUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserSettingsRequestFilterSensitiveLog = (obj: CreateUserSettingsRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BrowserSettingsFilterSensitiveLog = (obj: BrowserSettings): any => ({
  ...obj,
  ...(obj.browserPolicy && { browserPolicy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBrowserSettingsResponseFilterSensitiveLog = (obj: GetBrowserSettingsResponse): any => ({
  ...obj,
  ...(obj.browserSettings && { browserSettings: BrowserSettingsFilterSensitiveLog(obj.browserSettings) }),
});

/**
 * @internal
 */
export const IdentityProviderFilterSensitiveLog = (obj: IdentityProvider): any => ({
  ...obj,
  ...(obj.identityProviderName && { identityProviderName: SENSITIVE_STRING }),
  ...(obj.identityProviderDetails && { identityProviderDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetIdentityProviderResponseFilterSensitiveLog = (obj: GetIdentityProviderResponse): any => ({
  ...obj,
  ...(obj.identityProvider && { identityProvider: IdentityProviderFilterSensitiveLog(obj.identityProvider) }),
});

/**
 * @internal
 */
export const IpAccessSettingsFilterSensitiveLog = (obj: IpAccessSettings): any => ({
  ...obj,
  ...(obj.ipRules && { ipRules: SENSITIVE_STRING }),
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetIpAccessSettingsResponseFilterSensitiveLog = (obj: GetIpAccessSettingsResponse): any => ({
  ...obj,
  ...(obj.ipAccessSettings && { ipAccessSettings: IpAccessSettingsFilterSensitiveLog(obj.ipAccessSettings) }),
});

/**
 * @internal
 */
export const PortalFilterSensitiveLog = (obj: Portal): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPortalResponseFilterSensitiveLog = (obj: GetPortalResponse): any => ({
  ...obj,
  ...(obj.portal && { portal: PortalFilterSensitiveLog(obj.portal) }),
});

/**
 * @internal
 */
export const IdentityProviderSummaryFilterSensitiveLog = (obj: IdentityProviderSummary): any => ({
  ...obj,
  ...(obj.identityProviderName && { identityProviderName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListIdentityProvidersResponseFilterSensitiveLog = (obj: ListIdentityProvidersResponse): any => ({
  ...obj,
  ...(obj.identityProviders && {
    identityProviders: obj.identityProviders.map((item) => IdentityProviderSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const IpAccessSettingsSummaryFilterSensitiveLog = (obj: IpAccessSettingsSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListIpAccessSettingsResponseFilterSensitiveLog = (obj: ListIpAccessSettingsResponse): any => ({
  ...obj,
  ...(obj.ipAccessSettings && {
    ipAccessSettings: obj.ipAccessSettings.map((item) => IpAccessSettingsSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PortalSummaryFilterSensitiveLog = (obj: PortalSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPortalsResponseFilterSensitiveLog = (obj: ListPortalsResponse): any => ({
  ...obj,
  ...(obj.portals && { portals: obj.portals.map((item) => PortalSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBrowserSettingsRequestFilterSensitiveLog = (obj: UpdateBrowserSettingsRequest): any => ({
  ...obj,
  ...(obj.browserPolicy && { browserPolicy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBrowserSettingsResponseFilterSensitiveLog = (obj: UpdateBrowserSettingsResponse): any => ({
  ...obj,
  ...(obj.browserSettings && { browserSettings: BrowserSettingsFilterSensitiveLog(obj.browserSettings) }),
});

/**
 * @internal
 */
export const UpdateIdentityProviderRequestFilterSensitiveLog = (obj: UpdateIdentityProviderRequest): any => ({
  ...obj,
  ...(obj.identityProviderName && { identityProviderName: SENSITIVE_STRING }),
  ...(obj.identityProviderDetails && { identityProviderDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateIdentityProviderResponseFilterSensitiveLog = (obj: UpdateIdentityProviderResponse): any => ({
  ...obj,
  ...(obj.identityProvider && { identityProvider: IdentityProviderFilterSensitiveLog(obj.identityProvider) }),
});

/**
 * @internal
 */
export const UpdateIpAccessSettingsRequestFilterSensitiveLog = (obj: UpdateIpAccessSettingsRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.ipRules && { ipRules: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateIpAccessSettingsResponseFilterSensitiveLog = (obj: UpdateIpAccessSettingsResponse): any => ({
  ...obj,
  ...(obj.ipAccessSettings && { ipAccessSettings: IpAccessSettingsFilterSensitiveLog(obj.ipAccessSettings) }),
});

/**
 * @internal
 */
export const UpdatePortalRequestFilterSensitiveLog = (obj: UpdatePortalRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePortalResponseFilterSensitiveLog = (obj: UpdatePortalResponse): any => ({
  ...obj,
  ...(obj.portal && { portal: PortalFilterSensitiveLog(obj.portal) }),
});
