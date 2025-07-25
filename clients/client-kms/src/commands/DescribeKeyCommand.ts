// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DescribeKeyRequest, DescribeKeyResponse } from "../models/models_0";
import { de_DescribeKeyCommand, se_DescribeKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandInput extends DescribeKeyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandOutput extends DescribeKeyResponse, __MetadataBearer {}

/**
 * <p>Provides detailed information about a KMS key. You can run <code>DescribeKey</code> on a
 *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key">customer managed
 *         key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key">Amazon Web Services managed key</a>.</p>
 *          <p>This detailed information includes the key ARN, creation date (and deletion date, if
 *       applicable), the key state, and the origin and expiration date (if any) of the key material.
 *       It includes fields, like <code>KeySpec</code>, that help you distinguish different types of
 *       KMS keys. It also displays the key usage (encryption, signing, or generating and verifying
 *       MACs) and the algorithms that the KMS key supports. </p>
 *          <p>For <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">multi-Region keys</a>, <code>DescribeKey</code> displays the primary key and all
 *       related replica keys. For KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>, it includes information
 *       about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a>,
 *       it includes the custom key store ID and the ID of the external key.</p>
 *          <p>
 *             <code>DescribeKey</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Aliases associated with the KMS key. To get this information, use <a>ListAliases</a>.</p>
 *             </li>
 *             <li>
 *                <p>Whether automatic key rotation is enabled on the KMS key. To get this information, use
 *             <a>GetKeyRotationStatus</a>. Also, some key states prevent a KMS key from
 *           being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How key rotation
 *             works</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Tags on the KMS key. To get this information, use <a>ListResourceTags</a>.</p>
 *             </li>
 *             <li>
 *                <p>Key policies and grants on the KMS key. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p>
 *             </li>
 *          </ul>
 *          <p>In general, <code>DescribeKey</code> is a non-mutating operation. It returns data about
 *       KMS keys, but doesn't change them. However, Amazon Web Services services use <code>DescribeKey</code> to
 *       create <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key">Amazon Web Services
 *         managed keys</a> from a <i>predefined Amazon Web Services alias</i> with no key
 *       ID.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeys</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListResourceTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DescribeKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // DescribeKeyRequest
 *   KeyId: "STRING_VALUE", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyResponse
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
 * //     KeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2" || "ML_DSA_44" || "ML_DSA_65" || "ML_DSA_87",
 * //     EncryptionAlgorithms: [ // EncryptionAlgorithmSpecList
 * //       "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //     ],
 * //     SigningAlgorithms: [ // SigningAlgorithmSpecList
 * //       "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA" || "ML_DSA_SHAKE_256",
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
 * @param DescribeKeyCommandInput - {@link DescribeKeyCommandInput}
 * @returns {@link DescribeKeyCommandOutput}
 * @see {@link DescribeKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To get details about a KMS key in an AWS CloudHSM key store
 * ```javascript
 * // The following example gets the metadata of a KMS key in an AWS CloudHSM key store.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyMetadata: {
 *     AWSAccountId: "123456789012",
 *     Arn: "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     CloudHsmClusterId: "cluster-234abcdefABC",
 *     CreationDate: 1.646160362664E9,
 *     CustomKeyStoreId: "cks-1234567890abcdef0",
 *     CustomerMasterKeySpec: "SYMMETRIC_DEFAULT",
 *     Description: "CloudHSM key store test key",
 *     Enabled: true,
 *     EncryptionAlgorithms: [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     KeyManager: "CUSTOMER",
 *     KeySpec: "SYMMETRIC_DEFAULT",
 *     KeyState: "Enabled",
 *     KeyUsage: "ENCRYPT_DECRYPT",
 *     MultiRegion: false,
 *     Origin: "AWS_CLOUDHSM"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To get details about a KMS key in an external key store
 * ```javascript
 * // The following example gets the metadata of a KMS key in an external key store.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyMetadata: {
 *     AWSAccountId: "123456789012",
 *     Arn: "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     CreationDate: 1.646160362664E9,
 *     CustomKeyStoreId: "cks-1234567890abcdef0",
 *     CustomerMasterKeySpec: "SYMMETRIC_DEFAULT",
 *     Description: "External key store test key",
 *     Enabled: true,
 *     EncryptionAlgorithms: [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     KeyManager: "CUSTOMER",
 *     KeySpec: "SYMMETRIC_DEFAULT",
 *     KeyState: "Enabled",
 *     KeyUsage: "ENCRYPT_DECRYPT",
 *     MultiRegion: false,
 *     Origin: "EXTERNAL_KEY_STORE",
 *     XksKeyConfiguration: {
 *       Id: "bb8562717f809024"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example To get details about a multi-Region key
 * ```javascript
 * // The following example gets metadata for a multi-Region replica key. This multi-Region key is a symmetric encryption key. DescribeKey returns information about the primary key and all of its replicas.
 * const input = {
 *   KeyId: "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyMetadata: {
 *     AWSAccountId: "111122223333",
 *     Arn: "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *     CreationDate: 1.586329200918E9,
 *     CurrentKeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6",
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
 *       MultiRegionKeyType: "PRIMARY",
 *       PrimaryKey: {
 *         Arn: "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *         Region: "us-west-2"
 *       },
 *       ReplicaKeys: [
 *         {
 *           Arn: "arn:aws:kms:eu-west-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           Region: "eu-west-1"
 *         },
 *         {
 *           Arn: "arn:aws:kms:ap-northeast-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           Region: "ap-northeast-1"
 *         },
 *         {
 *           Arn: "arn:aws:kms:sa-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           Region: "sa-east-1"
 *         }
 *       ]
 *     },
 *     Origin: "AWS_KMS"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To get details about an HMAC KMS key
 * ```javascript
 * // The following example gets the metadata of an HMAC KMS key.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyMetadata: {
 *     AWSAccountId: "123456789012",
 *     Arn: "arn:aws:kms:us-west-2:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     CreationDate: 1.566160362664E9,
 *     CustomerMasterKeySpec: "HMAC_256",
 *     Description: "Development test key",
 *     Enabled: true,
 *     KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     KeyManager: "CUSTOMER",
 *     KeyState: "Enabled",
 *     KeyUsage: "GENERATE_VERIFY_MAC",
 *     MacAlgorithms: [
 *       "HMAC_SHA_256"
 *     ],
 *     MultiRegion: false,
 *     Origin: "AWS_KMS"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To get details about an RSA asymmetric KMS key
 * ```javascript
 * // The following example gets metadata for an asymmetric RSA KMS key used for signing and verification.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyMetadata: {
 *     AWSAccountId: "111122223333",
 *     Arn: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *     CreationDate: 1.571767572317E9,
 *     CustomerMasterKeySpec: "RSA_2048",
 *     Description: "",
 *     Enabled: false,
 *     KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *     KeyManager: "CUSTOMER",
 *     KeySpec: "RSA_2048",
 *     KeyState: "Disabled",
 *     KeyUsage: "SIGN_VERIFY",
 *     MultiRegion: false,
 *     Origin: "AWS_KMS",
 *     SigningAlgorithms: [
 *       "RSASSA_PKCS1_V1_5_SHA_256",
 *       "RSASSA_PKCS1_V1_5_SHA_384",
 *       "RSASSA_PKCS1_V1_5_SHA_512",
 *       "RSASSA_PSS_SHA_256",
 *       "RSASSA_PSS_SHA_384",
 *       "RSASSA_PSS_SHA_512"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeKeyCommand extends $Command
  .classBuilder<
    DescribeKeyCommandInput,
    DescribeKeyCommandOutput,
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
  .s("TrentService", "DescribeKey", {})
  .n("KMSClient", "DescribeKeyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeKeyCommand)
  .de(de_DescribeKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyRequest;
      output: DescribeKeyResponse;
    };
    sdk: {
      input: DescribeKeyCommandInput;
      output: DescribeKeyCommandOutput;
    };
  };
}
