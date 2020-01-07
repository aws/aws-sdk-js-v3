import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverRuleAssociationRequest, GetResolverRuleAssociationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResolverRuleAssociationCommandInput = GetResolverRuleAssociationRequest;
export declare type GetResolverRuleAssociationCommandOutput = GetResolverRuleAssociationResponse & __MetadataBearer;
export declare class GetResolverRuleAssociationCommand extends $Command<GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverRuleAssociationCommandInput;
    constructor(input: GetResolverRuleAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
