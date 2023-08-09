// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ReplicateKeyRequest, ReplicateKeyResponse } from "../models/models_0";
import { de_ReplicateKeyCommand, se_ReplicateKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 *       have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key
 *         spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key
 *         usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key
 *         material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation status</a>. KMS automatically synchronizes these shared
 *       properties among related multi-Region keys. All other properties of a replica key can differ,
 *       including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key
 *         policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a>. KMS pricing and quotas for KMS keys apply to each
 *       primary key and replica key.</p>
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
 *       primary key. For details, see <a href="kms/latest/developerguide/multi-region-keys-import.html">Importing key material into multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReplicateKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReplicateKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
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
 * //     KeyUsage: "SIGN_VERIFY" || "ENCRYPT_DECRYPT" || "GENERATE_VERIFY_MAC",
 * //     KeyState: "Creating" || "Enabled" || "Disabled" || "PendingDeletion" || "PendingImport" || "PendingReplicaDeletion" || "Unavailable" || "Updating",
 * //     DeletionDate: new Date("TIMESTAMP"),
 * //     ValidTo: new Date("TIMESTAMP"),
 * //     Origin: "AWS_KMS" || "EXTERNAL" || "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 * //     CustomKeyStoreId: "STRING_VALUE",
 * //     CloudHsmClusterId: "STRING_VALUE",
 * //     ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 * //     KeyManager: "AWS" || "CUSTOMER",
 * //     CustomerMasterKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2",
 * //     KeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2",
 * //     EncryptionAlgorithms: [ // EncryptionAlgorithmSpecList
 * //       "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //     ],
 * //     SigningAlgorithms: [ // SigningAlgorithmSpecList
 * //       "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA",
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
 *  <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
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
 * @example To replicate a multi-Region key in a different AWS Region
 * ```javascript
 * // This example creates a multi-Region replica key in us-west-2 of a multi-Region primary key in us-east-1.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *   "ReplicaRegion": "us-west-2"
 * };
 * const command = new ReplicateKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicaKeyMetadata": {
 *     "AWSAccountId": "111122223333",
 *     "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *     "CreationDate": 1607472987.918,
 *     "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
 *     "Description": "",
 *     "Enabled": true,
 *     "EncryptionAlgorithms": [
 *       "SYMMETRIC_DEFAULT"
 *     ],
 *     "KeyId": "mrk-1234abcd12ab34cd56ef1234567890ab",
 *     "KeyManager": "CUSTOMER",
 *     "KeyState": "Enabled",
 *     "KeyUsage": "ENCRYPT_DECRYPT",
 *     "MultiRegion": true,
 *     "MultiRegionConfiguration": {
 *       "MultiRegionKeyType": "REPLICA",
 *       "PrimaryKey": {
 *         "Arn": "arn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *         "Region": "us-east-1"
 *       },
 *       "ReplicaKeys": [
 *         {
 *           "Arn": "arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *           "Region": "us-west-2"
 *         }
 *       ]
 *     },
 *     "Origin": "AWS_KMS"
 *   },
 *   "ReplicaPolicy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Id\" : \"key-default-1\",...}",
 *   "ReplicaTags": []
 * }
 * *\/
 * // example id: to-replicate-a-multi-region-key-in-a-different-aws-region-1628622402887
 * ```
 *
 */
export class ReplicateKeyCommand extends $Command<
  ReplicateKeyCommandInput,
  ReplicateKeyCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ReplicateKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReplicateKeyCommandInput, ReplicateKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReplicateKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ReplicateKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ReplicateKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplicateKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplicateKeyCommandOutput> {
    return de_ReplicateKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
