import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { ListLogPatternsRequest, ListLogPatternsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLogPatternsCommandInput = ListLogPatternsRequest;
export declare type ListLogPatternsCommandOutput = ListLogPatternsResponse & __MetadataBearer;
export declare class ListLogPatternsCommand extends $Command<ListLogPatternsCommandInput, ListLogPatternsCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: ListLogPatternsCommandInput;
    constructor(input: ListLogPatternsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLogPatternsCommandInput, ListLogPatternsCommandOutput>;
    private serialize;
    private deserialize;
}
