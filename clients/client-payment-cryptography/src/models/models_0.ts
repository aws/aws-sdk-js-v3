// smithy-typescript generated code
import type {
  As2805KeyVariant,
  AssociationState,
  DeriveKeyUsage,
  KeyAlgorithm,
  KeyCheckValueAlgorithm,
  KeyClass,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  KeyExportability,
  KeyMaterialType,
  KeyOrigin,
  KeyReplicationState,
  KeyState,
  KeyUsage,
  MpaOperation,
  MultiRegionKeyType,
  SessionStatus,
  SigningAlgorithmType,
  SymmetricKeyAlgorithm,
  Tr34KeyBlockFormat,
  WrappedKeyMaterialFormat,
  WrappingKeySpec,
} from "./enums";

/**
 * Input parameters for adding replication regions to a specific key.
 *
 * @public
 */
export interface AddKeyReplicationRegionsInput {
  /**
   * The key identifier (ARN or alias) of the key for which to add replication regions.
   *
   * This key must exist and be in a valid state for replication operations.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The list of Amazon Web Services Regions to add to the key's replication configuration.
   *
   * Each region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available. The key will be replicated to these regions, allowing cryptographic operations to be performed closer to your applications.
   *
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.
 *
 * @public
 */
export interface KeyModesOfUse {
  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to encrypt data.
   *
   * @public
   */
  Encrypt?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to decrypt data.
   *
   * @public
   */
  Decrypt?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to wrap other keys.
   *
   * @public
   */
  Wrap?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to unwrap other keys.
   *
   * @public
   */
  Unwrap?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to generate and verify other card and PIN verification keys.
   *
   * @public
   */
  Generate?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used for signing.
   *
   * @public
   */
  Sign?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to verify signatures.
   *
   * @public
   */
  Verify?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to derive new keys.
   *
   * @public
   */
  DeriveKey?: boolean | undefined;

  /**
   * Speciﬁes whether an Amazon Web Services Payment Cryptography key has no special restrictions other than the restrictions implied by `KeyUsage`.
   *
   * @public
   */
  NoRestrictions?: boolean | undefined;
}

/**
 * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
 *
 * @public
 */
export interface KeyAttributes {
  /**
   * The cryptographic usage of an Amazon Web Services Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.
   *
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * The type of Amazon Web Services Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether Amazon Web Services Payment Cryptography key contains a symmetric key or an asymmetric key pair.
   *
   * @public
   */
  KeyClass: KeyClass | undefined;

  /**
   * The key algorithm to be use during creation of an Amazon Web Services Payment Cryptography key.
   *
   * For symmetric keys, Amazon Web Services Payment Cryptography supports `AES` and `TDES` algorithms. For asymmetric keys, Amazon Web Services Payment Cryptography supports `RSA` and `ECC_NIST` algorithms.
   *
   * @public
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * The list of cryptographic operations that you can perform using the key.
   *
   * @public
   */
  KeyModesOfUse: KeyModesOfUse | undefined;
}

/**
 * The status of an MPA session.
 *
 * @public
 */
export interface MpaStatus {
  /**
   * The ARN of the MPA session.
   *
   * @public
   */
  MpaSessionArn: string | undefined;

  /**
   * The current status of the MPA session.
   *
   * @public
   */
  Status: SessionStatus | undefined;

  /**
   * The date and time when the MPA session was initiated.
   *
   * @public
   */
  InitiationDate: Date | undefined;

  /**
   * The message providing additional information about the MPA session status.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Represents the replication status information for a key in a replication region for [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html).
 *
 * This structure contains details about the current state of key replication, including any status messages and operational information about the replication process.
 *
 * @public
 */
export interface ReplicationStatusType {
  /**
   * The current status of key replication in this Amazon Web Services Region.
   *
   * This field indicates whether the key replication is in progress, completed successfully, or has encountered an error. Possible values include states such as `SYNCRHONIZED`, `IN_PROGRESS`, `DELETE_IN_PROGRESS`, or `FAILED`. This provides visibility into the replication process for monitoring and troubleshooting purposes.
   *
   * @public
   */
  Status: KeyReplicationState | undefined;

  /**
   * A message that provides additional information about the current replication status of the key.
   *
   * This field contains details about any issues or progress updates related to key replication operations. It may include information about replication failures, synchronization status, or other operational details.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Metadata about an Amazon Web Services Payment Cryptography key.
 *
 * @public
 */
export interface Key {
  /**
   * The Amazon Resource Name (ARN) of the key.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
   *
   * @public
   */
  KeyCheckValueAlgorithm: KeyCheckValueAlgorithm | undefined;

  /**
   * Specifies whether the key is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Specifies whether the key is exportable. This data is immutable after the key is created.
   *
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * The state of key that is being created or deleted.
   *
   * @public
   */
  KeyState: KeyState | undefined;

  /**
   * The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is `AWS_PAYMENT_CRYPTOGRAPHY`. For keys imported into Amazon Web Services Payment Cryptography, the value is `EXTERNAL`.
   *
   * @public
   */
  KeyOrigin: KeyOrigin | undefined;

  /**
   * The date and time when the key was created.
   *
   * @public
   */
  CreateTimestamp: Date | undefined;

  /**
   * The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.
   *
   * @public
   */
  UsageStartTimestamp?: Date | undefined;

  /**
   * The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.
   *
   * @public
   */
  UsageStopTimestamp?: Date | undefined;

  /**
   * The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when `KeyState` is `DELETE_PENDING` and the key is scheduled for deletion.
   *
   * @public
   */
  DeletePendingTimestamp?: Date | undefined;

  /**
   * The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the `KeyState` is `DELETE_COMPLETE` and the Amazon Web Services Payment Cryptography key is deleted.
   *
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * The cryptographic usage of an ECDH derived key as deﬁned in section A.5.2 of the TR-31 spec.
   *
   * @public
   */
  DeriveKeyUsage?: DeriveKeyUsage | undefined;

  /**
   * Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy.
   *
   * Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html).
   *
   * @public
   */
  MultiRegionKeyType?: MultiRegionKeyType | undefined;

  /**
   * An Amazon Web Services Region identifier in the standard format (e.g., `us-east-1`, `eu-west-1`).
   *
   * Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available.
   *
   * @public
   */
  PrimaryRegion?: string | undefined;

  /**
   * Information about the replication status of the key across different Amazon Web Services Regions.
   *
   * This field provides details about the current state of key replication, including any status messages or operational information. It helps track the progress and health of key replication operations.
   *
   * @public
   */
  ReplicationStatus?: Record<string, ReplicationStatusType> | undefined;

  /**
   * Indicates whether this key is using the account's default replication regions configuration for [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html).
   *
   * When set to `true`, the key automatically replicates to the regions specified in the account's default replication settings. When set to `false`, the key has a custom replication configuration that overrides the account defaults.
   *
   * @public
   */
  UsingDefaultReplicationRegions?: boolean | undefined;

  /**
   * The Multi-Party Approval (MPA) status for the key, if applicable.
   *
   * @public
   */
  MpaStatus?: MpaStatus | undefined;
}

/**
 * Output from adding replication regions to a key.
 *
 * @public
 */
export interface AddKeyReplicationRegionsOutput {
  /**
   * The updated key metadata after adding the replication regions.
   *
   * This includes the current state of the key and its replication configuration.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * Contains information about an alias.
 *
 * @public
 */
export interface Alias {
  /**
   * A friendly name that you can use to refer to a key. The value must begin with `alias/`.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The `KeyARN` of the key associated with the alias.
   *
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasInput {
  /**
   * A friendly name that you can use to refer to a key. An alias must begin with `alias/` followed by a name, for example `alias/ExampleAlias`. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The `KeyARN` of the key to associate with the alias.
   *
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasOutput {
  /**
   * The alias for the key.
   *
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface DeleteAliasInput {
  /**
   * A friendly name that you can use to refer Amazon Web Services Payment Cryptography key. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias`.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAliasOutput {}

/**
 * @public
 */
export interface GetAliasInput {
  /**
   * The alias of the Amazon Web Services Payment Cryptography key.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface GetAliasOutput {
  /**
   * The alias of the Amazon Web Services Payment Cryptography key.
   *
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface ListAliasesInput {
  /**
   * The `keyARN` for which you want to list all aliases.
   *
   * @public
   */
  KeyArn?: string | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextToken` from the truncated response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAliasesOutput {
  /**
   * The list of aliases. Each alias describes the `KeyArn` contained within.
   *
   * @public
   */
  Aliases: Alias[] | undefined;

  /**
   * The token for the next set of results, or an empty or null value if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAliasInput {
  /**
   * The alias whose associated key is changing.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * The `KeyARN` for the key that you are updating or removing from the alias.
   *
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAliasOutput {
  /**
   * The alias name.
   *
   * @public
   */
  Alias: Alias | undefined;
}

/**
 * @public
 */
export interface AssociateMpaTeamInput {
  /**
   * The protected operation to associate with the MPA team. Currently, the only supported value is `IMPORT_ROOT_PUBLIC_KEY_CERTIFICATE`.
   *
   * @public
   */
  Action: MpaOperation | undefined;

  /**
   * The ARN of the MPA team to associate with the protected operation.
   *
   * @public
   */
  MpaTeamArn: string | undefined;

  /**
   * The comment from the requester explaining the reason for the association.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * The details of an MPA team association with a protected operation.
 *
 * @public
 */
export interface MpaTeamAssociation {
  /**
   * The protected operation associated with the MPA team.
   *
   * @public
   */
  Action: MpaOperation | undefined;

  /**
   * The ARN of the MPA team.
   *
   * @public
   */
  MpaTeamArn: string | undefined;

  /**
   * The state of the MPA team association.
   *
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * The MPA session status for the association, if applicable.
   *
   * @public
   */
  MpaStatus?: MpaStatus | undefined;
}

/**
 * @public
 */
export interface AssociateMpaTeamOutput {
  /**
   * The details of the MPA team association.
   *
   * @public
   */
  MpaTeamAssociation: MpaTeamAssociation | undefined;
}

/**
 * The metadata used to create the certificate signing request.
 *
 * @public
 */
export interface CertificateSubjectType {
  /**
   * The name you provide to create the certificate signing request.
   *
   * @public
   */
  CommonName: string | undefined;

  /**
   * The organization unit you provide to create the certificate signing request.
   *
   * @public
   */
  OrganizationUnit?: string | undefined;

  /**
   * The organization you provide to create the certificate signing request.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * The city you provide to create the certificate signing request.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The country you provide to create the certificate signing request.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The state or province you provide to create the certificate signing request.
   *
   * @public
   */
  StateOrProvince?: string | undefined;

  /**
   * The email address you provide to create the certificate signing request.
   *
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * A structure that contains information about a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyInput {
  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;

  /**
   * Specifies whether the key is exportable from the service.
   *
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the [TagResource](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html) operation.
   *
   * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * > **Note:** Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The intended cryptographic usage of keys derived from the ECC key pair to be created.
   *
   * After creating an ECC key pair, you cannot change the intended cryptographic usage of keys derived from it using ECDH.
   *
   * @public
   */
  DeriveKeyUsage?: DeriveKeyUsage | undefined;

  /**
   * A list of Amazon Web Services Regions for key replication operations.
   *
   * Each region in the list must be a valid Amazon Web Services Region identifier where Amazon Web Services Payment Cryptography is available. This list is used to specify which regions should be added to or removed from a key's replication configuration.
   *
   * @public
   */
  ReplicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKeyOutput {
  /**
   * The key material that contains all the key attributes.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface DeleteKeyInput {
  /**
   * The `KeyARN` of the key that is scheduled for deletion.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The waiting period for key deletion. The default value is seven days.
   *
   * @public
   */
  DeleteKeyInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeleteKeyOutput {
  /**
   * The `KeyARN` of the key that is scheduled for deletion.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyInput {
  /**
   * The `KeyARN` of the key whose resource-based policy you want to delete.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyOutput {}

/**
 * The shared information used when deriving a key using ECDH.
 *
 * @public
 */
export type DiffieHellmanDerivationData =
  | DiffieHellmanDerivationData.SharedInformationMember
  | DiffieHellmanDerivationData.$UnknownMember;

/**
 * @public
 */
export namespace DiffieHellmanDerivationData {
  /**
   * A string containing information that binds the ECDH derived key to the two parties involved or to the context of the key.
   *
   * It may include details like identities of the two parties deriving the key, context of the operation, session IDs, and optionally a nonce. It must not contain zero bytes. It is not recommended to reuse shared information for multiple ECDH key derivations, as it could result in derived key material being the same across different derivations.
   *
   * @public
   */
  export interface SharedInformationMember {
    SharedInformation: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SharedInformation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SharedInformation: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input parameters for disabling default key replication regions for the account.
 *
 * @public
 */
export interface DisableDefaultKeyReplicationRegionsInput {
  /**
   * The list of Amazon Web Services Regions to remove from the account's default replication regions.
   *
   * New keys created after this operation will not automatically be replicated to these regions, though existing keys with replication to these regions will be unaffected.
   *
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * Output from disabling default key replication regions for the account.
 *
 * @public
 */
export interface DisableDefaultKeyReplicationRegionsOutput {
  /**
   * The remaining list of regions where default key replication is still enabled for the account.
   *
   * This reflects the account's default replication configuration after removing the specified regions.
   *
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMpaTeamInput {
  /**
   * The protected operation to disassociate from the MPA team. Currently, the only supported value is `IMPORT_ROOT_PUBLIC_KEY_CERTIFICATE`.
   *
   * @public
   */
  Action: MpaOperation | undefined;

  /**
   * The comment from the requester explaining the reason for the disassociation.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMpaTeamOutput {
  /**
   * The details of the MPA team association.
   *
   * @public
   */
  MpaTeamAssociation: MpaTeamAssociation | undefined;
}

/**
 * Input parameters for enabling default key replication regions for the account.
 *
 * @public
 */
export interface EnableDefaultKeyReplicationRegionsInput {
  /**
   * The list of Amazon Web Services Regions to enable as default replication regions for the Amazon Web Services account for [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html).
   *
   * New keys created in this account will automatically be replicated to these regions unless explicitly overridden during key creation.
   *
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * Output from enabling default key replication regions for the account.
 *
 * @public
 */
export interface EnableDefaultKeyReplicationRegionsOutput {
  /**
   * The complete list of regions where default key replication is now enabled for the account.
   *
   * This includes both previously enabled regions and the newly added regions from this operation.
   *
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * Parameter information for key material export using AS2805 key cryptogram format.
 *
 * @public
 */
export interface ExportAs2805KeyCryptogram {
  /**
   * A key identifier that can be either a key ARN or an alias name. This allows flexible key identification in operations.
   *
   * When using a key ARN, it must be a fully qualified ARN in the format: `arn:aws:payment-cryptography:region:account:key/key-id`.
   *
   * When using an alias, it must begin with `alias/` followed by the alias name.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * The cryptographic usage of the key under export.
   *
   * @public
   */
  As2805KeyVariant: As2805KeyVariant | undefined;
}

/**
 * Parameter information for IPEK generation during export.
 *
 * @public
 */
export interface ExportDukptInitialKey {
  /**
   * The KSN for IPEK generation using DUKPT.
   *
   * KSN must be padded before sending to Amazon Web Services Payment Cryptography. KSN hex length should be 20 for a TDES_2KEY key or 24 for an AES key.
   *
   * @public
   */
  KeySerialNumber: string | undefined;
}

/**
 * The attributes for IPEK generation during export.
 *
 * @public
 */
export interface ExportAttributes {
  /**
   * Parameter information for IPEK export.
   *
   * @public
   */
  ExportDukptInitialKey?: ExportDukptInitialKey | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. Specify KCV for IPEK export only.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
 *
 * @public
 */
export interface KeyBlockHeaders {
  /**
   * The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.
   *
   * @public
   */
  KeyModesOfUse?: KeyModesOfUse | undefined;

  /**
   * Specifies subsequent exportability of the key within the key block after it is received by the receiving party. It can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography.
   *
   * When set to `EXPORTABLE`, the key can be subsequently exported by the receiver under a KEK using TR-31 or TR-34 key block export only. When set to `NON_EXPORTABLE`, the key cannot be subsequently exported by the receiver. When set to `SENSITIVE`, the key can be exported by the receiver under a KEK using TR-31, TR-34, RSA wrap and unwrap cryptogram or using a symmetric cryptogram key export method. For further information refer to [ANSI X9.143-2022](https://webstore.ansi.org/standards/ascx9/ansix91432022).
   *
   * @public
   */
  KeyExportability?: KeyExportability | undefined;

  /**
   * Parameter used to indicate the version of the key carried in the key block or indicate the value carried in the key block is a component of a key.
   *
   * @public
   */
  KeyVersion?: string | undefined;

  /**
   * Parameter used to indicate the type of optional data in key block headers. Refer to [ANSI X9.143-2022](https://webstore.ansi.org/standards/ascx9/ansix91432022) for information on allowed data type for optional blocks.
   *
   * Optional block character limit is 112 characters. For each optional block, 2 characters are reserved for optional block ID and 2 characters reserved for optional block length. More than one optional blocks can be included as long as the combined length does not increase 112 characters.
   *
   * @public
   */
  OptionalBlocks?: Record<string, string> | undefined;
}

/**
 * Key derivation parameter information for key material export using asymmetric ECDH key exchange method.
 *
 * @public
 */
export interface ExportDiffieHellmanTr31KeyBlock {
  /**
   * The `keyARN` of the asymmetric ECC key created within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  PrivateKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the CA that signed the `PublicKeyCertificate` for the client's receiving ECC key pair.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The public key certificate of the client's receiving ECC key pair, in PEM format (base64 encoded), to use for ECDH key derivation.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * The key algorithm of the shared derived ECDH key.
   *
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * The key derivation function to use when deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * The hash type to use when deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * The shared information used when deriving a key using ECDH.
   *
   * @public
   */
  DerivationData: DiffieHellmanDerivationData | undefined;

  /**
   * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
   *
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method.
 *
 * @public
 */
export interface ExportKeyCryptogram {
  /**
   * The `KeyARN` of the certificate chain that signs the wrapping key certificate during RSA wrap and unwrap key export.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The wrapping key certificate in PEM format (base64 encoded). Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.
   *
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * The wrapping spec for the key under export.
   *
   * @public
   */
  WrappingSpec?: WrappingKeySpec | undefined;
}

/**
 * Parameter information for key material export using symmetric TR-31 key exchange method.
 *
 * @public
 */
export interface ExportTr31KeyBlock {
  /**
   * The `KeyARN` of the the wrapping key. This key encrypts or wraps the key under export for TR-31 key block generation.
   *
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
   *
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * Parameter information for key material export using the asymmetric TR-34 key exchange method.
 *
 * @public
 */
export interface ExportTr34KeyBlock {
  /**
   * The `KeyARN` of the certificate chain that signs the wrapping key certificate during TR-34 key export.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The `KeyARN` of the wrapping key certificate. Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.
   *
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * The export token to initiate key export from Amazon Web Services Payment Cryptography. It also contains the signing key certificate that will sign the wrapped key during TR-34 key block generation. Call [GetParametersForExport](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html) to receive an export token. It expires after 30 days. You can use the same export token to export multiple keys from the same service account.
   *
   * @public
   */
  ExportToken?: string | undefined;

  /**
   * Key Identifier used for signing the export key
   *
   * @public
   */
  SigningKeyIdentifier?: string | undefined;

  /**
   * The certificate used to sign the TR-34 key block.
   *
   * @public
   */
  SigningKeyCertificate?: string | undefined;

  /**
   * The format of key block that Amazon Web Services Payment Cryptography will use during key export.
   *
   * @public
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.
   *
   * @public
   */
  RandomNonce?: string | undefined;

  /**
   * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
   *
   * @public
   */
  KeyBlockHeaders?: KeyBlockHeaders | undefined;
}

/**
 * Parameter information for key material export from Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.
 *
 * @public
 */
export type ExportKeyMaterial =
  | ExportKeyMaterial.As2805KeyCryptogramMember
  | ExportKeyMaterial.DiffieHellmanTr31KeyBlockMember
  | ExportKeyMaterial.KeyCryptogramMember
  | ExportKeyMaterial.Tr31KeyBlockMember
  | ExportKeyMaterial.Tr34KeyBlockMember
  | ExportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ExportKeyMaterial {
  /**
   * Parameter information for key material export using symmetric TR-31 key exchange method.
   *
   * @public
   */
  export interface Tr31KeyBlockMember {
    Tr31KeyBlock: ExportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material export using the asymmetric TR-34 key exchange method.
   *
   * @public
   */
  export interface Tr34KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ExportTr34KeyBlock;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method
   *
   * @public
   */
  export interface KeyCryptogramMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ExportKeyCryptogram;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Key derivation parameter information for key material export using asymmetric ECDH key exchange method.
   *
   * @public
   */
  export interface DiffieHellmanTr31KeyBlockMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock: ExportDiffieHellmanTr31KeyBlock;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material export using AS2805 key cryptogram format.
   *
   * @public
   */
  export interface As2805KeyCryptogramMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram: ExportAs2805KeyCryptogram;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Tr31KeyBlock: (value: ExportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ExportTr34KeyBlock) => T;
    KeyCryptogram: (value: ExportKeyCryptogram) => T;
    DiffieHellmanTr31KeyBlock: (value: ExportDiffieHellmanTr31KeyBlock) => T;
    As2805KeyCryptogram: (value: ExportAs2805KeyCryptogram) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ExportKeyInput {
  /**
   * The key block format type, for example, TR-34 or TR-31, to use during key material export.
   *
   * @public
   */
  KeyMaterial: ExportKeyMaterial | undefined;

  /**
   * The `KeyARN` of the key under export from Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  ExportKeyIdentifier: string | undefined;

  /**
   * The attributes for IPEK generation during export.
   *
   * @public
   */
  ExportAttributes?: ExportAttributes | undefined;
}

/**
 * Parameter information for generating a WrappedKeyBlock for key exchange.
 *
 * @public
 */
export interface WrappedKey {
  /**
   * The `KeyARN` of the wrapped key.
   *
   * @public
   */
  WrappingKeyArn: string | undefined;

  /**
   * The key block format of a wrapped key.
   *
   * @public
   */
  WrappedKeyMaterialFormat: WrappedKeyMaterialFormat | undefined;

  /**
   * Parameter information for generating a wrapped key using TR-31 or TR-34 skey exchange method.
   *
   * @public
   */
  KeyMaterial: string | undefined;

  /**
   * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * @public
   */
  KeyCheckValue?: string | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;
}

/**
 * @public
 */
export interface ExportKeyOutput {
  /**
   * The key material under export as a TR-34 WrappedKeyBlock or a TR-31 WrappedKeyBlock. or a RSA WrappedKeyCryptogram.
   *
   * @public
   */
  WrappedKey?: WrappedKey | undefined;
}

/**
 * @public
 */
export interface GetCertificateSigningRequestInput {
  /**
   * Asymmetric key used for generating the certificate signing request
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The cryptographic algorithm used to sign your CSR.
   *
   * @public
   */
  SigningAlgorithm: SigningAlgorithmType | undefined;

  /**
   * The metadata used to create the CSR.
   *
   * @public
   */
  CertificateSubject: CertificateSubjectType | undefined;
}

/**
 * @public
 */
export interface GetCertificateSigningRequestOutput {
  /**
   * The certificate signing request generated using the key pair associated with the key identifier.
   *
   * @public
   */
  CertificateSigningRequest: string | undefined;
}

/**
 * Input parameters for retrieving the account's default key replication regions. This operation requires no input parameters.
 *
 * @public
 */
export interface GetDefaultKeyReplicationRegionsInput {}

/**
 * Output containing the account's current default key replication configuration.
 *
 * @public
 */
export interface GetDefaultKeyReplicationRegionsOutput {
  /**
   * The list of regions where default key replication is currently enabled for the account.
   *
   * New keys created in this account will automatically be replicated to these regions unless explicitly configured otherwise during key creation.
   *
   * @public
   */
  EnabledReplicationRegions: string[] | undefined;
}

/**
 * @public
 */
export interface GetKeyInput {
  /**
   * The `KeyARN` of the Amazon Web Services Payment Cryptography key.
   *
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetKeyOutput {
  /**
   * Contains the key metadata, including both immutable and mutable attributes for the key, but does not include actual cryptographic key material.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface GetMpaTeamAssociationInput {
  /**
   * The protected operation whose MPA team association you want to retrieve. Currently, the only supported value is `IMPORT_ROOT_PUBLIC_KEY_CERTIFICATE`.
   *
   * @public
   */
  Action: MpaOperation | undefined;
}

/**
 * @public
 */
export interface GetMpaTeamAssociationOutput {
  /**
   * The details of the MPA team association.
   *
   * @public
   */
  MpaTeamAssociation: MpaTeamAssociation | undefined;
}

/**
 * @public
 */
export interface GetParametersForExportInput {
  /**
   * The key block format type (for example, TR-34 or TR-31) to use during key material export. Export token is only required for a TR-34 key export, `TR34_KEY_BLOCK`. Export token is not required for TR-31 key export.
   *
   * @public
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block. `RSA_2048` is the only signing key algorithm allowed.
   *
   * @public
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * Specifies whether to reuse the existing export token and signing key certificate. If set to `true` and a valid export token exists for the same key material type and signing key algorithm with at least 7 days of remaining validity, the existing token and signing key certificate are returned. Otherwise, a new export token and signing key certificate are generated. The default value is `false`, which generates a new export token and signing key certificate on every call.
   *
   * @public
   */
  ReuseLastGeneratedToken?: boolean | undefined;
}

/**
 * @public
 */
export interface GetParametersForExportOutput {
  /**
   * The signing key certificate in PEM format (base64 encoded) of the public key for signature within the TR-34 key block. The certificate expires after 30 days.
   *
   * @public
   */
  SigningKeyCertificate: string | undefined;

  /**
   * The root certificate authority (CA) that signed the signing key certificate in PEM format (base64 encoded).
   *
   * @public
   */
  SigningKeyCertificateChain: string | undefined;

  /**
   * The algorithm of the signing key certificate for use in TR-34 key block generation. `RSA_2048` is the only signing key algorithm allowed.
   *
   * @public
   */
  SigningKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 30 days. You can use the same export token to export multiple keys from the same service account.
   *
   * @public
   */
  ExportToken: string | undefined;

  /**
   * The validity period of the export token.
   *
   * @public
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportInput {
  /**
   * The method to use for key material import. Import token is only required for TR-34 WrappedKeyBlock (`TR34_KEY_BLOCK`) and RSA WrappedKeyCryptogram (`KEY_CRYPTOGRAM`).
   *
   * Import token is not required for TR-31, root public key cerificate or trusted public key certificate.
   *
   * @public
   */
  KeyMaterialType: KeyMaterialType | undefined;

  /**
   * The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import.
   *
   * At this time, `RSA_2048` is the allowed algorithm for TR-34 WrappedKeyBlock import. Additionally, `RSA_2048`, `RSA_3072`, `RSA_4096` are the allowed algorithms for RSA WrappedKeyCryptogram import.
   *
   * @public
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * Specifies whether to reuse the existing import token and wrapping key certificate. If set to `true` and a valid import token exists for the same key material type and wrapping key algorithm with at least 7 days of remaining validity, the existing token and wrapping key certificate are returned. Otherwise, a new import token and wrapping key certificate are generated. The default value is `false`, which generates a new import token and wrapping key certificate on every call.
   *
   * @public
   */
  ReuseLastGeneratedToken?: boolean | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportOutput {
  /**
   * The wrapping key certificate in PEM format (base64 encoded) of the wrapping key for use within the TR-34 key block. The certificate expires in 30 days.
   *
   * @public
   */
  WrappingKeyCertificate: string | undefined;

  /**
   * The Amazon Web Services Payment Cryptography root certificate authority (CA) that signed the wrapping key certificate in PEM format (base64 encoded).
   *
   * @public
   */
  WrappingKeyCertificateChain: string | undefined;

  /**
   * The algorithm of the wrapping key for use within TR-34 WrappedKeyBlock or RSA WrappedKeyCryptogram.
   *
   * @public
   */
  WrappingKeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 30 days. You can use the same import token to import multiple keys to the same service account.
   *
   * @public
   */
  ImportToken: string | undefined;

  /**
   * The validity period of the import token.
   *
   * @public
   */
  ParametersValidUntilTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateInput {
  /**
   * The `KeyARN` of the asymmetric key pair.
   *
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyCertificateOutput {
  /**
   * The public key component of the asymmetric key pair in a certificate PEM format (base64 encoded). It is signed by the root certificate authority (CA). The certificate is valid for 90 days from the time it is issued. The service returns a cached certificate if one exists with at least 30 days of remaining validity. Otherwise, a new 90-day certificate is issued.
   *
   * @public
   */
  KeyCertificate: string | undefined;

  /**
   * The root certificate authority (CA) that signed the public key certificate in PEM format (base64 encoded) of the asymmetric key pair.
   *
   * @public
   */
  KeyCertificateChain: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The `KeyARN` of the key whose resource-based policy you want to retrieve.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The `KeyARN` of the key.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource-based policy attached to the key, in JSON format.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * Parameter information for key material import using AS2805 key cryptogram format.
 *
 * @public
 */
export interface ImportAs2805KeyCryptogram {
  /**
   * The cryptographic usage of the key under import.
   *
   * @public
   */
  As2805KeyVariant: As2805KeyVariant | undefined;

  /**
   * The list of cryptographic operations that you can perform using the key. The modes of use are deﬁned in section A.5.3 of the TR-31 spec.
   *
   * @public
   */
  KeyModesOfUse: KeyModesOfUse | undefined;

  /**
   * The key algorithm of the key under import.
   *
   * @public
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * Specified whether the key is exportable. This data is immutable after the key is imported.
   *
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * A key identifier that can be either a key ARN or an alias name. This allows flexible key identification in operations.
   *
   * When using a key ARN, it must be a fully qualified ARN in the format: `arn:aws:payment-cryptography:region:account:key/key-id`.
   *
   * When using an alias, it must begin with `alias/` followed by the alias name.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * The wrapped key cryptogram under import.
   *
   * @public
   */
  WrappedKeyCryptogram: string | undefined;
}

/**
 * Key derivation parameter information for key material import using asymmetric ECDH key exchange method.
 *
 * @public
 */
export interface ImportDiffieHellmanTr31KeyBlock {
  /**
   * The `keyARN` of the asymmetric ECC key created within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  PrivateKeyIdentifier: string | undefined;

  /**
   * The `keyARN` of the CA that signed the `PublicKeyCertificate` for the client's receiving ECC key pair.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The public key certificate of the client's receiving ECC key pair, in PEM format (base64 encoded), to use for ECDH key derivation.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * The key algorithm of the shared derived ECDH key.
   *
   * @public
   */
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm | undefined;

  /**
   * The key derivation function to use when deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationFunction: KeyDerivationFunction | undefined;

  /**
   * The hash type to use when deriving a key using ECDH.
   *
   * @public
   */
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm | undefined;

  /**
   * The shared information used when deriving a key using ECDH.
   *
   * @public
   */
  DerivationData: DiffieHellmanDerivationData | undefined;

  /**
   * The ECDH wrapped key block to import.
   *
   * @public
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.
 *
 * @public
 */
export interface ImportKeyCryptogram {
  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * Specifies whether the key is exportable from the service.
   *
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * The RSA wrapped key cryptogram under import.
   *
   * @public
   */
  WrappedKeyCryptogram: string | undefined;

  /**
   * The import token that initiates key import using the asymmetric RSA wrap and unwrap key exchange method into AWS Payment Cryptography. It expires after 30 days. You can use the same import token to import multiple keys to the same service account.
   *
   * @public
   */
  ImportToken: string | undefined;

  /**
   * The wrapping spec for the wrapped key cryptogram.
   *
   * @public
   */
  WrappingSpec?: WrappingKeySpec | undefined;
}

/**
 * Parameter information for root public key certificate import.
 *
 * @public
 */
export interface RootCertificatePublicKey {
  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the root public key is imported.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * Parameter information for root public key certificate import.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;
}

/**
 * Parameter information for key material import using symmetric TR-31 key exchange method.
 *
 * @public
 */
export interface ImportTr31KeyBlock {
  /**
   * The `KeyARN` of the key that will decrypt or unwrap a TR-31 key block during import.
   *
   * @public
   */
  WrappingKeyIdentifier: string | undefined;

  /**
   * The TR-31 wrapped key block to import.
   *
   * @public
   */
  WrappedKeyBlock: string | undefined;
}

/**
 * Parameter information for key material import using the asymmetric TR-34 key exchange method.
 *
 * @public
 */
export interface ImportTr34KeyBlock {
  /**
   * The `KeyARN` of the certificate chain that signs the signing key certificate during TR-34 key import.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;

  /**
   * The public key component in PEM certificate format of the private key that signs the KDH TR-34 WrappedKeyBlock.
   *
   * @public
   */
  SigningKeyCertificate: string | undefined;

  /**
   * The import token that initiates key import using the asymmetric TR-34 key exchange method into Amazon Web Services Payment Cryptography. It expires after 30 days. You can use the same import token to import multiple keys to the same service account.
   *
   * @public
   */
  ImportToken?: string | undefined;

  /**
   * Key Identifier used for unwrapping the import key
   *
   * @public
   */
  WrappingKeyIdentifier?: string | undefined;

  /**
   * The certificate used to wrap the TR-34 key block.
   *
   * @public
   */
  WrappingKeyCertificate?: string | undefined;

  /**
   * The TR-34 wrapped key block to import.
   *
   * @public
   */
  WrappedKeyBlock: string | undefined;

  /**
   * The key block format to use during key import. The only value allowed is `X9_TR34_2012`.
   *
   * @public
   */
  KeyBlockFormat: Tr34KeyBlockFormat | undefined;

  /**
   * A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.
   *
   * @public
   */
  RandomNonce?: string | undefined;
}

/**
 * Parameter information for trusted public key certificate import.
 *
 * @public
 */
export interface TrustedCertificatePublicKey {
  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after a trusted public key is imported.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * Parameter information for trusted public key certificate import.
   *
   * @public
   */
  PublicKeyCertificate: string | undefined;

  /**
   * The `KeyARN` of the root public key certificate or certificate chain that signs the trusted public key certificate import.
   *
   * @public
   */
  CertificateAuthorityPublicKeyIdentifier: string | undefined;
}

/**
 * Parameter information for key material import into Amazon Web Services Payment Cryptography using TR-31 or TR-34 or RSA wrap and unwrap key exchange method.
 *
 * @public
 */
export type ImportKeyMaterial =
  | ImportKeyMaterial.As2805KeyCryptogramMember
  | ImportKeyMaterial.DiffieHellmanTr31KeyBlockMember
  | ImportKeyMaterial.KeyCryptogramMember
  | ImportKeyMaterial.RootCertificatePublicKeyMember
  | ImportKeyMaterial.Tr31KeyBlockMember
  | ImportKeyMaterial.Tr34KeyBlockMember
  | ImportKeyMaterial.TrustedCertificatePublicKeyMember
  | ImportKeyMaterial.$UnknownMember;

/**
 * @public
 */
export namespace ImportKeyMaterial {
  /**
   * Parameter information for root public key certificate import.
   *
   * @public
   */
  export interface RootCertificatePublicKeyMember {
    RootCertificatePublicKey: RootCertificatePublicKey;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for trusted public key certificate import.
   *
   * @public
   */
  export interface TrustedCertificatePublicKeyMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey: TrustedCertificatePublicKey;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material import using symmetric TR-31 key exchange method.
   *
   * @public
   */
  export interface Tr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock: ImportTr31KeyBlock;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material import using the asymmetric TR-34 key exchange method.
   *
   * @public
   */
  export interface Tr34KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock: ImportTr34KeyBlock;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.
   *
   * @public
   */
  export interface KeyCryptogramMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram: ImportKeyCryptogram;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Key derivation parameter information for key material import using asymmetric ECDH key exchange method.
   *
   * @public
   */
  export interface DiffieHellmanTr31KeyBlockMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock: ImportDiffieHellmanTr31KeyBlock;
    As2805KeyCryptogram?: never;
    $unknown?: never;
  }

  /**
   * Parameter information for key material import using AS2805 key cryptogram format.
   *
   * @public
   */
  export interface As2805KeyCryptogramMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram: ImportAs2805KeyCryptogram;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RootCertificatePublicKey?: never;
    TrustedCertificatePublicKey?: never;
    Tr31KeyBlock?: never;
    Tr34KeyBlock?: never;
    KeyCryptogram?: never;
    DiffieHellmanTr31KeyBlock?: never;
    As2805KeyCryptogram?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RootCertificatePublicKey: (value: RootCertificatePublicKey) => T;
    TrustedCertificatePublicKey: (value: TrustedCertificatePublicKey) => T;
    Tr31KeyBlock: (value: ImportTr31KeyBlock) => T;
    Tr34KeyBlock: (value: ImportTr34KeyBlock) => T;
    KeyCryptogram: (value: ImportKeyCryptogram) => T;
    DiffieHellmanTr31KeyBlock: (value: ImportDiffieHellmanTr31KeyBlock) => T;
    As2805KeyCryptogram: (value: ImportAs2805KeyCryptogram) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ImportKeyInput {
  /**
   * The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey.
   *
   * @public
   */
  KeyMaterial: ImportKeyMaterial | undefined;

  /**
   * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity.
   *
   * For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
   *
   * @public
   */
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm | undefined;

  /**
   * Specifies whether import key is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is imported. To tag an existing Amazon Web Services Payment Cryptography key, use the [TagResource](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html) operation.
   *
   * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * > **Note:** Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of Amazon Web Services Regions for key replication operations.
   *
   * Each region in the list must be a valid Amazon Web Services Region identifier where Amazon Web Services Payment Cryptography is available. This list is used to specify which regions should be added to or removed from a key's replication configuration.
   *
   * @public
   */
  ReplicationRegions?: string[] | undefined;

  /**
   * The comment from the requester explaining the reason for the import.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  RequesterComment?: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyOutput {
  /**
   * The `KeyARN` of the key material imported within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListKeysInput {
  /**
   * The key state of the keys you want to list.
   *
   * @public
   */
  KeyState?: KeyState | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextToken` from the truncated response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Metadata about an Amazon Web Services Payment Cryptography key.
 *
 * @public
 */
export interface KeySummary {
  /**
   * The Amazon Resource Name (ARN) of the key.
   *
   * @public
   */
  KeyArn: string | undefined;

  /**
   * The state of an Amazon Web Services Payment Cryptography that is being created or deleted.
   *
   * @public
   */
  KeyState: KeyState | undefined;

  /**
   * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
   *
   * @public
   */
  KeyAttributes: KeyAttributes | undefined;

  /**
   * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
   *
   * @public
   */
  KeyCheckValue: string | undefined;

  /**
   * Specifies whether the key is exportable. This data is immutable after the key is created.
   *
   * @public
   */
  Exportable: boolean | undefined;

  /**
   * Specifies whether the key is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy.
   *
   * Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see [Multi-Region key replication](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-multi-region-replication.html).
   *
   * @public
   */
  MultiRegionKeyType?: MultiRegionKeyType | undefined;

  /**
   * An Amazon Web Services Region identifier in the standard format (e.g., `us-east-1`, `eu-west-1`).
   *
   * Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available.
   *
   * @public
   */
  PrimaryRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListKeysOutput {
  /**
   * The list of keys created within the caller's Amazon Web Services account and Amazon Web Services Region.
   *
   * @public
   */
  Keys: KeySummary[] | undefined;

  /**
   * The token for the next set of results, or an empty or null value if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input parameters for removing replication regions from a specific key.
 *
 * @public
 */
export interface RemoveKeyReplicationRegionsInput {
  /**
   * The key identifier (ARN or alias) of the key from which to remove replication regions.
   *
   * This key must exist and have replication enabled in the specified regions.
   *
   * @public
   */
  KeyIdentifier: string | undefined;

  /**
   * The list of Amazon Web Services Regions to remove from the key's replication configuration.
   *
   * The key will no longer be available for cryptographic operations in these regions after removal. Ensure no active operations depend on the key in these regions before removal.
   *
   * @public
   */
  ReplicationRegions: string[] | undefined;
}

/**
 * Output from removing replication regions from a key.
 *
 * @public
 */
export interface RemoveKeyReplicationRegionsOutput {
  /**
   * The updated key metadata after removing the replication regions.
   *
   * This reflects the current state of the key and its updated replication configuration.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface RestoreKeyInput {
  /**
   * The `KeyARN` of the key to be restored within Amazon Web Services Payment Cryptography.
   *
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RestoreKeyOutput {
  /**
   * The key material of the restored key. The `KeyState` will change to `CREATE_COMPLETE` and value for `DeletePendingTimestamp` gets removed.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageInput {
  /**
   * The `KeyArn` of the key.
   *
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartKeyUsageOutput {
  /**
   * The `KeyARN` of the Amazon Web Services Payment Cryptography key activated for use.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageInput {
  /**
   * The `KeyArn` of the key.
   *
   * @public
   */
  KeyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopKeyUsageOutput {
  /**
   * The `KeyARN` of the key.
   *
   * @public
   */
  Key: Key | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The `KeyARN` of the key whose tags you are getting.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextToken` from the truncated response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags associated with a `ResourceArn`. Each tag will list the key-value pair contained within that tag.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * The token for the next set of results, or an empty or null value if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * The `KeyARN` of the key to attach the resource-based policy to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource-based policy to attach to the key, in JSON format.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * The `KeyARN` of the key that the resource-based policy was attached to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource-based policy that was attached to the key.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The `KeyARN` of the key whose tags are being updated.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * To use this parameter, you must have [TagResource](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html) permission in an IAM policy.
   *
   * > **Important:** Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The `KeyARN` of the key whose tags are being removed.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tag keys. Don't include the tag values.
   *
   * If the Amazon Web Services Payment Cryptography key doesn't have the specified tag key, Amazon Web Services Payment Cryptography doesn't throw an exception or return a response. To confirm that the operation succeeded, use the [ListTagsForResource](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListTagsForResource.html) operation.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
