import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnRouteRequest, CreateClientVpnRouteResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateClientVpnRouteCommand,
  serializeAws_ec2CreateClientVpnRouteCommand,
} from "../protocols/Aws_ec2";
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

export type CreateClientVpnRouteCommandInput = CreateClientVpnRouteRequest;
export type CreateClientVpnRouteCommandOutput = CreateClientVpnRouteResult & __MetadataBearer;

/**
 * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the
 * 			available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
 */
export class CreateClientVpnRouteCommand extends $Command<
  CreateClientVpnRouteCommandInput,
  CreateClientVpnRouteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClientVpnRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClientVpnRouteCommandInput, CreateClientVpnRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateClientVpnRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClientVpnRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClientVpnRouteResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClientVpnRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateClientVpnRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClientVpnRouteCommandOutput> {
    return deserializeAws_ec2CreateClientVpnRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
