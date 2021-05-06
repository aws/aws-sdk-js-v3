import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { ModifyRuleInput, ModifyRuleOutput } from "../models/models_0";
import { deserializeAws_queryModifyRuleCommand, serializeAws_queryModifyRuleCommand } from "../protocols/Aws_query";
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

export interface ModifyRuleCommandInput extends ModifyRuleInput {}
export interface ModifyRuleCommandOutput extends ModifyRuleOutput, __MetadataBearer {}

/**
 * <p>Replaces the specified properties of the specified rule. Any properties that you do not
 *       specify are unchanged.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
 *       must provide the entire list. For example, to add an action, specify a list with the current
 *       actions plus the new action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyRuleCommand extends $Command<
  ModifyRuleCommandInput,
  ModifyRuleCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyRuleCommandInput) {
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
  ): Handler<ModifyRuleCommandInput, ModifyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyRuleInput.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyRuleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyRuleCommandOutput> {
    return deserializeAws_queryModifyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
