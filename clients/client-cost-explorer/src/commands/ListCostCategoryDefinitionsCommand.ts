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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import { de_ListCostCategoryDefinitionsCommand, se_ListCostCategoryDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCostCategoryDefinitionsCommand}.
 */
export interface ListCostCategoryDefinitionsCommandInput extends ListCostCategoryDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCostCategoryDefinitionsCommand}.
 */
export interface ListCostCategoryDefinitionsCommandOutput
  extends ListCostCategoryDefinitionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective
 *       dates of all Cost Categories defined in the account. You have the option to use
 *         <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific
 *       date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are
 *       effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code>
 *       is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The
 *       request can have a <code>MaxResults</code> range up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryDefinitionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryDefinitionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostCategoryDefinitionsRequest
 *   EffectiveOn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostCategoryDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCostCategoryDefinitionsResponse
 * //   CostCategoryReferences: [ // CostCategoryReferencesList
 * //     { // CostCategoryReference
 * //       CostCategoryArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       EffectiveStart: "STRING_VALUE",
 * //       EffectiveEnd: "STRING_VALUE",
 * //       NumberOfRules: Number("int"),
 * //       ProcessingStatus: [ // CostCategoryProcessingStatusList
 * //         { // CostCategoryProcessingStatus
 * //           Component: "COST_EXPLORER",
 * //           Status: "PROCESSING" || "APPLIED",
 * //         },
 * //       ],
 * //       Values: [ // CostCategoryValuesList
 * //         "STRING_VALUE",
 * //       ],
 * //       DefaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostCategoryDefinitionsCommandInput - {@link ListCostCategoryDefinitionsCommandInput}
 * @returns {@link ListCostCategoryDefinitionsCommandOutput}
 * @see {@link ListCostCategoryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCostCategoryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class ListCostCategoryDefinitionsCommand extends $Command<
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: ListCostCategoryDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCostCategoryDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListCostCategoryDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "ListCostCategoryDefinitions",
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
  private serialize(input: ListCostCategoryDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCostCategoryDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCostCategoryDefinitionsCommandOutput> {
    return de_ListCostCategoryDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
