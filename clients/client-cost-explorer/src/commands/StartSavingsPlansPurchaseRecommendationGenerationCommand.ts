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
import {
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
} from "../models/models_0";
import {
  de_StartSavingsPlansPurchaseRecommendationGenerationCommand,
  se_StartSavingsPlansPurchaseRecommendationGenerationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationCommandInput
  extends StartSavingsPlansPurchaseRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartSavingsPlansPurchaseRecommendationGenerationCommand}.
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationCommandOutput
  extends StartSavingsPlansPurchaseRecommendationGenerationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh
 *       set of Savings Plans recommendations that takes your latest usage data and current Savings
 *       Plans inventory into account. You can refresh Savings Plans recommendations up to three times
 *       daily for a consolidated billing family.</p>
 *          <note>
 *             <p>
 *                <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax
 *         because no input parameters are needed to support this operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, StartSavingsPlansPurchaseRecommendationGenerationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, StartSavingsPlansPurchaseRecommendationGenerationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = {};
 * const command = new StartSavingsPlansPurchaseRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartSavingsPlansPurchaseRecommendationGenerationResponse
 * //   RecommendationId: "STRING_VALUE",
 * //   GenerationStartedTime: "STRING_VALUE",
 * //   EstimatedCompletionTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSavingsPlansPurchaseRecommendationGenerationCommandInput - {@link StartSavingsPlansPurchaseRecommendationGenerationCommandInput}
 * @returns {@link StartSavingsPlansPurchaseRecommendationGenerationCommandOutput}
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link GenerationExistsException} (client fault)
 *  <p>A request to generate a recommendation is already in progress.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> You've reached the limit on the number of resources you can create, or exceeded the
 *             size of an individual resource. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class StartSavingsPlansPurchaseRecommendationGenerationCommand extends $Command<
  StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
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
  constructor(readonly input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput) {
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
    StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    StartSavingsPlansPurchaseRecommendationGenerationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartSavingsPlansPurchaseRecommendationGenerationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "StartSavingsPlansPurchaseRecommendationGenerationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "StartSavingsPlansPurchaseRecommendationGeneration",
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
  private serialize(
    input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartSavingsPlansPurchaseRecommendationGenerationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput> {
    return de_StartSavingsPlansPurchaseRecommendationGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
