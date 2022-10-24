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
  DescribeWhatIfForecastExportRequest,
  DescribeWhatIfForecastExportRequestFilterSensitiveLog,
  DescribeWhatIfForecastExportResponse,
  DescribeWhatIfForecastExportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWhatIfForecastExportCommand,
  serializeAws_json1_1DescribeWhatIfForecastExportCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeWhatIfForecastExportCommandInput extends DescribeWhatIfForecastExportRequest {}
export interface DescribeWhatIfForecastExportCommandOutput
  extends DescribeWhatIfForecastExportResponse,
    __MetadataBearer {}

/**
 * <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfForecastExportCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DescribeWhatIfForecastExportCommand extends $Command<
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
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

  constructor(readonly input: DescribeWhatIfForecastExportCommandInput) {
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
  ): Handler<DescribeWhatIfForecastExportCommandInput, DescribeWhatIfForecastExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWhatIfForecastExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeWhatIfForecastExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWhatIfForecastExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeWhatIfForecastExportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWhatIfForecastExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWhatIfForecastExportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWhatIfForecastExportCommandOutput> {
    return deserializeAws_json1_1DescribeWhatIfForecastExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
