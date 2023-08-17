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
} from "@smithy/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListExplainabilitiesRequest, ListExplainabilitiesResponse } from "../models/models_0";
import { de_ListExplainabilitiesCommand, se_ListExplainabilitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandInput extends ListExplainabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandOutput extends ListExplainabilitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for
 *             each Explainability. You can filter the list using an array of <a>Filter</a>
 *             objects.</p>
 *          <p>To retrieve the complete set of properties for a particular Explainability resource,
 *             use the ARN with the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilitiesCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilitiesCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListExplainabilitiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListExplainabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListExplainabilitiesResponse
 * //   Explainabilities: [ // Explainabilities
 * //     { // ExplainabilitySummary
 * //       ExplainabilityArn: "STRING_VALUE",
 * //       ExplainabilityName: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ExplainabilityConfig: { // ExplainabilityConfig
 * //         TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 * //         TimePointGranularity: "ALL" || "SPECIFIC", // required
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExplainabilitiesCommandInput - {@link ListExplainabilitiesCommandInput}
 * @returns {@link ListExplainabilitiesCommandOutput}
 * @see {@link ListExplainabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class ListExplainabilitiesCommand extends $Command<
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListExplainabilitiesCommandInput) {
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
  ): Handler<ListExplainabilitiesCommandInput, ListExplainabilitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExplainabilitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListExplainabilitiesCommand";
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
  private serialize(input: ListExplainabilitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExplainabilitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExplainabilitiesCommandOutput> {
    return de_ListExplainabilitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
