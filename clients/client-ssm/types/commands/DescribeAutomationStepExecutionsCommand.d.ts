import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutomationStepExecutionsCommandInput = DescribeAutomationStepExecutionsRequest;
export declare type DescribeAutomationStepExecutionsCommandOutput = DescribeAutomationStepExecutionsResult & __MetadataBearer;
export declare class DescribeAutomationStepExecutionsCommand extends $Command<DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAutomationStepExecutionsCommandInput;
    constructor(input: DescribeAutomationStepExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
