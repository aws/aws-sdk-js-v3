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
  GenerateMacRequest,
  GenerateMacRequestFilterSensitiveLog,
  GenerateMacResponse,
  GenerateMacResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateMacCommand,
  serializeAws_json1_1GenerateMacCommand,
} from "../protocols/Aws_json1_1";

export interface GenerateMacCommandInput extends GenerateMacRequest {}
export interface GenerateMacCommandOutput extends GenerateMacResponse, __MetadataBearer {}

/**
 * <p>Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports.
 *       HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
 *          <p>You can use value that GenerateMac returns in the <a>VerifyMac</a> operation to
 *       demonstrate that the original message has not changed. Also, because a secret key is used to
 *       create the hash, you can verify that the party that generated the hash has the required secret
 *       key. You can also use the raw result to implement HMAC-based algorithms such as key derivation
 *       functions. This operation is part of KMS support for HMAC KMS keys. For
 *       details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in
 *         KMS</a> in the <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>.</p>
 *          <note>
 *             <p>Best practices recommend that you limit the time during which any signing mechanism,
 *         including an HMAC, is effective. This deters an attack where the actor uses a signed message
 *         to establish validity repeatedly or long after the message is superseded. HMAC tags do not
 *         include a timestamp, but you can include a timestamp in the token or message to help you
 *         detect when its time to refresh the HMAC. </p>
 *          </note>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateMac</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>VerifyMac</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateMacCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateMacCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateMacCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateMacCommandInput} for command's `input` shape.
 * @see {@link GenerateMacCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GenerateMacCommand extends $Command<
  GenerateMacCommandInput,
  GenerateMacCommandOutput,
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

  constructor(readonly input: GenerateMacCommandInput) {
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
  ): Handler<GenerateMacCommandInput, GenerateMacCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GenerateMacCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateMacCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateMacRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateMacResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateMacCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateMacCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateMacCommandOutput> {
    return deserializeAws_json1_1GenerateMacCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
