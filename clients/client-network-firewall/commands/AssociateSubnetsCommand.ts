import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { AssociateSubnetsRequest, AssociateSubnetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0AssociateSubnetsCommand,
  serializeAws_json1_0AssociateSubnetsCommand,
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

export type AssociateSubnetsCommandInput = AssociateSubnetsRequest;
export type AssociateSubnetsCommandOutput = AssociateSubnetsResponse & __MetadataBearer;

/**
 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 *          subnet for each of the Availability Zones that the VPC spans. </p>
 *          <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To
 *          enable the firewall's protections, you must also modify the VPC's route tables for each
 *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 *          zone through the firewall endpoint. </p>
 */
export class AssociateSubnetsCommand extends $Command<
  AssociateSubnetsCommandInput,
  AssociateSubnetsCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSubnetsCommandInput) {
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
  ): Handler<AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "AssociateSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSubnetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSubnetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0AssociateSubnetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSubnetsCommandOutput> {
    return deserializeAws_json1_0AssociateSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
