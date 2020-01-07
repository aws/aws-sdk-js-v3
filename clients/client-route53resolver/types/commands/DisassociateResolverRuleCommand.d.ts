import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateResolverRuleCommandInput = DisassociateResolverRuleRequest;
export declare type DisassociateResolverRuleCommandOutput = DisassociateResolverRuleResponse & __MetadataBearer;
export declare class DisassociateResolverRuleCommand extends $Command<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DisassociateResolverRuleCommandInput;
    constructor(input: DisassociateResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
