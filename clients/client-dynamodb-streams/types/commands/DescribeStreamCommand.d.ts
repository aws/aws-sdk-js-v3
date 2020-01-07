import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { DescribeStreamInput, DescribeStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStreamCommandInput = DescribeStreamInput;
export declare type DescribeStreamCommandOutput = DescribeStreamOutput & __MetadataBearer;
export declare class DescribeStreamCommand extends $Command<DescribeStreamCommandInput, DescribeStreamCommandOutput, DynamoDBStreamsClientResolvedConfig> {
    readonly input: DescribeStreamCommandInput;
    constructor(input: DescribeStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBStreamsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStreamCommandInput, DescribeStreamCommandOutput>;
    private serialize;
    private deserialize;
}
