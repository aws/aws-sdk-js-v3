import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { ListComponentsRequest, ListComponentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListComponentsCommandInput = ListComponentsRequest;
export declare type ListComponentsCommandOutput = ListComponentsResponse & __MetadataBearer;
export declare class ListComponentsCommand extends $Command<ListComponentsCommandInput, ListComponentsCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: ListComponentsCommandInput;
    constructor(input: ListComponentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComponentsCommandInput, ListComponentsCommandOutput>;
    private serialize;
    private deserialize;
}
