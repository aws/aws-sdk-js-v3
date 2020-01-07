import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverRuleRequest, GetResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResolverRuleCommandInput = GetResolverRuleRequest;
export declare type GetResolverRuleCommandOutput = GetResolverRuleResponse & __MetadataBearer;
export declare class GetResolverRuleCommand extends $Command<GetResolverRuleCommandInput, GetResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverRuleCommandInput;
    constructor(input: GetResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverRuleCommandInput, GetResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
