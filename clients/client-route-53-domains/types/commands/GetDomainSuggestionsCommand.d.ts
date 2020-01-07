import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDomainSuggestionsCommandInput = GetDomainSuggestionsRequest;
export declare type GetDomainSuggestionsCommandOutput = GetDomainSuggestionsResponse & __MetadataBearer;
export declare class GetDomainSuggestionsCommand extends $Command<GetDomainSuggestionsCommandInput, GetDomainSuggestionsCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetDomainSuggestionsCommandInput;
    constructor(input: GetDomainSuggestionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainSuggestionsCommandInput, GetDomainSuggestionsCommandOutput>;
    private serialize;
    private deserialize;
}
