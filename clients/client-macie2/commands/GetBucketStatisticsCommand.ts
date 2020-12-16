import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetBucketStatisticsRequest, GetBucketStatisticsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBucketStatisticsCommand,
  serializeAws_restJson1GetBucketStatisticsCommand,
} from "../protocols/Aws_restJson1";
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

export type GetBucketStatisticsCommandInput = GetBucketStatisticsRequest;
export type GetBucketStatisticsCommandOutput = GetBucketStatisticsResponse & __MetadataBearer;

/**
 * <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
 */
export class GetBucketStatisticsCommand extends $Command<
  GetBucketStatisticsCommandInput,
  GetBucketStatisticsCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketStatisticsCommandInput, GetBucketStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetBucketStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBucketStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketStatisticsCommandOutput> {
    return deserializeAws_restJson1GetBucketStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
