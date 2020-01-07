import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverRuleAssociationsRequest, ListResolverRuleAssociationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResolverRuleAssociationsCommandInput = ListResolverRuleAssociationsRequest;
export declare type ListResolverRuleAssociationsCommandOutput = ListResolverRuleAssociationsResponse & __MetadataBearer;
export declare class ListResolverRuleAssociationsCommand extends $Command<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverRuleAssociationsCommandInput;
    constructor(input: ListResolverRuleAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
