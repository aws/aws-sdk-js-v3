import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayConnectRequest, DeleteTransitGatewayConnectResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteTransitGatewayConnectCommand,
  serializeAws_ec2DeleteTransitGatewayConnectCommand,
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

export type DeleteTransitGatewayConnectCommandInput = DeleteTransitGatewayConnectRequest;
export type DeleteTransitGatewayConnectCommandOutput = DeleteTransitGatewayConnectResult & __MetadataBearer;

/**
 * <p>Deletes the specified Connect attachment. You must first delete any Connect peers for
 *             the attachment.</p>
 */
export class DeleteTransitGatewayConnectCommand extends $Command<
  DeleteTransitGatewayConnectCommandInput,
  DeleteTransitGatewayConnectCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTransitGatewayConnectCommandInput) {
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
  ): Handler<DeleteTransitGatewayConnectCommandInput, DeleteTransitGatewayConnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayConnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTransitGatewayConnectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTransitGatewayConnectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTransitGatewayConnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTransitGatewayConnectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayConnectCommandOutput> {
    return deserializeAws_ec2DeleteTransitGatewayConnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
