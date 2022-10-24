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
  ListWhatIfForecastsRequest,
  ListWhatIfForecastsRequestFilterSensitiveLog,
  ListWhatIfForecastsResponse,
  ListWhatIfForecastsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListWhatIfForecastsCommand,
  serializeAws_json1_1ListWhatIfForecastsCommand,
} from "../protocols/Aws_json1_1";

export interface ListWhatIfForecastsCommandInput extends ListWhatIfForecastsRequest {}
export interface ListWhatIfForecastsCommandOutput extends ListWhatIfForecastsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfForecastsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfForecastsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListWhatIfForecastsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWhatIfForecastsCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfForecastsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListWhatIfForecastsCommand extends $Command<
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
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

  constructor(readonly input: ListWhatIfForecastsCommandInput) {
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
  ): Handler<ListWhatIfForecastsCommandInput, ListWhatIfForecastsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWhatIfForecastsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListWhatIfForecastsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWhatIfForecastsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListWhatIfForecastsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWhatIfForecastsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWhatIfForecastsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWhatIfForecastsCommandOutput> {
    return deserializeAws_json1_1ListWhatIfForecastsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
