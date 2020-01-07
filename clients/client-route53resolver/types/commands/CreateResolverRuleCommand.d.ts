import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverRuleRequest, CreateResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResolverRuleCommandInput = CreateResolverRuleRequest;
export declare type CreateResolverRuleCommandOutput = CreateResolverRuleResponse & __MetadataBearer;
export declare class CreateResolverRuleCommand extends $Command<CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: CreateResolverRuleCommandInput;
    constructor(input: CreateResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
