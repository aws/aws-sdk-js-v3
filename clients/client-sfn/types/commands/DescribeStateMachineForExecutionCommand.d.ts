import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeStateMachineForExecutionInput, DescribeStateMachineForExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStateMachineForExecutionCommandInput = DescribeStateMachineForExecutionInput;
export declare type DescribeStateMachineForExecutionCommandOutput = DescribeStateMachineForExecutionOutput & __MetadataBearer;
export declare class DescribeStateMachineForExecutionCommand extends $Command<DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeStateMachineForExecutionCommandInput;
    constructor(input: DescribeStateMachineForExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
