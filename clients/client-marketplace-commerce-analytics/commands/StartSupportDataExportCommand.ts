import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/models_0";
import {
  deserializeAws_json1_1StartSupportDataExportCommand,
  serializeAws_json1_1StartSupportDataExportCommand,
} from "../protocols/Aws_json1_1";
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

export type StartSupportDataExportCommandInput = StartSupportDataExportRequest;
export type StartSupportDataExportCommandOutput = StartSupportDataExportResult & __MetadataBearer;

/**
 * Given a data set type and a from date, asynchronously publishes the requested customer support data
 *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 *         identifier that can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 */
export class StartSupportDataExportCommand extends $Command<
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
  MarketplaceCommerceAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSupportDataExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCommerceAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCommerceAnalyticsClient";
    const commandName = "StartSupportDataExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSupportDataExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSupportDataExportResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSupportDataExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSupportDataExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSupportDataExportCommandOutput> {
    return deserializeAws_json1_1StartSupportDataExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
