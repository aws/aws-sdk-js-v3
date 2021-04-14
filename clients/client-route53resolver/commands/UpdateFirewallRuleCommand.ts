import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallRuleRequest, UpdateFirewallRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFirewallRuleCommand,
  serializeAws_json1_1UpdateFirewallRuleCommand,
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

export type UpdateFirewallRuleCommandInput = UpdateFirewallRuleRequest;
export type UpdateFirewallRuleCommandOutput = UpdateFirewallRuleResponse & __MetadataBearer;

/**
 * <p>Updates the specified firewall rule. </p>
 */
export class UpdateFirewallRuleCommand extends $Command<
  UpdateFirewallRuleCommandInput,
  UpdateFirewallRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateFirewallRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFirewallRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFirewallRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallRuleCommandOutput> {
    return deserializeAws_json1_1UpdateFirewallRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
