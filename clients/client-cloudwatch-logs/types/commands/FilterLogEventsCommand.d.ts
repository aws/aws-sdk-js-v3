import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { FilterLogEventsRequest, FilterLogEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type FilterLogEventsCommandInput = FilterLogEventsRequest;
export declare type FilterLogEventsCommandOutput = FilterLogEventsResponse & __MetadataBearer;
export declare class FilterLogEventsCommand extends $Command<FilterLogEventsCommandInput, FilterLogEventsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: FilterLogEventsCommandInput;
    constructor(input: FilterLogEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FilterLogEventsCommandInput, FilterLogEventsCommandOutput>;
    private serialize;
    private deserialize;
}
