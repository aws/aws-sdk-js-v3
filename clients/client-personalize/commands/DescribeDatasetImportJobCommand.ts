import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDatasetImportJobCommand,
  serializeAws_json1_1DescribeDatasetImportJobCommand,
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

export type DescribeDatasetImportJobCommandInput = DescribeDatasetImportJobRequest;
export type DescribeDatasetImportJobCommandOutput = DescribeDatasetImportJobResponse & __MetadataBearer;

/**
 * <p>Describes the dataset import job created by <a>CreateDatasetImportJob</a>,
 *       including the import job status.</p>
 */
export class DescribeDatasetImportJobCommand extends $Command<
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatasetImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeDatasetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDatasetImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDatasetImportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDatasetImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDatasetImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetImportJobCommandOutput> {
    return deserializeAws_json1_1DescribeDatasetImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
