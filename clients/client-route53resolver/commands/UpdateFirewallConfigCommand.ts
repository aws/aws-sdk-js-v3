import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallConfigRequest, UpdateFirewallConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFirewallConfigCommand,
  serializeAws_json1_1UpdateFirewallConfigCommand,
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

export type UpdateFirewallConfigCommandInput = UpdateFirewallConfigRequest;
export type UpdateFirewallConfigCommandOutput = UpdateFirewallConfigResponse & __MetadataBearer;

/**
 * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single Amazon virtual private cloud (VPC). </p>
 */
export class UpdateFirewallConfigCommand extends $Command<
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallConfigCommandInput) {
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
  ): Handler<UpdateFirewallConfigCommandInput, UpdateFirewallConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateFirewallConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFirewallConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFirewallConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallConfigCommandOutput> {
    return deserializeAws_json1_1UpdateFirewallConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
