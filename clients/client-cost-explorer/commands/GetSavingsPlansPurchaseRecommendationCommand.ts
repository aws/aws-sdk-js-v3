import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand,
  serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetSavingsPlansPurchaseRecommendationCommandInput = GetSavingsPlansPurchaseRecommendationRequest;
export type GetSavingsPlansPurchaseRecommendationCommandOutput = GetSavingsPlansPurchaseRecommendationResponse &
  __MetadataBearer;

/**
 * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details. </p>
 */
export class GetSavingsPlansPurchaseRecommendationCommand extends $Command<
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSavingsPlansPurchaseRecommendationCommandInput) {
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
  ): Handler<GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetSavingsPlansPurchaseRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSavingsPlansPurchaseRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
