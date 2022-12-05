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
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationRequestFilterSensitiveLog,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
  StartSavingsPlansPurchaseRecommendationGenerationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand,
  serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand,
} from "../protocols/Aws_json1_1";

export interface StartSavingsPlansPurchaseRecommendationGenerationCommandInput
  extends StartSavingsPlansPurchaseRecommendationGenerationRequest {}
export interface StartSavingsPlansPurchaseRecommendationGenerationCommandOutput
  extends StartSavingsPlansPurchaseRecommendationGenerationResponse,
    __MetadataBearer {}

/**
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
 * const command = new StartSavingsPlansPurchaseRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link StartSavingsPlansPurchaseRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
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
      inputFilterSensitiveLog: StartSavingsPlansPurchaseRecommendationGenerationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSavingsPlansPurchaseRecommendationGenerationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput> {
    return deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
