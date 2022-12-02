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
  SignRequest,
  SignRequestFilterSensitiveLog,
  SignResponse,
  SignResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1SignCommand, serializeAws_json1_1SignCommand } from "../protocols/Aws_json1_1";

export interface SignCommandInput extends SignRequest {}
export interface SignCommandOutput extends SignResponse, __MetadataBearer {}

/**
 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital
 *         signature</a> for a message or message digest by using the private key in an asymmetric
 *       signing KMS key. To verify the signature, use the <a>Verify</a> operation, or use
 *       the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA
 *       or ECC pair that is represented by an asymmetric KMS key. The key owner (or an authorized
 *       user) uses their private key to sign a message. Anyone with the public key can verify that the
 *       message was signed with that particular private key and that the message hasn't changed since
 *       it was signed. </p>
 *          <p>To use the <code>Sign</code> operation, provide the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>KeyId</code> parameter to identify an asymmetric KMS key with a
 *             <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the
 *             <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a>
 *           operation. The caller must have <code>kms:Sign</code> permission on the KMS key.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>Message</code> parameter to specify the message or message digest to
 *           sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a
 *           hash digest of the message, and then provide the hash digest in the <code>Message</code>
 *           parameter. To indicate whether the message is a full message or a digest, use the
 *             <code>MessageType</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Choose a signing algorithm that is compatible with the KMS key. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When signing a message, be sure to record the KMS key and the signing algorithm. This
 *         information is required to verify the signature.</p>
 *          </important>
 *          <note>
 *             <p>Best practices recommend that you limit the time during which any signature is
 *         effective. This deters an attack where the actor uses a signed message to establish validity
 *         repeatedly or long after the message is superseded. Signatures do not include a timestamp,
 *         but you can include a timestamp in the signed message to help you detect when its time to
 *         refresh the signature. </p>
 *          </note>
 *          <p>To verify the signature that this operation generates, use the <a>Verify</a>
 *       operation. Or use the <a>GetPublicKey</a> operation to download the public key and
 *       then use the public key to verify the signature outside of KMS. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>Verify</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, SignCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, SignCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new SignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignCommandInput} for command's `input` shape.
 * @see {@link SignCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class SignCommand extends $Command<SignCommandInput, SignCommandOutput, KMSClientResolvedConfig> {
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
    this.middlewareStack.use(getEndpointPlugin(configuration, SignCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "SignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SignResponseFilterSensitiveLog,
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
