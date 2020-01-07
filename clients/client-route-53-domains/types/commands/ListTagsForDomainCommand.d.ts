import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListTagsForDomainRequest, ListTagsForDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForDomainCommandInput = ListTagsForDomainRequest;
export declare type ListTagsForDomainCommandOutput = ListTagsForDomainResponse & __MetadataBearer;
export declare class ListTagsForDomainCommand extends $Command<ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ListTagsForDomainCommandInput;
    constructor(input: ListTagsForDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
