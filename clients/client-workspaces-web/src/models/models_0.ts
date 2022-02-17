import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AssociateBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateBrowserSettingsRequest): any => ({
    ...obj,
  });
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

export namespace AssociateBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateBrowserSettingsResponse): any => ({
    ...obj,
  });
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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
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

export namespace AssociateNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateNetworkSettingsRequest): any => ({
    ...obj,
  });
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

export namespace AssociateNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateNetworkSettingsResponse): any => ({
    ...obj,
  });
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

export namespace AssociateTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrustStoreRequest): any => ({
    ...obj,
  });
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

export namespace AssociateTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTrustStoreResponse): any => ({
    ...obj,
  });
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

export namespace AssociateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateUserSettingsRequest): any => ({
    ...obj,
  });
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

export namespace AssociateUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateUserSettingsResponse): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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
  additionalEncryptionContext?: { [key: string]: string };

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

export namespace CreateBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBrowserSettingsRequest): any => ({
    ...obj,
  });
}

export interface CreateBrowserSettingsResponse {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

export namespace CreateBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBrowserSettingsResponse): any => ({
    ...obj,
  });
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
   *                         <code>IDPSignout</code>
   *                         <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  identityProviderDetails: { [key: string]: string } | undefined;

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

export namespace CreateIdentityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIdentityProviderRequest): any => ({
    ...obj,
  });
}

export interface CreateIdentityProviderResponse {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

export namespace CreateIdentityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIdentityProviderResponse): any => ({
    ...obj,
  });
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

export namespace CreateNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkSettingsRequest): any => ({
    ...obj,
  });
}

export interface CreateNetworkSettingsResponse {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

export namespace CreateNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkSettingsResponse): any => ({
    ...obj,
  });
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
  additionalEncryptionContext?: { [key: string]: string };

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

export namespace CreatePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePortalRequest): any => ({
    ...obj,
  });
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

export namespace CreatePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePortalResponse): any => ({
    ...obj,
  });
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

export namespace CreateTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrustStoreRequest): any => ({
    ...obj,
  });
}

export interface CreateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

export namespace CreateTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrustStoreResponse): any => ({
    ...obj,
  });
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

export namespace CreateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserSettingsRequest): any => ({
    ...obj,
  });
}

export interface CreateUserSettingsResponse {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

export namespace CreateUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserSettingsResponse): any => ({
    ...obj,
  });
}

export interface DeleteBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

export namespace DeleteBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBrowserSettingsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBrowserSettingsResponse {}

export namespace DeleteBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBrowserSettingsResponse): any => ({
    ...obj,
  });
}

export interface DeleteIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

export namespace DeleteIdentityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIdentityProviderRequest): any => ({
    ...obj,
  });
}

export interface DeleteIdentityProviderResponse {}

export namespace DeleteIdentityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIdentityProviderResponse): any => ({
    ...obj,
  });
}

export interface DeleteNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

export namespace DeleteNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkSettingsRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkSettingsResponse {}

export namespace DeleteNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNetworkSettingsResponse): any => ({
    ...obj,
  });
}

export interface DeletePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace DeletePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePortalRequest): any => ({
    ...obj,
  });
}

export interface DeletePortalResponse {}

export namespace DeletePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePortalResponse): any => ({
    ...obj,
  });
}

export interface DeleteTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

export namespace DeleteTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrustStoreRequest): any => ({
    ...obj,
  });
}

export interface DeleteTrustStoreResponse {}

export namespace DeleteTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrustStoreResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

export namespace DeleteUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserSettingsRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserSettingsResponse {}

export namespace DeleteUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserSettingsResponse): any => ({
    ...obj,
  });
}

export interface DisassociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace DisassociateBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateBrowserSettingsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateBrowserSettingsResponse {}

export namespace DisassociateBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateBrowserSettingsResponse): any => ({
    ...obj,
  });
}

export interface DisassociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace DisassociateNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateNetworkSettingsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateNetworkSettingsResponse {}

export namespace DisassociateNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateNetworkSettingsResponse): any => ({
    ...obj,
  });
}

export interface DisassociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace DisassociateTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrustStoreRequest): any => ({
    ...obj,
  });
}

export interface DisassociateTrustStoreResponse {}

export namespace DisassociateTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateTrustStoreResponse): any => ({
    ...obj,
  });
}

export interface DisassociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace DisassociateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateUserSettingsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateUserSettingsResponse {}

export namespace DisassociateUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateUserSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   */
  browserSettingsArn: string | undefined;
}

export namespace GetBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBrowserSettingsRequest): any => ({
    ...obj,
  });
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

export namespace BrowserSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrowserSettings): any => ({
    ...obj,
  });
}

export interface GetBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings?: BrowserSettings;
}

export namespace GetBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBrowserSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   */
  identityProviderArn: string | undefined;
}

export namespace GetIdentityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentityProviderRequest): any => ({
    ...obj,
  });
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
  identityProviderDetails?: { [key: string]: string };
}

export namespace IdentityProvider {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityProvider): any => ({
    ...obj,
  });
}

export interface GetIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider?: IdentityProvider;
}

export namespace GetIdentityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentityProviderResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   */
  networkSettingsArn: string | undefined;
}

export namespace GetNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkSettingsRequest): any => ({
    ...obj,
  });
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

export namespace NetworkSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkSettings): any => ({
    ...obj,
  });
}

export interface GetNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings?: NetworkSettings;
}

export namespace GetNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNetworkSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetPortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace GetPortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPortalRequest): any => ({
    ...obj,
  });
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
   * <p>The ARN of the trust store that is associated with the web portal.</p>
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
}

export namespace Portal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Portal): any => ({
    ...obj,
  });
}

export interface GetPortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

export namespace GetPortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPortalResponse): any => ({
    ...obj,
  });
}

export interface GetPortalServiceProviderMetadataRequest {
  /**
   * <p>The ARN of the web portal.</p>
   */
  portalArn: string | undefined;
}

export namespace GetPortalServiceProviderMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPortalServiceProviderMetadataRequest): any => ({
    ...obj,
  });
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

export namespace GetPortalServiceProviderMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPortalServiceProviderMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

export namespace GetTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrustStoreRequest): any => ({
    ...obj,
  });
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

export namespace TrustStore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrustStore): any => ({
    ...obj,
  });
}

export interface GetTrustStoreResponse {
  /**
   * <p>The trust store.</p>
   */
  trustStore?: TrustStore;
}

export namespace GetTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrustStoreResponse): any => ({
    ...obj,
  });
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

export namespace GetTrustStoreCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrustStoreCertificateRequest): any => ({
    ...obj,
  });
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

export namespace Certificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
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

export namespace GetTrustStoreCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrustStoreCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   */
  userSettingsArn: string | undefined;
}

export namespace GetUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
    ...obj,
  });
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
}

export namespace UserSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
}

export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings?: UserSettings;
}

export namespace GetUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserSettingsResponse): any => ({
    ...obj,
  });
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

export namespace ListBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBrowserSettingsRequest): any => ({
    ...obj,
  });
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

export namespace BrowserSettingsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrowserSettingsSummary): any => ({
    ...obj,
  });
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

export namespace ListBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBrowserSettingsResponse): any => ({
    ...obj,
  });
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

export namespace ListIdentityProvidersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIdentityProvidersRequest): any => ({
    ...obj,
  });
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

export namespace IdentityProviderSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityProviderSummary): any => ({
    ...obj,
  });
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

export namespace ListIdentityProvidersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIdentityProvidersResponse): any => ({
    ...obj,
  });
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

export namespace ListNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNetworkSettingsRequest): any => ({
    ...obj,
  });
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

export namespace NetworkSettingsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkSettingsSummary): any => ({
    ...obj,
  });
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

export namespace ListNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNetworkSettingsResponse): any => ({
    ...obj,
  });
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

export namespace ListPortalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPortalsRequest): any => ({
    ...obj,
  });
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
}

export namespace PortalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortalSummary): any => ({
    ...obj,
  });
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

export namespace ListPortalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPortalsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ListTrustStoreCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrustStoreCertificatesRequest): any => ({
    ...obj,
  });
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

export namespace CertificateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateSummary): any => ({
    ...obj,
  });
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

export namespace ListTrustStoreCertificatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrustStoreCertificatesResponse): any => ({
    ...obj,
  });
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

export namespace ListTrustStoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrustStoresRequest): any => ({
    ...obj,
  });
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

export namespace TrustStoreSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrustStoreSummary): any => ({
    ...obj,
  });
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

export namespace ListTrustStoresResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrustStoresResponse): any => ({
    ...obj,
  });
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

export namespace ListUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserSettingsRequest): any => ({
    ...obj,
  });
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
}

export namespace UserSettingsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSettingsSummary): any => ({
    ...obj,
  });
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

export namespace ListUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserSettingsResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateBrowserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrowserSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   */
  browserSettings: BrowserSettings | undefined;
}

export namespace UpdateBrowserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrowserSettingsResponse): any => ({
    ...obj,
  });
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
   * <p>The details of the identity provider.</p>
   */
  identityProviderDetails?: { [key: string]: string };

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

export namespace UpdateIdentityProviderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityProviderRequest): any => ({
    ...obj,
  });
}

export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   */
  identityProvider: IdentityProvider | undefined;
}

export namespace UpdateIdentityProviderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityProviderResponse): any => ({
    ...obj,
  });
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

export namespace UpdateNetworkSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   */
  networkSettings: NetworkSettings | undefined;
}

export namespace UpdateNetworkSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNetworkSettingsResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdatePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePortalRequest): any => ({
    ...obj,
  });
}

export interface UpdatePortalResponse {
  /**
   * <p>The web portal.</p>
   */
  portal?: Portal;
}

export namespace UpdatePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePortalResponse): any => ({
    ...obj,
  });
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

export namespace UpdateTrustStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrustStoreRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   */
  trustStoreArn: string | undefined;
}

export namespace UpdateTrustStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrustStoreResponse): any => ({
    ...obj,
  });
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the AWS
   *          SDK.</p>
   */
  clientToken?: string;
}

export namespace UpdateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  userSettings: UserSettings | undefined;
}

export namespace UpdateUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSettingsResponse): any => ({
    ...obj,
  });
}
