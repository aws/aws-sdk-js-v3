// smithy-typescript generated code
import type { ConnectorStatus, ConnectorStatusReason, ConnectorType } from "./enums";

/**
 * For Connector for SCEP for general-purpose. An object containing information about the specified connector's SCEP challenge passwords.
 *
 * @public
 */
export interface Challenge {
  /**
   * The Amazon Resource Name (ARN) of the challenge.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The date and time that the challenge was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the challenge was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The SCEP challenge password, in UUID format.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * Contains details about the connector's challenge.
 *
 * @public
 */
export interface ChallengeMetadata {
  /**
   * The Amazon Resource Name (ARN) of the challenge.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the connector was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Details about the specified challenge, returned by the [GetChallengeMetadata](https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_GetChallengeMetadata.html) action.
 *
 * @public
 */
export interface ChallengeMetadataSummary {
  /**
   * The Amazon Resource Name (ARN) of the challenge.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The date and time that the challenge was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the challenge was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateChallengeRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to create a challenge for.
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * Custom string that can be used to distinguish between calls to the [CreateChallenge](https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_CreateChallenge.html) action. Client tokens for `CreateChallenge` time out after five minutes. Therefore, if you call `CreateChallenge` multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChallengeResponse {
  /**
   * Returns the challenge details for the specified connector.
   *
   * @public
   */
  Challenge?: Challenge | undefined;
}

/**
 * @public
 */
export interface DeleteChallengeRequest {
  /**
   * The Amazon Resource Name (ARN) of the challenge password to delete.
   *
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengeMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) of the challenge.
   *
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengeMetadataResponse {
  /**
   * The metadata for the challenge.
   *
   * @public
   */
  ChallengeMetadata?: ChallengeMetadata | undefined;
}

/**
 * @public
 */
export interface GetChallengePasswordRequest {
  /**
   * The Amazon Resource Name (ARN) of the challenge.
   *
   * @public
   */
  ChallengeArn: string | undefined;
}

/**
 * @public
 */
export interface GetChallengePasswordResponse {
  /**
   * The SCEP challenge password.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * @public
 */
export interface ListChallengeMetadataRequest {
  /**
   * The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface ListChallengeMetadataResponse {
  /**
   * The challenge metadata for the challenges belonging to your Amazon Web Services account.
   *
   * @public
   */
  Challenges?: ChallengeMetadataSummary[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains configuration details for use with Microsoft Intune. For information about using Connector for SCEP for Microsoft Intune, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
 *
 * When you use Connector for SCEP for Microsoft Intune, certain functionalities are enabled by accessing Microsoft Intune through the Microsoft API. Your use of the Connector for SCEP and accompanying Amazon Web Services services doesn't remove your need to have a valid license for your use of the Microsoft Intune service. You should also review the [Microsoft Intune® App Protection Policies](https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy).
 *
 * @public
 */
export interface IntuneConfiguration {
  /**
   * The directory (tenant) ID from your Microsoft Entra ID app registration.
   *
   * @public
   */
  AzureApplicationId: string | undefined;

  /**
   * The primary domain from your Microsoft Entra ID app registration.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. For information about considerations and limitations with using Connector for SCEP, see [Considerations and Limitations](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlc4scep-considerations-limitations.html).
 *
 * If you provide an `IntuneConfiguration`, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
 *
 * @public
 */
export type MobileDeviceManagement =
  | MobileDeviceManagement.IntuneMember
  | MobileDeviceManagement.$UnknownMember;

/**
 * @public
 */
export namespace MobileDeviceManagement {
  /**
   * Configuration settings for use with Microsoft Intune. For information about using Connector for SCEP for Microsoft Intune, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Intune: (value: IntuneConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
 *
 * @public
 */
export interface OpenIdConfiguration {
  /**
   * The issuer value to copy into your Microsoft Entra app registration's OIDC.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The subject value to copy into your Microsoft Entra app registration's OIDC.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The audience value to copy into your Microsoft Entra app registration's OIDC.
   *
   * @public
   */
  Audience?: string | undefined;
}

/**
 * Connector for SCEP is a service that links Amazon Web Services Private Certificate Authority to your SCEP-enabled devices. The connector brokers the exchange of certificates from Amazon Web Services Private CA to your SCEP-enabled devices and mobile device management systems. The connector is a complex type that contains the connector's configuration settings.
 *
 * @public
 */
export interface Connector {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate authority associated with the connector.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * The connector type.
   *
   * @public
   */
  Type?: ConnectorType | undefined;

  /**
   * Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure `MobileDeviceManagement`, then the connector is for general-purpose use and this object is empty.
   *
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * Contains OpenID Connect (OIDC) parameters for use with Connector for SCEP for Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
   *
   * @public
   */
  OpenIdConfiguration?: OpenIdConfiguration | undefined;

  /**
   * The connector's status.
   *
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * Information about why connector creation failed, if status is `FAILED`.
   *
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * The connector's HTTPS public SCEP URL.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the connector was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Lists the Amazon Web Services Private CA SCEP connectors belonging to your Amazon Web Services account.
 *
 * @public
 */
export interface ConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector's associated certificate authority.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * The connector type.
   *
   * @public
   */
  Type?: ConnectorType | undefined;

  /**
   * Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure `MobileDeviceManagement`, then the connector is for general-purpose use and this object is empty.
   *
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune.
   *
   * @public
   */
  OpenIdConfiguration?: OpenIdConfiguration | undefined;

  /**
   * The connector's status. Status can be creating, active, deleting, or failed.
   *
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * Information about why connector creation failed, if status is `FAILED`.
   *
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * The connector's HTTPS public SCEP URL.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The date and time that the challenge was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the challenge was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority certificate authority to use with this connector. Due to security vulnerabilities present in the SCEP protocol, we recommend using a private CA that's dedicated for use with the connector.
   *
   * To retrieve the private CAs associated with your account, you can call [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) using the Amazon Web Services Private CA API.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. With connectors for general-purpose use, you manage SCEP challenge passwords using Connector for SCEP. For information about considerations and limitations with using Connector for SCEP, see [Considerations and Limitations](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlc4scep-considerations-limitations.html).
   *
   * If you provide an `IntuneConfiguration`, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see [Using Connector for SCEP for Microsoft Intune](https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep-intune.html).
   *
   * @public
   */
  MobileDeviceManagement?: MobileDeviceManagement | undefined;

  /**
   * If you don't supply a value, by default Connector for SCEP creates a connector accessible over the public internet. If you provide a VPC endpoint ID, creates a connector accessible only through that specific VPC endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * Custom string that can be used to distinguish between calls to the [CreateChallenge](https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_CreateChallenge.html) action. Client tokens for `CreateChallenge` time out after five minutes. Therefore, if you call `CreateChallenge` multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * Returns the Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector to delete.
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * The properties of the connector.
   *
   * @public
   */
  Connector?: Connector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * The connectors belonging to your Amazon Web Services account.
   *
   * @public
   */
  Connectors?: ConnectorSummary[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies a list of tag keys that you want to remove from the specified resources.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}
