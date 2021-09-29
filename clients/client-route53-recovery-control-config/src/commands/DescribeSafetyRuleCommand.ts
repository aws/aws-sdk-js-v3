import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { DescribeSafetyRuleRequest, DescribeSafetyRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSafetyRuleCommand,
  serializeAws_restJson1DescribeSafetyRuleCommand,
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

export interface DescribeSafetyRuleCommandInput extends DescribeSafetyRuleRequest {}
export interface DescribeSafetyRuleCommandOutput extends DescribeSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Describes the safety rules (that is, the assertion rules and gating rules) for the routing controls in a control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new DescribeSafetyRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSafetyRuleCommand extends $Command<
  DescribeSafetyRuleCommandInput,
  DescribeSafetyRuleCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSafetyRuleCommandInput) {
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
  ): Handler<DescribeSafetyRuleCommandInput, DescribeSafetyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "DescribeSafetyRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSafetyRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSafetyRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSafetyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSafetyRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSafetyRuleCommandOutput> {
    return deserializeAws_restJson1DescribeSafetyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
