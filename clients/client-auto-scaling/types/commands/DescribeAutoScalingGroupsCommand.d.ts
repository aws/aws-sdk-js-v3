import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AutoScalingGroupNamesType, AutoScalingGroupsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutoScalingGroupsCommandInput = AutoScalingGroupNamesType;
export declare type DescribeAutoScalingGroupsCommandOutput = AutoScalingGroupsType & __MetadataBearer;
export declare class DescribeAutoScalingGroupsCommand extends $Command<DescribeAutoScalingGroupsCommandInput, DescribeAutoScalingGroupsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeAutoScalingGroupsCommandInput;
    constructor(input: DescribeAutoScalingGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutoScalingGroupsCommandInput, DescribeAutoScalingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
