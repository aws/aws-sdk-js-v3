import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AutoScalingInstancesType, DescribeAutoScalingInstancesType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutoScalingInstancesCommandInput = DescribeAutoScalingInstancesType;
export declare type DescribeAutoScalingInstancesCommandOutput = AutoScalingInstancesType & __MetadataBearer;
export declare class DescribeAutoScalingInstancesCommand extends $Command<DescribeAutoScalingInstancesCommandInput, DescribeAutoScalingInstancesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeAutoScalingInstancesCommandInput;
    constructor(input: DescribeAutoScalingInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutoScalingInstancesCommandInput, DescribeAutoScalingInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
