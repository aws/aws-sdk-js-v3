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

import { ListRumMetricsDestinationsRequest, ListRumMetricsDestinationsResponse } from "../models/models_0";
import { de_ListRumMetricsDestinationsCommand, se_ListRumMetricsDestinationsCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRumMetricsDestinationsCommand}.
 */
export interface ListRumMetricsDestinationsCommandInput extends ListRumMetricsDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRumMetricsDestinationsCommand}.
 */
export interface ListRumMetricsDestinationsCommandOutput extends ListRumMetricsDestinationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of destinations that you have created to receive RUM extended metrics,
 *          for the specified app monitor.</p>
 *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html">AddRumMetrics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListRumMetricsDestinationsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListRumMetricsDestinationsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // ListRumMetricsDestinationsRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRumMetricsDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRumMetricsDestinationsResponse
 * //   Destinations: [ // MetricDestinationSummaryList
 * //     { // MetricDestinationSummary
 * //       Destination: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRumMetricsDestinationsCommandInput - {@link ListRumMetricsDestinationsCommandInput}
 * @returns {@link ListRumMetricsDestinationsCommandOutput}
 * @see {@link ListRumMetricsDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListRumMetricsDestinationsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class ListRumMetricsDestinationsCommand extends $Command<
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: ListRumMetricsDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRumMetricsDestinationsCommandInput, ListRumMetricsDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRumMetricsDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "ListRumMetricsDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RUM",
        operation: "ListRumMetricsDestinations",
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
  private serialize(input: ListRumMetricsDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRumMetricsDestinationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRumMetricsDestinationsCommandOutput> {
    return de_ListRumMetricsDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
