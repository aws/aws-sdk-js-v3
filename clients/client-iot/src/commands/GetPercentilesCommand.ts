// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetPercentilesRequest, GetPercentilesResponse } from "../models/models_1";
import { de_GetPercentilesCommand, se_GetPercentilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPercentilesCommand}.
 */
export interface GetPercentilesCommandInput extends GetPercentilesRequest {}
/**
 * @public
 *
 * The output of {@link GetPercentilesCommand}.
 */
export interface GetPercentilesCommandOutput extends GetPercentilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Groups the aggregated values that match the query into percentile groupings. The default
 *         percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
 *         when you call <code>GetPercentiles</code>. This function returns a value for each
 *         percentile group specified (or the default percentile groupings). The percentile group
 *         "1" contains the aggregated field value that occurs in approximately one percent of the
 *         values that match the query. The percentile group "5" contains the aggregated field value
 *         that occurs in approximately five percent of the values that match the query, and so on.
 *         The result is an approximation, the more values that match the query, the more accurate
 *         the percentile values.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPercentilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPercentilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetPercentilesRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   aggregationField: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 *   percents: [ // PercentList
 *     Number("double"),
 *   ],
 * };
 * const command = new GetPercentilesCommand(input);
 * const response = await client.send(command);
 * // { // GetPercentilesResponse
 * //   percentiles: [ // Percentiles
 * //     { // PercentPair
 * //       percent: Number("double"),
 * //       value: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPercentilesCommandInput - {@link GetPercentilesCommandInput}
 * @returns {@link GetPercentilesCommandOutput}
 * @see {@link GetPercentilesCommandInput} for command's `input` shape.
 * @see {@link GetPercentilesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *  <p>The aggregation is invalid.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class GetPercentilesCommand extends $Command<
  GetPercentilesCommandInput,
  GetPercentilesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetPercentilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPercentilesCommandInput, GetPercentilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPercentilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetPercentilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "GetPercentiles",
      },
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
  private serialize(input: GetPercentilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPercentilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPercentilesCommandOutput> {
    return de_GetPercentilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
