import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDatasetGroupCommand,
  serializeAws_json1_1DescribeDatasetGroupCommand,
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

export interface DescribeDatasetGroupCommandInput extends DescribeDatasetGroupRequest {}
export interface DescribeDatasetGroupCommandOutput extends DescribeDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Describes a dataset group created using the <a>CreateDatasetGroup</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
 *       request, this operation includes the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
 *             </li>
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
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDatasetGroupCommand extends $Command<
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatasetGroupCommandInput) {
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
  ): Handler<DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeDatasetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDatasetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDatasetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDatasetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDatasetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetGroupCommandOutput> {
    return deserializeAws_json1_1DescribeDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
