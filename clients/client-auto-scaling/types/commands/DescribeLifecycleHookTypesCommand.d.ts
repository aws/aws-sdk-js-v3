import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLifecycleHookTypesAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLifecycleHookTypesCommandInput = {};
export declare type DescribeLifecycleHookTypesCommandOutput = DescribeLifecycleHookTypesAnswer & __MetadataBearer;
export declare class DescribeLifecycleHookTypesCommand extends $Command<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeLifecycleHookTypesCommandInput;
    constructor(input: DescribeLifecycleHookTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput>;
    private serialize;
    private deserialize;
}
