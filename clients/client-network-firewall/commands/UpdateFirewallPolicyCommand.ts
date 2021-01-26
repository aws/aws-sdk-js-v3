import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateFirewallPolicyRequest, UpdateFirewallPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateFirewallPolicyCommand,
  serializeAws_json1_0UpdateFirewallPolicyCommand,
} from "../protocols/Aws_json1_0";
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

export type UpdateFirewallPolicyCommandInput = UpdateFirewallPolicyRequest;
export type UpdateFirewallPolicyCommandOutput = UpdateFirewallPolicyResponse & __MetadataBearer;

/**
 * <p>Updates the properties of the specified firewall policy.</p>
 */
export class UpdateFirewallPolicyCommand extends $Command<
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFirewallPolicyCommandInput, UpdateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
