import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEC2InstanceRecommendationsCommandInput = GetEC2InstanceRecommendationsRequest;
export declare type GetEC2InstanceRecommendationsCommandOutput = GetEC2InstanceRecommendationsResponse & __MetadataBearer;
export declare class GetEC2InstanceRecommendationsCommand extends $Command<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEC2InstanceRecommendationsCommandInput;
    constructor(input: GetEC2InstanceRecommendationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
