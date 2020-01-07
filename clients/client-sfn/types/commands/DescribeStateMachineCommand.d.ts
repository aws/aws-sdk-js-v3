import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeStateMachineInput, DescribeStateMachineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStateMachineCommandInput = DescribeStateMachineInput;
export declare type DescribeStateMachineCommandOutput = DescribeStateMachineOutput & __MetadataBearer;
export declare class DescribeStateMachineCommand extends $Command<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeStateMachineCommandInput;
    constructor(input: DescribeStateMachineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
