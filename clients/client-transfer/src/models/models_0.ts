// smithy-typescript generated code
import type {
  AgreementStatusType,
  As2Transport,
  CertificateStatusType,
  CertificateType,
  CertificateUsageType,
  CommunicationMode,
  CompressionEnum,
  ConnectorEgressType,
  ConnectorsIpAddressType,
  ConnectorStatus,
  CustomStepStatus,
  DirectoryListingOptimization,
  Domain,
  EncryptionAlg,
  EncryptionType,
  EndpointType,
  EnforceMessageSigningType,
  ExecutionErrorType,
  ExecutionStatus,
  HomeDirectoryType,
  HostKeyStorageType,
  IdentityProviderType,
  IpAddressType,
  MapType,
  MdnResponse,
  MdnSigningAlg,
  OverwriteExisting,
  PreserveContentType,
  PreserveFilenameType,
  ProfileType,
  Protocol,
  ProxyMode,
  SecurityPolicyProtocol,
  SecurityPolicyResourceType,
  SetStatOption,
  SftpAuthenticationMethods,
  SigningAlg,
  State,
  TlsSessionResumptionMode,
  TransferTableStatus,
  WebAppEndpointPolicy,
  WebAppEndpointType,
  WebAppVpcEndpointIpAddressType,
  WorkflowStepType,
} from "./enums";

/**
 * Contains Amazon S3 locations for storing specific types of AS2 message files.
 *
 * @public
 */
export interface CustomDirectoriesType {
  /**
   * Specifies a location to store failed AS2 message files.
   *
   * @public
   */
  FailedFilesDirectory: string | undefined;

  /**
   * Specifies a location to store MDN files.
   *
   * @public
   */
  MdnFilesDirectory: string | undefined;

  /**
   * Specifies a location to store the payload for AS2 message files.
   *
   * @public
   */
  PayloadFilesDirectory: string | undefined;

  /**
   * Specifies a location to store AS2 status messages.
   *
   * @public
   */
  StatusFilesDirectory: string | undefined;

  /**
   * Specifies a location to store temporary AS2 message files.
   *
   * @public
   */
  TemporaryFilesDirectory: string | undefined;
}

/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 *
 * @public
 */
export interface Tag {
  /**
   * The name assigned to the tag that you create.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Contains one or more values that you assigned to the key name you create.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequest {
  /**
   * A name or short description to identify the agreement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier for the AS2 local profile.
   *
   * @public
   */
  LocalProfileId: string | undefined;

  /**
   * A unique identifier for the partner profile used in the agreement.
   *
   * @public
   */
  PartnerProfileId: string | undefined;

  /**
   * The landing directory (folder) for files transferred by using the AS2 protocol.
   *
   * A `BaseDirectory` example is `/amzn-s3-demo-bucket/home/mydirectory`.
   *
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole: string | undefined;

  /**
   * The status of the agreement. The agreement can be either `ACTIVE` or `INACTIVE`.
   *
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * Key-value pairs that can be used to group and search for agreements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
   *
   * - `ENABLED`: the filename provided by your trading parter is preserved when the file is saved.
   * - `DISABLED` (default value): when Transfer Family saves the file, the filename is adjusted, as described in [File names and locations](https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2).
   *
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * Determines whether or not unsigned messages from your trading partners will be accepted.
   *
   * - `ENABLED`: Transfer Family rejects unsigned messages from your trading partner.
   * - `DISABLED` (default value): Transfer Family accepts unsigned messages from your trading partner.
   *
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * A `CustomDirectoriesType` structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.
   *
   * - Failed files
   * - MDN files
   * - Payload files
   * - Status files
   * - Temporary files
   *
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface CreateAgreementResponse {
  /**
   * The unique identifier for the agreement. Use this ID for deleting, or updating an agreement, as well as in any other API calls that require that you specify the agreement ID.
   *
   * @public
   */
  AgreementId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgreementRequest {
  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId: string | undefined;

  /**
   * The server identifier associated with the agreement that you are deleting.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementRequest {
  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId: string | undefined;

  /**
   * The server identifier that's associated with the agreement.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * Describes the properties of an agreement.
 *
 * @public
 */
export interface DescribedAgreement {
  /**
   * The unique Amazon Resource Name (ARN) for the agreement.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId?: string | undefined;

  /**
   * The name or short description that's used to identify the agreement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the agreement, either `ACTIVE` or `INACTIVE`.
   *
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This identifier indicates the specific server that the agreement uses.
   *
   * @public
   */
  ServerId?: string | undefined;

  /**
   * A unique identifier for the AS2 local profile.
   *
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * A unique identifier for the partner profile used in the agreement.
   *
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * The landing directory (folder) for files that are transferred by using the AS2 protocol.
   *
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for agreements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
   *
   * - `ENABLED`: the filename provided by your trading parter is preserved when the file is saved.
   * - `DISABLED` (default value): when Transfer Family saves the file, the filename is adjusted, as described in [File names and locations](https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2).
   *
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * Determines whether or not unsigned messages from your trading partners will be accepted.
   *
   * - `ENABLED`: Transfer Family rejects unsigned messages from your trading partner.
   * - `DISABLED` (default value): Transfer Family accepts unsigned messages from your trading partner.
   *
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * A `CustomDirectoriesType` structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.
   *
   * - Failed files
   * - MDN files
   * - Payload files
   * - Status files
   * - Temporary files
   *
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementResponse {
  /**
   * The details for the specified agreement, returned as a `DescribedAgreement` object.
   *
   * @public
   */
  Agreement: DescribedAgreement | undefined;
}

/**
 * @public
 */
export interface ListAgreementsRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you can get additional results from the `ListAgreements` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional agreements.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The identifier of the server for which you want a list of agreements.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * Describes the properties of an agreement.
 *
 * @public
 */
export interface ListedAgreement {
  /**
   * The Amazon Resource Name (ARN) of the specified agreement.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId?: string | undefined;

  /**
   * The current description for the agreement. You can change it by calling the `UpdateAgreement` operation and providing a new description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The agreement can be either `ACTIVE` or `INACTIVE`.
   *
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * The unique identifier for the agreement.
   *
   * @public
   */
  ServerId?: string | undefined;

  /**
   * A unique identifier for the AS2 local profile.
   *
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * A unique identifier for the partner profile.
   *
   * @public
   */
  PartnerProfileId?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementsResponse {
  /**
   * Returns a token that you can use to call `ListAgreements` again and receive additional results, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns an array, where each item contains the details of an agreement.
   *
   * @public
   */
  Agreements: ListedAgreement[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgreementRequest {
  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that the agreement uses.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * To replace the existing description, provide a short description for the agreement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * You can update the status for the agreement, either activating an inactive agreement or the reverse.
   *
   * @public
   */
  Status?: AgreementStatusType | undefined;

  /**
   * A unique identifier for the AS2 local profile.
   *
   * To change the local profile identifier, provide a new value here.
   *
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * A unique identifier for the partner profile. To change the partner profile identifier, provide a new value here.
   *
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * To change the landing directory (folder) for files that are transferred, provide the bucket folder that you want to use; for example, `/amzn-s3-demo-bucket/home/mydirectory`.
   *
   * @public
   */
  BaseDirectory?: string | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
   *
   * - `ENABLED`: the filename provided by your trading parter is preserved when the file is saved.
   * - `DISABLED` (default value): when Transfer Family saves the file, the filename is adjusted, as described in [File names and locations](https://docs.aws.amazon.com/transfer/latest/userguide/send-as2-messages.html#file-names-as2).
   *
   * @public
   */
  PreserveFilename?: PreserveFilenameType | undefined;

  /**
   * Determines whether or not unsigned messages from your trading partners will be accepted.
   *
   * - `ENABLED`: Transfer Family rejects unsigned messages from your trading partner.
   * - `DISABLED` (default value): Transfer Family accepts unsigned messages from your trading partner.
   *
   * @public
   */
  EnforceMessageSigning?: EnforceMessageSigningType | undefined;

  /**
   * A `CustomDirectoriesType` structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.
   *
   * - Failed files
   * - MDN files
   * - Payload files
   * - Status files
   * - Temporary files
   *
   * @public
   */
  CustomDirectories?: CustomDirectoriesType | undefined;
}

/**
 * @public
 */
export interface UpdateAgreementResponse {
  /**
   * A unique identifier for the agreement. This identifier is returned when you create an agreement.
   *
   * @public
   */
  AgreementId: string | undefined;
}

/**
 * Contains the configuration details for asynchronous Message Disposition Notification (MDN) responses in AS2 connectors. This configuration specifies where asynchronous MDN responses should be sent and which servers should handle them.
 *
 * @public
 */
export interface As2AsyncMdnConnectorConfig {
  /**
   * The URL endpoint where asynchronous MDN responses should be sent.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of server identifiers that can handle asynchronous MDN responses. You can specify between 1 and 10 server IDs.
   *
   * @public
   */
  ServerIds?: string[] | undefined;
}

/**
 * Contains the details for an AS2 connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner.
 *
 * @public
 */
export interface As2ConnectorConfig {
  /**
   * A unique identifier for the AS2 local profile.
   *
   * @public
   */
  LocalProfileId?: string | undefined;

  /**
   * A unique identifier for the partner profile for the connector.
   *
   * @public
   */
  PartnerProfileId?: string | undefined;

  /**
   * Used as the `Subject` HTTP header attribute in AS2 messages that are being sent with the connector.
   *
   * @public
   */
  MessageSubject?: string | undefined;

  /**
   * Specifies whether the AS2 file is compressed.
   *
   * @public
   */
  Compression?: CompressionEnum | undefined;

  /**
   * The algorithm that is used to encrypt the file.
   *
   * Note the following:
   *
   * - Do not use the `DES_EDE3_CBC` algorithm unless you must support a legacy client that requires it, as it is a weak encryption algorithm.
   * - You can only specify `NONE` if the URL for your connector uses HTTPS. Using HTTPS ensures that no traffic is sent in clear text.
   *
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlg | undefined;

  /**
   * The algorithm that is used to sign the AS2 messages sent with the connector.
   *
   * @public
   */
  SigningAlgorithm?: SigningAlg | undefined;

  /**
   * The signing algorithm for the MDN response.
   *
   * > **Note:** If set to DEFAULT (or not set at all), the value for `SigningAlgorithm` is used.
   *
   * @public
   */
  MdnSigningAlgorithm?: MdnSigningAlg | undefined;

  /**
   * Used for outbound requests (from an Transfer Family connector to a partner AS2 server) to determine whether the partner response for transfers is synchronous or asynchronous. Specify either of the following values:
   *
   * - `ASYNC`: The system expects an asynchronous MDN response, confirming that the file was transferred successfully (or not).
   * - `SYNC`: The system expects a synchronous MDN response, confirming that the file was transferred successfully (or not).
   * - `NONE`: Specifies that no MDN response is required.
   *
   * @public
   */
  MdnResponse?: MdnResponse | undefined;

  /**
   * Provides Basic authentication support to the AS2 Connectors API. To use Basic authentication, you must provide the name or Amazon Resource Name (ARN) of a secret in Secrets Manager.
   *
   * The default value for this parameter is `null`, which indicates that Basic authentication is not enabled for the connector.
   *
   * If the connector should use Basic authentication, the secret needs to be in the following format:
   *
   * `\{ "Username": "user-name", "Password": "user-password" \}`
   *
   * Replace `user-name` and `user-password` with the credentials for the actual user that is being authenticated.
   *
   * Note the following:
   *
   * - You are storing these credentials in Secrets Manager, *not passing them directly* into this API.
   * - If you are using the API, SDKs, or CloudFormation to configure your connector, then you must create the secret before you can enable Basic authentication. However, if you are using the Amazon Web Services management console, you can have the system create the secret for you.
   *
   * If you have previously enabled Basic authentication for a connector, you can disable it by using the `UpdateConnector` API call. For example, if you are using the CLI, you can run the following command to remove Basic authentication:
   *
   * `update-connector --connector-id my-connector-id --as2-config 'BasicAuthSecretId=""'`
   *
   * @public
   */
  BasicAuthSecretId?: string | undefined;

  /**
   * Allows you to use the Amazon S3 `Content-Type` that is associated with objects in S3 instead of having the content type mapped based on the file extension. This parameter is enabled by default when you create an AS2 connector from the console, but disabled by default when you create an AS2 connector by calling the API directly.
   *
   * @public
   */
  PreserveContentType?: PreserveContentType | undefined;

  /**
   * Configuration settings for asynchronous Message Disposition Notification (MDN) responses. This allows you to configure where asynchronous MDN responses should be sent and which servers should handle them.
   *
   * @public
   */
  AsyncMdnConfig?: As2AsyncMdnConnectorConfig | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * The identifier of the certificate object that you are deleting.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * Describes the properties of a certificate.
 *
 * @public
 */
export interface DescribedCertificate {
  /**
   * The unique Amazon Resource Name (ARN) for the certificate.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * Specifies how this certificate is used. It can be used in the following ways:
   *
   * - `SIGNING`: For signing AS2 messages
   * - `ENCRYPTION`: For encrypting AS2 messages
   * - `TLS`: For securing AS2 communications sent over HTTPS
   *
   * @public
   */
  Usage?: CertificateUsageType | undefined;

  /**
   * A certificate's status can be either `ACTIVE` or `INACTIVE`.
   *
   * You can set `ActiveDate` and `InactiveDate` in the `UpdateCertificate` call. If you set values for these parameters, those values are used to determine whether the certificate has a status of `ACTIVE` or `INACTIVE`.
   *
   * If you don't set values for `ActiveDate` and `InactiveDate`, we use the `NotBefore` and `NotAfter` date as specified on the X509 certificate to determine when a certificate is active and when it is inactive.
   *
   * @public
   */
  Status?: CertificateStatusType | undefined;

  /**
   * The file name for the certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The list of certificates that make up the chain for the certificate.
   *
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * An optional date that specifies when the certificate becomes active. If you do not specify a value, `ActiveDate` takes the same value as `NotBeforeDate`, which is specified by the CA.
   *
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * An optional date that specifies when the certificate becomes inactive. If you do not specify a value, `InactiveDate` takes the same value as `NotAfterDate`, which is specified by the CA.
   *
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * The serial number for the certificate.
   *
   * @public
   */
  Serial?: string | undefined;

  /**
   * The earliest date that the certificate is valid.
   *
   * @public
   */
  NotBeforeDate?: Date | undefined;

  /**
   * The final date that the certificate is valid.
   *
   * @public
   */
  NotAfterDate?: Date | undefined;

  /**
   * If a private key has been specified for the certificate, its type is `CERTIFICATE_WITH_PRIVATE_KEY`. If there is no private key, the type is `CERTIFICATE`.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * The name or description that's used to identity the certificate.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for certificates.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * The details for the specified certificate, returned as an object.
   *
   * @public
   */
  Certificate: DescribedCertificate | undefined;
}

/**
 * @public
 */
export interface ImportCertificateRequest {
  /**
   * Specifies how this certificate is used. It can be used in the following ways:
   *
   * - `SIGNING`: For signing AS2 messages
   * - `ENCRYPTION`: For encrypting AS2 messages
   * - `TLS`: For securing AS2 communications sent over HTTPS
   *
   * @public
   */
  Usage: CertificateUsageType | undefined;

  /**
   * - For the CLI, provide a file path for a certificate in URI format. For example, `--certificate file://encryption-cert.pem`. Alternatively, you can provide the raw content.
   * - For the SDK, specify the raw content of a certificate file. For example, ``--certificate "`cat encryption-cert.pem`"``.
   *
   * > **Note:** You can provide both the certificate and its chain in this parameter, without needing to use the `CertificateChain` parameter. If you use this parameter for both the certificate and its chain, do not use the `CertificateChain` parameter.
   *
   * @public
   */
  Certificate: string | undefined;

  /**
   * An optional list of certificates that make up the chain for the certificate that's being imported.
   *
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * - For the CLI, provide a file path for a private key in URI format. For example, `--private-key file://encryption-key.pem`. Alternatively, you can provide the raw content of the private key file.
   * - For the SDK, specify the raw content of a private key file. For example, ``--private-key "`cat encryption-key.pem`"``
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * An optional date that specifies when the certificate becomes active. If you do not specify a value, `ActiveDate` takes the same value as `NotBeforeDate`, which is specified by the CA.
   *
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * An optional date that specifies when the certificate becomes inactive. If you do not specify a value, `InactiveDate` takes the same value as `NotAfterDate`, which is specified by the CA.
   *
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * A short description that helps identify the certificate.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for certificates.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you can get additional results from the `ListCertificates` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional certificates.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the properties of a certificate.
 *
 * @public
 */
export interface ListedCertificate {
  /**
   * The Amazon Resource Name (ARN) of the specified certificate.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * Specifies how this certificate is used. It can be used in the following ways:
   *
   * - `SIGNING`: For signing AS2 messages
   * - `ENCRYPTION`: For encrypting AS2 messages
   * - `TLS`: For securing AS2 communications sent over HTTPS
   *
   * @public
   */
  Usage?: CertificateUsageType | undefined;

  /**
   * The certificate can be either `ACTIVE`, `PENDING_ROTATION`, or `INACTIVE`. `PENDING_ROTATION` means that this certificate will replace the current certificate when it expires.
   *
   * @public
   */
  Status?: CertificateStatusType | undefined;

  /**
   * An optional date that specifies when the certificate becomes active. If you do not specify a value, `ActiveDate` takes the same value as `NotBeforeDate`, which is specified by the CA.
   *
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * An optional date that specifies when the certificate becomes inactive. If you do not specify a value, `InactiveDate` takes the same value as `NotAfterDate`, which is specified by the CA.
   *
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * The type for the certificate. If a private key has been specified for the certificate, its type is `CERTIFICATE_WITH_PRIVATE_KEY`. If there is no private key, the type is `CERTIFICATE`.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * The name or short description that's used to identify the certificate.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * Returns the next token, which you can use to list the next certificate.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns an array of the certificates that are specified in the `ListCertificates` call.
   *
   * @public
   */
  Certificates: ListedCertificate[] | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateRequest {
  /**
   * The identifier of the certificate object that you are updating.
   *
   * @public
   */
  CertificateId: string | undefined;

  /**
   * An optional date that specifies when the certificate becomes active. If you do not specify a value, `ActiveDate` takes the same value as `NotBeforeDate`, which is specified by the CA.
   *
   * @public
   */
  ActiveDate?: Date | undefined;

  /**
   * An optional date that specifies when the certificate becomes inactive. If you do not specify a value, `InactiveDate` takes the same value as `NotAfterDate`, which is specified by the CA.
   *
   * @public
   */
  InactiveDate?: Date | undefined;

  /**
   * A short description to help identify the certificate.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateResponse {
  /**
   * Returns the identifier of the certificate object that you are updating.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * VPC_LATTICE egress configuration that specifies the Resource Configuration ARN and port for connecting to SFTP servers through customer VPCs. Requires a valid Resource Configuration with appropriate network access.
 *
 * @public
 */
export interface ConnectorVpcLatticeEgressConfig {
  /**
   * ARN of the VPC_LATTICE Resource Configuration that defines the target SFTP server location. Must point to a valid Resource Configuration in the customer's VPC with appropriate network connectivity to the SFTP server.
   *
   * @public
   */
  ResourceConfigurationArn: string | undefined;

  /**
   * Port number for connecting to the SFTP server through VPC_LATTICE. Defaults to 22 if not specified. Must match the port on which the target SFTP server is listening.
   *
   * @public
   */
  PortNumber?: number | undefined;
}

/**
 * Configuration structure that defines how traffic is routed from the connector to the SFTP server. Contains VPC Lattice settings when using VPC_LATTICE egress type for private connectivity through customer VPCs.
 *
 * @public
 */
export type ConnectorEgressConfig =
  | ConnectorEgressConfig.VpcLatticeMember
  | ConnectorEgressConfig.$UnknownMember;

/**
 * @public
 */
export namespace ConnectorEgressConfig {
  /**
   * VPC_LATTICE configuration for routing connector traffic through customer VPCs. Enables private connectivity to SFTP servers without requiring public internet access or complex network configurations.
   *
   * @public
   */
  export interface VpcLatticeMember {
    VpcLattice: ConnectorVpcLatticeEgressConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VpcLattice?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VpcLattice: (value: ConnectorVpcLatticeEgressConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that contains the details for files transferred using an SFTP connector, during a single transfer.
 *
 * @public
 */
export interface ConnectorFileTransferResult {
  /**
   * The filename and path to where the file was sent to or retrieved from.
   *
   * @public
   */
  FilePath: string | undefined;

  /**
   * The current status for the transfer.
   *
   * @public
   */
  StatusCode: TransferTableStatus | undefined;

  /**
   * For transfers that fail, this parameter contains a code indicating the reason. For example, `RETRIEVE_FILE_NOT_FOUND`
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * For transfers that fail, this parameter describes the reason for the failure.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * Contains the details for an SFTP connector object. The connector object is used for transferring files to and from a partner's SFTP server.
 *
 * @public
 */
export interface SftpConnectorConfig {
  /**
   * The identifier for the secret (in Amazon Web Services Secrets Manager) that contains the SFTP user's private key, password, or both. The identifier must be the Amazon Resource Name (ARN) of the secret.
   *
   * > **Note:**
   * >
   * > - Required when creating an SFTP connector
   * > - Optional when updating an existing SFTP connector
   *
   * @public
   */
  UserSecretId?: string | undefined;

  /**
   * The public portion of the host key, or keys, that are used to identify the external server to which you are connecting. You can use the `ssh-keyscan` command against the SFTP server to retrieve the necessary key.
   *
   * > **Note:** `TrustedHostKeys` is optional for `CreateConnector`. If not provided, you can use `TestConnection` to retrieve the server host key during the initial connection attempt, and subsequently update the connector with the observed host key.
   *
   * When creating connectors with egress config (VPC_LATTICE type connectors), since host name is not something we can verify, the only accepted trusted host key format is `key-type key-body` without the host name. For example: `ssh-rsa AAAAB3Nza...<long-string-for-public-key>`
   *
   * The three standard SSH public key format elements are `<key type>`, `<body base64>`, and an optional `<comment>`, with spaces between each element. Specify only the `<key type>` and `<body base64>`: do not enter the `<comment>` portion of the key.
   *
   * For the trusted host key, Transfer Family accepts RSA and ECDSA keys.
   *
   * - For RSA keys, the `<key type>` string is `ssh-rsa`.
   * - For ECDSA keys, the `<key type>` string is either `ecdsa-sha2-nistp256`, `ecdsa-sha2-nistp384`, or `ecdsa-sha2-nistp521`, depending on the size of the key you generated.
   *
   * Run this command to retrieve the SFTP server host key, where your SFTP server name is `ftp.host.com`.
   *
   * `ssh-keyscan ftp.host.com`
   *
   * This prints the public host key to standard output.
   *
   * `ftp.host.com ssh-rsa AAAAB3Nza...<long-string-for-public-key>`
   *
   * Copy and paste this string into the `TrustedHostKeys` field for the `create-connector` command or into the **Trusted host keys** field in the console.
   *
   * For VPC Lattice type connectors (VPC_LATTICE), remove the hostname from the key and use only the `key-type key-body` format. In this example, it should be: `ssh-rsa AAAAB3Nza...<long-string-for-public-key>`
   *
   * @public
   */
  TrustedHostKeys?: string[] | undefined;

  /**
   * Specify the number of concurrent connections that your connector creates to the remote server. The default value is `1`. The maximum values is `5`.
   *
   * > **Note:** If you are using the Amazon Web Services Management Console, the default value is `5`.
   *
   * This parameter specifies the number of active connections that your connector can establish with the remote server at the same time. Increasing this value can enhance connector performance when transferring large file batches by enabling parallel operations.
   *
   * @public
   */
  MaxConcurrentConnections?: number | undefined;

  /**
   * An ordered list of Amazon Web Services Secrets Manager version stages (staging labels, such as `AWSCURRENT` and `AWSPREVIOUS`) for the secret identified by `UserSecretId`. When establishing a connection, the connector attempts to retrieve the SFTP user's credentials from each version stage in the order listed, and uses the first version it can successfully retrieve. This lets you rotate the user secret without interrupting connector operations.
   *
   * @public
   */
  OrderedUserSecretVersionStages?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * The URL of the partner's AS2 or SFTP endpoint.
   *
   * When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * A structure that contains the parameters for an AS2 connector object.
   *
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A structure that contains the parameters for an SFTP connector object.
   *
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * Specifies the name of the security policy for the connector.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * Specifies the egress configuration for the connector, which determines how traffic is routed from the connector to the SFTP server. When set to VPC, enables routing through customer VPCs using VPC_LATTICE for private connectivity.
   *
   * @public
   */
  EgressConfig?: ConnectorEgressConfig | undefined;

  /**
   * Specifies the IP address type for the connector's network connections. When set to `IPV4`, the connector uses IPv4 addresses only. When set to `DUALSTACK`, the connector supports both IPv4 and IPv6 addresses, with IPv6 preferred when available.
   *
   * @public
   */
  IpAddressType?: ConnectorsIpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * The unique identifier for the connector, returned after the API call succeeds.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * VPC_LATTICE egress configuration details in the response, containing the Resource Configuration ARN and port number currently configured for the connector.
 *
 * @public
 */
export interface DescribedConnectorVpcLatticeEgressConfig {
  /**
   * ARN of the VPC_LATTICE Resource Configuration currently used by the connector. This Resource Configuration defines the network path to the SFTP server through the customer's VPC.
   *
   * @public
   */
  ResourceConfigurationArn: string | undefined;

  /**
   * Port number currently configured for SFTP connections through VPC_LATTICE. Shows the port on which the connector attempts to connect to the target SFTP server.
   *
   * @public
   */
  PortNumber?: number | undefined;
}

/**
 * Response structure containing the current egress configuration details for the connector. Shows how traffic is currently routed from the connector to the SFTP server.
 *
 * @public
 */
export type DescribedConnectorEgressConfig =
  | DescribedConnectorEgressConfig.VpcLatticeMember
  | DescribedConnectorEgressConfig.$UnknownMember;

/**
 * @public
 */
export namespace DescribedConnectorEgressConfig {
  /**
   * VPC_LATTICE configuration details in the response, showing the current Resource Configuration ARN and port settings for VPC-based connectivity.
   *
   * @public
   */
  export interface VpcLatticeMember {
    VpcLattice: DescribedConnectorVpcLatticeEgressConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VpcLattice?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VpcLattice: (value: DescribedConnectorVpcLatticeEgressConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Describes the parameters for the connector, as identified by the `ConnectorId`.
 *
 * @public
 */
export interface DescribedConnector {
  /**
   * The unique Amazon Resource Name (ARN) for the connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * The URL of the partner's AS2 or SFTP endpoint.
   *
   * When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * A structure that contains the parameters for an AS2 connector object.
   *
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for connectors.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A structure that contains the parameters for an SFTP connector object.
   *
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.
   *
   * @public
   */
  ServiceManagedEgressIpAddresses?: string[] | undefined;

  /**
   * The text name of the security policy for the specified connector.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * Current egress configuration of the connector, showing how traffic is routed to the SFTP server. Contains VPC Lattice settings when using VPC_LATTICE egress type.
   *
   * When using the VPC_LATTICE egress type, Transfer Family uses a managed Service Network to simplify the resource sharing process.
   *
   * @public
   */
  EgressConfig?: DescribedConnectorEgressConfig | undefined;

  /**
   * Type of egress configuration for the connector. SERVICE_MANAGED uses Transfer Family managed NAT gateways, while VPC_LATTICE routes traffic through customer VPCs using VPC Lattice.
   *
   * @public
   */
  EgressType: ConnectorEgressType | undefined;

  /**
   * Error message providing details when the connector is in ERRORED status. Contains information to help troubleshoot connector creation or operation failures.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Current status of the connector. PENDING indicates creation/update in progress, ACTIVE means ready for operations, and ERRORED indicates a failure requiring attention.
   *
   * @public
   */
  Status: ConnectorStatus | undefined;

  /**
   * IP address type for the connector's network connections. When set to `IPV4`, the connector uses IPv4 addresses only. When set to `DUALSTACK`, the connector supports both IPv4 and IPv6 addresses, with IPv6 preferred when available.
   *
   * @public
   */
  IpAddressType?: ConnectorsIpAddressType | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * The structure that contains the details of the connector.
   *
   * @public
   */
  Connector: DescribedConnector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you can get additional results from the `ListConnectors` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional connectors.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns details of the connector that is specified.
 *
 * @public
 */
export interface ListedConnector {
  /**
   * The Amazon Resource Name (ARN) of the specified connector.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * The URL of the partner's AS2 or SFTP endpoint.
   *
   * When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * Returns a token that you can use to call `ListConnectors` again and receive additional results, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns an array, where each item contains the details of a connector.
   *
   * @public
   */
  Connectors: ListedConnector[] | undefined;
}

/**
 * VPC_LATTICE egress configuration updates for modifying how the connector routes traffic through customer VPCs. Changes to these settings may require connector restart to take effect.
 *
 * @public
 */
export interface UpdateConnectorVpcLatticeEgressConfig {
  /**
   * Updated ARN of the VPC_LATTICE Resource Configuration. Use this to change the target SFTP server location or modify the network path through the customer's VPC infrastructure.
   *
   * @public
   */
  ResourceConfigurationArn?: string | undefined;

  /**
   * Updated port number for SFTP connections through VPC_LATTICE. Change this if the target SFTP server port has been modified or if connecting to a different server endpoint.
   *
   * @public
   */
  PortNumber?: number | undefined;
}

/**
 * Structure for updating the egress configuration of an existing connector. Allows modification of how traffic is routed from the connector to the SFTP server, including VPC_LATTICE settings.
 *
 * @public
 */
export type UpdateConnectorEgressConfig =
  | UpdateConnectorEgressConfig.VpcLatticeMember
  | UpdateConnectorEgressConfig.$UnknownMember;

/**
 * @public
 */
export namespace UpdateConnectorEgressConfig {
  /**
   * VPC_LATTICE configuration updates for the connector. Use this to modify the Resource Configuration ARN or port number for VPC-based connectivity.
   *
   * @public
   */
  export interface VpcLatticeMember {
    VpcLattice: UpdateConnectorVpcLatticeEgressConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VpcLattice?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VpcLattice: (value: UpdateConnectorVpcLatticeEgressConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The URL of the partner's AS2 or SFTP endpoint.
   *
   * When creating AS2 connectors or service-managed SFTP connectors (connectors without egress configuration), you must provide a URL to specify the remote server endpoint. For VPC Lattice type connectors, the URL must be null.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * A structure that contains the parameters for an AS2 connector object.
   *
   * @public
   */
  As2Config?: As2ConnectorConfig | undefined;

  /**
   * Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the Identity and Access Management role to use.
   *
   * **For AS2 connectors**
   *
   * With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
   *
   * If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
   *
   * **For SFTP connectors**
   *
   * Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to Secrets Manager.
   *
   * @public
   */
  AccessRole?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * A structure that contains the parameters for an SFTP connector object.
   *
   * @public
   */
  SftpConfig?: SftpConnectorConfig | undefined;

  /**
   * Specifies the name of the security policy for the connector.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * Updates the egress configuration for the connector, allowing you to modify how traffic is routed from the connector to the SFTP server. Changes to VPC configuration may require connector restart.
   *
   * @public
   */
  EgressConfig?: UpdateConnectorEgressConfig | undefined;

  /**
   * Specifies the IP address type for the connector's network connections. When set to `IPV4`, the connector uses IPv4 addresses only. When set to `DUALSTACK`, the connector supports both IPv4 and IPv6 addresses, with IPv6 preferred when available.
   *
   * @public
   */
  IpAddressType?: ConnectorsIpAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * Returns the identifier of the connector object that you are updating.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.
 *
 * @public
 */
export interface EfsFileLocation {
  /**
   * The identifier of the file system, assigned by Amazon EFS.
   *
   * @public
   */
  FileSystemId?: string | undefined;

  /**
   * The pathname for the folder being used by a workflow.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Specifies the customer input Amazon S3 file location. If it is used inside `copyStepDetails.DestinationFileLocation`, it should be the S3 copy destination.
 *
 * You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten.
 *
 * For example, if your path is `shared-files/bob/`, your uploaded files are copied to the `shared-files/bob/`, folder. If your path is `shared-files/today`, each uploaded file is copied to the `shared-files` folder and named `today`: each upload overwrites the previous version of the *bob* file.
 *
 * @public
 */
export interface S3InputFileLocation {
  /**
   * Specifies the S3 bucket for the customer input file.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Specifies the location for the file that's being processed.
 *
 * @public
 */
export interface InputFileLocation {
  /**
   * Specifies the details for the Amazon S3 file that's being copied or decrypted.
   *
   * @public
   */
  S3FileLocation?: S3InputFileLocation | undefined;

  /**
   * Specifies the details for the Amazon Elastic File System (Amazon EFS) file that's being decrypted.
   *
   * @public
   */
  EfsFileLocation?: EfsFileLocation | undefined;
}

/**
 * Each step type has its own `StepDetails` structure.
 *
 * @public
 */
export interface CopyStepDetails {
  /**
   * The name of the step, used as an identifier.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the location for the file being copied. Use `$\{Transfer:UserName\}` or `$\{Transfer:UploadDate\}` in this field to parametrize the destination prefix by username or uploaded date.
   *
   * - Set the value of `DestinationFileLocation` to `$\{Transfer:UserName\}` to copy uploaded files to an Amazon S3 bucket that is prefixed with the name of the Transfer Family user that uploaded the file.
   * - Set the value of `DestinationFileLocation` to `$\{Transfer:UploadDate\}` to copy uploaded files to an Amazon S3 bucket that is prefixed with the date of the upload.
   *
   *   > **Note:** The system resolves `UploadDate` to a date format of *YYYY-MM-DD*, based on the date the file is uploaded in UTC.
   *
   * @public
   */
  DestinationFileLocation?: InputFileLocation | undefined;

  /**
   * A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
   *
   * If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
   *
   * - If `OverwriteExisting` is `TRUE`, the existing file is replaced with the file being processed.
   * - If `OverwriteExisting` is `FALSE`, nothing happens, and the workflow processing stops.
   *
   * @public
   */
  OverwriteExisting?: OverwriteExisting | undefined;

  /**
   * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
   *
   * - To use the previous file as the input, enter `$\{previous.file\}`. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
   * - To use the originally uploaded file location as input for this step, enter `$\{original.file\}`.
   *
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * Represents an object that contains entries and targets for `HomeDirectoryMappings`.
 *
 * The following is an `Entry` and `Target` pair example for `chroot`.
 *
 * `[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]`
 *
 * @public
 */
export interface HomeDirectoryMapEntry {
  /**
   * Represents an entry for `HomeDirectoryMappings`.
   *
   * @public
   */
  Entry: string | undefined;

  /**
   * Represents the map target that is used in a `HomeDirectoryMapEntry`.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * Specifies the type of mapping. Set the type to `FILE` if you want the mapping to point to a file, or `DIRECTORY` for the directory to point to a directory.
   *
   * > **Note:** By default, home directory mappings have a `Type` of `DIRECTORY` when you create a Transfer Family server. You would need to explicitly set `Type` to `FILE` if you want a mapping to have a file target.
   *
   * @public
   */
  Type?: MapType | undefined;
}

/**
 * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
 *
 * @public
 */
export interface PosixProfile {
  /**
   * The POSIX user ID used for all EFS operations by this user.
   *
   * @public
   */
  Uid: number | undefined;

  /**
   * The POSIX group ID used for all EFS operations by this user.
   *
   * @public
   */
  Gid: number | undefined;

  /**
   * The secondary POSIX group IDs used for all EFS operations by this user.
   *
   * @public
   */
  SecondaryGids?: number[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessRequest {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * The following is an `Entry` and `Target` pair example.
   *
   * `[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("`chroot`"). To do this, you can set `Entry` to `/` and set `Target` to the `HomeDirectory` parameter value.
   *
   * The following is an `Entry` and `Target` pair example for `chroot`.
   *
   * `[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * > **Note:**
   * >
   * > This policy applies only when the domain of `ServerId` is Amazon S3. Amazon EFS does not use session policies.
   * >
   * > For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
   * >
   * > For an example of a session policy, see [Example session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html).
   * >
   * > For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the *Security Token Service API Reference*.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessResponse {
  /**
   * The identifier of the server that the user is attached to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The external identifier of the group whose users have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family.
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * The `As2Id` is the *AS2-name*, as defined in the [RFC 4130](https://datatracker.ietf.org/doc/html/rfc4130). For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
   *
   * @public
   */
  As2Id: string | undefined;

  /**
   * Determines the type of profile to create:
   *
   * - Specify `LOCAL` to create a local profile. A local profile represents the AS2-enabled Transfer Family server organization or party.
   * - Specify `PARTNER` to create a partner profile. A partner profile represents a remote organization, external to Transfer Family.
   *
   * @public
   */
  ProfileType: ProfileType | undefined;

  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateIds?: string[] | undefined;

  /**
   * Key-value pairs that can be used to group and search for AS2 profiles.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * The unique identifier for the AS2 profile, returned after the API call succeeds.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the `UpdateServer` API and attach an Elastic IP address to your server's endpoint.
 *
 * > **Note:**
 * >
 * > After May 19, 2021, you won't be able to create a server using `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use `EndpointType`=`VPC`.
 * >
 * > For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.
 * >
 * > It is recommended that you use `VPC` as the `EndpointType`. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with `EndpointType` set to `VPC_ENDPOINT`.
 *
 * @public
 */
export interface EndpointDetails {
  /**
   * A list of address allocation IDs that are required to attach an Elastic IP address to your server's endpoint.
   *
   * An address allocation ID corresponds to the allocation ID of an Elastic IP address. This value can be retrieved from the `allocationId` field from the Amazon EC2 [Address](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Address.html) data type. One way to retrieve this value is by calling the EC2 [DescribeAddresses](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html) API.
   *
   * This parameter is optional. Set this parameter if you want to make your VPC endpoint public-facing. For details, see [Create an internet-facing endpoint for your server](https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#create-internet-facing-endpoint).
   *
   * > **Note:**
   * >
   * > This property can only be set as follows:
   * >
   * > - `EndpointType` must be set to `VPC`
   * > - The Transfer Family server must be offline.
   * > - You cannot set this parameter for Transfer Family servers that use the FTP protocol.
   * > - The server must already have `SubnetIds` populated (`SubnetIds` and `AddressAllocationIds` cannot be updated simultaneously).
   * > - `AddressAllocationIds` can't contain duplicates, and must be equal in length to `SubnetIds`. For example, if you have three subnet IDs, you must also specify three address allocation IDs.
   * > - Call the `UpdateServer` API to set or change this parameter.
   * > - You can't set address allocation IDs for servers that have an `IpAddressType` set to `DUALSTACK` You can only set this property if `IpAddressType` is set to `IPV4`.
   *
   * @public
   */
  AddressAllocationIds?: string[] | undefined;

  /**
   * A list of subnet IDs that are required to host your server endpoint in your VPC.
   *
   * > **Note:** This property can only be set when `EndpointType` is set to `VPC`.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The identifier of the VPC endpoint.
   *
   * > **Note:**
   * >
   * > This property can only be set when `EndpointType` is set to `VPC_ENDPOINT`.
   * >
   * > For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The VPC identifier of the VPC in which a server's endpoint will be hosted.
   *
   * > **Note:** This property can only be set when `EndpointType` is set to `VPC`.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of security groups IDs that are available to attach to your server's endpoint.
   *
   * > **Note:**
   * >
   * > While `SecurityGroupIds` appears in the response syntax for consistency with `CreateServer` and `UpdateServer` operations, this field is not populated in `DescribeServer` responses. Security groups are managed at the VPC endpoint level and can be modified outside of the Transfer Family service. To retrieve current security group information, use the EC2 `DescribeVpcEndpoints` API with the `VpcEndpointId` returned in the response.
   * >
   * > This property can only be set when `EndpointType` is set to `VPC`.
   * >
   * > You can edit the `SecurityGroupIds` property in the [UpdateServer](https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html) API only if you are changing the `EndpointType` from `PUBLIC` or `VPC_ENDPOINT` to `VPC`. To change security groups associated with your server's VPC endpoint after creation, use the Amazon EC2 [ModifyVpcEndpoint](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html) API.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
 *
 * @public
 */
export interface IdentityProviderDetails {
  /**
   * Provides the location of the service endpoint used to authenticate users.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * This parameter is only applicable if your `IdentityProviderType` is `API_GATEWAY`. Provides the type of `InvocationRole` used to authenticate the user account.
   *
   * @public
   */
  InvocationRole?: string | undefined;

  /**
   * The identifier of the Directory Service directory that you want to use as your identity provider.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The ARN for a Lambda function to use for the Identity provider.
   *
   * @public
   */
  Function?: string | undefined;

  /**
   * For SFTP-enabled servers, and for custom identity providers *only*, you can specify whether to authenticate using a password, SSH key pair, or both.
   *
   * - `PASSWORD` - users must provide their password to connect.
   * - `PUBLIC_KEY` - users must provide their private key to connect.
   * - `PUBLIC_KEY_OR_PASSWORD` - users can authenticate with either their password or their key. This is the default value.
   * - `PUBLIC_KEY_AND_PASSWORD` - users must provide both their private key and their password to connect. The server checks the key first, and then if the key is valid, the system prompts for a password. If the private key provided does not match the public key that is stored, authentication fails.
   *
   * @public
   */
  SftpAuthenticationMethods?: SftpAuthenticationMethods | undefined;
}

/**
 * Contains configuration for PROXY protocol version 2 (PPv2) support on an Transfer Family server. When enabled, Transfer Family reads the added PPv2 header from incoming connections to extract the client's source IP address. This address is then available in Amazon CloudWatch Logs entries and is passed to custom identity providers during authentication, enabling IP-based access policies. For more information, see [Working with Network Load Balancers](https://docs.aws.amazon.com/transfer/latest/userguide/working-with-nlb.html).
 *
 * @public
 */
export interface ProxyConfig {
  /**
   * Specifies whether the Transfer Family server requires or ignores a PPv2 header containing the client's source IP address on incoming SFTP connections. If you don't specify a value, the default is `NONE`
   *
   * - `NONE`: the server reads and ignores any PPv2 header on incoming SFTP connections. This is the default value. Use this value when your SFTP server is not behind an NLB, or when you do not need to preserve the client's source IP address through an NLB.
   * - `PROXY_PROTOCOL_V2_ENFORCED`: the server requires a valid PPv2 header on every incoming SFTP connection. When a valid header is present, the server applies it and uses the source IP address from the header. If a connection arrives without a PPv2 header, the server refuses the connection and logs an error to Amazon CloudWatch Logs indicating that the expected PPv2 header was missing. Use this value when your SFTP server is behind an NLB with PPv2 enabled on the target group.
   *
   *   > **Important:** With `PROXY_PROTOCOL_V2_ENFORCED` you must restrict the server's VPC endpoint security group to allow inbound traffic only via the trusted NLB. For more information, see [Working with Network Load Balancers](https://docs.aws.amazon.com/transfer/latest/userguide/working-with-nlb.html).
   *
   * @public
   */
  SftpMode?: ProxyMode | undefined;
}

/**
 * Specifies the configuration for a single SFTP port on a Transfer Family server that uses the SFTP protocol and has a `PUBLIC` endpoint. Each entry in the `SftpPorts` list is an `SftpPortWithOptions` object that pairs a port number with a communication mode.
 *
 * @public
 */
export interface SftpPortWithOptions {
  /**
   * The port on which the Transfer Family server listens for SFTP connections. Specify any integer from 2000 to 65535, or 22. This value is required for each entry in the `SftpPorts` list.
   *
   * @public
   */
  SftpPort: number | undefined;

  /**
   * Determines whether the server or the client sends data first when a client establishes an SFTP connection on this port. Valid values are `SERVER_TALK_FIRST` and `CLIENT_TALK_FIRST`. For a description of each mode, see the `SftpPorts` property. This value is optional.
   *
   * @public
   */
  CommunicationMode?: CommunicationMode | undefined;
}

/**
 * The protocol settings that are configured for your server.
 *
 * @public
 */
export interface ProtocolDetails {
  /**
   * Indicates passive mode, for FTP and FTPS protocols. Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer. For example:
   *
   * `aws transfer update-server --protocol-details PassiveIp=0.0.0.0`
   *
   * Replace `0.0.0.0` in the example above with the actual IP address you want to use.
   *
   * > **Note:**
   * >
   * > If you change the `PassiveIp` value, you must stop and then restart your Transfer Family server for the change to take effect. For details on using passive mode (PASV) in a NAT environment, see [Configuring your FTPS server behind a firewall or NAT with Transfer Family](http://aws.amazon.com/blogs/storage/configuring-your-ftps-server-behind-a-firewall-or-nat-with-aws-transfer-family/).
   * >
   * > Additionally, avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers. This configuration increases costs and can cause performance issues. When NLBs or NATs are in the communication path, Transfer Family cannot accurately recognize client IP addresses, which impacts connection sharding and limits FTPS servers to only 300 simultaneous connections instead of 10,000. If you must use an NLB, use port 21 for health checks and enable TLS session resumption by setting `TlsSessionResumptionMode = ENFORCED`. For optimal performance, migrate to VPC endpoints with Elastic IP addresses instead of using NLBs. For more details, see [Avoid placing NLBs and NATs in front of Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/infrastructure-security.html#nlb-considerations).
   *
   * *Special values*
   *
   * The `AUTO` and `0.0.0.0` are special values for the `PassiveIp` parameter. The value `PassiveIp=AUTO` is assigned by default to FTP and FTPS type servers. In this case, the server automatically responds with one of the endpoint IPs within the PASV response. `PassiveIp=0.0.0.0` has a more unique application for its usage. For example, if you have a High Availability (HA) Network Load Balancer (NLB) environment, where you have 3 subnets, you can only specify a single IP address using the `PassiveIp` parameter. This reduces the effectiveness of having High Availability. In this case, you can specify `PassiveIp=0.0.0.0`. This tells the client to use the same IP address as the Control connection and utilize all AZs for their connections. Note, however, that not all FTP clients support the `PassiveIp=0.0.0.0` response. FileZilla and WinSCP do support it. If you are using other clients, check to see if your client supports the `PassiveIp=0.0.0.0` response.
   *
   * @public
   */
  PassiveIp?: string | undefined;

  /**
   * A property used with Transfer Family servers that use the FTPS protocol. TLS Session Resumption provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. `TlsSessionResumptionMode` determines whether or not the server resumes recent, negotiated sessions through a unique session ID. This property is available during `CreateServer` and `UpdateServer` calls. If a `TlsSessionResumptionMode` value is not specified during `CreateServer`, it is set to `ENFORCED` by default.
   *
   * - `DISABLED`: the server does not process TLS session resumption client requests and creates a new TLS session for each request.
   * - `ENABLED`: the server processes and accepts clients that are performing TLS session resumption. The server doesn't reject client data connections that do not perform the TLS session resumption client processing.
   * - `ENFORCED`: the server processes and accepts clients that are performing TLS session resumption. The server rejects client data connections that do not perform the TLS session resumption client processing. Before you set the value to `ENFORCED`, test your clients.
   *
   *   > **Note:** Not all FTPS clients perform TLS session resumption. So, if you choose to enforce TLS session resumption, you prevent any connections from FTPS clients that don't perform the protocol negotiation. To determine whether or not you can use the `ENFORCED` value, you need to test your clients.
   *
   * @public
   */
  TlsSessionResumptionMode?: TlsSessionResumptionMode | undefined;

  /**
   * Use the `SetStatOption` to ignore the error that is generated when the client attempts to use `SETSTAT` on a file you are uploading to an S3 bucket.
   *
   * Some SFTP file transfer clients can attempt to change the attributes of remote files, including timestamp and permissions, using commands, such as `SETSTAT` when uploading the file. However, these commands are not compatible with object storage systems, such as Amazon S3. Due to this incompatibility, file uploads from these clients can result in errors even when the file is otherwise successfully uploaded.
   *
   * Set the value to `ENABLE_NO_OP` to have the Transfer Family server ignore the `SETSTAT` command, and upload files without needing to make any changes to your SFTP client. While the `SetStatOption` `ENABLE_NO_OP` setting ignores the error, it does generate a log entry in Amazon CloudWatch Logs, so you can determine when the client is making a `SETSTAT` call.
   *
   * > **Note:** If you want to preserve the original timestamp for your file, and modify other file attributes using `SETSTAT`, you can use Amazon EFS as backend storage with Transfer Family.
   *
   * @public
   */
  SetStatOption?: SetStatOption | undefined;

  /**
   * A property used with Transfer Family servers that use the SFTP protocol and have `PUBLIC` endpoints. This property accepts a list of up to three port configurations that the service opens on the server endpoint.
   *
   * Each entry in the list consists of two parameters, the `SftpPort` and the `CommunicationMode`. The `SftpPort` takes any integer from 2000 to 65535, or 22. `CommunicationMode` can be one of the following options:
   *
   * - `SERVER_TALK_FIRST`: The server responds to initial TCP connections first. Many older clients expect that an SFTP server responds with its server string before starting SSH negotiations.
   * - `CLIENT_TALK_FIRST`: The server responds to the initial TCP connection only after receiving a data packet. Most modern clients support this behavior and send their client string along with the initial data packets for SSH negotiation. Additionally, this mode is more resilient to TCP retransmissions that can occur during the initial TCP connection.
   *
   * The following is an `SftpPorts` example for port 2222 with `CLIENT_TALK_FIRST`.
   *
   * `[ \{ "SftpPort": 2222, "CommunicationMode": "CLIENT_TALK_FIRST" \} ]`
   *
   * If you don't specify any configurations during `CreateServer`, the service uses port 22 with `SERVER_TALK_FIRST` by default.
   *
   * @public
   */
  SftpPorts?: SftpPortWithOptions[] | undefined;

  /**
   * Indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
   *
   * @public
   */
  As2Transports?: As2Transport[] | undefined;

  /**
   * The configuration for PROXY protocol version 2 (PPv2) support on the Transfer Family server. For more information, see [Working with Network Load Balancers](https://docs.aws.amazon.com/transfer/latest/userguide/working-with-nlb.html).
   *
   * @public
   */
  ProxyConfig?: ProxyConfig | undefined;
}

/**
 * The Amazon S3 storage options that are configured for your server.
 *
 * @public
 */
export interface S3StorageOptions {
  /**
   * Specifies whether or not performance for your Amazon S3 directories is optimized.
   *
   * - If using the console, this is enabled by default.
   * - If using the API or CLI, this is disabled by default.
   *
   * By default, home directory mappings have a `TYPE` of `DIRECTORY`. If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
   *
   * @public
   */
  DirectoryListingOptimization?: DirectoryListingOptimization | undefined;
}

/**
 * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
 *
 * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.
 *
 * @public
 */
export interface WorkflowDetail {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources
   *
   * @public
   */
  ExecutionRole: string | undefined;
}

/**
 * Container for the `WorkflowDetail` data type. It is used by actions that trigger a workflow to begin execution.
 *
 * @public
 */
export interface WorkflowDetails {
  /**
   * A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.
   *
   * To remove an associated workflow from a server, you can provide an empty `OnUpload` object, as in the following example.
   *
   * `aws transfer update-server --server-id s-01234567890abcdef --workflow-details '\{"OnUpload":[]\}'`
   *
   * > **Note:** `OnUpload` can contain a maximum of one `WorkflowDetail` object.
   *
   * @public
   */
  OnUpload?: WorkflowDetail[] | undefined;

  /**
   * A trigger that starts a workflow if a file is only partially uploaded. You can attach a workflow to a server that executes whenever there is a partial upload.
   *
   * A *partial upload* occurs when a file is open when the session disconnects.
   *
   * > **Note:** `OnPartialUpload` can contain a maximum of one `WorkflowDetail` object.
   *
   * @public
   */
  OnPartialUpload?: WorkflowDetail[] | undefined;
}

/**
 * @public
 */
export interface CreateServerRequest {
  /**
   * The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate. Required when `Protocols` is set to `FTPS`.
   *
   * To request a new public certificate, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) in the *Certificate Manager User Guide*.
   *
   * To import an existing certificate into ACM, see [Importing certificates into ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
   *
   * To request a private certificate to use FTPS through private IP addresses, see [Request a private certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html) in the *Certificate Manager User Guide*.
   *
   * Certificates with the following cryptographic algorithms and key sizes are supported:
   *
   * - 2048-bit RSA (RSA_2048)
   * - 4096-bit RSA (RSA_4096)
   * - Elliptic Prime Curve 256 bit (EC_prime256v1)
   * - Elliptic Prime Curve 384 bit (EC_secp384r1)
   * - Elliptic Prime Curve 521 bit (EC_secp521r1)
   *
   * > **Note:** The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.
   *
   * > **Note:** After the server is created, the domain cannot be changed.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
   *
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.
   *
   * > **Note:**
   * >
   * > After May 19, 2021, you won't be able to create a server using `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use `EndpointType`=`VPC`.
   * >
   * > For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.
   * >
   * > It is recommended that you use `VPC` as the `EndpointType`. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with `EndpointType` set to `VPC_ENDPOINT`.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms.
   *
   * Use the following command to generate an RSA 2048 bit key with no passphrase:
   *
   * `ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key`.
   *
   * Use a minimum value of 2048 for the `-b` option. You can create a stronger key by using 3072 or 4096.
   *
   * Use the following command to generate an ECDSA 256 bit key with no passphrase:
   *
   * `ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key`.
   *
   * Valid values for the `-b` option for ECDSA are 256, 384, and 521.
   *
   * Use the following command to generate an ED25519 key with no passphrase:
   *
   * `ssh-keygen -t ed25519 -N "" -f my-new-server-key`.
   *
   * For all of these commands, you can replace *my-new-server-key* with a string of your choice.
   *
   * > **Important:** If you aren't planning to migrate existing users from an existing SFTP-enabled server to a new server, don't update the host key. Accidentally changing a server's host key can be disruptive.
   *
   * For more information, see [Manage host keys for your SFTP-enabled server](https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key) in the *Transfer Family User Guide*.
   *
   * @public
   */
  HostKey?: string | undefined;

  /**
   * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE`, `Amazon Web Services_LAMBDA` or `API_GATEWAY`. Accepts an array containing all of the information required to use a directory in `AWS_DIRECTORY_SERVICE` or invoke a customer-supplied authentication API, including the API Gateway URL. Cannot be specified when `IdentityProviderType` is set to `SERVICE_MANAGED`.
   *
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * The mode of authentication for a server. The default value is `SERVICE_MANAGED`, which allows you to store and access user credentials within the Transfer Family service.
   *
   * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
   *
   * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
   *
   * Use the `AWS_LAMBDA` value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter for the `IdentityProviderDetails` data type.
   *
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
   *
   * > **Note:** The SFTP protocol does not support post-authentication display banners.
   *
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:
   *
   * `This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.`
   *
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:
   *
   * - `SFTP` (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH
   * - `FTPS` (File Transfer Protocol Secure): File transfer with TLS encryption
   * - `FTP` (File Transfer Protocol): Unencrypted file transfer
   * - `AS2` (Applicability Statement 2): used for transporting structured business-to-business data
   *
   * > **Note:**
   * >
   * > - If you select `FTPS`, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.
   * > - If `Protocol` includes either `FTP` or `FTPS`, then the `EndpointType` must be `VPC` and the `IdentityProviderType` must be either `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `FTP`, then `AddressAllocationIds` cannot be associated.
   * > - If `Protocol` is set only to `SFTP`, the `EndpointType` can be set to `PUBLIC` and the `IdentityProviderType` can be set any of the supported identity types: `SERVICE_MANAGED`, `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `AS2`, then the `EndpointType` must be `VPC`, and domain must be Amazon S3.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * The protocol settings that are configured for your server.
   *
   * > **Note:** Avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers, as this increases costs and can cause performance issues, including reduced connection limits for FTPS. For more details, see [Avoid placing NLBs and NATs in front of Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/infrastructure-security.html#nlb-considerations).
   *
   * - To indicate passive mode (for FTP and FTPS protocols), use the `PassiveIp` parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   * - To ignore the error that is generated when the client attempts to use the `SETSTAT` command on a file that you are uploading to an Amazon S3 bucket, use the `SetStatOption` parameter. To have the Transfer Family server ignore the `SETSTAT` command and upload files without needing to make any changes to your SFTP client, set the value to `ENABLE_NO_OP`. If you set the `SetStatOption` parameter to `ENABLE_NO_OP`, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a `SETSTAT` call.
   * - To specify which ports your Transfer Family server listens to, use the `SftpPorts` parameter.
   * - To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the `TlsSessionResumptionMode` parameter.
   * - `As2Transports` indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
   *
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * Specifies the name of the security policy for the server.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for servers.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
   *
   * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.
   *
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * Specifies the log groups to which your server logs are sent.
   *
   * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
   *
   * `arn:partition:logs:region-name:amazon-account-id:log-group:log-group-name:*`
   *
   * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
   *
   * If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an `update-server` call. For example:
   *
   * `update-server --server-id s-1234567890abcdef0 --structured-log-destinations`
   *
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * Specifies whether or not performance for your Amazon S3 directories is optimized.
   *
   * - If using the console, this is enabled by default.
   * - If using the API or CLI, this is disabled by default.
   *
   * By default, home directory mappings have a `TYPE` of `DIRECTORY`. If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
   *
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;

  /**
   * Specifies whether to use IPv4 only, or to use dual-stack (IPv4 and IPv6) for your Transfer Family endpoint. The default value is `IPV4`.
   *
   * > **Important:**
   * >
   * > The `IpAddressType` parameter has the following limitations:
   * >
   * > - It cannot be changed while the server is online. You must stop the server before modifying this parameter.
   * > - It cannot be updated to `DUALSTACK` if the server has `AddressAllocationIds` specified.
   *
   * > **Note:** When using `DUALSTACK` as the `IpAddressType`, you cannot set the `AddressAllocationIds` parameter for the [EndpointDetails](https://docs.aws.amazon.com/transfer/latest/APIReference/API_EndpointDetails.html) for the server.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * Specifies whether the host key is stored by Transfer Family (`SERVICE_MANAGED`) or in Secrets Manager (`SECRETS_MANAGER`). When you specify `SECRETS_MANAGER`, Transfer Family stores the private host key material in an Secrets Manager secret.
   *
   * @public
   */
  HostKeyStorageType?: HostKeyStorageType | undefined;
}

/**
 * @public
 */
export interface CreateServerResponse {
  /**
   * The service-assigned identifier of the server that is created.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * The following is an `Entry` and `Target` pair example.
   *
   * `[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("`chroot`"). To do this, you can set `Entry` to `/` and set `Target` to the value the user should see for their home directory when they log in.
   *
   * The following is an `Entry` and `Target` pair example for `chroot`.
   *
   * `[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * > **Note:**
   * >
   * > This policy applies only when the domain of `ServerId` is Amazon S3. Amazon EFS does not use session policies.
   * >
   * > For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
   * >
   * > For an example of a session policy, see [Example session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html).
   * >
   * > For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the *Amazon Web Services Security Token Service API Reference*.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * Specifies the full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in Amazon EFS determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The public portion of the Secure Shell (SSH) key used to authenticate the user to the server.
   *
   * The three standard SSH public key format elements are `<key type>`, `<body base64>`, and an optional `<comment>`, with spaces between each element.
   *
   * Transfer Family accepts RSA, ECDSA, and ED25519 keys.
   *
   * - For RSA keys, the key type is `ssh-rsa`.
   * - For ED25519 keys, the key type is `ssh-ed25519`.
   * - For ECDSA keys, the key type is either `ecdsa-sha2-nistp256`, `ecdsa-sha2-nistp384`, or `ecdsa-sha2-nistp521`, depending on the size of the key you generated.
   *
   * @public
   */
  SshPublicKeyBody?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A unique string that identifies a user and is associated with a `ServerId`. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The identifier of the server that the user is attached to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique string that identifies a Transfer Family user.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * Contains the VPC configuration settings for hosting a web app endpoint, including the VPC ID, subnet IDs, and security group IDs for access control.
 *
 * @public
 */
export interface WebAppVpcConfig {
  /**
   * The list of subnet IDs within the VPC where the web app endpoint will be deployed. These subnets must be in the same VPC specified in the VpcId parameter.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The identifier of the VPC where the web app endpoint will be hosted.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The list of security group IDs that control access to the web app endpoint. These security groups determine which sources can access the endpoint based on IP addresses and port configurations.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The IP address type for the web app's VPC endpoint. This determines whether the endpoint is accessible over IPv4 only, or over both IPv4 and IPv6.
   *
   * @public
   */
  IpAddressType?: WebAppVpcEndpointIpAddressType | undefined;
}

/**
 * Contains the endpoint configuration for a web app, including VPC settings when the endpoint is hosted within a VPC.
 *
 * @public
 */
export type WebAppEndpointDetails =
  | WebAppEndpointDetails.VpcMember
  | WebAppEndpointDetails.$UnknownMember;

/**
 * @public
 */
export namespace WebAppEndpointDetails {
  /**
   * The VPC configuration for hosting the web app endpoint within a VPC.
   *
   * @public
   */
  export interface VpcMember {
    Vpc: WebAppVpcConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Vpc: (value: WebAppVpcConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that describes the values to use for the IAM Identity Center settings when you create or update a web app.
 *
 * @public
 */
export interface IdentityCenterConfig {
  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The IAM role in IAM Identity Center used for the web app.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * A union that contains the `IdentityCenterConfig` object.
 *
 * @public
 */
export type WebAppIdentityProviderDetails =
  | WebAppIdentityProviderDetails.IdentityCenterConfigMember
  | WebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace WebAppIdentityProviderDetails {
  /**
   * A structure that describes the values to use for the IAM Identity Center settings when you create a web app.
   *
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: IdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IdentityCenterConfig: (value: IdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains an integer value that represents the value for number of concurrent connections or the user sessions on your web app.
 *
 * @public
 */
export type WebAppUnits =
  | WebAppUnits.ProvisionedMember
  | WebAppUnits.$UnknownMember;

/**
 * @public
 */
export namespace WebAppUnits {
  /**
   * An integer that represents the number of units for your desired number of concurrent connections, or the number of user sessions on your web app at the same time.
   *
   * Each increment allows an additional 250 concurrent sessions: a value of `1` sets the number of concurrent sessions to 250; `2` sets a value of 500, and so on.
   *
   * @public
   */
  export interface ProvisionedMember {
    Provisioned: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Provisioned?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Provisioned: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateWebAppRequest {
  /**
   * You can provide a structure that contains the details for the identity provider to use with your web app.
   *
   * For more details about this parameter, see [Configure your identity provider for Transfer Family web apps](https://docs.aws.amazon.com/transfer/latest/userguide/webapp-identity-center.html).
   *
   * @public
   */
  IdentityProviderDetails: WebAppIdentityProviderDetails | undefined;

  /**
   * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
   *
   * Before you enter a custom URL for this parameter, follow the steps described in [Update your access endpoint with a custom URL](https://docs.aws.amazon.com/transfer/latest/userguide/webapp-customize.html).
   *
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * A union that contains the value for number of concurrent connections or the user sessions on your web app.
   *
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;

  /**
   * Key-value pairs that can be used to group and search for web apps.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Setting for the type of endpoint policy for the web app. The default value is `STANDARD`.
   *
   * If you are creating the web app in an Amazon Web Services GovCloud (US) Region, you can set this parameter to `FIPS`.
   *
   * @public
   */
  WebAppEndpointPolicy?: WebAppEndpointPolicy | undefined;

  /**
   * The endpoint configuration for the web app. You can specify whether the web app endpoint is publicly accessible or hosted within a VPC.
   *
   * @public
   */
  EndpointDetails?: WebAppEndpointDetails | undefined;
}

/**
 * @public
 */
export interface CreateWebAppResponse {
  /**
   * Returns a unique identifier for the web app.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * Each step type has its own `StepDetails` structure.
 *
 * @public
 */
export interface CustomStepDetails {
  /**
   * The name of the step, used as an identifier.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN for the Lambda function that is being called.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * Timeout, in seconds, for the step.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
   *
   * - To use the previous file as the input, enter `$\{previous.file\}`. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
   * - To use the originally uploaded file location as input for this step, enter `$\{original.file\}`.
   *
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * Each step type has its own `StepDetails` structure.
 *
 * @public
 */
export interface DecryptStepDetails {
  /**
   * The name of the step, used as an identifier.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of encryption used. Currently, this value must be `PGP`.
   *
   * @public
   */
  Type: EncryptionType | undefined;

  /**
   * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
   *
   * - To use the previous file as the input, enter `$\{previous.file\}`. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
   * - To use the originally uploaded file location as input for this step, enter `$\{original.file\}`.
   *
   * @public
   */
  SourceFileLocation?: string | undefined;

  /**
   * A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
   *
   * If the workflow is processing a file that has the same name as an existing file, the behavior is as follows:
   *
   * - If `OverwriteExisting` is `TRUE`, the existing file is replaced with the file being processed.
   * - If `OverwriteExisting` is `FALSE`, nothing happens, and the workflow processing stops.
   *
   * @public
   */
  OverwriteExisting?: OverwriteExisting | undefined;

  /**
   * Specifies the location for the file being decrypted. Use `$\{Transfer:UserName\}` or `$\{Transfer:UploadDate\}` in this field to parametrize the destination prefix by username or uploaded date.
   *
   * - Set the value of `DestinationFileLocation` to `$\{Transfer:UserName\}` to decrypt uploaded files to an Amazon S3 bucket that is prefixed with the name of the Transfer Family user that uploaded the file.
   * - Set the value of `DestinationFileLocation` to `$\{Transfer:UploadDate\}` to decrypt uploaded files to an Amazon S3 bucket that is prefixed with the date of the upload.
   *
   *   > **Note:** The system resolves `UploadDate` to a date format of *YYYY-MM-DD*, based on the date the file is uploaded in UTC.
   *
   * @public
   */
  DestinationFileLocation: InputFileLocation | undefined;
}

/**
 * The name of the step, used to identify the delete step.
 *
 * @public
 */
export interface DeleteStepDetails {
  /**
   * The name of the step, used as an identifier.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
   *
   * - To use the previous file as the input, enter `$\{previous.file\}`. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
   * - To use the originally uploaded file location as input for this step, enter `$\{original.file\}`.
   *
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
 *
 * @public
 */
export interface S3Tag {
  /**
   * The name assigned to the tag that you create.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value that corresponds to the key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Each step type has its own `StepDetails` structure.
 *
 * The key/value pairs used to tag a file during the execution of a workflow step.
 *
 * @public
 */
export interface TagStepDetails {
  /**
   * The name of the step, used as an identifier.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Array that contains from 1 to 10 key/value pairs.
   *
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow.
   *
   * - To use the previous file as the input, enter `$\{previous.file\}`. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value.
   * - To use the originally uploaded file location as input for this step, enter `$\{original.file\}`.
   *
   * @public
   */
  SourceFileLocation?: string | undefined;
}

/**
 * The basic building block of a workflow.
 *
 * @public
 */
export interface WorkflowStep {
  /**
   * Currently, the following step types are supported.
   *
   * - **`COPY`** - Copy the file to another location.
   * - **`CUSTOM`** - Perform a custom step with an Lambda function target.
   * - **`DECRYPT`** - Decrypt a file that was encrypted before it was uploaded.
   * - **`DELETE`** - Delete the file.
   * - **`TAG`** - Add a tag to the file.
   *
   * @public
   */
  Type?: WorkflowStepType | undefined;

  /**
   * Details for a step that performs a file copy.
   *
   * Consists of the following values:
   *
   * - A description
   * - An Amazon S3 location for the destination of the file copy.
   * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
   *
   * @public
   */
  CopyStepDetails?: CopyStepDetails | undefined;

  /**
   * Details for a step that invokes an Lambda function.
   *
   * Consists of the Lambda function's name, target, and timeout (in seconds).
   *
   * @public
   */
  CustomStepDetails?: CustomStepDetails | undefined;

  /**
   * Details for a step that deletes the file.
   *
   * @public
   */
  DeleteStepDetails?: DeleteStepDetails | undefined;

  /**
   * Details for a step that creates one or more tags.
   *
   * You specify one or more tags. Each tag contains a key-value pair.
   *
   * @public
   */
  TagStepDetails?: TagStepDetails | undefined;

  /**
   * Details for a step that decrypts an encrypted file.
   *
   * Consists of the following values:
   *
   * - A descriptive name
   * - An Amazon S3 or Amazon Elastic File System (Amazon EFS) location for the source file to decrypt.
   * - An S3 or Amazon EFS location for the destination of the file decryption.
   * - A flag that indicates whether to overwrite an existing file of the same name. The default is `FALSE`.
   * - The type of encryption that's used. Currently, only PGP encryption is supported.
   *
   * @public
   */
  DecryptStepDetails?: DecryptStepDetails | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * A textual description for the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the details for the steps that are in the specified workflow.
   *
   * The `TYPE` specifies which of the following actions is being taken for this step.
   *
   * - **`COPY`** - Copy the file to another location.
   * - **`CUSTOM`** - Perform a custom step with an Lambda function target.
   * - **`DECRYPT`** - Decrypt a file that was encrypted before it was uploaded.
   * - **`DELETE`** - Delete the file.
   * - **`TAG`** - Add a tag to the file.
   *
   * > **Note:** Currently, copying and tagging are supported only on S3.
   *
   * For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID and path.
   *
   * @public
   */
  Steps: WorkflowStep[] | undefined;

  /**
   * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
   *
   * > **Note:** For custom steps, the Lambda function needs to send `FAILURE` to the call back API to kick off the exception steps. Additionally, if the Lambda does not send `SUCCESS` before it times out, the exception steps are executed.
   *
   * @public
   */
  OnExceptionSteps?: WorkflowStep[] | undefined;

  /**
   * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the log groups to which your workflow logs are sent.
   *
   * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
   *
   * `arn:partition:logs:region-name:amazon-account-id:log-group:log-group-name:*`
   *
   * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
   *
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * Represents a custom HTTP header that can be included in AS2 messages. Each header consists of a key-value pair.
 *
 * @public
 */
export interface CustomHttpHeader {
  /**
   * The name of the custom HTTP header.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the custom HTTP header.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessRequest {
  /**
   * A system-assigned unique identifier for a server that has this user assigned.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostKeyRequest {
  /**
   * The identifier of the server that contains the host key that you are deleting.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The identifier of the host key that you are deleting.
   *
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * The identifier of the profile that you are deleting.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerRequest {
  /**
   * A unique system-assigned identifier for a server instance.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSshPublicKeyRequest {
  /**
   * A system-assigned unique identifier for a file transfer protocol-enabled server instance that has the user assigned to it.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier used to reference your user's specific SSH key.
   *
   * @public
   */
  SshPublicKeyId: string | undefined;

  /**
   * A unique string that identifies a user whose public key is being deleted.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * A system-assigned unique identifier for a server instance that has the user assigned to it.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique string that identifies a user that is being deleted from a server.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebAppRequest {
  /**
   * Provide the unique identifier for the web app that you are deleting.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebAppCustomizationRequest {
  /**
   * Provide the unique identifier for the web app that contains the customizations that you are deleting.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessRequest {
  /**
   * A system-assigned unique identifier for a server that has this access assigned.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * Describes the properties of the access that was specified.
 *
 * @public
 */
export interface DescribedAccess {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * In most cases, you can use this value instead of the session policy to lock down the associated access to the designated home directory ("`chroot`"). To do this, you can set `Entry` to '/' and set `Target` to the `HomeDirectory` parameter value.
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessResponse {
  /**
   * A system-assigned unique identifier for a server that has this access assigned.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The external identifier of the server that the access is attached to.
   *
   * @public
   */
  Access: DescribedAccess | undefined;
}

/**
 * Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage.
 *
 * @public
 */
export interface S3FileLocation {
  /**
   * Specifies the S3 bucket that contains the file being used.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The name assigned to the file when it was created in Amazon S3. You use the object key to retrieve the object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Specifies the file version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata.
   *
   * @public
   */
  Etag?: string | undefined;
}

/**
 * Specifies the Amazon S3 or EFS file details to be used in the step.
 *
 * @public
 */
export interface FileLocation {
  /**
   * Specifies the S3 details for the file being used, such as bucket, ETag, and so forth.
   *
   * @public
   */
  S3FileLocation?: S3FileLocation | undefined;

  /**
   * Specifies the Amazon EFS identifier and the path for the file being used.
   *
   * @public
   */
  EfsFileLocation?: EfsFileLocation | undefined;
}

/**
 * Consists of the logging role and the log group name.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * The name of the CloudWatch logging group for the Transfer Family server to which this workflow belongs.
   *
   * @public
   */
  LogGroupName?: string | undefined;
}

/**
 * Specifies the error message and type, for an error that occurs during the execution of the workflow.
 *
 * @public
 */
export interface ExecutionError {
  /**
   * Specifies the error type.
   *
   * - `ALREADY_EXISTS`: occurs for a copy step, if the overwrite option is not selected and a file with the same name already exists in the target location.
   * - `BAD_REQUEST`: a general bad request: for example, a step that attempts to tag an EFS file returns `BAD_REQUEST`, as only S3 files can be tagged.
   * - `CUSTOM_STEP_FAILED`: occurs when the custom step provided a callback that indicates failure.
   * - `INTERNAL_SERVER_ERROR`: a catch-all error that can occur for a variety of reasons.
   * - `NOT_FOUND`: occurs when a requested entity, for example a source file for a copy step, does not exist.
   * - `PERMISSION_DENIED`: occurs if your policy does not contain the correct permissions to complete one or more of the steps in the workflow.
   * - `TIMEOUT`: occurs when the execution times out.
   *
   *   > **Note:** You can set the `TimeoutSeconds` for a custom step, anywhere from 1 second to 1800 seconds (30 minutes).
   * - `THROTTLED`: occurs if you exceed the new execution refill rate of one workflow per second.
   *
   * @public
   */
  Type: ExecutionErrorType | undefined;

  /**
   * Specifies the descriptive message that corresponds to the `ErrorType`.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Specifies the following details for the step: error (if any), outputs (if any), and the step type.
 *
 * @public
 */
export interface ExecutionStepResult {
  /**
   * One of the available step types.
   *
   * - **`COPY`** - Copy the file to another location.
   * - **`CUSTOM`** - Perform a custom step with an Lambda function target.
   * - **`DECRYPT`** - Decrypt a file that was encrypted before it was uploaded.
   * - **`DELETE`** - Delete the file.
   * - **`TAG`** - Add a tag to the file.
   *
   * @public
   */
  StepType?: WorkflowStepType | undefined;

  /**
   * The values for the key/value pair applied as a tag to the file. Only applicable if the step type is `TAG`.
   *
   * @public
   */
  Outputs?: string | undefined;

  /**
   * Specifies the details for an error, if it occurred during execution of the specified workflow step.
   *
   * @public
   */
  Error?: ExecutionError | undefined;
}

/**
 * Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
 *
 * @public
 */
export interface ExecutionResults {
  /**
   * Specifies the details for the steps that are in the specified workflow.
   *
   * @public
   */
  Steps?: ExecutionStepResult[] | undefined;

  /**
   * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
   *
   * @public
   */
  OnExceptionSteps?: ExecutionStepResult[] | undefined;
}

/**
 * Specifies the user name, server ID, and session ID for a workflow.
 *
 * @public
 */
export interface UserDetails {
  /**
   * A unique string that identifies a Transfer Family user associated with a server.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The system-assigned unique identifier for a Transfer server instance.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The system-assigned unique identifier for a session that corresponds to the workflow.
   *
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * A container object for the session details that are associated with a workflow.
 *
 * @public
 */
export interface ServiceMetadata {
  /**
   * The Server ID (`ServerId`), Session ID (`SessionId`) and user (`UserName`) make up the `UserDetails`.
   *
   * @public
   */
  UserDetails: UserDetails | undefined;
}

/**
 * The details for an execution object.
 *
 * @public
 */
export interface DescribedExecution {
  /**
   * A unique identifier for the execution of a workflow.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * A structure that describes the Amazon S3 or EFS file location. This is the file location when the execution begins: if the file is being copied, this is the initial (as opposed to destination) file location.
   *
   * @public
   */
  InitialFileLocation?: FileLocation | undefined;

  /**
   * A container object for the session details that are associated with a workflow.
   *
   * @public
   */
  ServiceMetadata?: ServiceMetadata | undefined;

  /**
   * The IAM role associated with the execution.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The IAM logging role associated with the execution.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.
   *
   * @public
   */
  Status?: ExecutionStatus | undefined;

  /**
   * A structure that describes the execution results. This includes a list of the steps along with the details of each step, error type and message (if any), and the `OnExceptionSteps` structure.
   *
   * @public
   */
  Results?: ExecutionResults | undefined;
}

/**
 * The details for a server host key.
 *
 * @public
 */
export interface DescribedHostKey {
  /**
   * The unique Amazon Resource Name (ARN) for the host key.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique identifier for the host key.
   *
   * @public
   */
  HostKeyId?: string | undefined;

  /**
   * The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.
   *
   * @public
   */
  HostKeyFingerprint?: string | undefined;

  /**
   * The text description for this host key.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The encryption algorithm that is used for the host key. The `Type` parameter is specified by using one of the following values:
   *
   * - `ssh-rsa`
   * - `ssh-ed25519`
   * - `ecdsa-sha2-nistp256`
   * - `ecdsa-sha2-nistp384`
   * - `ecdsa-sha2-nistp521`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date on which the host key was added to the server.
   *
   * @public
   */
  DateImported?: Date | undefined;

  /**
   * Key-value pairs that can be used to group and search for host keys.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the host key is stored by Transfer Family (`SERVICE_MANAGED`) or in Secrets Manager (`SECRETS_MANAGER`).
   *
   * @public
   */
  StorageType?: HostKeyStorageType | undefined;

  /**
   * The ARN of the Secrets Manager secret that stores the host key material, when `StorageType` is `SECRETS_MANAGER`.
   *
   * @public
   */
  SecretId?: string | undefined;
}

/**
 * A structure that contains the details of the IAM Identity Center used for your web app. Returned during a call to `DescribeWebApp`.
 *
 * @public
 */
export interface DescribedIdentityCenterConfig {
  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center application: this value is set automatically when you create your web app.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The IAM role in IAM Identity Center used for the web app.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * The details for a local or partner AS2 profile.
 *
 * @public
 */
export interface DescribedProfile {
  /**
   * The unique Amazon Resource Name (ARN) for the profile.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique identifier for the local or partner AS2 profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles. If not supplied in the request, the command lists all types of profiles.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * The `As2Id` is the *AS2-name*, as defined in the [RFC 4130](https://datatracker.ietf.org/doc/html/rfc4130). For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
   *
   * @public
   */
  As2Id?: string | undefined;

  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateIds?: string[] | undefined;

  /**
   * Key-value pairs that can be used to group and search for profiles.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes the properties of a security policy that you specify. For more information about security policies, see [Working with security policies for servers](https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html) or [Working with security policies for SFTP connectors](https://docs.aws.amazon.com/transfer/latest/userguide/security-policies-connectors.html).
 *
 * @public
 */
export interface DescribedSecurityPolicy {
  /**
   * Specifies whether this policy enables Federal Information Processing Standards (FIPS). This parameter applies to both server and connector security policies.
   *
   * @public
   */
  Fips?: boolean | undefined;

  /**
   * The text name of the specified security policy.
   *
   * @public
   */
  SecurityPolicyName: string | undefined;

  /**
   * Lists the enabled Secure Shell (SSH) cipher encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.
   *
   * @public
   */
  SshCiphers?: string[] | undefined;

  /**
   * Lists the enabled SSH key exchange (KEX) encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.
   *
   * @public
   */
  SshKexs?: string[] | undefined;

  /**
   * Lists the enabled SSH message authentication code (MAC) encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.
   *
   * @public
   */
  SshMacs?: string[] | undefined;

  /**
   * Lists the enabled Transport Layer Security (TLS) cipher encryption algorithms in the security policy that is attached to the server.
   *
   * > **Note:** This parameter only applies to security policies for servers.
   *
   * @public
   */
  TlsCiphers?: string[] | undefined;

  /**
   * Lists the host key algorithms for the security policy.
   *
   * > **Note:** This parameter only applies to security policies for connectors.
   *
   * @public
   */
  SshHostKeyAlgorithms?: string[] | undefined;

  /**
   * The resource type to which the security policy applies, either server or connector.
   *
   * @public
   */
  Type?: SecurityPolicyResourceType | undefined;

  /**
   * Lists the file transfer protocols that the security policy applies to.
   *
   * @public
   */
  Protocols?: SecurityPolicyProtocol[] | undefined;
}

/**
 * Describes the properties of a file transfer protocol-enabled server that was specified.
 *
 * @public
 */
export interface DescribedServer {
  /**
   * Specifies the unique Amazon Resource Name (ARN) of the server.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when `Protocols` is set to `FTPS`.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The protocol settings that are configured for your server.
   *
   * > **Note:** Avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers, as this increases costs and can cause performance issues, including reduced connection limits for FTPS. For more details, see [Avoid placing NLBs and NATs in front of Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/infrastructure-security.html#nlb-considerations).
   *
   * - To indicate passive mode (for FTP and FTPS protocols), use the `PassiveIp` parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   * - To ignore the error that is generated when the client attempts to use the `SETSTAT` command on a file that you are uploading to an Amazon S3 bucket, use the `SetStatOption` parameter. To have the Transfer Family server ignore the `SETSTAT` command and upload files without needing to make any changes to your SFTP client, set the value to `ENABLE_NO_OP`. If you set the `SetStatOption` parameter to `ENABLE_NO_OP`, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a `SETSTAT` call.
   * - To specify which ports your Transfer Family server listens to, use the `SftpPorts` parameter.
   * - To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the `TlsSessionResumptionMode` parameter.
   * - `As2Transports` indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
   *
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * Specifies the domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
   *
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * Defines the type of endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value is equivalent to the output of the `ssh-keygen -l -f my-new-server-key` command.
   *
   * @public
   */
  HostKeyFingerprint?: string | undefined;

  /**
   * Specifies information to call a customer-supplied authentication API. This field is not populated when the `IdentityProviderType` of a server is `AWS_DIRECTORY_SERVICE` or `SERVICE_MANAGED`.
   *
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * The mode of authentication for a server. The default value is `SERVICE_MANAGED`, which allows you to store and access user credentials within the Transfer Family service.
   *
   * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
   *
   * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
   *
   * Use the `AWS_LAMBDA` value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter for the `IdentityProviderDetails` data type.
   *
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
   *
   * > **Note:** The SFTP protocol does not support post-authentication display banners.
   *
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:
   *
   * `This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.`
   *
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:
   *
   * - `SFTP` (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH
   * - `FTPS` (File Transfer Protocol Secure): File transfer with TLS encryption
   * - `FTP` (File Transfer Protocol): Unencrypted file transfer
   * - `AS2` (Applicability Statement 2): used for transporting structured business-to-business data
   *
   * > **Note:**
   * >
   * > - If you select `FTPS`, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.
   * > - If `Protocol` includes either `FTP` or `FTPS`, then the `EndpointType` must be `VPC` and the `IdentityProviderType` must be either `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `FTP`, then `AddressAllocationIds` cannot be associated.
   * > - If `Protocol` is set only to `SFTP`, the `EndpointType` can be set to `PUBLIC` and the `IdentityProviderType` can be set any of the supported identity types: `SERVICE_MANAGED`, `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `AS2`, then the `EndpointType` must be `VPC`, and domain must be Amazon S3.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * Specifies the name of the security policy for the server.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * Specifies the unique system-assigned identifier for a server that you instantiate.
   *
   * @public
   */
  ServerId?: string | undefined;

  /**
   * The condition of the server that was described. A value of `ONLINE` indicates that the server can accept jobs and transfer files. A `State` value of `OFFLINE` means that the server cannot perform file transfer operations.
   *
   * The states of `STARTING` and `STOPPING` indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of `START_FAILED` or `STOP_FAILED` can indicate an error condition.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the number of users that are assigned to a server you specified with the `ServerId`.
   *
   * @public
   */
  UserCount?: number | undefined;

  /**
   * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
   *
   * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.
   *
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * Specifies the log groups to which your server logs are sent.
   *
   * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
   *
   * `arn:partition:logs:region-name:amazon-account-id:log-group:log-group-name:*`
   *
   * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
   *
   * If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an `update-server` call. For example:
   *
   * `update-server --server-id s-1234567890abcdef0 --structured-log-destinations`
   *
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * Specifies whether or not performance for your Amazon S3 directories is optimized.
   *
   * - If using the console, this is enabled by default.
   * - If using the API or CLI, this is disabled by default.
   *
   * By default, home directory mappings have a `TYPE` of `DIRECTORY`. If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
   *
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;

  /**
   * The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs.
   *
   * These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.
   *
   * @public
   */
  As2ServiceManagedEgressIpAddresses?: string[] | undefined;

  /**
   * Specifies whether to use IPv4 only, or to use dual-stack (IPv4 and IPv6) for your Transfer Family endpoint. The default value is `IPV4`.
   *
   * > **Important:**
   * >
   * > The `IpAddressType` parameter has the following limitations:
   * >
   * > - It cannot be changed while the server is online. You must stop the server before modifying this parameter.
   * > - It cannot be updated to `DUALSTACK` if the server has `AddressAllocationIds` specified.
   *
   * > **Note:** When using `DUALSTACK` as the `IpAddressType`, you cannot set the `AddressAllocationIds` parameter for the [EndpointDetails](https://docs.aws.amazon.com/transfer/latest/APIReference/API_EndpointDetails.html) for the server.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * Provides information about the public Secure Shell (SSH) key that is associated with a Transfer Family user for the specific file transfer protocol-enabled server (as identified by `ServerId`). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
 *
 * @public
 */
export interface SshPublicKey {
  /**
   * Specifies the date that the public key was added to the Transfer Family user.
   *
   * @public
   */
  DateImported: Date | undefined;

  /**
   * Specifies the content of the SSH public key as specified by the `PublicKeyId`.
   *
   * Transfer Family accepts RSA, ECDSA, and ED25519 keys.
   *
   * @public
   */
  SshPublicKeyBody: string | undefined;

  /**
   * Specifies the `SshPublicKeyId` parameter contains the identifier of the public key.
   *
   * @public
   */
  SshPublicKeyId: string | undefined;
}

/**
 * Describes the properties of a user that was specified.
 *
 * @public
 */
export interface DescribedUser {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the user that was requested to be described.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("`chroot`"). To do this, you can set `Entry` to '/' and set `Target` to the HomeDirectory parameter value.
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * Specifies the full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.
   *
   * > **Note:**
   * >
   * > To delete the public key body, set its value to zero keys, as shown here:
   * >
   * > `SshPublicKeys: []`
   *
   * @public
   */
  SshPublicKeys?: SshPublicKey[] | undefined;

  /**
   * Specifies the key-value pairs for the user requested. Tag can be used to search for and group users for a variety of purposes.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the name of the user that was requested to be described. User names are used for authentication purposes. This is the string that will be used by your user when they log in to your server.
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * Contains the VPC configuration details for a web app endpoint, including the VPC identifier, subnet IDs, and VPC endpoint ID used for hosting the endpoint.
 *
 * @public
 */
export interface DescribedWebAppVpcConfig {
  /**
   * The list of subnet IDs within the VPC where the web app endpoint is deployed. These subnets must be in the same VPC and provide network connectivity for the endpoint.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The identifier of the VPC where the web app endpoint is hosted.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The identifier of the VPC endpoint created for the web app.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * Contains the endpoint configuration details for a web app, including VPC configuration when the endpoint is hosted within a VPC.
 *
 * @public
 */
export type DescribedWebAppEndpointDetails =
  | DescribedWebAppEndpointDetails.VpcMember
  | DescribedWebAppEndpointDetails.$UnknownMember;

/**
 * @public
 */
export namespace DescribedWebAppEndpointDetails {
  /**
   * The VPC configuration details when the web app endpoint is hosted within a VPC. This includes the VPC ID, subnet IDs, and VPC endpoint ID.
   *
   * @public
   */
  export interface VpcMember {
    Vpc: DescribedWebAppVpcConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Vpc: (value: DescribedWebAppVpcConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Returns a structure that contains the identity provider details for your web app.
 *
 * @public
 */
export type DescribedWebAppIdentityProviderDetails =
  | DescribedWebAppIdentityProviderDetails.IdentityCenterConfigMember
  | DescribedWebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace DescribedWebAppIdentityProviderDetails {
  /**
   * Returns a structure for your identity provider details. This structure contains the instance ARN and role being used for the web app.
   *
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: DescribedIdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IdentityCenterConfig: (value: DescribedIdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that describes the parameters for the web app, as identified by the `WebAppId`.
 *
 * @public
 */
export interface DescribedWebApp {
  /**
   * The Amazon Resource Name (ARN) of the web app.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the web app.
   *
   * @public
   */
  WebAppId: string | undefined;

  /**
   * A structure that contains the details for the identity provider used by the web app.
   *
   * @public
   */
  DescribedIdentityProviderDetails?: DescribedWebAppIdentityProviderDetails | undefined;

  /**
   * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
   *
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * The `WebAppEndpoint` is the unique URL for your Transfer Family web app. This is the value that you use when you configure **Origins** on CloudFront.
   *
   * @public
   */
  WebAppEndpoint?: string | undefined;

  /**
   * A union that contains the value for number of concurrent connections or the user sessions on your web app.
   *
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;

  /**
   * Key-value pairs that can be used to group and search for web apps. Tags are metadata attached to web apps for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Setting for the type of endpoint policy for the web app. The default value is `STANDARD`.
   *
   * If your web app was created in an Amazon Web Services GovCloud (US) Region, the value of this parameter can be `FIPS`, which indicates the web app endpoint is FIPS-compliant.
   *
   * @public
   */
  WebAppEndpointPolicy?: WebAppEndpointPolicy | undefined;

  /**
   * The type of endpoint hosting the web app. Valid values are `PUBLIC` for publicly accessible endpoints and `VPC` for VPC-hosted endpoints that provide network isolation.
   *
   * @public
   */
  EndpointType?: WebAppEndpointType | undefined;

  /**
   * The endpoint configuration details for the web app, including VPC settings if the endpoint is hosted within a VPC.
   *
   * @public
   */
  DescribedEndpointDetails?: DescribedWebAppEndpointDetails | undefined;
}

/**
 * A structure that contains the customization fields for the web app. You can provide a title, logo, and icon to customize the appearance of your web app.
 *
 * @public
 */
export interface DescribedWebAppCustomization {
  /**
   * Returns the Amazon Resource Name (ARN) for the web app.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Returns the unique identifier for your web app.
   *
   * @public
   */
  WebAppId: string | undefined;

  /**
   * Returns the page title that you defined for your web app.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Returns a logo file data string (in base64 encoding).
   *
   * @public
   */
  LogoFile?: Uint8Array | undefined;

  /**
   * Returns an icon file data string (in base64 encoding).
   *
   * @public
   */
  FaviconFile?: Uint8Array | undefined;
}

/**
 * Describes the properties of the specified workflow
 *
 * @public
 */
export interface DescribedWorkflow {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the workflow.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Specifies the text description for the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the details for the steps that are in the specified workflow.
   *
   * @public
   */
  Steps?: WorkflowStep[] | undefined;

  /**
   * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
   *
   * @public
   */
  OnExceptionSteps?: WorkflowStep[] | undefined;

  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the log groups to which your workflow logs are sent.
   *
   * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
   *
   * `arn:partition:logs:region-name:amazon-account-id:log-group:log-group-name:*`
   *
   * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
   *
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionRequest {
  /**
   * A unique identifier for the execution of a workflow.
   *
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionResponse {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * The structure that contains the details of the workflow' execution.
   *
   * @public
   */
  Execution: DescribedExecution | undefined;
}

/**
 * @public
 */
export interface DescribeHostKeyRequest {
  /**
   * The identifier of the server that contains the host key that you want described.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The identifier of the host key that you want described.
   *
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeHostKeyResponse {
  /**
   * Returns the details for the specified host key.
   *
   * @public
   */
  HostKey: DescribedHostKey | undefined;
}

/**
 * @public
 */
export interface DescribeProfileRequest {
  /**
   * The identifier of the profile that you want described.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DescribeProfileResponse {
  /**
   * The details of the specified profile, returned as an object.
   *
   * @public
   */
  Profile: DescribedProfile | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityPolicyRequest {
  /**
   * Specify the text name of the security policy for which you want the details.
   *
   * @public
   */
  SecurityPolicyName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityPolicyResponse {
  /**
   * An array containing the properties of the security policy.
   *
   * @public
   */
  SecurityPolicy: DescribedSecurityPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeServerRequest {
  /**
   * A system-assigned unique identifier for a server.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface DescribeServerResponse {
  /**
   * An array containing the properties of a server with the `ServerID` you specified.
   *
   * @public
   */
  Server: DescribedServer | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * A system-assigned unique identifier for a server that has this user assigned.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The name of the user assigned to one or more servers. User names are part of the sign-in credentials to use the Transfer Family service and perform file transfer tasks.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * A system-assigned unique identifier for a server that has this user assigned.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * An array containing the properties of the Transfer Family user for the `ServerID` value that you specified.
   *
   * @public
   */
  User: DescribedUser | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppRequest {
  /**
   * Provide the unique identifier for the web app.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppResponse {
  /**
   * Returns a structure that contains the details of the web app.
   *
   * @public
   */
  WebApp: DescribedWebApp | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppCustomizationRequest {
  /**
   * Provide the unique identifier for the web app.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWebAppCustomizationResponse {
  /**
   * Returns a structure that contains the details of the web app customizations.
   *
   * @public
   */
  WebAppCustomization: DescribedWebAppCustomization | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowRequest {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkflowResponse {
  /**
   * The structure that contains the details of the workflow.
   *
   * @public
   */
  Workflow: DescribedWorkflow | undefined;
}

/**
 * @public
 */
export interface ImportHostKeyRequest {
  /**
   * The identifier of the server that contains the host key that you are importing.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The private key portion of an SSH key pair.
   *
   * Transfer Family accepts RSA, ECDSA, and ED25519 keys.
   *
   * @public
   */
  HostKeyBody: string | undefined;

  /**
   * The text description that identifies this host key.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Key-value pairs that can be used to group and search for host keys.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the host key is stored by Transfer Family (`SERVICE_MANAGED`) or in Secrets Manager (`SECRETS_MANAGER`). When you specify `SECRETS_MANAGER`, Transfer Family stores the private host key material in an Secrets Manager secret.
   *
   * @public
   */
  StorageType?: HostKeyStorageType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the Secrets Manager secret that stores the host key. If you specify a customer managed key, its key policy must allow the `AWSServiceRoleForTransfer` service-linked role to decrypt the secret. If you don't specify a value, Transfer Family uses the Amazon Web Services managed key for Secrets Manager.
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 */
export interface ImportHostKeyResponse {
  /**
   * Returns the server identifier that contains the imported key.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Returns the host key identifier for the imported key.
   *
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface ImportSshPublicKeyRequest {
  /**
   * A system-assigned unique identifier for a server.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The public key portion of an SSH key pair.
   *
   * Transfer Family accepts RSA, ECDSA, and ED25519 keys.
   *
   * @public
   */
  SshPublicKeyBody: string | undefined;

  /**
   * The name of the Transfer Family user that is assigned to one or more servers.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
 *
 * @public
 */
export interface ImportSshPublicKeyResponse {
  /**
   * A system-assigned unique identifier for a server.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The name given to a public key by the system that was imported.
   *
   * @public
   */
  SshPublicKeyId: string | undefined;

  /**
   * A user name assigned to the `ServerID` value that you specified.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface ListAccessesRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you can get additional results from the `ListAccesses` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional accesses.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A system-assigned unique identifier for a server that has users assigned to it.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * Lists the properties for one or more specified associated accesses.
 *
 * @public
 */
export interface ListedAccess {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessesResponse {
  /**
   * When you can get additional results from the `ListAccesses` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional accesses.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A system-assigned unique identifier for a server that has users assigned to it.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Returns the accesses and their properties for the `ServerId` value that you specify.
   *
   * @public
   */
  Accesses: ListedAccess[] | undefined;
}

/**
 * Returns properties of the execution that is specified.
 *
 * @public
 */
export interface ListedExecution {
  /**
   * A unique identifier for the execution of a workflow.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * A structure that describes the Amazon S3 or EFS file location. This is the file location when the execution begins: if the file is being copied, this is the initial (as opposed to destination) file location.
   *
   * @public
   */
  InitialFileLocation?: FileLocation | undefined;

  /**
   * A container object for the session details that are associated with a workflow.
   *
   * @public
   */
  ServiceMetadata?: ServiceMetadata | undefined;

  /**
   * The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception.
   *
   * @public
   */
  Status?: ExecutionStatus | undefined;
}

/**
 * Returns properties of the host key that's specified.
 *
 * @public
 */
export interface ListedHostKey {
  /**
   * The unique Amazon Resource Name (ARN) of the host key.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique identifier for the host key.
   *
   * @public
   */
  HostKeyId?: string | undefined;

  /**
   * The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.
   *
   * @public
   */
  Fingerprint?: string | undefined;

  /**
   * The current description for the host key. You can change it by calling the `UpdateHostKey` operation and providing a new description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The encryption algorithm that is used for the host key. The `Type` parameter is specified by using one of the following values:
   *
   * - `ssh-rsa`
   * - `ssh-ed25519`
   * - `ecdsa-sha2-nistp256`
   * - `ecdsa-sha2-nistp384`
   * - `ecdsa-sha2-nistp521`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date on which the host key was added to the server.
   *
   * @public
   */
  DateImported?: Date | undefined;

  /**
   * Specifies whether the host key is stored by Transfer Family (`SERVICE_MANAGED`) or in Secrets Manager (`SECRETS_MANAGER`).
   *
   * @public
   */
  StorageType?: HostKeyStorageType | undefined;

  /**
   * The ARN of the Secrets Manager secret that stores the host key material, when `StorageType` is `SECRETS_MANAGER`.
   *
   * @public
   */
  SecretId?: string | undefined;
}

/**
 * Returns the properties of the profile that was specified.
 *
 * @public
 */
export interface ListedProfile {
  /**
   * The Amazon Resource Name (ARN) of the specified profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier for the local or partner AS2 profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The `As2Id` is the *AS2-name*, as defined in the [RFC 4130](https://datatracker.ietf.org/doc/html/rfc4130). For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
   *
   * @public
   */
  As2Id?: string | undefined;

  /**
   * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles. If not supplied in the request, the command lists all types of profiles.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;
}

/**
 * Returns properties of a file transfer protocol-enabled server that was specified.
 *
 * @public
 */
export interface ListedServer {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for a server to be listed.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Specifies the domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * The mode of authentication for a server. The default value is `SERVICE_MANAGED`, which allows you to store and access user credentials within the Transfer Family service.
   *
   * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
   *
   * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
   *
   * Use the `AWS_LAMBDA` value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter for the `IdentityProviderDetails` data type.
   *
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;

  /**
   * Specifies the type of VPC endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Specifies the unique system assigned identifier for the servers that were listed.
   *
   * @public
   */
  ServerId?: string | undefined;

  /**
   * The condition of the server that was described. A value of `ONLINE` indicates that the server can accept jobs and transfer files. A `State` value of `OFFLINE` means that the server cannot perform file transfer operations.
   *
   * The states of `STARTING` and `STOPPING` indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of `START_FAILED` or `STOP_FAILED` can indicate an error condition.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies the number of users that are assigned to a server you specified with the `ServerId`.
   *
   * @public
   */
  UserCount?: number | undefined;
}

/**
 * Returns properties of the user that you specify.
 *
 * @public
 */
export interface ListedUser {
  /**
   * Provides the unique Amazon Resource Name (ARN) for the user that you want to learn about.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * > **Note:**
   * >
   * > The IAM role that controls your users' access to your Amazon S3 bucket for servers with `Domain=S3`, or your EFS file system for servers with `Domain=EFS`.
   * >
   * > The policies attached to this role determine the level of access you want to provide your users when transferring files into and out of your S3 buckets or EFS file systems.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * Specifies the number of SSH public keys stored for the user you specified.
   *
   * @public
   */
  SshPublicKeyCount?: number | undefined;

  /**
   * Specifies the name of the user whose ARN was specified. User names are used for authentication purposes.
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * a structure that contains details for the web app.
 *
 * @public
 */
export interface ListedWebApp {
  /**
   * The Amazon Resource Name (ARN) for the web app.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the web app.
   *
   * @public
   */
  WebAppId: string | undefined;

  /**
   * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
   *
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * The `WebAppEndpoint` is the unique URL for your Transfer Family web app. This is the value that you use when you configure **Origins** on CloudFront.
   *
   * @public
   */
  WebAppEndpoint?: string | undefined;

  /**
   * The type of endpoint hosting the web app. Valid values are `PUBLIC` for publicly accessible endpoints and `VPC` for VPC-hosted endpoints.
   *
   * @public
   */
  EndpointType?: WebAppEndpointType | undefined;
}

/**
 * Contains the identifier, text description, and Amazon Resource Name (ARN) for the workflow.
 *
 * @public
 */
export interface ListedWorkflow {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * Specifies the text description for the workflow.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the unique Amazon Resource Name (ARN) for the workflow.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * `ListExecutions` returns the `NextToken` parameter in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional executions.
   *
   * This is useful for pagination, for instance. If you have 100 executions for a workflow, you might only want to list first 10. If so, call the API by specifying the `max-results`:
   *
   * `aws transfer list-executions --max-results 10`
   *
   * This returns details for the first 10 executions, as well as the pointer (`NextToken`) to the eleventh execution. You can now call the API again, supplying the `NextToken` value you received:
   *
   * `aws transfer list-executions --max-results 10 --next-token $somePointerReturnedFromPreviousListResult`
   *
   * This call returns the next 10 executions, the 11th through the 20th. You can then repeat the call until the details for all 100 executions have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * `ListExecutions` returns the `NextToken` parameter in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional executions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * Returns the details for each execution, in a `ListedExecution` array.
   *
   * @public
   */
  Executions: ListedExecution[] | undefined;
}

/**
 * @public
 */
export interface ListFileTransferResultsRequest {
  /**
   * A unique identifier for a connector. This value should match the value supplied to the corresponding `StartFileTransfer` call.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * A unique identifier for a file transfer. This value should match the value supplied to the corresponding `StartFileTransfer` call.
   *
   * @public
   */
  TransferId: string | undefined;

  /**
   * If there are more file details than returned in this call, use this value for a subsequent call to `ListFileTransferResults` to retrieve them.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of files to return in a single page. Note that currently you can specify a maximum of 10 file paths in a single [StartFileTransfer](https://docs.aws.amazon.com/transfer/latest/APIReference/API_StartFileTransfer.html) operation. Thus, the maximum number of file transfer results that can be returned in a single page is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFileTransferResultsResponse {
  /**
   * Returns the details for the files transferred in the transfer identified by the `TransferId` and `ConnectorId` specified.
   *
   * - `FilePath`: the filename and path to where the file was sent to or retrieved from.
   * - `StatusCode`: current status for the transfer. The status returned is one of the following values:`QUEUED`, `IN_PROGRESS`, `COMPLETED`, or `FAILED`
   * - `FailureCode`: for transfers that fail, this parameter contains a code indicating the reason. For example, `RETRIEVE_FILE_NOT_FOUND`
   * - `FailureMessage`: for transfers that fail, this parameter describes the reason for the failure.
   *
   * @public
   */
  FileTransferResults: ConnectorFileTransferResult[] | undefined;

  /**
   * Returns a token that you can use to call `ListFileTransferResults` again and receive additional results, if there are any (against the same `TransferId`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHostKeysRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When there are additional results that were not returned, a `NextToken` parameter is returned. You can use that value for a subsequent call to `ListHostKeys` to continue listing results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The identifier of the server that contains the host keys that you want to view.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface ListHostKeysResponse {
  /**
   * Returns a token that you can use to call `ListHostKeys` again and receive additional results, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns the server identifier that contains the listed host keys.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Returns an array, where each item contains the details of a host key.
   *
   * @public
   */
  HostKeys: ListedHostKey[] | undefined;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When there are additional results that were not returned, a `NextToken` parameter is returned. You can use that value for a subsequent call to `ListProfiles` to continue listing results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles. If not supplied in the request, the command lists all types of profiles.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * Returns a token that you can use to call `ListProfiles` again and receive additional results, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns an array, where each item contains the details of a profile.
   *
   * @public
   */
  Profiles: ListedProfile[] | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesRequest {
  /**
   * Specifies the number of security policies to return as a response to the `ListSecurityPolicies` query.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When additional results are obtained from the `ListSecurityPolicies` command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional security policies.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityPoliciesResponse {
  /**
   * When you can get additional results from the `ListSecurityPolicies` operation, a `NextToken` parameter is returned in the output. In a following command, you can pass in the `NextToken` parameter to continue listing security policies.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of security policies that were listed.
   *
   * @public
   */
  SecurityPolicyNames: string[] | undefined;
}

/**
 * @public
 */
export interface ListServersRequest {
  /**
   * Specifies the number of servers to return as a response to the `ListServers` query.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When additional results are obtained from the `ListServers` command, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional servers.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServersResponse {
  /**
   * When you can get additional results from the `ListServers` operation, a `NextToken` parameter is returned in the output. In a following command, you can pass in the `NextToken` parameter to continue listing additional servers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of servers that were listed.
   *
   * @public
   */
  Servers: ListedServer[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a server, user, or role.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Specifies the number of tags to return as a response to the `ListTagsForResource` request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request additional results from the `ListTagsForResource` operation, a `NextToken` parameter is returned in the input. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional tags.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The ARN you specified to list the tags of.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * When you can get additional results from the `ListTagsForResource` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * Specifies the number of users to return as a response to the `ListUsers` request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If there are additional results from the `ListUsers` call, a `NextToken` parameter is returned in the output. You can then pass the `NextToken` to a subsequent `ListUsers` command, to continue listing additional users.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A system-assigned unique identifier for a server that has users assigned to it.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * When you can get additional results from the `ListUsers` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional users.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A system-assigned unique identifier for a server that the users are assigned to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Returns the Transfer Family users and their properties for the `ServerId` value that you specify.
   *
   * @public
   */
  Users: ListedUser[] | undefined;
}

/**
 * @public
 */
export interface ListWebAppsRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns the `NextToken` parameter in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional web apps.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebAppsResponse {
  /**
   * Provide this value for the `NextToken` parameter in a subsequent command to continue listing additional web apps.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns, for each listed web app, a structure that contains details for the web app.
   *
   * @public
   */
  WebApps: ListedWebApp[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * `ListWorkflows` returns the `NextToken` parameter in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional workflows.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * `ListWorkflows` returns the `NextToken` parameter in the output. You can then pass the `NextToken` parameter in a subsequent command to continue listing additional workflows.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns the `Arn`, `WorkflowId`, and `Description` for each workflow.
   *
   * @public
   */
  Workflows: ListedWorkflow[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * The identifier of the profile object that you are updating.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * @public
   */
  CertificateIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * Returns the identifier for the profile that's being updated.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepStateRequest {
  /**
   * A unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * A unique identifier for the execution of a workflow.
   *
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * Used to distinguish between multiple callbacks for multiple Lambda steps within the same execution.
   *
   * @public
   */
  Token: string | undefined;

  /**
   * Indicates whether the specified step succeeded or failed.
   *
   * @public
   */
  Status: CustomStepStatus | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepStateResponse {}

/**
 * @public
 */
export interface UpdateServerRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when `Protocols` is set to `FTPS`.
   *
   * To request a new public certificate, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) in the *Amazon Web ServicesCertificate Manager User Guide*.
   *
   * To import an existing certificate into ACM, see [Importing certificates into ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Amazon Web ServicesCertificate Manager User Guide*.
   *
   * To request a private certificate to use FTPS through private IP addresses, see [Request a private certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html) in the *Amazon Web ServicesCertificate Manager User Guide*.
   *
   * Certificates with the following cryptographic algorithms and key sizes are supported:
   *
   * - 2048-bit RSA (RSA_2048)
   * - 4096-bit RSA (RSA_4096)
   * - Elliptic Prime Curve 256 bit (EC_prime256v1)
   * - Elliptic Prime Curve 384 bit (EC_secp384r1)
   * - Elliptic Prime Curve 521 bit (EC_secp521r1)
   *
   * > **Note:** The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The protocol settings that are configured for your server.
   *
   * > **Note:** Avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers, as this increases costs and can cause performance issues, including reduced connection limits for FTPS. For more details, see [Avoid placing NLBs and NATs in front of Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/infrastructure-security.html#nlb-considerations).
   *
   * - To indicate passive mode (for FTP and FTPS protocols), use the `PassiveIp` parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer.
   * - To ignore the error that is generated when the client attempts to use the `SETSTAT` command on a file that you are uploading to an Amazon S3 bucket, use the `SetStatOption` parameter. To have the Transfer Family server ignore the `SETSTAT` command and upload files without needing to make any changes to your SFTP client, set the value to `ENABLE_NO_OP`. If you set the `SetStatOption` parameter to `ENABLE_NO_OP`, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a `SETSTAT` call.
   * - To specify which ports your Transfer Family server listens to, use the `SftpPorts` parameter.
   * - To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the `TlsSessionResumptionMode` parameter.
   * - `As2Transports` indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
   *
   * @public
   */
  ProtocolDetails?: ProtocolDetails | undefined;

  /**
   * The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
   *
   * @public
   */
  EndpointDetails?: EndpointDetails | undefined;

  /**
   * The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.
   *
   * > **Note:**
   * >
   * > After May 19, 2021, you won't be able to create a server using `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with `EndpointType=VPC_ENDPOINT` in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use `EndpointType`=`VPC`.
   * >
   * > For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.
   * >
   * > It is recommended that you use `VPC` as the `EndpointType`. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with `EndpointType` set to `VPC_ENDPOINT`.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms.
   *
   * Use the following command to generate an RSA 2048 bit key with no passphrase:
   *
   * `ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key`.
   *
   * Use a minimum value of 2048 for the `-b` option. You can create a stronger key by using 3072 or 4096.
   *
   * Use the following command to generate an ECDSA 256 bit key with no passphrase:
   *
   * `ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key`.
   *
   * Valid values for the `-b` option for ECDSA are 256, 384, and 521.
   *
   * Use the following command to generate an ED25519 key with no passphrase:
   *
   * `ssh-keygen -t ed25519 -N "" -f my-new-server-key`.
   *
   * For all of these commands, you can replace *my-new-server-key* with a string of your choice.
   *
   * > **Important:** If you aren't planning to migrate existing users from an existing SFTP-enabled server to a new server, don't update the host key. Accidentally changing a server's host key can be disruptive.
   *
   * For more information, see [Manage host keys for your SFTP-enabled server](https://docs.aws.amazon.com/transfer/latest/userguide/edit-server-config.html#configuring-servers-change-host-key) in the *Transfer Family User Guide*.
   *
   * @public
   */
  HostKey?: string | undefined;

  /**
   * An array containing all of the information required to call a customer's authentication API method.
   *
   * @public
   */
  IdentityProviderDetails?: IdentityProviderDetails | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
   *
   * @public
   */
  LoggingRole?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
   *
   * > **Note:** The SFTP protocol does not support post-authentication display banners.
   *
   * @public
   */
  PostAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:
   *
   * `This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.`
   *
   * @public
   */
  PreAuthenticationLoginBanner?: string | undefined;

  /**
   * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:
   *
   * - `SFTP` (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH
   * - `FTPS` (File Transfer Protocol Secure): File transfer with TLS encryption
   * - `FTP` (File Transfer Protocol): Unencrypted file transfer
   * - `AS2` (Applicability Statement 2): used for transporting structured business-to-business data
   *
   * > **Note:**
   * >
   * > - If you select `FTPS`, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.
   * > - If `Protocol` includes either `FTP` or `FTPS`, then the `EndpointType` must be `VPC` and the `IdentityProviderType` must be either `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `FTP`, then `AddressAllocationIds` cannot be associated.
   * > - If `Protocol` is set only to `SFTP`, the `EndpointType` can be set to `PUBLIC` and the `IdentityProviderType` can be set any of the supported identity types: `SERVICE_MANAGED`, `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
   * > - If `Protocol` includes `AS2`, then the `EndpointType` must be `VPC`, and domain must be Amazon S3.
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * Specifies the name of the security policy for the server.
   *
   * @public
   */
  SecurityPolicyName?: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance that the Transfer Family user is assigned to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
   *
   * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.
   *
   * To remove an associated workflow from a server, you can provide an empty `OnUpload` object, as in the following example.
   *
   * `aws transfer update-server --server-id s-01234567890abcdef --workflow-details '\{"OnUpload":[]\}'`
   *
   * @public
   */
  WorkflowDetails?: WorkflowDetails | undefined;

  /**
   * Specifies the log groups to which your server logs are sent.
   *
   * To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows:
   *
   * `arn:partition:logs:region-name:amazon-account-id:log-group:log-group-name:*`
   *
   * For example, `arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:*`
   *
   * If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an `update-server` call. For example:
   *
   * `update-server --server-id s-1234567890abcdef0 --structured-log-destinations`
   *
   * @public
   */
  StructuredLogDestinations?: string[] | undefined;

  /**
   * Specifies whether or not performance for your Amazon S3 directories is optimized.
   *
   * - If using the console, this is enabled by default.
   * - If using the API or CLI, this is disabled by default.
   *
   * By default, home directory mappings have a `TYPE` of `DIRECTORY`. If you enable this option, you would then need to explicitly set the `HomeDirectoryMapEntry` `Type` to `FILE` if you want a mapping to have a file target.
   *
   * @public
   */
  S3StorageOptions?: S3StorageOptions | undefined;

  /**
   * Specifies whether to use IPv4 only, or to use dual-stack (IPv4 and IPv6) for your Transfer Family endpoint. The default value is `IPV4`.
   *
   * > **Important:**
   * >
   * > The `IpAddressType` parameter has the following limitations:
   * >
   * > - It cannot be changed while the server is online. You must stop the server before modifying this parameter.
   * > - It cannot be updated to `DUALSTACK` if the server has `AddressAllocationIds` specified.
   *
   * > **Note:** When using `DUALSTACK` as the `IpAddressType`, you cannot set the `AddressAllocationIds` parameter for the [EndpointDetails](https://docs.aws.amazon.com/transfer/latest/APIReference/API_EndpointDetails.html) for the server.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The mode of authentication for a server. The default value is `SERVICE_MANAGED`, which allows you to store and access user credentials within the Transfer Family service.
   *
   * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
   *
   * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
   *
   * Use the `AWS_LAMBDA` value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter for the `IdentityProviderDetails` data type.
   *
   * @public
   */
  IdentityProviderType?: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface UpdateServerResponse {
  /**
   * A system-assigned unique identifier for a server that the Transfer Family user is assigned to.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * Contains the details for an SFTP connector connection.
 *
 * @public
 */
export interface SftpConnectorConnectionDetails {
  /**
   * The SSH public key of the remote SFTP server. This is returned during the initial connection attempt when you call `TestConnection`. It allows you to retrieve the valid server host key to update the connector when you are unable to obtain it in advance.
   *
   * @public
   */
  HostKey?: string | undefined;
}

/**
 * @public
 */
export interface StartDirectoryListingRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * Specifies the directory on the remote SFTP server for which you want to list its contents.
   *
   * @public
   */
  RemoteDirectoryPath: string | undefined;

  /**
   * An optional parameter where you can specify the maximum number of file/directory names to retrieve. The default value is 1,000.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Specifies the path (bucket and prefix) in Amazon S3 storage to store the results of the directory listing.
   *
   * @public
   */
  OutputDirectoryPath: string | undefined;
}

/**
 * @public
 */
export interface StartDirectoryListingResponse {
  /**
   * Returns a unique identifier for the directory listing call.
   *
   * @public
   */
  ListingId: string | undefined;

  /**
   * Returns the file name where the results are stored. This is a combination of the connector ID and the listing ID: `<connector-id>-<listing-id>.json`.
   *
   * @public
   */
  OutputFileName: string | undefined;
}

/**
 * @public
 */
export interface StartFileTransferRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * One or more source paths for the Amazon S3 storage. Each string represents a source file path for one outbound file transfer. For example, `amzn-s3-demo-bucket/myfile.txt`.
   *
   * > **Note:** Replace `amzn-s3-demo-bucket` with one of your actual buckets.
   *
   * @public
   */
  SendFilePaths?: string[] | undefined;

  /**
   * One or more source paths for the partner's SFTP server. Each string represents a source file path for one inbound file transfer.
   *
   * @public
   */
  RetrieveFilePaths?: string[] | undefined;

  /**
   * For an inbound transfer, the `LocaDirectoryPath` specifies the destination for one or more files that are transferred from the partner's SFTP server.
   *
   * @public
   */
  LocalDirectoryPath?: string | undefined;

  /**
   * For an outbound transfer, the `RemoteDirectoryPath` specifies the destination for one or more files that are transferred to the partner's SFTP server. If you don't specify a `RemoteDirectoryPath`, the destination for transferred files is the SFTP user's home directory.
   *
   * @public
   */
  RemoteDirectoryPath?: string | undefined;

  /**
   * An array of key-value pairs that represent custom HTTP headers to include in AS2 messages. These headers are added to the AS2 message when sending files to your trading partner.
   *
   * @public
   */
  CustomHttpHeaders?: CustomHttpHeader[] | undefined;
}

/**
 * @public
 */
export interface StartFileTransferResponse {
  /**
   * Returns the unique identifier for the file transfer.
   *
   * @public
   */
  TransferId: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteDeleteRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The absolute path of the file or directory to delete. You can only specify one path per call to this operation.
   *
   * @public
   */
  DeletePath: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteDeleteResponse {
  /**
   * Returns a unique identifier for the delete operation.
   *
   * @public
   */
  DeleteId: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteMoveRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The absolute path of the file or directory to move or rename. You can only specify one path per call to this operation.
   *
   * @public
   */
  SourcePath: string | undefined;

  /**
   * The absolute path for the target of the move/rename operation.
   *
   * @public
   */
  TargetPath: string | undefined;
}

/**
 * @public
 */
export interface StartRemoteMoveResponse {
  /**
   * Returns a unique identifier for the move/rename operation.
   *
   * @public
   */
  MoveId: string | undefined;
}

/**
 * @public
 */
export interface StartServerRequest {
  /**
   * A system-assigned unique identifier for a server that you start.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface StopServerRequest {
  /**
   * A system-assigned unique identifier for a server that you stopped.
   *
   * @public
   */
  ServerId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * An Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a server, user, or role.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (servers, users, workflows, and so on) for any purpose.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TestConnectionRequest {
  /**
   * The unique identifier for the connector.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface TestConnectionResponse {
  /**
   * Returns the identifier of the connector object that you are testing.
   *
   * @public
   */
  ConnectorId?: string | undefined;

  /**
   * Returns `OK` for successful test, or `ERROR` if the test fails.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Returns `Connection succeeded` if the test is successful. Or, returns a descriptive error message if the test fails. The following list provides troubleshooting details, depending on the error message that you receive.
   *
   * - Verify that your secret name aligns with the one in Transfer Role permissions.
   * - Verify the server URL in the connector configuration , and verify that the login credentials work successfully outside of the connector.
   * - Verify that the secret exists and is formatted correctly.
   * - Verify that the trusted host key in the connector configuration matches the `ssh-keyscan` output.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Structure that contains the SFTP connector host key.
   *
   * @public
   */
  SftpConnectionDetails?: SftpConnectorConnectionDetails | undefined;
}

/**
 * @public
 */
export interface TestIdentityProviderRequest {
  /**
   * A system-assigned identifier for a specific server. That server's user authentication method is tested with a user name and password.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The type of file transfer protocol to be tested.
   *
   * The available protocols are:
   *
   * - Secure Shell (SSH) File Transfer Protocol (SFTP)
   * - File Transfer Protocol Secure (FTPS)
   * - File Transfer Protocol (FTP)
   * - Applicability Statement 2 (AS2)
   *
   * @public
   */
  ServerProtocol?: Protocol | undefined;

  /**
   * The source IP address of the account to be tested.
   *
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * The name of the account to be tested.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The password of the account to be tested.
   *
   * @public
   */
  UserPassword?: string | undefined;
}

/**
 * @public
 */
export interface TestIdentityProviderResponse {
  /**
   * The response that is returned from your API Gateway or your Lambda function.
   *
   * @public
   */
  Response?: string | undefined;

  /**
   * The HTTP status code that is the response from your API Gateway or your Lambda function.
   *
   * @public
   */
  StatusCode: number | undefined;

  /**
   * A message that indicates whether the test was successful or not.
   *
   * > **Note:** If an empty string is returned, the most likely cause is that the authentication failed due to an incorrect username or password.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The endpoint of the service used to authenticate a user.
   *
   * @public
   */
  Url: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific Amazon Web Services resource, such as a server, user, or role.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccessRequest {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * The following is an `Entry` and `Target` pair example.
   *
   * `[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("`chroot`"). To do this, you can set `Entry` to `/` and set `Target` to the `HomeDirectory` parameter value.
   *
   * The following is an `Entry` and `Target` pair example for `chroot`.
   *
   * `[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * > **Note:**
   * >
   * > This policy applies only when the domain of `ServerId` is Amazon S3. Amazon EFS does not use session policies.
   * >
   * > For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
   * >
   * > For an example of a session policy, see [Example session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html).
   * >
   * > For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the *Amazon Web ServicesSecurity Token Service API Reference*.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique identifier that is required to identify specific groups within your directory. The users of the group that you associate have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Transfer Family. If you know the group name, you can view the SID values by running the following command using Windows PowerShell.
   *
   * `Get-ADGroup -Filter \{samAccountName -like "YourGroupName*"\} -Properties * | Select SamAccountName,ObjectSid`
   *
   * In that command, replace *YourGroupName* with the name of your Active Directory group.
   *
   * The regular expression used to validate this parameter is a string of characters consisting of uppercase and lowercase alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessResponse {
  /**
   * The identifier of the server that the user is attached to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The external identifier of the group whose users have access to your Amazon S3 or Amazon EFS resources over the enabled protocols using Amazon Web ServicesTransfer Family.
   *
   * @public
   */
  ExternalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostKeyRequest {
  /**
   * The identifier of the server that contains the host key that you are updating.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The identifier of the host key that you are updating.
   *
   * @public
   */
  HostKeyId: string | undefined;

  /**
   * An updated description for the host key.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the host key is stored by Transfer Family (`SERVICE_MANAGED`) or in Secrets Manager (`SECRETS_MANAGER`). When you specify `SECRETS_MANAGER`, Transfer Family stores the private host key material in an Secrets Manager secret.
   *
   * @public
   */
  StorageType?: HostKeyStorageType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the Secrets Manager secret that stores the host key. If you specify a customer managed key, its key policy must allow the `AWSServiceRoleForTransfer` service-linked role to decrypt the secret. If you don't specify a value, Transfer Family uses the Amazon Web Services managed key for Secrets Manager.
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHostKeyResponse {
  /**
   * Returns the server identifier for the server that contains the updated host key.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * Returns the host key identifier for the updated host key.
   *
   * @public
   */
  HostKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * > **Note:** You can use the `HomeDirectory` parameter for `HomeDirectoryType` when it is set to either `PATH` or `LOGICAL`.
   *
   * @public
   */
  HomeDirectory?: string | undefined;

  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or Amazon EFS path as is in their file transfer protocol clients. If you set it to `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * > **Note:** If `HomeDirectoryType` is `LOGICAL`, you must provide mappings, using the `HomeDirectoryMappings` parameter. If, on the other hand, `HomeDirectoryType` is `PATH`, you provide an absolute path using the `HomeDirectory` parameter. You cannot have both `HomeDirectory` and `HomeDirectoryMappings` in your template.
   *
   * @public
   */
  HomeDirectoryType?: HomeDirectoryType | undefined;

  /**
   * Logical directory mappings that specify what Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible. You must specify the `Entry` and `Target` pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 or Amazon EFS path. If you only specify a target, it is displayed as is. You also must ensure that your Identity and Access Management (IAM) role provides access to paths in `Target`. This value can be set only when `HomeDirectoryType` is set to *LOGICAL*.
   *
   * The following is an `Entry` and `Target` pair example.
   *
   * `[ \{ "Entry": "/directory1", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * In most cases, you can use this value instead of the session policy to lock down your user to the designated home directory ("`chroot`"). To do this, you can set `Entry` to '/' and set `Target` to the HomeDirectory parameter value.
   *
   * The following is an `Entry` and `Target` pair example for `chroot`.
   *
   * `[ \{ "Entry": "/", "Target": "/bucket_name/home/mydirectory" \} ]`
   *
   * @public
   */
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | undefined;

  /**
   * A session policy for your user so that you can use the same Identity and Access Management (IAM) role across multiple users. This policy scopes down a user's access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `$\{Transfer:UserName\}`, `$\{Transfer:HomeDirectory\}`, and `$\{Transfer:HomeBucket\}`.
   *
   * > **Note:**
   * >
   * > This policy applies only when the domain of `ServerId` is Amazon S3. Amazon EFS does not use session policies.
   * >
   * > For session policies, Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
   * >
   * > For an example of a session policy, see [Creating a session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy).
   * >
   * > For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the *Amazon Web Services Security Token Service API Reference*.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * Specifies the full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon Elastic File Systems (Amazon EFS). The POSIX permissions that are set on files and directories in your file system determines the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * @public
   */
  PosixProfile?: PosixProfile | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * A system-assigned unique identifier for a Transfer Family server instance that the user is assigned to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * A unique string that identifies a user and is associated with a server as specified by the `ServerId`. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * `UpdateUserResponse` returns the user name and identifier for the request to update a user's properties.
 *
 * @public
 */
export interface UpdateUserResponse {
  /**
   * A system-assigned unique identifier for a Transfer Family server instance that the account is assigned to.
   *
   * @public
   */
  ServerId: string | undefined;

  /**
   * The unique identifier for a user that is assigned to a server instance that was specified in the request.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppCustomizationRequest {
  /**
   * Provide the identifier of the web app that you are updating.
   *
   * @public
   */
  WebAppId: string | undefined;

  /**
   * Provide an updated title.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Specify logo file data string (in base64 encoding).
   *
   * @public
   */
  LogoFile?: Uint8Array | undefined;

  /**
   * Specify an icon file data string (in base64 encoding).
   *
   * @public
   */
  FaviconFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppCustomizationResponse {
  /**
   * Returns the unique identifier for the web app being updated.
   *
   * @public
   */
  WebAppId: string | undefined;
}

/**
 * Contains the VPC configuration settings for updating a web app endpoint, including the subnet IDs where the endpoint should be deployed.
 *
 * @public
 */
export interface UpdateWebAppVpcConfig {
  /**
   * The list of subnet IDs within the VPC where the web app endpoint should be deployed during the update operation.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IP address type for the web app's VPC endpoint. This determines whether the endpoint is accessible over IPv4 only, or over both IPv4 and IPv6.
   *
   * @public
   */
  IpAddressType?: WebAppVpcEndpointIpAddressType | undefined;
}

/**
 * Contains the endpoint configuration details for updating a web app, including VPC settings for endpoints hosted within a VPC.
 *
 * @public
 */
export type UpdateWebAppEndpointDetails =
  | UpdateWebAppEndpointDetails.VpcMember
  | UpdateWebAppEndpointDetails.$UnknownMember;

/**
 * @public
 */
export namespace UpdateWebAppEndpointDetails {
  /**
   * The VPC configuration details for updating a web app endpoint hosted within a VPC. This includes the subnet IDs for endpoint deployment.
   *
   * @public
   */
  export interface VpcMember {
    Vpc: UpdateWebAppVpcConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Vpc: (value: UpdateWebAppVpcConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A structure that describes the values to use for the IAM Identity Center settings when you update a web app.
 *
 * @public
 */
export interface UpdateWebAppIdentityCenterConfig {
  /**
   * The IAM role used to access IAM Identity Center.
   *
   * @public
   */
  Role?: string | undefined;
}

/**
 * A union that contains the `UpdateWebAppIdentityCenterConfig` object.
 *
 * @public
 */
export type UpdateWebAppIdentityProviderDetails =
  | UpdateWebAppIdentityProviderDetails.IdentityCenterConfigMember
  | UpdateWebAppIdentityProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace UpdateWebAppIdentityProviderDetails {
  /**
   * A structure that describes the values to use for the IAM Identity Center settings when you update a web app.
   *
   * @public
   */
  export interface IdentityCenterConfigMember {
    IdentityCenterConfig: UpdateWebAppIdentityCenterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IdentityCenterConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IdentityCenterConfig: (value: UpdateWebAppIdentityCenterConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateWebAppRequest {
  /**
   * Provide the identifier of the web app that you are updating.
   *
   * @public
   */
  WebAppId: string | undefined;

  /**
   * Provide updated identity provider values in a `WebAppIdentityProviderDetails` object.
   *
   * @public
   */
  IdentityProviderDetails?: UpdateWebAppIdentityProviderDetails | undefined;

  /**
   * The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
   *
   * @public
   */
  AccessEndpoint?: string | undefined;

  /**
   * A union that contains the value for number of concurrent connections or the user sessions on your web app.
   *
   * @public
   */
  WebAppUnits?: WebAppUnits | undefined;

  /**
   * The updated endpoint configuration for the web app. You can modify the endpoint type and VPC configuration settings.
   *
   * @public
   */
  EndpointDetails?: UpdateWebAppEndpointDetails | undefined;
}

/**
 * @public
 */
export interface UpdateWebAppResponse {
  /**
   * Returns the unique identifier for the web app being updated.
   *
   * @public
   */
  WebAppId: string | undefined;
}
