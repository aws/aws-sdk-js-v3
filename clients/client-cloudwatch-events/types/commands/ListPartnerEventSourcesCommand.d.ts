import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPartnerEventSourcesCommandInput = ListPartnerEventSourcesRequest;
export declare type ListPartnerEventSourcesCommandOutput = ListPartnerEventSourcesResponse & __MetadataBearer;
export declare class ListPartnerEventSourcesCommand extends $Command<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ListPartnerEventSourcesCommandInput;
    constructor(input: ListPartnerEventSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
