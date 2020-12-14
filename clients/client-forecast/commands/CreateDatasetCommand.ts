import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetCommand,
  serializeAws_json1_1CreateDatasetCommand,
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

export type CreateDatasetCommandInput = CreateDatasetRequest;
export type CreateDatasetCommandOutput = CreateDatasetResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps
 *       Forecast understand how to consume the data for model training. This includes the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>DataFrequency</code>
 *                   </i> - How frequently your historical
 *           time-series data is collected.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>Domain</code>
 *                   </i> and
 *             <i>
 *                      <code>DatasetType</code>
 *                   </i> - Each dataset has an associated dataset
 *           domain and a type within the domain. Amazon Forecast provides a list of predefined domains and
 *           types within each domain. For each unique dataset domain and type within the domain,
 *           Amazon Forecast requires your data to include a minimum set of predefined fields.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>Schema</code>
 *                   </i> - A schema specifies the fields in the dataset,
 *           including the field name and data type.</p>
 *             </li>
 *          </ul>
 *          <p>After creating a dataset, you import your training data into it and add the dataset to a
 *       dataset group. You use the dataset group to create a predictor. For more information, see
 *         <a>howitworks-datasets-groups</a>.</p>
 *          <p>To get a list of all your datasets, use the <a>ListDatasets</a>
 *       operation.</p>
 *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
 *         repository</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
 *         training data. Use the <a>DescribeDataset</a> operation to get the status.</p>
 *          </note>
 */
export class CreateDatasetCommand extends $Command<
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetCommandOutput> {
    return deserializeAws_json1_1CreateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
