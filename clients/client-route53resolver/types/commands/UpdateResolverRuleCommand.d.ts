import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResolverRuleCommandInput = UpdateResolverRuleRequest;
export declare type UpdateResolverRuleCommandOutput = UpdateResolverRuleResponse & __MetadataBearer;
export declare class UpdateResolverRuleCommand extends $Command<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateResolverRuleCommandInput;
    constructor(input: UpdateResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
