import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourcesInput, DescribeStackResourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackResourcesCommandInput = DescribeStackResourcesInput;
export declare type DescribeStackResourcesCommandOutput = DescribeStackResourcesOutput & __MetadataBearer;
export declare class DescribeStackResourcesCommand extends $Command<DescribeStackResourcesCommandInput, DescribeStackResourcesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackResourcesCommandInput;
    constructor(input: DescribeStackResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackResourcesCommandInput, DescribeStackResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
