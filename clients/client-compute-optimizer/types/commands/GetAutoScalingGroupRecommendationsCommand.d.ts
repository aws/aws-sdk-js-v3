import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetAutoScalingGroupRecommendationsRequest, GetAutoScalingGroupRecommendationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAutoScalingGroupRecommendationsCommandInput = GetAutoScalingGroupRecommendationsRequest;
export declare type GetAutoScalingGroupRecommendationsCommandOutput = GetAutoScalingGroupRecommendationsResponse & __MetadataBearer;
export declare class GetAutoScalingGroupRecommendationsCommand extends $Command<GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetAutoScalingGroupRecommendationsCommandInput;
    constructor(input: GetAutoScalingGroupRecommendationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
