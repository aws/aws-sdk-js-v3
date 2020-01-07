import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResolverRulesCommandInput = ListResolverRulesRequest;
export declare type ListResolverRulesCommandOutput = ListResolverRulesResponse & __MetadataBearer;
export declare class ListResolverRulesCommand extends $Command<ListResolverRulesCommandInput, ListResolverRulesCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverRulesCommandInput;
    constructor(input: ListResolverRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverRulesCommandInput, ListResolverRulesCommandOutput>;
    private serialize;
    private deserialize;
}
