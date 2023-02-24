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
  GenerateDataKeyWithoutPlaintextRequest,
  GenerateDataKeyWithoutPlaintextRequestFilterSensitiveLog,
  GenerateDataKeyWithoutPlaintextResponse,
  GenerateDataKeyWithoutPlaintextResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand,
  serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand,
} from "../protocols/Aws_json1_1";

export interface GenerateDataKeyWithoutPlaintextCommandInput extends GenerateDataKeyWithoutPlaintextRequest {}
export interface GenerateDataKeyWithoutPlaintextCommandOutput
  extends GenerateDataKeyWithoutPlaintextResponse,
    __MetadataBearer {}

/**
 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a
 *       data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in
 *       the key are random; they are not related to the caller or to the KMS key.</p>
 *          <p>
 *             <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that it does not return a plaintext copy of the
 *       data key. </p>
 *          <p>This operation is useful for systems that need to encrypt data at some point, but not
 *       immediately. When you need to encrypt the data, you call the <a>Decrypt</a>
 *       operation on the encrypted copy of the key.</p>
 *          <p>It's also useful in distributed systems with different levels of trust. For example, you
 *       might store encrypted data in containers. One component of your system creates new containers
 *       and stores an encrypted data key with each container. Then, a different component puts the
 *       data into the containers. That component first decrypts the data key, uses the plaintext data
 *       key to encrypt data, puts the encrypted data into the container, and then destroys the
 *       plaintext data key. In this system, the component that creates the containers never sees the
 *       plaintext data key.</p>
 *          <p>To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or
 *         <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p>
 *
 *          <p>To generate a data key, you must specify the symmetric encryption KMS key that is used to
 *       encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the
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
 *          <p>If the operation succeeds, you will find the encrypted copy of the data key in the
 *         <code>CiphertextBlob</code> field.</p>
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
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyWithoutPlaintext</a> (key
 *       policy)</p>
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
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyWithoutPlaintextCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyWithoutPlaintextCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateDataKeyWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateDataKeyWithoutPlaintextCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyWithoutPlaintextCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GenerateDataKeyWithoutPlaintextCommand extends $Command<
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
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

  constructor(readonly input: GenerateDataKeyWithoutPlaintextCommandInput) {
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
  ): Handler<GenerateDataKeyWithoutPlaintextCommandInput, GenerateDataKeyWithoutPlaintextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateDataKeyWithoutPlaintextCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyWithoutPlaintextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyWithoutPlaintextRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyWithoutPlaintextResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateDataKeyWithoutPlaintextCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateDataKeyWithoutPlaintextCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
