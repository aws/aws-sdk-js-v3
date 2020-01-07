import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourceInput, DescribeStackResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackResourceCommandInput = DescribeStackResourceInput;
export declare type DescribeStackResourceCommandOutput = DescribeStackResourceOutput & __MetadataBearer;
export declare class DescribeStackResourceCommand extends $Command<DescribeStackResourceCommandInput, DescribeStackResourceCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackResourceCommandInput;
    constructor(input: DescribeStackResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackResourceCommandInput, DescribeStackResourceCommandOutput>;
    private serialize;
    private deserialize;
}
