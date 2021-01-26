import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/models_4";
import {
  deserializeAws_ec2GetCoipPoolUsageCommand,
  serializeAws_ec2GetCoipPoolUsageCommand,
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

export type GetCoipPoolUsageCommandInput = GetCoipPoolUsageRequest;
export type GetCoipPoolUsageCommandOutput = GetCoipPoolUsageResult & __MetadataBearer;

/**
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 */
export class GetCoipPoolUsageCommand extends $Command<
  GetCoipPoolUsageCommandInput,
  GetCoipPoolUsageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCoipPoolUsageCommandInput) {
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
  ): Handler<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetCoipPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCoipPoolUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCoipPoolUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCoipPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetCoipPoolUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoipPoolUsageCommandOutput> {
    return deserializeAws_ec2GetCoipPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
