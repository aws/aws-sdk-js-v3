import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutomationExecutionsCommandInput = DescribeAutomationExecutionsRequest;
export declare type DescribeAutomationExecutionsCommandOutput = DescribeAutomationExecutionsResult & __MetadataBearer;
export declare class DescribeAutomationExecutionsCommand extends $Command<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAutomationExecutionsCommandInput;
    constructor(input: DescribeAutomationExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
