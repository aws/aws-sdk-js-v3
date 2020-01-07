import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeLoadBasedAutoScalingRequest, DescribeLoadBasedAutoScalingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBasedAutoScalingCommandInput = DescribeLoadBasedAutoScalingRequest;
export declare type DescribeLoadBasedAutoScalingCommandOutput = DescribeLoadBasedAutoScalingResult & __MetadataBearer;
export declare class DescribeLoadBasedAutoScalingCommand extends $Command<DescribeLoadBasedAutoScalingCommandInput, DescribeLoadBasedAutoScalingCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeLoadBasedAutoScalingCommandInput;
    constructor(input: DescribeLoadBasedAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBasedAutoScalingCommandInput, DescribeLoadBasedAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
