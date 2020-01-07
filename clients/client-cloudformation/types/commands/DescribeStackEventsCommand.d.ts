import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackEventsInput, DescribeStackEventsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackEventsCommandInput = DescribeStackEventsInput;
export declare type DescribeStackEventsCommandOutput = DescribeStackEventsOutput & __MetadataBearer;
export declare class DescribeStackEventsCommand extends $Command<DescribeStackEventsCommandInput, DescribeStackEventsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackEventsCommandInput;
    constructor(input: DescribeStackEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackEventsCommandInput, DescribeStackEventsCommandOutput>;
    private serialize;
    private deserialize;
}
