import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackInstanceInput, DescribeStackInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackInstanceCommandInput = DescribeStackInstanceInput;
export declare type DescribeStackInstanceCommandOutput = DescribeStackInstanceOutput & __MetadataBearer;
export declare class DescribeStackInstanceCommand extends $Command<DescribeStackInstanceCommandInput, DescribeStackInstanceCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackInstanceCommandInput;
    constructor(input: DescribeStackInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackInstanceCommandInput, DescribeStackInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
