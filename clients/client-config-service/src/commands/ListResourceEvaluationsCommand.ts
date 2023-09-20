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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListResourceEvaluationsRequest, ListResourceEvaluationsResponse } from "../models/models_0";
import { de_ListResourceEvaluationsCommand, se_ListResourceEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourceEvaluationsCommand}.
 */
export interface ListResourceEvaluationsCommandInput extends ListResourceEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceEvaluationsCommand}.
 */
export interface ListResourceEvaluationsCommandOutput extends ListResourceEvaluationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of proactive resource evaluations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListResourceEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListResourceEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // ListResourceEvaluationsRequest
 *   Filters: { // ResourceEvaluationFilters
 *     EvaluationMode: "DETECTIVE" || "PROACTIVE",
 *     TimeWindow: { // TimeWindow
 *       StartTime: new Date("TIMESTAMP"),
 *       EndTime: new Date("TIMESTAMP"),
 *     },
 *     EvaluationContextIdentifier: "STRING_VALUE",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceEvaluationsResponse
 * //   ResourceEvaluations: [ // ResourceEvaluations
 * //     { // ResourceEvaluation
 * //       ResourceEvaluationId: "STRING_VALUE",
 * //       EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //       EvaluationStartTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceEvaluationsCommandInput - {@link ListResourceEvaluationsCommandInput}
 * @returns {@link ListResourceEvaluationsCommandOutput}
 * @see {@link ListResourceEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListResourceEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class ListResourceEvaluationsCommand extends $Command<
  ListResourceEvaluationsCommandInput,
  ListResourceEvaluationsCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: ListResourceEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceEvaluationsCommandInput, ListResourceEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceEvaluationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListResourceEvaluationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "ListResourceEvaluations",
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
  private serialize(input: ListResourceEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourceEvaluationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceEvaluationsCommandOutput> {
    return de_ListResourceEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
