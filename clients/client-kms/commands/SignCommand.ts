import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { SignRequest, SignResponse } from "../models/models_0";
import { deserializeAws_json1_1SignCommand, serializeAws_json1_1SignCommand } from "../protocols/Aws_json1_1";
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

export type SignCommandInput = SignRequest;
export type SignCommandOutput = SignResponse & __MetadataBearer;

/**
 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital
 *         signature</a> for a message or message digest by using the private key in an asymmetric
 *       CMK. To verify the signature, use the <a>Verify</a> operation, or use the public
 *       key in the same asymmetric CMK outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA
 *       or ECC pair that is represented by an asymmetric customer master key (CMK). The key owner (or
 *       an authorized user) uses their private key to sign a message. Anyone with the public key can
 *       verify that the message was signed with that particular private key and that the message
 *       hasn't changed since it was signed. </p>
 *          <p>To use the <code>Sign</code> operation, provide the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>KeyId</code> parameter to identify an asymmetric CMK with a
 *             <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the
 *             <code>KeyUsage</code> value of a CMK, use the <a>DescribeKey</a> operation.
 *           The caller must have <code>kms:Sign</code> permission on the CMK.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>Message</code> parameter to specify the message or message digest to
 *           sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a
 *           hash digest of the message, and then provide the hash digest in the <code>Message</code>
 *           parameter. To indicate whether the message is a full message or a digest, use the
 *             <code>MessageType</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Choose a signing algorithm that is compatible with the CMK. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When signing a message, be sure to record the CMK and the signing algorithm. This
 *         information is required to verify the signature.</p>
 *          </important>
 *          <p>To verify the signature that this operation generates, use the <a>Verify</a>
 *       operation. Or use the <a>GetPublicKey</a> operation to download the public key and
 *       then use the public key to verify the signature outside of AWS KMS. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class SignCommand extends $Command<SignCommandInput, SignCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SignCommandInput) {
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
  ): Handler<SignCommandInput, SignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "SignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SignResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignCommandOutput> {
    return deserializeAws_json1_1SignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
