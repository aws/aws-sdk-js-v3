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
  CreateForecastExportJobRequest,
  CreateForecastExportJobRequestFilterSensitiveLog,
  CreateForecastExportJobResponse,
  CreateForecastExportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateForecastExportJobCommand,
  serializeAws_json1_1CreateForecastExportJobCommand,
} from "../protocols/Aws_json1_1";

export interface CreateForecastExportJobCommandInput extends CreateForecastExportJobRequest {}
export interface CreateForecastExportJobCommandOutput extends CreateForecastExportJobResponse, __MetadataBearer {}

/**
 * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your
 *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
 *          <p><ForecastExportJobName>_<ExportTimestamp>_<PartNumber></p>
 *          <p>where the <ExportTimestamp> component is in Java SimpleDateFormat
 *       (yyyy-MM-ddTHH-mm-ssZ).</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
 *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
 *         <a>aws-forecast-iam-roles</a>.</p>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
 *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateForecastExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateForecastExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateForecastExportJobCommand extends $Command<
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
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

  constructor(readonly input: CreateForecastExportJobCommandInput) {
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
  ): Handler<CreateForecastExportJobCommandInput, CreateForecastExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateForecastExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateForecastExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateForecastExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateForecastExportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateForecastExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateForecastExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateForecastExportJobCommandOutput> {
    return deserializeAws_json1_1CreateForecastExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
