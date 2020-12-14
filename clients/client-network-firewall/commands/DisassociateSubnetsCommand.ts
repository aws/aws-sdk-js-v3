import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DisassociateSubnetsCommand,
  serializeAws_json1_0DisassociateSubnetsCommand,
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

export type DisassociateSubnetsCommandInput = DisassociateSubnetsRequest;
export type DisassociateSubnetsCommandOutput = DisassociateSubnetsResponse & __MetadataBearer;

/**
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 */
export class DisassociateSubnetsCommand extends $Command<
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSubnetsCommandInput) {
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
  ): Handler<DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DisassociateSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSubnetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSubnetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DisassociateSubnetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateSubnetsCommandOutput> {
    return deserializeAws_json1_0DisassociateSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
