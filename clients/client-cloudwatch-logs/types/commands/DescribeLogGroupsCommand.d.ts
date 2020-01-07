import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeLogGroupsRequest, DescribeLogGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLogGroupsCommandInput = DescribeLogGroupsRequest;
export declare type DescribeLogGroupsCommandOutput = DescribeLogGroupsResponse & __MetadataBearer;
export declare class DescribeLogGroupsCommand extends $Command<DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeLogGroupsCommandInput;
    constructor(input: DescribeLogGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
