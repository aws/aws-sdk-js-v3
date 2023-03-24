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
import { QueryWhatIfForecastRequest, QueryWhatIfForecastResponse } from "../models/models_0";
import {
  deserializeAws_json1_1QueryWhatIfForecastCommand,
  serializeAws_json1_1QueryWhatIfForecastCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link QueryWhatIfForecastCommand}.
 */
export interface QueryWhatIfForecastCommandInput extends QueryWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link QueryWhatIfForecastCommand}.
 */
export interface QueryWhatIfForecastCommandOutput extends QueryWhatIfForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a what-if forecast.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryWhatIfForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryWhatIfForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * const client = new ForecastqueryClient(config);
 * const input = {
 *   WhatIfForecastArn: "STRING_VALUE", // required
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Filters: { // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param QueryWhatIfForecastCommandInput - {@link QueryWhatIfForecastCommandInput}
 * @returns {@link QueryWhatIfForecastCommandOutput}
 * @see {@link QueryWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link QueryWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The value is invalid or is too long.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: QueryWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryWhatIfForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryWhatIfForecastCommandOutput> {
    return deserializeAws_json1_1QueryWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
