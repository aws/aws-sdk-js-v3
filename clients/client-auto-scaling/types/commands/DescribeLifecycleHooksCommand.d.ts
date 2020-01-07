import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLifecycleHooksAnswer, DescribeLifecycleHooksType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLifecycleHooksCommandInput = DescribeLifecycleHooksType;
export declare type DescribeLifecycleHooksCommandOutput = DescribeLifecycleHooksAnswer & __MetadataBearer;
export declare class DescribeLifecycleHooksCommand extends $Command<DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeLifecycleHooksCommandInput;
    constructor(input: DescribeLifecycleHooksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput>;
    private serialize;
    private deserialize;
}
