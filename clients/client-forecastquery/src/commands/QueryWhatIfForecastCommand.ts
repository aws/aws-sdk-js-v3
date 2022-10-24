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

import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import {
  QueryWhatIfForecastRequest,
  QueryWhatIfForecastRequestFilterSensitiveLog,
  QueryWhatIfForecastResponse,
  QueryWhatIfForecastResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1QueryWhatIfForecastCommand,
  serializeAws_json1_1QueryWhatIfForecastCommand,
} from "../protocols/Aws_json1_1";

export interface QueryWhatIfForecastCommandInput extends QueryWhatIfForecastRequest {}
export interface QueryWhatIfForecastCommandOutput extends QueryWhatIfForecastResponse, __MetadataBearer {}

/**
 * <p>Retrieves a what-if forecast.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryWhatIfForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryWhatIfForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * const client = new ForecastqueryClient(config);
 * const command = new QueryWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link QueryWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 */
export class QueryWhatIfForecastCommand extends $Command<
  QueryWhatIfForecastCommandInput,
  QueryWhatIfForecastCommandOutput,
  ForecastqueryClientResolvedConfig
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

  constructor(readonly input: QueryWhatIfForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastqueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryWhatIfForecastCommandInput, QueryWhatIfForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QueryWhatIfForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastqueryClient";
    const commandName = "QueryWhatIfForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryWhatIfForecastRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryWhatIfForecastResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryWhatIfForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryWhatIfForecastCommandOutput> {
    return deserializeAws_json1_1QueryWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
