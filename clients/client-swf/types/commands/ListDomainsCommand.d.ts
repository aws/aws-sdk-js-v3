import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DomainInfos, ListDomainsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDomainsCommandInput = ListDomainsInput;
export declare type ListDomainsCommandOutput = DomainInfos & __MetadataBearer;
export declare class ListDomainsCommand extends $Command<ListDomainsCommandInput, ListDomainsCommandOutput, SWFClientResolvedConfig> {
    readonly input: ListDomainsCommandInput;
    constructor(input: ListDomainsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDomainsCommandInput, ListDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
