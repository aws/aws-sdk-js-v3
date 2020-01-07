import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListPartnerEventSourceAccountsRequest, ListPartnerEventSourceAccountsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPartnerEventSourceAccountsCommandInput = ListPartnerEventSourceAccountsRequest;
export declare type ListPartnerEventSourceAccountsCommandOutput = ListPartnerEventSourceAccountsResponse & __MetadataBearer;
export declare class ListPartnerEventSourceAccountsCommand extends $Command<ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ListPartnerEventSourceAccountsCommandInput;
    constructor(input: ListPartnerEventSourceAccountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
