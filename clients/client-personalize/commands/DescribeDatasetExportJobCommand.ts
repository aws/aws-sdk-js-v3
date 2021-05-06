import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetExportJobRequest, DescribeDatasetExportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDatasetExportJobCommand,
  serializeAws_json1_1DescribeDatasetExportJobCommand,
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

export interface DescribeDatasetExportJobCommandInput extends DescribeDatasetExportJobRequest {}
export interface DescribeDatasetExportJobCommandOutput extends DescribeDatasetExportJobResponse, __MetadataBearer {}

/**
 * <p>Describes the dataset export job created by <a>CreateDatasetExportJob</a>,
 *       including the export job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDatasetExportJobCommand extends $Command<
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatasetExportJobCommandInput) {
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
  ): Handler<DescribeDatasetExportJobCommandInput, DescribeDatasetExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeDatasetExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDatasetExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDatasetExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDatasetExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDatasetExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetExportJobCommandOutput> {
    return deserializeAws_json1_1DescribeDatasetExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
