import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingPlanResourcesCommandInput = DescribeScalingPlanResourcesRequest;
export declare type DescribeScalingPlanResourcesCommandOutput = DescribeScalingPlanResourcesResponse & __MetadataBearer;
export declare class DescribeScalingPlanResourcesCommand extends $Command<DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: DescribeScalingPlanResourcesCommandInput;
    constructor(input: DescribeScalingPlanResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
