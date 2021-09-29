import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { SetRulePrioritiesInput, SetRulePrioritiesOutput } from "../models/models_0";
import {
  deserializeAws_querySetRulePrioritiesCommand,
  serializeAws_querySetRulePrioritiesCommand,
} from "../protocols/Aws_query";
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

export interface SetRulePrioritiesCommandInput extends SetRulePrioritiesInput {}
export interface SetRulePrioritiesCommandOutput extends SetRulePrioritiesOutput, __MetadataBearer {}

/**
 * <p>Sets the priorities of the specified rules.</p>
 *          <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any
 *       existing rules that you do not specify retain their current priority.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetRulePrioritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRulePrioritiesCommandInput} for command's `input` shape.
 * @see {@link SetRulePrioritiesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetRulePrioritiesCommand extends $Command<
  SetRulePrioritiesCommandInput,
  SetRulePrioritiesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetRulePrioritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetRulePrioritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetRulePrioritiesInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetRulePrioritiesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetRulePrioritiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetRulePrioritiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetRulePrioritiesCommandOutput> {
    return deserializeAws_querySetRulePrioritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
