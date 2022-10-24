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
  CreateWhatIfForecastExportRequest,
  CreateWhatIfForecastExportRequestFilterSensitiveLog,
  CreateWhatIfForecastExportResponse,
  CreateWhatIfForecastExportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateWhatIfForecastExportCommand,
  serializeAws_json1_1CreateWhatIfForecastExportCommand,
} from "../protocols/Aws_json1_1";

export interface CreateWhatIfForecastExportCommandInput extends CreateWhatIfForecastExportRequest {}
export interface CreateWhatIfForecastExportCommandOutput extends CreateWhatIfForecastExportResponse, __MetadataBearer {}

/**
 * <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your
 *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
 *          <p>
 *             <code>≈<ForecastExportJobName>_<ExportTimestamp>_<PartNumber></code>
 *          </p>
 *          <p>The <ExportTimestamp> component is in Java SimpleDateFormat
 *       (yyyy-MM-ddTHH-mm-ssZ).</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
 *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
 *       <a>aws-forecast-iam-roles</a>.</p>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
 *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfForecastExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateWhatIfForecastExportCommand extends $Command<
  CreateWhatIfForecastExportCommandInput,
  CreateWhatIfForecastExportCommandOutput,
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

  constructor(readonly input: CreateWhatIfForecastExportCommandInput) {
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
  ): Handler<CreateWhatIfForecastExportCommandInput, CreateWhatIfForecastExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWhatIfForecastExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateWhatIfForecastExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWhatIfForecastExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWhatIfForecastExportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWhatIfForecastExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWhatIfForecastExportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWhatIfForecastExportCommandOutput> {
    return deserializeAws_json1_1CreateWhatIfForecastExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
