import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/models_4";
import {
  deserializeAws_ec2RestoreAddressToClassicCommand,
  serializeAws_ec2RestoreAddressToClassicCommand,
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

export type RestoreAddressToClassicCommandInput = RestoreAddressToClassicRequest;
export type RestoreAddressToClassicCommandOutput = RestoreAddressToClassicResult & __MetadataBearer;

/**
 * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 */
export class RestoreAddressToClassicCommand extends $Command<
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreAddressToClassicCommandInput) {
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
  ): Handler<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreAddressToClassicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreAddressToClassicRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreAddressToClassicResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreAddressToClassicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RestoreAddressToClassicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreAddressToClassicCommandOutput> {
    return deserializeAws_ec2RestoreAddressToClassicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
