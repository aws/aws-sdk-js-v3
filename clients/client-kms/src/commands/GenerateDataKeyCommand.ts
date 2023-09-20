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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateDataKeyRequest,
  GenerateDataKeyResponse,
  GenerateDataKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GenerateDataKeyCommand, se_GenerateDataKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateDataKeyCommand}.
 */
export interface GenerateDataKeyCommandInput extends GenerateDataKeyRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataKeyCommand}.
 */
export interface GenerateDataKeyCommandOutput extends GenerateDataKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a
 *       plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS
 *       key that you specify. The bytes in the plaintext key are random; they are not related to the
 *       caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and
 *       store the encrypted data key with the encrypted data.</p>
 *          <p>To generate a data key, specify the symmetric encryption KMS key that will be used to
 *       encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the
 *       type of your KMS key, use the <a>DescribeKey</a> operation.</p>
 *          <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or
 *         <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use
 *       the <code>KeySpec</code> parameter.</p>
 *          <p>To generate a 128-bit SM4 data key (China Regions only), specify a <code>KeySpec</code>
 *       value of <code>AES_128</code> or a <code>NumberOfBytes</code> value of <code>16</code>. The
 *       symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption
 *       key.</p>
 *          <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use
 *       the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure
 *       random byte string, use <a>GenerateRandom</a>.</p>
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <code>GenerateDataKey</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an
 *       isolated compute environment in Amazon EC2. To call <code>GenerateDataKey</code> for an Amazon Web Services Nitro
 *       enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter
 *       to provide the attestation document for the enclave. <code>GenerateDataKey</code> returns a
 *       copy of the data key encrypted under the specified KMS key, as usual. But instead of a
 *       plaintext copy of the data key, the response includes a copy of the data key encrypted under
 *       the public key from the attestation document (<code>CiphertextForRecipient</code>).
 *       For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>..</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>How to use your data key</b>
 *          </p>
 *          <p>We recommend that you use the following pattern to encrypt data locally in your
 *       application. You can write your own code or use a client-side encryption library, such as the
 *         <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a>, the
 *         <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>,
 *       or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3
 *         client-side encryption</a> to do these tasks for you.</p>
 *          <p>To encrypt data outside of KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to
 *           encrypt your data outside of KMS. Then erase the plaintext data key from memory.</p>
 *             </li>
 *             <li>
 *                <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the
 *           response) with the encrypted data.</p>
 *             </li>
 *          </ol>
 *          <p>To decrypt data outside of KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The
 *           operation returns a plaintext copy of the data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext
 *           data key from memory.</p>
 *             </li>
 *          </ol>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GenerateDataKeyRequest
 *   KeyId: "STRING_VALUE", // required
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NumberOfBytes: Number("int"),
 *   KeySpec: "AES_256" || "AES_128",
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: "BLOB_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new GenerateDataKeyCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataKeyResponse
 * //   CiphertextBlob: "BLOB_VALUE",
 * //   Plaintext: "BLOB_VALUE",
 * //   KeyId: "STRING_VALUE",
 * //   CiphertextForRecipient: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateDataKeyCommandInput - {@link GenerateDataKeyCommandInput}
 * @returns {@link GenerateDataKeyCommandOutput}
 * @see {@link GenerateDataKeyCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>
 *       The request was rejected because the DryRun parameter was specified.
 *     </p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *  <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To generate a data key
 * ```javascript
 * // The following example generates a 256-bit symmetric data encryption key (data key) in two formats. One is the unencrypted (plainext) data key, and the other is the data key encrypted with the specified KMS key.
 * const input = {
 *   "KeyId": "alias/ExampleAlias",
 *   "KeySpec": "AES_256"
 * };
 * const command = new GenerateDataKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Plaintext": "<binary data>"
 * }
 * *\/
 * // example id: to-generate-a-data-key-1
 * ```
 *
 * @example To generate a data key pair for a Nitro enclave
 * ```javascript
 * // The following example includes the Recipient parameter with a signed attestation document from an AWS Nitro enclave. Instead of returning a copy of the data key encrypted by the KMS key and a plaintext copy of the data key, GenerateDataKey returns one copy of the data key encrypted by the KMS key (CiphertextBlob) and one copy of the data key encrypted by the public key from the attestation document (CiphertextForRecipient). The operation doesn't return a plaintext data key.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "KeySpec": "AES_256",
 *   "Recipient": {
 *     "AttestationDocument": "<attestation document>",
 *     "KeyEncryptionAlgorithm": "RSAES_OAEP_SHA_256"
 *   }
 * };
 * const command = new GenerateDataKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "CiphertextForRecipient": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Plaintext": ""
 * }
 * *\/
 * // example id: to-generate-a-data-key-for-a-nitro-enclave-2
 * ```
 *
 */
export class GenerateDataKeyCommand extends $Command<
  GenerateDataKeyCommandInput,
  GenerateDataKeyCommandOutput,
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
  constructor(readonly input: GenerateDataKeyCommandInput) {
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
  ): Handler<GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateDataKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GenerateDataKeyResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "GenerateDataKey",
      },
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
  private serialize(input: GenerateDataKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateDataKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataKeyCommandOutput> {
    return de_GenerateDataKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
