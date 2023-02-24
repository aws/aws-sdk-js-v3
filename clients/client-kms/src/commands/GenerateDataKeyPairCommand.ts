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
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairRequestFilterSensitiveLog,
  GenerateDataKeyPairResponse,
  GenerateDataKeyPairResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyPairCommand,
  serializeAws_json1_1GenerateDataKeyPairCommand,
} from "../protocols/Aws_json1_1";

export interface GenerateDataKeyPairCommandInput extends GenerateDataKeyPairRequest {}
export interface GenerateDataKeyPairCommandOutput extends GenerateDataKeyPairResponse, __MetadataBearer {}

/**
 * <p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns
 *       a plaintext public key, a plaintext private key, and a copy of the private key that is
 *       encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to
 *       perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes
 *       in the keys are random; they not related to the caller or to the KMS key that is used to
 *       encrypt the private key. </p>
 *
 *          <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data
 *       or verify a signature outside of KMS. Then, store the encrypted private key with the data.
 *       When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *
 *          <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt
 *       the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a
 *       custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p>
 *          <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data
 *       key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use
 *       ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both.
 *       However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p>
 *
 *          <p>If you are using the data key pair to encrypt data, or for any operation where you don't
 *       immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation.
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an
 *       encrypted private key, but omits the plaintext private key that you need only to decrypt
 *       ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use
 *       the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key
 *       pair.</p>
 *
 *          <p>
 *             <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The
 *       bytes in the keys are random; they are not related to the caller or the KMS key that is used
 *       to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as
 *       specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private
 *       key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>.</p>
 *
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p>
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
 *                   <a>GenerateDataKey</a>
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
 * import { KMSClient, GenerateDataKeyPairCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyPairCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GenerateDataKeyPairCommand extends $Command<
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
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

  constructor(readonly input: GenerateDataKeyPairCommandInput) {
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
  ): Handler<GenerateDataKeyPairCommandInput, GenerateDataKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateDataKeyPairCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyPairResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateDataKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataKeyPairCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
