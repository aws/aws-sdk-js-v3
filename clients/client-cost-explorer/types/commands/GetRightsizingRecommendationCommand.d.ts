import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetRightsizingRecommendationRequest, GetRightsizingRecommendationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRightsizingRecommendationCommandInput = GetRightsizingRecommendationRequest;
export declare type GetRightsizingRecommendationCommandOutput = GetRightsizingRecommendationResponse & __MetadataBearer;
export declare class GetRightsizingRecommendationCommand extends $Command<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetRightsizingRecommendationCommandInput;
    constructor(input: GetRightsizingRecommendationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput>;
    private serialize;
    private deserialize;
}
