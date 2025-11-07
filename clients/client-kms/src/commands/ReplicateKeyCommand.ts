// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ReplicateKeyRequest, ReplicateKeyResponse } from "../models/models_0";
import { de_ReplicateKeyCommand, se_ReplicateKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplicateKeyCommand}.
 */
export interface ReplicateKeyCommandInput extends ReplicateKeyRequest {}
/**
 * @public
 *
 * The output of {@link ReplicateKeyCommand}.
 */
export interface ReplicateKeyCommandOutput extends ReplicateKeyResponse, __MetadataBearer {}

/**
 * <p>Replicates a multi-Region key into the specified Region. This operation creates a
 *       multi-Region replica key based on a multi-Region primary key in a different Region of the same
 *       Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a
 *       different Region. To create a multi-Region primary key, use the <a>CreateKey</a>
 *       operation.</p>
 *          <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
 *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
 *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
 *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>A <i>replica key</i> is a fully-functional KMS key that can be used
 *       independently of its primary and peer replica keys. A primary key and its replica keys share
 *       properties that make them interoperable. They have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a> and key material. They also
 *       have the same key spec, key usage, key material origin, and automatic key rotation status.
 *       KMS automatically synchronizes these shared properties among related multi-Region keys. All
 *       other properties of a replica key can differ, including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">key state</a>. KMS pricing and quotas for KMS keys
 *       apply to each primary key and replica key.</p>
 *          <p>When this operation completes, the new replica key has a transient key state of
 *         <code>Creating</code>. This key state changes to <code>Enabled</code> (or
 *         <code>PendingImport</code>) after a few seconds when the process of creating the new replica
 *       key is complete. While the key state is <code>Creating</code>, you can manage key, but you
 *       cannot yet use it in cryptographic operations. If you are creating and using the replica key
 *       programmatically, retry on <code>KMSInvalidStateException</code> or call
 *         <code>DescribeKey</code> to check its <code>KeyState</code> value before using it. For
 *       details about the <code>Creating</code> key state, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>You cannot create more than one replica of a primary key in any Region. If the Region
 *       already includes a replica of the key you're trying to replicate, <code>ReplicateKey</code>
 *       returns an <code>AlreadyExistsException</code> error. If the key state of the existing replica
 *       is <code>PendingDeletion</code>, you can cancel the scheduled key deletion (<a>CancelKeyDeletion</a>) or wait for the key to be deleted. The new replica key you
 *       create will have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-sync-properties">shared
 *         properties</a> as the original replica key.</p>
 *          <p>The CloudTrail log of a <code>ReplicateKey</code> operation records a
 *         <code>ReplicateKey</code> operation in the primary key's Region and a <a>CreateKey</a> operation in the replica key's Region.</p>
 *          <p>If you replicate a multi-Region primary key with imported key material, the replica key is
 *       created with no key material. You must import the same key material that you imported into the
 *       primary key.</p>
 *          <p>To convert a replica key to a primary key, use the <a>UpdatePrimaryRegion</a>
 *       operation.</p>
 *          <note>
 *             <p>
 *                <code>ReplicateKey</code> uses different default values for the <code>KeyPolicy</code>
 *         and <code>Tags</code> parameters than those used in the KMS console. For details, see the
 *         parameter descriptions.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot use this operation to
 *       create a replica key in a different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>kms:ReplicateKey</code> on the primary key (in the primary key's Region).
 *           Include this permission in the primary key's key policy.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>kms:CreateKey</code> in an IAM policy in the replica Region.</p>
 *             </li>
 *             <li>
 *                <p>To use the <code>Tags</code> parameter, <code>kms:TagResource</code> in an IAM policy
 *           in the replica Region.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePrimaryRegion</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReplicateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReplicateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ReplicateKeyRequest
 *   KeyId: "STRING_VALUE", // required
 *   ReplicaRegion: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE",
 *   BypassPolicyLockoutSafetyCheck: true || false,
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ReplicateKeyCommand(input);
 * const response = await client.send(command);
 * // { // ReplicateKeyResponse
 * //   ReplicaKeyMetadata: { // KeyMetadata
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
 * //   ReplicaPolicy: "STRING_VALUE",
 * //   ReplicaTags: [ // TagList
 * //     { // Tag
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReplicateKeyCommandInput - {@link ReplicateKeyCommandInput}
 * @returns {@link ReplicateKeyCommandOutput}
 * @see {@link ReplicateKeyCommandInput} for command's `input` shape.
 * @see {@link ReplicateKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link TagException} (client fault)
 *  <p>The request was rejected because one or more tags are not valid.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To replicate a multi-Region key in a different AWS Region
 * ```javascript
 * // This example creates a multi-Region replica key in us-west-2 of a multi-Region primary key in us-east-1.
 * const input = {
 *   KeyId: "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *   ReplicaRegion: "us-west-2"
 * };
 * const command = new ReplicateKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReplicaKeyMetadata: {
 *     AWSAccountId: "111122223333",
 *     Arn: "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *     CreationDate: 1.607472987918E9,
 *     CustomerMasterKeySpec: "SYMMETRIC_DEFAULT",
 *     Description: "",
 *     Enabled: true,
 *     EncryptionAlgorithms: [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     KeyId: "mrk-1234abcd12ab34cd56ef1234567890ab",
 *     KeyManager: "CUSTOMER",
 *     KeyState: "Enabled",
 *     KeyUsage: "ENCRYPT_DECRYPT",
 *     MultiRegion: true,
 *     MultiRegionConfiguration: {
 *       MultiRegionKeyType: "REPLICA",
 *       PrimaryKey: {
 *         Arn: "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *         Region: "us-east-1"
 *       },
 *       ReplicaKeys: [
 *         {
 *           Arn: "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           Region: "us-west-2"
 *         }
 *       ]
 *     },
 *     Origin: "AWS_KMS"
 *   },
 *   ReplicaPolicy: `{
 *   "Version" : "2012-10-17",
 *   "Id" : "key-default-1",...}`,
 *   ReplicaTags:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ReplicateKeyCommand extends $Command
  .classBuilder<
    ReplicateKeyCommandInput,
    ReplicateKeyCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "ReplicateKey", {})
  .n("KMSClient", "ReplicateKeyCommand")
  .f(void 0, void 0)
  .ser(se_ReplicateKeyCommand)
  .de(de_ReplicateKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplicateKeyRequest;
      output: ReplicateKeyResponse;
    };
    sdk: {
      input: ReplicateKeyCommandInput;
      output: ReplicateKeyCommandOutput;
    };
  };
}
