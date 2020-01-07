import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutResolverRulePolicyRequest, PutResolverRulePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutResolverRulePolicyCommandInput = PutResolverRulePolicyRequest;
export declare type PutResolverRulePolicyCommandOutput = PutResolverRulePolicyResponse & __MetadataBearer;
export declare class PutResolverRulePolicyCommand extends $Command<PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: PutResolverRulePolicyCommandInput;
    constructor(input: PutResolverRulePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
