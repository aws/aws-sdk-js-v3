import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStacksInput, DescribeStacksOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStacksCommandInput = DescribeStacksInput;
export declare type DescribeStacksCommandOutput = DescribeStacksOutput & __MetadataBearer;
export declare class DescribeStacksCommand extends $Command<DescribeStacksCommandInput, DescribeStacksCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStacksCommandInput;
    constructor(input: DescribeStacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStacksCommandInput, DescribeStacksCommandOutput>;
    private serialize;
    private deserialize;
}
