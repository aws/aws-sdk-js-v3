import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateFirewallDescriptionRequest, UpdateFirewallDescriptionResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateFirewallDescriptionCommand,
  serializeAws_json1_0UpdateFirewallDescriptionCommand,
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

export type UpdateFirewallDescriptionCommandInput = UpdateFirewallDescriptionRequest;
export type UpdateFirewallDescriptionCommandOutput = UpdateFirewallDescriptionResponse & __MetadataBearer;

/**
 * <p>Modifies the description for the specified firewall. Use the description to help you
 *          identify the firewall when you're working with it. </p>
 */
export class UpdateFirewallDescriptionCommand extends $Command<
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallDescriptionCommandInput) {
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
  ): Handler<UpdateFirewallDescriptionCommandInput, UpdateFirewallDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallDescriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallDescriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFirewallDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallDescriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFirewallDescriptionCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
