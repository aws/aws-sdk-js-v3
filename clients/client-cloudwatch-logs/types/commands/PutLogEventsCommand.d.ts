import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutLogEventsRequest, PutLogEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutLogEventsCommandInput = PutLogEventsRequest;
export declare type PutLogEventsCommandOutput = PutLogEventsResponse & __MetadataBearer;
export declare class PutLogEventsCommand extends $Command<PutLogEventsCommandInput, PutLogEventsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutLogEventsCommandInput;
    constructor(input: PutLogEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLogEventsCommandInput, PutLogEventsCommandOutput>;
    private serialize;
    private deserialize;
}
