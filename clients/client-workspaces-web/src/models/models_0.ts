// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { WorkSpacesWebServiceException as __BaseException } from "./WorkSpacesWebServiceException";

/**
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

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
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

export enum AuthenticationType {
  IAM_IDENTITY_CENTER = "IAM_Identity_Center",
  STANDARD = "Standard",
}

/**
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

export interface CreateBrowserSettingsResponse {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
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

export enum IdentityProviderType {
  Facebook = "Facebook",
  Google = "Google",
  LoginWithAmazon = "LoginWithAmazon",
  OIDC = "OIDC",
  SAML = "SAML",
  SignInWithApple = "SignInWithApple",
}

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

export interface CreateIdentityProviderResponse {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

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

export interface CreateNetworkSettingsResponse {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

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

export interface CreateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

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

export interface CreateUserAccessLoggingSettingsResponse {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

export enum EnabledType {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

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

export interface CreateUserSettingsResponse {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

export interface DeleteBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

export interface DeleteBrowserSettingsResponse {}

export interface DeleteIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

export interface DeleteIdentityProviderResponse {}

export interface DeleteNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

export interface DeleteNetworkSettingsResponse {}

export interface DeletePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DeletePortalResponse {}

export interface DeleteTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

export interface DeleteTrustStoreResponse {}

export interface DeleteUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

export interface DeleteUserAccessLoggingSettingsResponse {}

export interface DeleteUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

export interface DeleteUserSettingsResponse {}

export interface DisassociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DisassociateBrowserSettingsResponse {}

export interface DisassociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DisassociateNetworkSettingsResponse {}

export interface DisassociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DisassociateTrustStoreResponse {}

export interface DisassociateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DisassociateUserAccessLoggingSettingsResponse {}

export interface DisassociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export interface DisassociateUserSettingsResponse {}

export interface GetBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

/**
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

export interface GetBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings?: BrowserSettings;
}

export interface GetIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

/**
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

export interface GetIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider?: IdentityProvider;
}

export interface GetNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

/**
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

export interface GetNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings?: NetworkSettings;
}

export interface GetPortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export enum BrowserType {
  CHROME = "Chrome",
}

export enum PortalStatus {
  ACTIVE = "Active",
  INCOMPLETE = "Incomplete",
  PENDING = "Pending",
}

export enum RendererType {
  APPSTREAM = "AppStream",
}

/**
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
}

export interface GetPortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

export interface GetPortalServiceProviderMetadataRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

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

export interface GetTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

/**
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

export interface GetTrustStoreResponse {
  /**
   * <p>The trust store.</p>
   */
  trustStore?: TrustStore;
}

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

export interface GetUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
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

export interface GetUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   */
  userAccessLoggingSettings?: UserAccessLoggingSettings;
}

export interface GetUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

/**
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

export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings?: UserSettings;
}

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
 * <p>The summary for browser settings.</p>
 */
export interface BrowserSettingsSummary {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn?: string;
}

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
}

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

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the resource.</p>
   */
  tags?: Tag[];
}

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
 * <p>The summary of the trust store.</p>
 */
export interface TrustStoreSummary {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn?: string;
}

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

export interface TagResourceResponse {}

/**
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

export interface UntagResourceResponse {}

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

export interface UpdateBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings: BrowserSettings | undefined;
}

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

export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider: IdentityProvider | undefined;
}

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

export interface UpdateNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings: NetworkSettings | undefined;
}

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

export interface UpdatePortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

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

export interface UpdateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

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

export interface UpdateUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   */
  userAccessLoggingSettings: UserAccessLoggingSettings | undefined;
}

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

export interface UpdateUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings: UserSettings | undefined;
}

/**
 * @internal
 */
export const AssociateBrowserSettingsRequestFilterSensitiveLog = (obj: AssociateBrowserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateBrowserSettingsResponseFilterSensitiveLog = (obj: AssociateBrowserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateNetworkSettingsRequestFilterSensitiveLog = (obj: AssociateNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateNetworkSettingsResponseFilterSensitiveLog = (obj: AssociateNetworkSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrustStoreRequestFilterSensitiveLog = (obj: AssociateTrustStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTrustStoreResponseFilterSensitiveLog = (obj: AssociateTrustStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: AssociateUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: AssociateUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateUserSettingsRequestFilterSensitiveLog = (obj: AssociateUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateUserSettingsResponseFilterSensitiveLog = (obj: AssociateUserSettingsResponse): any => ({
  ...obj,
});

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
export const CreateBrowserSettingsResponseFilterSensitiveLog = (obj: CreateBrowserSettingsResponse): any => ({
  ...obj,
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
export const CreateIdentityProviderResponseFilterSensitiveLog = (obj: CreateIdentityProviderResponse): any => ({
  ...obj,
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
export const CreateNetworkSettingsResponseFilterSensitiveLog = (obj: CreateNetworkSettingsResponse): any => ({
  ...obj,
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
export const CreatePortalResponseFilterSensitiveLog = (obj: CreatePortalResponse): any => ({
  ...obj,
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
export const CreateTrustStoreResponseFilterSensitiveLog = (obj: CreateTrustStoreResponse): any => ({
  ...obj,
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
export const CreateUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: CreateUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
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
export const CreateUserSettingsResponseFilterSensitiveLog = (obj: CreateUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBrowserSettingsRequestFilterSensitiveLog = (obj: DeleteBrowserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBrowserSettingsResponseFilterSensitiveLog = (obj: DeleteBrowserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIdentityProviderRequestFilterSensitiveLog = (obj: DeleteIdentityProviderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIdentityProviderResponseFilterSensitiveLog = (obj: DeleteIdentityProviderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkSettingsRequestFilterSensitiveLog = (obj: DeleteNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNetworkSettingsResponseFilterSensitiveLog = (obj: DeleteNetworkSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePortalRequestFilterSensitiveLog = (obj: DeletePortalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePortalResponseFilterSensitiveLog = (obj: DeletePortalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrustStoreRequestFilterSensitiveLog = (obj: DeleteTrustStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrustStoreResponseFilterSensitiveLog = (obj: DeleteTrustStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: DeleteUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: DeleteUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserSettingsRequestFilterSensitiveLog = (obj: DeleteUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserSettingsResponseFilterSensitiveLog = (obj: DeleteUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateBrowserSettingsRequestFilterSensitiveLog = (obj: DisassociateBrowserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateBrowserSettingsResponseFilterSensitiveLog = (
  obj: DisassociateBrowserSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateNetworkSettingsRequestFilterSensitiveLog = (obj: DisassociateNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateNetworkSettingsResponseFilterSensitiveLog = (
  obj: DisassociateNetworkSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrustStoreRequestFilterSensitiveLog = (obj: DisassociateTrustStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrustStoreResponseFilterSensitiveLog = (obj: DisassociateTrustStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: DisassociateUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: DisassociateUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserSettingsRequestFilterSensitiveLog = (obj: DisassociateUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserSettingsResponseFilterSensitiveLog = (obj: DisassociateUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBrowserSettingsRequestFilterSensitiveLog = (obj: GetBrowserSettingsRequest): any => ({
  ...obj,
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
export const GetIdentityProviderRequestFilterSensitiveLog = (obj: GetIdentityProviderRequest): any => ({
  ...obj,
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
export const GetNetworkSettingsRequestFilterSensitiveLog = (obj: GetNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkSettingsFilterSensitiveLog = (obj: NetworkSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkSettingsResponseFilterSensitiveLog = (obj: GetNetworkSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPortalRequestFilterSensitiveLog = (obj: GetPortalRequest): any => ({
  ...obj,
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
export const GetPortalServiceProviderMetadataRequestFilterSensitiveLog = (
  obj: GetPortalServiceProviderMetadataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPortalServiceProviderMetadataResponseFilterSensitiveLog = (
  obj: GetPortalServiceProviderMetadataResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrustStoreRequestFilterSensitiveLog = (obj: GetTrustStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustStoreFilterSensitiveLog = (obj: TrustStore): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrustStoreResponseFilterSensitiveLog = (obj: GetTrustStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrustStoreCertificateRequestFilterSensitiveLog = (obj: GetTrustStoreCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateFilterSensitiveLog = (obj: Certificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrustStoreCertificateResponseFilterSensitiveLog = (obj: GetTrustStoreCertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: GetUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserAccessLoggingSettingsFilterSensitiveLog = (obj: UserAccessLoggingSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: GetUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserSettingsRequestFilterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSettingsFilterSensitiveLog = (obj: UserSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserSettingsResponseFilterSensitiveLog = (obj: GetUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBrowserSettingsRequestFilterSensitiveLog = (obj: ListBrowserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrowserSettingsSummaryFilterSensitiveLog = (obj: BrowserSettingsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBrowserSettingsResponseFilterSensitiveLog = (obj: ListBrowserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProvidersRequestFilterSensitiveLog = (obj: ListIdentityProvidersRequest): any => ({
  ...obj,
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
export const ListNetworkSettingsRequestFilterSensitiveLog = (obj: ListNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkSettingsSummaryFilterSensitiveLog = (obj: NetworkSettingsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworkSettingsResponseFilterSensitiveLog = (obj: ListNetworkSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPortalsRequestFilterSensitiveLog = (obj: ListPortalsRequest): any => ({
  ...obj,
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
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
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
export const ListTrustStoreCertificatesRequestFilterSensitiveLog = (obj: ListTrustStoreCertificatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateSummaryFilterSensitiveLog = (obj: CertificateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrustStoreCertificatesResponseFilterSensitiveLog = (obj: ListTrustStoreCertificatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrustStoresRequestFilterSensitiveLog = (obj: ListTrustStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustStoreSummaryFilterSensitiveLog = (obj: TrustStoreSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTrustStoresResponseFilterSensitiveLog = (obj: ListTrustStoresResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: ListUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserAccessLoggingSettingsSummaryFilterSensitiveLog = (obj: UserAccessLoggingSettingsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: ListUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserSettingsRequestFilterSensitiveLog = (obj: ListUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSettingsSummaryFilterSensitiveLog = (obj: UserSettingsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserSettingsResponseFilterSensitiveLog = (obj: ListUserSettingsResponse): any => ({
  ...obj,
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
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
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
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
export const UpdateNetworkSettingsRequestFilterSensitiveLog = (obj: UpdateNetworkSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkSettingsResponseFilterSensitiveLog = (obj: UpdateNetworkSettingsResponse): any => ({
  ...obj,
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

/**
 * @internal
 */
export const UpdateTrustStoreRequestFilterSensitiveLog = (obj: UpdateTrustStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrustStoreResponseFilterSensitiveLog = (obj: UpdateTrustStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserAccessLoggingSettingsRequestFilterSensitiveLog = (
  obj: UpdateUserAccessLoggingSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserAccessLoggingSettingsResponseFilterSensitiveLog = (
  obj: UpdateUserAccessLoggingSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserSettingsRequestFilterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserSettingsResponseFilterSensitiveLog = (obj: UpdateUserSettingsResponse): any => ({
  ...obj,
});
