// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PcaConnectorScepServiceException as __BaseException } from "./PcaConnectorScepServiceException";

/**
 * <p>You can receive this error if you attempt to perform an operation and you don't have
 *       the required permissions. This can be caused by insufficient permissions in policies
 *       attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *       because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *       that affects your Amazon Web Services account.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>For Connector for SCEP for general-purpose. An object containing information about the specified connector's SCEP challenge passwords.</p>
 * @public
 */
export interface Challenge {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The date and time that the challenge was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the challenge was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The SCEP challenge password, in UUID format.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>Contains details about the connector's challenge.</p>
 * @public
 */
export interface ChallengeMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The date and time that the connector was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the connector was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Details about the specified challenge, returned by the <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_GetChallengeMetadata.html">GetChallengeMetadata</a> action.</p>
 * @public
 */
export interface ChallengeMetadataSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The date and time that the challenge was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the challenge was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>This request can't be completed for one of the following reasons because the requested
 *       resource was being concurrently modified by another request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type, which can be either <code>Connector</code> or <code>Challenge</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 */
export interface CreateChallengeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to create a challenge for.</p>
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_CreateChallenge.html">CreateChallenge</a> action. Client tokens for <code>CreateChallenge</code> time out after five minutes. Therefore, if you call <code>CreateChallenge</code> multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The key-value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChallengeResponse {
  /**
   * <p>Returns the challenge details for the specified connector.</p>
   * @public
   */
  Challenge?: Challenge | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure with
 *       an internal server.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation tried to access a nonexistent resource. The resource might be incorrectly specified, or it might have a status other than <code>ACTIVE</code>.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type, which can be either <code>Connector</code> or <code>Challenge</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The resource type, which can be either <code>Connector</code> or <code>Challenge</code>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Identifies the originating service.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   * @public
   */
  QuotaCode: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CA_CERT_VALIDITY_TOO_SHORT: "CA_CERT_VALIDITY_TOO_SHORT",
  INVALID_CA_USAGE_MODE: "INVALID_CA_USAGE_MODE",
  INVALID_CONNECTOR_TYPE: "INVALID_CONNECTOR_TYPE",
  INVALID_STATE: "INVALID_STATE",
  NO_CLIENT_TOKEN: "NO_CLIENT_TOKEN",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>An input validation error occurred. For example, invalid characters in a name tag, or an invalid pagination token.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the validation error, if available. The service doesn't return a reason for every validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 */
export interface DeleteChallengeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge password to delete.</p>
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengeMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge.</p>
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengeMetadataResponse {
  /**
   * <p>The metadata for the challenge.</p>
   * @public
   */
  ChallengeMetadata?: ChallengeMetadata | undefined;
}

/**
 * @public
 */
export interface GetChallengePasswordRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the challenge.</p>
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengePasswordResponse {
  /**
   * <p>The SCEP challenge password.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * @public
 */
export interface ListChallengeMetadataRequest {
  /**
   * <p>The maximum number of objects that you want Connector for SCEP to return for this request. If more
   *   objects are available, in the response, Connector for SCEP provides a
   *  <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *  for retrieval exceeds the maximum you requested, Connector for SCEP returns a <code>NextToken</code>
   *  value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface ListChallengeMetadataResponse {
  /**
   * <p>The challenge metadata for the challenges belonging to your Amazon Web Services account.</p>
   * @public
   */
  Challenges?: ChallengeMetadataSummary[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *  for retrieval exceeds the maximum you requested, Connector for SCEP returns a <code>NextToken</code>
   *  value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains configuration details for use with Microsoft Intune. For information about using Connector for SCEP for Microsoft Intune, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
 *          <p>When you use Connector for SCEP for Microsoft Intune, certain functionalities are enabled by accessing Microsoft Intune through the Microsoft API. Your use of the Connector for SCEP and accompanying Amazon Web Services services doesn't remove your need to have a valid license for your use of the Microsoft Intune service. You should also review the <a href="https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy">Microsoft Intune® App Protection Policies</a>.</p>
 * @public
 */
export interface IntuneConfiguration {
  /**
   * <p>The directory (tenant) ID from your Microsoft Entra ID app registration.</p>
   * @public
   */
  AzureApplicationId: string | undefined;

  /**
   * <p>The primary domain from your Microsoft Entra ID app registration.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * <p>If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. For information about considerations and limitations with using Connector for SCEP, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlc4scep-considerations-limitations.html">Considerations and Limitations</a>.</p>
 *          <p>If you provide an <code>IntuneConfiguration</code>, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
 * @public
 */
export type MobileDeviceManagement = MobileDeviceManagement.IntuneMember | MobileDeviceManagement.$UnknownMember;

/**
 * @public
 */
export namespace MobileDeviceManagement {
  /**
   * <p>Configuration settings for use with Microsoft Intune. For information about using Connector for SCEP for Microsoft Intune, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
   * @public
   */
  export interface IntuneMember {
    Intune: IntuneConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Intune?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Intune: (value: IntuneConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MobileDeviceManagement, visitor: Visitor<T>): T => {
    if (value.Intune !== undefined) return visitor.Intune(value.Intune);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
 * @public
 */
export interface OpenIdConfiguration {
  /**
   * <p>The issuer value to copy into your Microsoft Entra app registration's OIDC.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The subject value to copy into your Microsoft Entra app registration's OIDC.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The audience value to copy into your Microsoft Entra app registration's OIDC.</p>
   * @public
   */
  Audience?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * @enum
 */
export const ConnectorStatusReason = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  PRIVATECA_ACCESS_DENIED: "PRIVATECA_ACCESS_DENIED",
  PRIVATECA_INVALID_STATE: "PRIVATECA_INVALID_STATE",
  PRIVATECA_RESOURCE_NOT_FOUND: "PRIVATECA_RESOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type ConnectorStatusReason = (typeof ConnectorStatusReason)[keyof typeof ConnectorStatusReason];

/**
 * @public
 * @enum
 */
export const ConnectorType = {
  GENERAL_PURPOSE: "GENERAL_PURPOSE",
  INTUNE: "INTUNE",
} as const;

/**
 * @public
 */
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType];

/**
 * <p>Connector for SCEP is a service that links Amazon Web Services Private Certificate Authority to your SCEP-enabled devices. The connector brokers the exchange of certificates from Amazon Web Services Private CA to your SCEP-enabled devices and mobile device management systems. The connector is a complex type that contains the connector's configuration settings.</p>
 * @public
 */
export interface Connector {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate authority associated with the connector.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>The connector type.</p>
   * @public
   */
  Type?: ConnectorType | undefined;

  /**
   * <p>Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure <code>MobileDeviceManagement</code>, then the connector is for general-purpose use and this object is empty.</p>
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * <p>Contains OpenID Connect (OIDC) parameters for use with Connector for SCEP for Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
   * @public
   */
  OpenIdConfiguration?: OpenIdConfiguration | undefined;

  /**
   * <p>The connector's status.</p>
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * <p>Information about why connector creation failed, if status is <code>FAILED</code>.</p>
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * <p>The connector's HTTPS public SCEP URL.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The date and time that the connector was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the connector was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Lists the Amazon Web Services Private CA SCEP connectors belonging to your Amazon Web Services account.</p>
 * @public
 */
export interface ConnectorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector's associated certificate authority.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>The connector type.</p>
   * @public
   */
  Type?: ConnectorType | undefined;

  /**
   * <p>Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure <code>MobileDeviceManagement</code>, then the connector is for general-purpose use and this object is empty.</p>
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * <p>Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune.</p>
   * @public
   */
  OpenIdConfiguration?: OpenIdConfiguration | undefined;

  /**
   * <p>The connector's status. Status can be creating, active, deleting, or failed.</p>
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * <p>Information about why connector creation failed, if status is <code>FAILED</code>.</p>
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * <p>The connector's HTTPS public SCEP URL.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The date and time that the challenge was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the challenge was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority certificate authority to use with this connector. Due to security vulnerabilities present in the SCEP protocol, we recommend using a private CA that's dedicated for use with the connector.</p>
   *          <p>To retrieve the private CAs associated with your account, you can call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> using the Amazon Web Services Private CA API.</p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. With connectors for general-purpose use, you manage SCEP challenge passwords using Connector for SCEP. For information about considerations and limitations with using Connector for SCEP, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlc4scep-considerations-limitations.html">Considerations and Limitations</a>.</p>
   *          <p>If you provide an <code>IntuneConfiguration</code>, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html">Using Connector for SCEP for Microsoft Intune</a>.</p>
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_CreateChallenge.html">CreateChallenge</a> action. Client tokens for <code>CreateChallenge</code> time out after five minutes. Therefore, if you call <code>CreateChallenge</code> multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The key-value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>Returns the Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector to delete.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * <p>The properties of the connector.</p>
   * @public
   */
  Connector?: Connector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>The maximum number of objects that you want Connector for SCEP to return for this request. If more
   *   objects are available, in the response, Connector for SCEP provides a
   *  <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *  for retrieval exceeds the maximum you requested, Connector for SCEP returns a <code>NextToken</code>
   *  value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>The connectors belonging to your Amazon Web Services account.</p>
   * @public
   */
  Connectors?: ConnectorSummary[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *  for retrieval exceeds the maximum you requested, Connector for SCEP returns a <code>NextToken</code>
   *  value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pairs to associate with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pairs to associate with the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies a list of tag keys that you want to remove from the specified resources.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const ChallengeFilterSensitiveLog = (obj: Challenge): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChallengeResponseFilterSensitiveLog = (obj: CreateChallengeResponse): any => ({
  ...obj,
  ...(obj.Challenge && { Challenge: ChallengeFilterSensitiveLog(obj.Challenge) }),
});

/**
 * @internal
 */
export const GetChallengePasswordResponseFilterSensitiveLog = (obj: GetChallengePasswordResponse): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});
