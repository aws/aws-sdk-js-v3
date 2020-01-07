import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { ListDomainNamesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDomainNamesCommandInput = {};
export declare type ListDomainNamesCommandOutput = ListDomainNamesResponse & __MetadataBearer;
export declare class ListDomainNamesCommand extends $Command<ListDomainNamesCommandInput, ListDomainNamesCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: ListDomainNamesCommandInput;
    constructor(input: ListDomainNamesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainNamesCommandInput, ListDomainNamesCommandOutput>;
    private serialize;
    private deserialize;
}
