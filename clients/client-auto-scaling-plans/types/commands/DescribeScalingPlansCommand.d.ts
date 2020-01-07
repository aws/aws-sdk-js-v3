import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { DescribeScalingPlansRequest, DescribeScalingPlansResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingPlansCommandInput = DescribeScalingPlansRequest;
export declare type DescribeScalingPlansCommandOutput = DescribeScalingPlansResponse & __MetadataBearer;
export declare class DescribeScalingPlansCommand extends $Command<DescribeScalingPlansCommandInput, DescribeScalingPlansCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: DescribeScalingPlansCommandInput;
    constructor(input: DescribeScalingPlansCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingPlansCommandInput, DescribeScalingPlansCommandOutput>;
    private serialize;
    private deserialize;
}
