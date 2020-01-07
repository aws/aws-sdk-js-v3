import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEC2RecommendationProjectedMetricsRequest, GetEC2RecommendationProjectedMetricsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEC2RecommendationProjectedMetricsCommandInput = GetEC2RecommendationProjectedMetricsRequest;
export declare type GetEC2RecommendationProjectedMetricsCommandOutput = GetEC2RecommendationProjectedMetricsResponse & __MetadataBearer;
export declare class GetEC2RecommendationProjectedMetricsCommand extends $Command<GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEC2RecommendationProjectedMetricsCommandInput;
    constructor(input: GetEC2RecommendationProjectedMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
