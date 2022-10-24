// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateDatasetRequest,
  CreateDatasetRequestFilterSensitiveLog,
  CreateDatasetResponse,
  CreateDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetCommand,
  serializeAws_json1_1CreateDatasetCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

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
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p>
 *          <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p>
 *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
 *         repository</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
 *         training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get
 *         the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateDatasetCommand extends $Command<
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetResponseFilterSensitiveLog,
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
