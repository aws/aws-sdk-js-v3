import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogRecordRequest, GetLogRecordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLogRecordCommandInput = GetLogRecordRequest;
export declare type GetLogRecordCommandOutput = GetLogRecordResponse & __MetadataBearer;
export declare class GetLogRecordCommand extends $Command<GetLogRecordCommandInput, GetLogRecordCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetLogRecordCommandInput;
    constructor(input: GetLogRecordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogRecordCommandInput, GetLogRecordCommandOutput>;
    private serialize;
    private deserialize;
}
