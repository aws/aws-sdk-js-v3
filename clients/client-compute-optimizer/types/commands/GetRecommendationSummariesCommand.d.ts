import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRecommendationSummariesCommandInput = GetRecommendationSummariesRequest;
export declare type GetRecommendationSummariesCommandOutput = GetRecommendationSummariesResponse & __MetadataBearer;
export declare class GetRecommendationSummariesCommand extends $Command<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetRecommendationSummariesCommandInput;
    constructor(input: GetRecommendationSummariesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
