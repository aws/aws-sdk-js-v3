import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeComponentConfigurationRecommendationRequest, DescribeComponentConfigurationRecommendationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeComponentConfigurationRecommendationCommandInput = DescribeComponentConfigurationRecommendationRequest;
export declare type DescribeComponentConfigurationRecommendationCommandOutput = DescribeComponentConfigurationRecommendationResponse & __MetadataBearer;
export declare class DescribeComponentConfigurationRecommendationCommand extends $Command<DescribeComponentConfigurationRecommendationCommandInput, DescribeComponentConfigurationRecommendationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeComponentConfigurationRecommendationCommandInput;
    constructor(input: DescribeComponentConfigurationRecommendationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComponentConfigurationRecommendationCommandInput, DescribeComponentConfigurationRecommendationCommandOutput>;
    private serialize;
    private deserialize;
}
