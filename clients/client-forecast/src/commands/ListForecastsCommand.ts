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
  ListForecastsRequest,
  ListForecastsRequestFilterSensitiveLog,
  ListForecastsResponse,
  ListForecastsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListForecastsCommand,
  serializeAws_json1_1ListForecastsCommand,
} from "../protocols/Aws_json1_1";

export interface ListForecastsCommandInput extends ListForecastsRequest {}
export interface ListForecastsCommandOutput extends ListForecastsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
 *       For each forecast, this operation returns a summary of its properties, including its Amazon
 *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
 *         <a>DescribeForecast</a> operation. You can filter the list using an array of
 *         <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListForecastsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListForecastsCommandInput} for command's `input` shape.
 * @see {@link ListForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListForecastsCommand extends $Command<
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
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

  constructor(readonly input: ListForecastsCommandInput) {
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
  ): Handler<ListForecastsCommandInput, ListForecastsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListForecastsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListForecastsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListForecastsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListForecastsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListForecastsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListForecastsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListForecastsCommandOutput> {
    return deserializeAws_json1_1ListForecastsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
