import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/models_0";
import {
  deserializeAws_ec2AttachNetworkInterfaceCommand,
  serializeAws_ec2AttachNetworkInterfaceCommand,
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

export type AttachNetworkInterfaceCommandInput = AttachNetworkInterfaceRequest;
export type AttachNetworkInterfaceCommandOutput = AttachNetworkInterfaceResult & __MetadataBearer;

/**
 * <p>Attaches a network interface to an instance.</p>
 */
export class AttachNetworkInterfaceCommand extends $Command<
  AttachNetworkInterfaceCommandInput,
  AttachNetworkInterfaceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachNetworkInterfaceCommandInput) {
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
  ): Handler<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachNetworkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachNetworkInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachNetworkInterfaceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachNetworkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachNetworkInterfaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachNetworkInterfaceCommandOutput> {
    return deserializeAws_ec2AttachNetworkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
