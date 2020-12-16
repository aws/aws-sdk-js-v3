import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { TerminateClientVpnConnectionsRequest, TerminateClientVpnConnectionsResult } from "../models/models_5";
import {
  deserializeAws_ec2TerminateClientVpnConnectionsCommand,
  serializeAws_ec2TerminateClientVpnConnectionsCommand,
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

export type TerminateClientVpnConnectionsCommandInput = TerminateClientVpnConnectionsRequest;
export type TerminateClientVpnConnectionsCommandOutput = TerminateClientVpnConnectionsResult & __MetadataBearer;

/**
 * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
 */
export class TerminateClientVpnConnectionsCommand extends $Command<
  TerminateClientVpnConnectionsCommandInput,
  TerminateClientVpnConnectionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateClientVpnConnectionsCommandInput) {
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
  ): Handler<TerminateClientVpnConnectionsCommandInput, TerminateClientVpnConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "TerminateClientVpnConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateClientVpnConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateClientVpnConnectionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateClientVpnConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2TerminateClientVpnConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateClientVpnConnectionsCommandOutput> {
    return deserializeAws_ec2TerminateClientVpnConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
