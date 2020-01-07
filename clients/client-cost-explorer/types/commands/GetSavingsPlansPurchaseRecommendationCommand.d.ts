import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansPurchaseRecommendationRequest, GetSavingsPlansPurchaseRecommendationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSavingsPlansPurchaseRecommendationCommandInput = GetSavingsPlansPurchaseRecommendationRequest;
export declare type GetSavingsPlansPurchaseRecommendationCommandOutput = GetSavingsPlansPurchaseRecommendationResponse & __MetadataBearer;
export declare class GetSavingsPlansPurchaseRecommendationCommand extends $Command<GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansPurchaseRecommendationCommandInput;
    constructor(input: GetSavingsPlansPurchaseRecommendationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput>;
    private serialize;
    private deserialize;
}
