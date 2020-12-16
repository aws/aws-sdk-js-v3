import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachInternetGatewayRequest } from "../models/models_0";
import {
  deserializeAws_ec2AttachInternetGatewayCommand,
  serializeAws_ec2AttachInternetGatewayCommand,
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

export type AttachInternetGatewayCommandInput = AttachInternetGatewayRequest;
export type AttachInternetGatewayCommandOutput = __MetadataBearer;

/**
 * <p>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and
 * 			the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 */
export class AttachInternetGatewayCommand extends $Command<
  AttachInternetGatewayCommandInput,
  AttachInternetGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachInternetGatewayCommandInput) {
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
  ): Handler<AttachInternetGatewayCommandInput, AttachInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachInternetGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachInternetGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachInternetGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachInternetGatewayCommandOutput> {
    return deserializeAws_ec2AttachInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
