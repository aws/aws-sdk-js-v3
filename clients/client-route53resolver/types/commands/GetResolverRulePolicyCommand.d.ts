import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverRulePolicyRequest, GetResolverRulePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResolverRulePolicyCommandInput = GetResolverRulePolicyRequest;
export declare type GetResolverRulePolicyCommandOutput = GetResolverRulePolicyResponse & __MetadataBearer;
export declare class GetResolverRulePolicyCommand extends $Command<GetResolverRulePolicyCommandInput, GetResolverRulePolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverRulePolicyCommandInput;
    constructor(input: GetResolverRulePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverRulePolicyCommandInput, GetResolverRulePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
