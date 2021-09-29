import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutPermissionPolicyCommand,
  serializeAws_json1_1PutPermissionPolicyCommand,
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

export interface PutPermissionPolicyCommandInput extends PutPermissionPolicyRequest {}
export interface PutPermissionPolicyCommandOutput extends PutPermissionPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across
 *          accounts.</p>
 *          <p>You must be the owner of the rule group to perform this operation.</p>
 *          <p>This action is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the
 *                rule group must exist in the same Region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the rule group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new PutPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutPermissionPolicyCommand extends $Command<
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPermissionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutPermissionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPermissionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionPolicyCommandOutput> {
    return deserializeAws_json1_1PutPermissionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
