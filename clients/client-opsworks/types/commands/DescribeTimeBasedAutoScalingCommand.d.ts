import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeTimeBasedAutoScalingRequest, DescribeTimeBasedAutoScalingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTimeBasedAutoScalingCommandInput = DescribeTimeBasedAutoScalingRequest;
export declare type DescribeTimeBasedAutoScalingCommandOutput = DescribeTimeBasedAutoScalingResult & __MetadataBearer;
export declare class DescribeTimeBasedAutoScalingCommand extends $Command<DescribeTimeBasedAutoScalingCommandInput, DescribeTimeBasedAutoScalingCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeTimeBasedAutoScalingCommandInput;
    constructor(input: DescribeTimeBasedAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTimeBasedAutoScalingCommandInput, DescribeTimeBasedAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
