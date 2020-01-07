import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTypeCommandInput = DescribeTypeInput;
export declare type DescribeTypeCommandOutput = DescribeTypeOutput & __MetadataBearer;
export declare class DescribeTypeCommand extends $Command<DescribeTypeCommandInput, DescribeTypeCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeTypeCommandInput;
    constructor(input: DescribeTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTypeCommandInput, DescribeTypeCommandOutput>;
    private serialize;
    private deserialize;
}
