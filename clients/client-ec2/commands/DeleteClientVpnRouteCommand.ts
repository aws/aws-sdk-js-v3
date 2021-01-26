import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/models_1";
import {
  deserializeAws_ec2DeleteClientVpnRouteCommand,
  serializeAws_ec2DeleteClientVpnRouteCommand,
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

export type DeleteClientVpnRouteCommandInput = DeleteClientVpnRouteRequest;
export type DeleteClientVpnRouteCommandOutput = DeleteClientVpnRouteResult & __MetadataBearer;

/**
 * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
 * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
 * 			automatically added when associating a subnet. To remove routes that have been automatically added,
 * 			disassociate the target subnet from the Client VPN endpoint.</p>
 */
export class DeleteClientVpnRouteCommand extends $Command<
  DeleteClientVpnRouteCommandInput,
  DeleteClientVpnRouteCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClientVpnRouteCommandInput) {
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
  ): Handler<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteClientVpnRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClientVpnRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteClientVpnRouteResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClientVpnRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteClientVpnRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClientVpnRouteCommandOutput> {
    return deserializeAws_ec2DeleteClientVpnRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
