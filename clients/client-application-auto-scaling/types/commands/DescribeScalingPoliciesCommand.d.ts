import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DescribeScalingPoliciesRequest, DescribeScalingPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingPoliciesCommandInput = DescribeScalingPoliciesRequest;
export declare type DescribeScalingPoliciesCommandOutput = DescribeScalingPoliciesResponse & __MetadataBearer;
export declare class DescribeScalingPoliciesCommand extends $Command<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DescribeScalingPoliciesCommandInput;
    constructor(input: DescribeScalingPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
