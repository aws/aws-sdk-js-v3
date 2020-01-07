import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeExecutionInput, DescribeExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExecutionCommandInput = DescribeExecutionInput;
export declare type DescribeExecutionCommandOutput = DescribeExecutionOutput & __MetadataBearer;
export declare class DescribeExecutionCommand extends $Command<DescribeExecutionCommandInput, DescribeExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeExecutionCommandInput;
    constructor(input: DescribeExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
