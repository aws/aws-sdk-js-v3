import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeQueriesRequest, DescribeQueriesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeQueriesCommandInput = DescribeQueriesRequest;
export declare type DescribeQueriesCommandOutput = DescribeQueriesResponse & __MetadataBearer;
export declare class DescribeQueriesCommand extends $Command<DescribeQueriesCommandInput, DescribeQueriesCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeQueriesCommandInput;
    constructor(input: DescribeQueriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeQueriesCommandInput, DescribeQueriesCommandOutput>;
    private serialize;
    private deserialize;
}
