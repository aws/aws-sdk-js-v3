import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetQueryResultsRequest, GetQueryResultsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueryResultsCommandInput = GetQueryResultsRequest;
export declare type GetQueryResultsCommandOutput = GetQueryResultsResponse & __MetadataBearer;
export declare class GetQueryResultsCommand extends $Command<GetQueryResultsCommandInput, GetQueryResultsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetQueryResultsCommandInput;
    constructor(input: GetQueryResultsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput>;
    private serialize;
    private deserialize;
}
