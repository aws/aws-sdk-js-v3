import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { ListConfigurationHistoryRequest, ListConfigurationHistoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConfigurationHistoryCommandInput = ListConfigurationHistoryRequest;
export declare type ListConfigurationHistoryCommandOutput = ListConfigurationHistoryResponse & __MetadataBearer;
export declare class ListConfigurationHistoryCommand extends $Command<ListConfigurationHistoryCommandInput, ListConfigurationHistoryCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: ListConfigurationHistoryCommandInput;
    constructor(input: ListConfigurationHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationHistoryCommandInput, ListConfigurationHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
