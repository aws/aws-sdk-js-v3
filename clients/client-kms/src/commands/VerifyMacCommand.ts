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
  VerifyMacRequest,
  VerifyMacRequestFilterSensitiveLog,
  VerifyMacResponse,
  VerifyMacResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1VerifyMacCommand, serializeAws_json1_1VerifyMacCommand } from "../protocols/Aws_json1_1";

export interface VerifyMacCommandInput extends VerifyMacRequest {}
export interface VerifyMacCommandOutput extends VerifyMacResponse, __MetadataBearer {}

/**
 * <p>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC
 *       KMS key, and MAC algorithm. To verify the HMAC, <code>VerifyMac</code> computes an HMAC using
 *       the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC
 *       to the HMAC that you specify. If the HMACs are identical, the verification succeeds;
 *       otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was
 *       calculated, and the specified key was used to generate and verify the HMAC.</p>
 *          <p>HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards
 *       defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
 *          <p>This operation is part of KMS support for HMAC KMS keys. For details, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:VerifyMac</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>GenerateMac</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, VerifyMacCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, VerifyMacCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyMacCommandInput} for command's `input` shape.
 * @see {@link VerifyMacCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class VerifyMacCommand extends $Command<VerifyMacCommandInput, VerifyMacCommandOutput, KMSClientResolvedConfig> {
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

  constructor(readonly input: VerifyMacCommandInput) {
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
  ): Handler<VerifyMacCommandInput, VerifyMacCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, VerifyMacCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "VerifyMacCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyMacRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VerifyMacResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyMacCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifyMacCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyMacCommandOutput> {
    return deserializeAws_json1_1VerifyMacCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
