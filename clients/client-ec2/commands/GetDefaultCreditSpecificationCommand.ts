import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/models_4";
import {
  deserializeAws_ec2GetDefaultCreditSpecificationCommand,
  serializeAws_ec2GetDefaultCreditSpecificationCommand,
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

export type GetDefaultCreditSpecificationCommandInput = GetDefaultCreditSpecificationRequest;
export type GetDefaultCreditSpecificationCommandOutput = GetDefaultCreditSpecificationResult & __MetadataBearer;

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>.</p>
 */
export class GetDefaultCreditSpecificationCommand extends $Command<
  GetDefaultCreditSpecificationCommandInput,
  GetDefaultCreditSpecificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDefaultCreditSpecificationCommandInput) {
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
  ): Handler<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetDefaultCreditSpecificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDefaultCreditSpecificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDefaultCreditSpecificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDefaultCreditSpecificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetDefaultCreditSpecificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDefaultCreditSpecificationCommandOutput> {
    return deserializeAws_ec2GetDefaultCreditSpecificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
