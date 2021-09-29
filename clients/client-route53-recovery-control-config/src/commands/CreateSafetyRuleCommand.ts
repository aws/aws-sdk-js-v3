import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { CreateSafetyRuleRequest, CreateSafetyRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSafetyRuleCommand,
  serializeAws_restJson1CreateSafetyRuleCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateSafetyRuleCommandInput extends CreateSafetyRuleRequest {}
export interface CreateSafetyRuleCommandOutput extends CreateSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p> <p>Gating rule: A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new CreateSafetyRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSafetyRuleCommand extends $Command<
  CreateSafetyRuleCommandInput,
  CreateSafetyRuleCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSafetyRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSafetyRuleCommandInput, CreateSafetyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "CreateSafetyRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSafetyRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSafetyRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSafetyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSafetyRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSafetyRuleCommandOutput> {
    return deserializeAws_restJson1CreateSafetyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
