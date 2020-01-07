import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogEventsRequest, GetLogEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLogEventsCommandInput = GetLogEventsRequest;
export declare type GetLogEventsCommandOutput = GetLogEventsResponse & __MetadataBearer;
export declare class GetLogEventsCommand extends $Command<GetLogEventsCommandInput, GetLogEventsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetLogEventsCommandInput;
    constructor(input: GetLogEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogEventsCommandInput, GetLogEventsCommandOutput>;
    private serialize;
    private deserialize;
}
