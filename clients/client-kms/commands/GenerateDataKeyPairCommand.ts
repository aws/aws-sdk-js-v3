import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyPairRequest, GenerateDataKeyPairResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyPairCommand,
  serializeAws_json1_1GenerateDataKeyPairCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GenerateDataKeyPairCommandInput = GenerateDataKeyPairRequest;
export type GenerateDataKeyPairCommandOutput = GenerateDataKeyPairResponse & __MetadataBearer;

/**
 * <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPair</code>
 *       operation returns a plaintext public key, a plaintext private key, and a copy of the private
 *       key that is encrypted under the symmetric CMK you specify. You can use the data key pair to
 *       perform asymmetric cryptography outside of AWS KMS.</p>
 *
 *          <p>
 *             <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The
 *       bytes in the keys are not related to the caller or the CMK that is used to encrypt the private
 *       key.</p>
 *
 *          <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data
 *       or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data.
 *       When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *
 *          <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to
 *       encrypt the private key in a data key pair. You cannot use an asymmetric CMK or a CMK in a
 *       custom key store. To get the type and origin of your CMK, use the <a>DescribeKey</a> operation. </p>
 *
 *          <p>If you are using the data key pair to encrypt data, or for any operation where you don't
 *       immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation.
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an
 *       encrypted private key, but omits the plaintext private key that you need only to decrypt
 *       ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use
 *       the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key
 *       pair.</p>
 *
 *          <p>You can use the optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class GenerateDataKeyPairCommand extends $Command<
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyPairResponse.filterSensitiveLog,
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
