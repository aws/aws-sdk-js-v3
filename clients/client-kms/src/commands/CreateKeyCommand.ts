// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { CreateKeyRequest, CreateKeyResponse } from "../models/models_0";
import { CreateKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandInput extends CreateKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandOutput extends CreateKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region.
 *       You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services
 *       services let you use KMS keys that you create and manage to protect your service
 *       resources.</p>
 *          <p>A KMS key is a logical representation of a cryptographic key. In addition to the key
 *       material used in cryptographic operations, a KMS key includes metadata, such as the key ID,
 *       key policy, creation date, description, and key state. </p>
 *          <p>Use the parameters of <code>CreateKey</code> to specify the type of KMS key, the source of
 *       its key material, its key policy, description, tags, and other properties.</p>
 *          <note>
 *             <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>Key Management Service key</i>
 *   and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *          </note>
 *          <p>To create different types of KMS keys, use the following guidance:</p>
 *          <dl>
 *             <dt>Symmetric encryption KMS key</dt>
 *             <dd>
 *                <p>By default, <code>CreateKey</code> creates a symmetric encryption KMS key with key
 *             material that KMS generates. This is the basic and most widely used type of KMS key, and
 *             provides the best performance.</p>
 *                <p>To create a symmetric encryption KMS key, you don't need to specify any parameters.
 *             The default value for <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, the default
 *             value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, and the default value for
 *               <code>Origin</code>, <code>AWS_KMS</code>, create a symmetric encryption KMS key with
 *             KMS key material.</p>
 *                <p>If you need a key for basic encryption and decryption or you are creating a KMS key
 *             to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key.
 *             The key material in a symmetric encryption key never leaves KMS unencrypted. You can
 *             use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but
 *             they are typically used to generate data keys and data keys pairs. For details, see
 *               <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Asymmetric KMS keys</dt>
 *             <dd>
 *                <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify
 *             the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter
 *             to determine whether the KMS key will be used to encrypt and decrypt or sign and verify.
 *             You can't change these properties after the KMS key is created.</p>
 *                <p>Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, ML-DSA
 *             key pair or an SM2 key pair (China Regions only). The private key in an asymmetric KMS
 *             key never leaves KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key so it can be used
 *             outside of KMS. Each KMS key can have only one key usage. KMS keys with RSA key pairs
 *             can be used to encrypt and decrypt data or sign and verify messages (but not both). KMS
 *             keys with NIST-standard ECC key pairs can be used to sign and verify messages or
 *             derive shared secrets (but not both). KMS keys with <code>ECC_SECG_P256K1</code> can be
 *             used only to sign and verify messages. KMS keys with ML-DSA key pairs can be used to
 *             sign and verify messages. KMS keys with SM2 key pairs (China Regions only) can be used
 *             to either encrypt and decrypt data, sign and verify messages, or derive shared secrets
 *             (you must choose one key usage type). For information about asymmetric KMS keys, see
 *               <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric
 *               KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>HMAC KMS key</dt>
 *             <dd>
 *                <p>To create an HMAC KMS key, set the <code>KeySpec</code> parameter to a key spec
 *             value for HMAC KMS keys. Then set the <code>KeyUsage</code> parameter to
 *               <code>GENERATE_VERIFY_MAC</code>. You must set the key usage even though
 *               <code>GENERATE_VERIFY_MAC</code> is the only valid key usage value for HMAC KMS keys.
 *             You can't change these properties after the KMS key is created.</p>
 *                <p>HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use
 *             HMAC keys to generate (<a>GenerateMac</a>) and verify (<a>VerifyMac</a>) HMAC codes for messages up to 4096 bytes.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Multi-Region primary keys</dt>
 *             <dt>Imported key material</dt>
 *             <dd>
 *                <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region,
 *             use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create
 *             a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID
 *             and key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its
 *             primary key to a replica key, use the <a>UpdatePrimaryRegion</a>
 *             operation.</p>
 *                <p>You can create multi-Region KMS keys for all supported KMS key types: symmetric
 *             encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric
 *             signing KMS keys. You can also create multi-Region keys with imported key material.
 *             However, you can't create multi-Region keys in a custom key store.</p>
 *                <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dd>
 *                <p>To import your own key material into a KMS key, begin by creating a KMS key with no
 *             key material. To do this, use the <code>Origin</code> parameter of
 *               <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token. Use
 *             the wrapping public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For
 *             step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *                <p>You can import key material into KMS keys of all supported KMS key types: symmetric
 *             encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric
 *             signing KMS keys. You can also create multi-Region keys with imported key material.
 *             However, you can't import key material into a KMS key in a custom key store.</p>
 *                <p>To create a multi-Region primary key with imported key material, use the
 *               <code>Origin</code> parameter of <code>CreateKey</code> with a value of
 *               <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of
 *               <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html ">Importing key material step
 *               1</a>. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p> </p>
 *             </dd>
 *             <dt>Custom key store</dt>
 *             <dd>
 *                <p>A <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a> lets you protect your Amazon Web Services resources using keys in a backing key
 *             store that you own and manage. When you request a cryptographic operation with a KMS key
 *             in a custom key store, the operation is performed in the backing key store using its
 *             cryptographic keys.</p>
 *                <p>KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a> backed by an CloudHSM cluster and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an
 *             external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store,
 *             KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS
 *             key. When you create a KMS key in an external key store, you specify an existing
 *             encryption key in the external key manager.</p>
 *                <note>
 *                   <p>Some external key managers provide a simpler method for creating a KMS key in an
 *               external key store. For details, see your external key manager documentation.</p>
 *                </note>
 *                <p>Before you create a KMS key in a custom key store, the <code>ConnectionState</code>
 *             of the key store must be <code>CONNECTED</code>. To connect the custom key store, use
 *             the <a>ConnectCustomKeyStore</a> operation. To find the
 *               <code>ConnectionState</code>, use the <a>DescribeCustomKeyStores</a>
 *             operation.</p>
 *                <p>To create a KMS key in a custom key store, use the <code>CustomKeyStoreId</code>.
 *             Use the default <code>KeySpec</code> value, <code>SYMMETRIC_DEFAULT</code>, and the
 *             default <code>KeyUsage</code> value, <code>ENCRYPT_DECRYPT</code> to create a symmetric
 *             encryption key. No other key type is supported in a custom key store.</p>
 *                <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-cmk-keystore.html">CloudHSM key store</a>, use the
 *               <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM
 *             cluster that is associated with the custom key store must have at least two active HSMs
 *             in different Availability Zones in the Amazon Web Services Region.</p>
 *                <p>To create a KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keys.html">external key store</a>, use the
 *               <code>Origin</code> parameter with a value of <code>EXTERNAL_KEY_STORE</code> and an
 *               <code>XksKeyId</code> parameter that identifies an existing external key.</p>
 *                <note>
 *                   <p>Some external key managers provide a simpler method for creating a KMS key in an
 *               external key store. For details, see your external key manager documentation.</p>
 *                </note>
 *             </dd>
 *          </dl>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot use this operation to
 *       create a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the
 *         <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related
 *       permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/customer-managed-policies.html#iam-policy-example-create-key">Allow a user
 *         to create KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ScheduleKeyDeletion</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // CreateKeyRequest
 *   Policy: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   KeyUsage: "SIGN_VERIFY" || "ENCRYPT_DECRYPT" || "GENERATE_VERIFY_MAC" || "KEY_AGREEMENT",
 *   CustomerMasterKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2",
 *   KeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2" || "ML_DSA_44" || "ML_DSA_65" || "ML_DSA_87" || "ECC_NIST_EDWARDS25519",
 *   Origin: "AWS_KMS" || "EXTERNAL" || "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 *   CustomKeyStoreId: "STRING_VALUE",
 *   BypassPolicyLockoutSafetyCheck: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   MultiRegion: true || false,
 *   XksKeyId: "STRING_VALUE",
 * };
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyResponse
 * //   KeyMetadata: { // KeyMetadata
 * //     AWSAccountId: "STRING_VALUE",
 * //     KeyId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Enabled: true || false,
 * //     Description: "STRING_VALUE",
 * //     KeyUsage: "SIGN_VERIFY" || "ENCRYPT_DECRYPT" || "GENERATE_VERIFY_MAC" || "KEY_AGREEMENT",
 * //     KeyState: "Creating" || "Enabled" || "Disabled" || "PendingDeletion" || "PendingImport" || "PendingReplicaDeletion" || "Unavailable" || "Updating",
 * //     DeletionDate: new Date("TIMESTAMP"),
 * //     ValidTo: new Date("TIMESTAMP"),
 * //     Origin: "AWS_KMS" || "EXTERNAL" || "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 * //     CustomKeyStoreId: "STRING_VALUE",
 * //     CloudHsmClusterId: "STRING_VALUE",
 * //     ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 * //     KeyManager: "AWS" || "CUSTOMER",
 * //     CustomerMasterKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2",
 * //     KeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2" || "ML_DSA_44" || "ML_DSA_65" || "ML_DSA_87" || "ECC_NIST_EDWARDS25519",
 * //     EncryptionAlgorithms: [ // EncryptionAlgorithmSpecList
 * //       "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //     ],
 * //     SigningAlgorithms: [ // SigningAlgorithmSpecList
 * //       "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA" || "ML_DSA_SHAKE_256" || "ED25519_SHA_512" || "ED25519_PH_SHA_512",
 * //     ],
 * //     KeyAgreementAlgorithms: [ // KeyAgreementAlgorithmSpecList
 * //       "ECDH",
 * //     ],
 * //     MultiRegion: true || false,
 * //     MultiRegionConfiguration: { // MultiRegionConfiguration
 * //       MultiRegionKeyType: "PRIMARY" || "REPLICA",
 * //       PrimaryKey: { // MultiRegionKey
 * //         Arn: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       ReplicaKeys: [ // MultiRegionKeyList
 * //         {
 * //           Arn: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     PendingDeletionWindowInDays: Number("int"),
 * //     MacAlgorithms: [ // MacAlgorithmSpecList
 * //       "HMAC_SHA_224" || "HMAC_SHA_256" || "HMAC_SHA_384" || "HMAC_SHA_512",
 * //     ],
 * //     XksKeyConfiguration: { // XksKeyConfigurationType
 * //       Id: "STRING_VALUE",
 * //     },
 * //     CurrentKeyMaterialId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateKeyCommandInput - {@link CreateKeyCommandInput}
 * @returns {@link CreateKeyCommandOutput}
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CloudHsmClusterInvalidConfigurationException} (client fault)
 *  <p>The request was rejected because the associated CloudHSM cluster did not meet the
 *       configuration requirements for an CloudHSM key store.</p>
 *          <ul>
 *             <li>
 *                <p>The CloudHSM cluster must be configured with private subnets in at least two different
 *           Availability Zones in the Region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">security group for
 *             the cluster</a> (cloudhsm-cluster-<i><cluster-id></i>-sg) must
 *           include inbound rules and outbound rules that allow TCP traffic on ports 2223-2225. The
 *             <b>Source</b> in the inbound rules and the <b>Destination</b> in the outbound rules must match the security group
 *           ID. These rules are set by default when you create the CloudHSM cluster. Do not delete or
 *           change them. To get information about a particular security group, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">DescribeSecurityGroups</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>The CloudHSM cluster must contain at least as many HSMs as the operation requires. To add
 *           HSMs, use the CloudHSM <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation.</p>
 *                <p>For the <a>CreateCustomKeyStore</a>, <a>UpdateCustomKeyStore</a>, and <a>CreateKey</a> operations, the CloudHSM cluster must have at least two
 *           active HSMs, each in a different Availability Zone. For the <a>ConnectCustomKeyStore</a> operation, the CloudHSM must contain at least one active
 *           HSM.</p>
 *             </li>
 *          </ul>
 *          <p>For information about the requirements for an CloudHSM cluster that is associated with an
 *       CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a>
 *       in the <i>Key Management Service Developer Guide</i>. For information about creating a private subnet for an CloudHSM cluster,
 *       see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/create-subnets.html">Create a Private
 *         Subnet</a> in the <i>CloudHSM User Guide</i>. For information about cluster security groups, see
 *         <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">Configure a Default Security
 *         Group</a> in the <i>
 *                <i>CloudHSM User Guide</i>
 *             </i>. </p>
 *
 * @throws {@link CustomKeyStoreInvalidStateException} (client fault)
 *  <p>The request was rejected because of the <code>ConnectionState</code> of the custom key
 *       store. To get the <code>ConnectionState</code> of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>This exception is thrown under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>You requested the <a>ConnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>FAILED</code>. This operation is valid for all other <code>ConnectionState</code>
 *           values. To reconnect a custom key store in a <code>FAILED</code> state, disconnect it
 *             (<a>DisconnectCustomKeyStore</a>), then connect it
 *             (<code>ConnectCustomKeyStore</code>).</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>CreateKey</a> operation in a custom key store that is
 *           not connected. This operations is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>DisconnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>DISCONNECTED</code>. This operation is valid for all other
 *             <code>ConnectionState</code> values.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>UpdateCustomKeyStore</a> or <a>DeleteCustomKeyStore</a> operation on a custom key store that is not
 *           disconnected. This operation is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>DISCONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>GenerateRandom</a> operation in an CloudHSM key store
 *           that is not connected. This operation is valid only when the CloudHSM key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>. </p>
 *             </li>
 *          </ul>
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a length constraint or quota was exceeded. For more
 *       information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in
 *       the <i>Key Management Service Developer Guide</i>.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the specified policy is not syntactically or semantically
 *       correct.</p>
 *
 * @throws {@link TagException} (client fault)
 *  <p>The request was rejected because one or more tags are not valid.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link XksKeyAlreadyInUseException} (client fault)
 *  <p>The request was rejected because the (<code>XksKeyId</code>) is already associated with
 *       another KMS key in this external key store. Each KMS key in an external key store must be
 *       associated with a different external key.</p>
 *
 * @throws {@link XksKeyInvalidConfigurationException} (client fault)
 *  <p>The request was rejected because the external key specified by the <code>XksKeyId</code>
 *       parameter did not meet the configuration requirements for an external key store.</p>
 *          <p>The external key must be an AES-256 symmetric key that is enabled and performs encryption
 *       and decryption.</p>
 *
 * @throws {@link XksKeyNotFoundException} (client fault)
 *  <p>The request was rejected because the external key store proxy could not find the external
 *       key. This exception is thrown when the value of the <code>XksKeyId</code> parameter doesn't
 *       identify a key in the external key manager associated with the external key proxy.</p>
 *          <p>Verify that the <code>XksKeyId</code> represents an existing key in the external key
 *       manager. Use the key identifier that the external key store proxy uses to identify the key.
 *       For details, see the documentation provided with your external key store proxy or key
 *       manager.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @public
 */
export class CreateKeyCommand extends $Command
  .classBuilder<
    CreateKeyCommandInput,
    CreateKeyCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "CreateKey", {})
  .n("KMSClient", "CreateKeyCommand")
  .sc(CreateKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyRequest;
      output: CreateKeyResponse;
    };
    sdk: {
      input: CreateKeyCommandInput;
      output: CreateKeyCommandOutput;
    };
  };
}
