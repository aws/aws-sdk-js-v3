import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResourceMetricsCommand,
  serializeAws_json1_1GetResourceMetricsCommand,
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

export interface GetResourceMetricsCommandInput extends GetResourceMetricsRequest {}
export interface GetResourceMetricsCommandOutput extends GetResourceMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
 *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
 *       each group.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *                only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetResourceMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetResourceMetricsCommand extends $Command<
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
  PIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetResourceMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetricsCommandOutput> {
    return deserializeAws_json1_1GetResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
