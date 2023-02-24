// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateDataKeyRequest,
  GenerateDataKeyRequestFilterSensitiveLog,
  GenerateDataKeyResponse,
  GenerateDataKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyCommand,
  serializeAws_json1_1GenerateDataKeyCommand,
} from "../protocols/Aws_json1_1";

export interface GenerateDataKeyCommandInput extends GenerateDataKeyRequest {}
export interface GenerateDataKeyCommandOutput extends GenerateDataKeyResponse, __MetadataBearer {}

/**
 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a
 *       plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS
 *       key that you specify. The bytes in the plaintext key are random; they are not related
 *       to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS
 *       and store the encrypted data key with the encrypted data.</p>
 *
 *          <p>To generate a data key, specify the symmetric encryption KMS key that will be used to
 *       encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the
 *       type of your KMS key, use the <a>DescribeKey</a> operation.</p>
 *
 *          <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or
 *       <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use
 *       the <code>KeySpec</code> parameter.</p>
 *
 *          <p>To generate an SM4 data key (China Regions only), specify a <code>KeySpec</code> value of
 *       <code>AES_128</code> or <code>NumberOfBytes</code> value of <code>128</code>. The symmetric
 *       encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p>
 *
 *          <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use
 *       the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure
 *       random byte string, use <a>GenerateRandom</a>.</p>
 *
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 *
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
 * const command = new GenerateDataKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
      inputFilterSensitiveLog: GenerateDataKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateDataKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataKeyCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
