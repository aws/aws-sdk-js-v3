import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateDataKeyPairWithoutPlaintextRequest,
  GenerateDataKeyPairWithoutPlaintextResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand,
  serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand,
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

export type GenerateDataKeyPairWithoutPlaintextCommandInput = GenerateDataKeyPairWithoutPlaintextRequest;
export type GenerateDataKeyPairWithoutPlaintextCommandOutput = GenerateDataKeyPairWithoutPlaintextResponse &
  __MetadataBearer;

/**
 * <p>Generates a unique asymmetric data key pair. The
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> operation returns a plaintext public key
 *       and a copy of the private key that is encrypted under the symmetric CMK you specify. Unlike
 *         <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private
 *       key. </p>
 *          <p>To generate a data key pair, you must specify a symmetric customer master key (CMK) to
 *       encrypt the private key in the data key pair. You cannot use an asymmetric CMK or a CMK in a
 *       custom key store. To get the type and origin of your CMK, use the <code>KeySpec</code> field
 *       in the <a>DescribeKey</a> response.</p>
 *          <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns
 *       to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key
 *       with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *          <p>
 *             <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each
 *       request. The bytes in the key are not related to the caller or CMK that is used to encrypt the
 *       private key.</p>
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
export class GenerateDataKeyPairWithoutPlaintextCommand extends $Command<
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateDataKeyPairWithoutPlaintextCommandInput) {
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
  ): Handler<GenerateDataKeyPairWithoutPlaintextCommandInput, GenerateDataKeyPairWithoutPlaintextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyPairWithoutPlaintextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyPairWithoutPlaintextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyPairWithoutPlaintextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateDataKeyPairWithoutPlaintextCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
