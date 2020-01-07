import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLogStreamsCommandInput = DescribeLogStreamsRequest;
export declare type DescribeLogStreamsCommandOutput = DescribeLogStreamsResponse & __MetadataBearer;
export declare class DescribeLogStreamsCommand extends $Command<DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeLogStreamsCommandInput;
    constructor(input: DescribeLogStreamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
