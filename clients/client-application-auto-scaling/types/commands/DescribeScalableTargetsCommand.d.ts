import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DescribeScalableTargetsRequest, DescribeScalableTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalableTargetsCommandInput = DescribeScalableTargetsRequest;
export declare type DescribeScalableTargetsCommandOutput = DescribeScalableTargetsResponse & __MetadataBearer;
export declare class DescribeScalableTargetsCommand extends $Command<DescribeScalableTargetsCommandInput, DescribeScalableTargetsCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DescribeScalableTargetsCommandInput;
    constructor(input: DescribeScalableTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalableTargetsCommandInput, DescribeScalableTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
