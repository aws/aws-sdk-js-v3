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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ListSavingsPlansPurchaseRecommendationGenerationResponse,
} from "../models/models_0";
import {
  de_ListSavingsPlansPurchaseRecommendationGenerationCommand,
  se_ListSavingsPlansPurchaseRecommendationGenerationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationCommandInput
  extends ListSavingsPlansPurchaseRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link ListSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationCommandOutput
  extends ListSavingsPlansPurchaseRecommendationGenerationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of your historical recommendation generations within the past 30
 *       days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListSavingsPlansPurchaseRecommendationGenerationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListSavingsPlansPurchaseRecommendationGenerationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListSavingsPlansPurchaseRecommendationGenerationRequest
 *   GenerationStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 *   RecommendationIds: [ // RecommendationIdList
 *     "STRING_VALUE",
 *   ],
 *   PageSize: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new ListSavingsPlansPurchaseRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSavingsPlansPurchaseRecommendationGenerationCommandInput - {@link ListSavingsPlansPurchaseRecommendationGenerationCommandInput}
 * @returns {@link ListSavingsPlansPurchaseRecommendationGenerationCommandOutput}
 * @see {@link ListSavingsPlansPurchaseRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link ListSavingsPlansPurchaseRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 *
 */
export class ListSavingsPlansPurchaseRecommendationGenerationCommand extends $Command<
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
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
  constructor(readonly input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput) {
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
  ): Handler<
    ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    ListSavingsPlansPurchaseRecommendationGenerationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListSavingsPlansPurchaseRecommendationGenerationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListSavingsPlansPurchaseRecommendationGenerationCommand";
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
  private serialize(
    input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListSavingsPlansPurchaseRecommendationGenerationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput> {
    return de_ListSavingsPlansPurchaseRecommendationGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
