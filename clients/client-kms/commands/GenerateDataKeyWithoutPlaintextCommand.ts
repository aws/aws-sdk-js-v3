import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyWithoutPlaintextRequest, GenerateDataKeyWithoutPlaintextResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand,
  serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand,
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

export type GenerateDataKeyWithoutPlaintextCommandInput = GenerateDataKeyWithoutPlaintextRequest;
export type GenerateDataKeyWithoutPlaintextCommandOutput = GenerateDataKeyWithoutPlaintextResponse & __MetadataBearer;

/**
 * <p>Generates a unique symmetric data key. This operation returns a data key that is encrypted
 *       under a customer master key (CMK) that you specify. To request an asymmetric data key pair,
 *       use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p>
 *          <p>
 *             <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that returns only the encrypted copy of the
 *       data key. This operation is useful for systems that need to encrypt data at some point, but
 *       not immediately. When you need to encrypt the data, you call the <a>Decrypt</a>
 *       operation on the encrypted copy of the key. </p>
 *          <p>It's also useful in distributed systems with different levels of trust. For example, you
 *       might store encrypted data in containers. One component of your system creates new containers
 *       and stores an encrypted data key with each container. Then, a different component puts the
 *       data into the containers. That component first decrypts the data key, uses the plaintext data
 *       key to encrypt data, puts the encrypted data into the container, and then destroys the
 *       plaintext data key. In this system, the component that creates the containers never sees the
 *       plaintext data key.</p>
 *          <p>
 *             <code>GenerateDataKeyWithoutPlaintext</code> returns a unique data key for each request.
 *       The bytes in the keys are not related to the caller or CMK that is used to encrypt the private
 *       key.</p>
 *
 *          <p>To generate a data key, you must specify the symmetric customer master key (CMK) that is
 *       used to encrypt the data key. You cannot use an asymmetric CMK to generate a data key. To get the type
 *       of your CMK, use the <a>DescribeKey</a> operation.</p>
 *
 *          <p>If the operation succeeds, you will find the encrypted copy of the data key in the
 *         <code>CiphertextBlob</code> field.</p>
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
export class GenerateDataKeyWithoutPlaintextCommand extends $Command<
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyWithoutPlaintextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyWithoutPlaintextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyWithoutPlaintextResponse.filterSensitiveLog,
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
