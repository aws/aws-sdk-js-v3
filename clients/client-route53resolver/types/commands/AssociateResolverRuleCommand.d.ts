import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateResolverRuleRequest, AssociateResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateResolverRuleCommandInput = AssociateResolverRuleRequest;
export declare type AssociateResolverRuleCommandOutput = AssociateResolverRuleResponse & __MetadataBearer;
export declare class AssociateResolverRuleCommand extends $Command<AssociateResolverRuleCommandInput, AssociateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: AssociateResolverRuleCommandInput;
    constructor(input: AssociateResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateResolverRuleCommandInput, AssociateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
