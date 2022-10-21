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

import {
  CheckCapacityRequest,
  CheckCapacityRequestFilterSensitiveLog,
  CheckCapacityResponse,
  CheckCapacityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CheckCapacityCommand,
  serializeAws_json1_1CheckCapacityCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface CheckCapacityCommandInput extends CheckCapacityRequest {}
export interface CheckCapacityCommandOutput extends CheckCapacityResponse, __MetadataBearer {}

/**
 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CheckCapacityCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CheckCapacityCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CheckCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckCapacityCommandInput} for command's `input` shape.
 * @see {@link CheckCapacityCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class CheckCapacityCommand extends $Command<
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput,
  WAFV2ClientResolvedConfig
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

  constructor(readonly input: CheckCapacityCommandInput) {
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
  ): Handler<CheckCapacityCommandInput, CheckCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CheckCapacityCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CheckCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckCapacityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CheckCapacityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckCapacityCommandOutput> {
    return deserializeAws_json1_1CheckCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
