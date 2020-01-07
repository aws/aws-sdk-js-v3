import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverRuleRequest, DeleteResolverRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResolverRuleCommandInput = DeleteResolverRuleRequest;
export declare type DeleteResolverRuleCommandOutput = DeleteResolverRuleResponse & __MetadataBearer;
export declare class DeleteResolverRuleCommand extends $Command<DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteResolverRuleCommandInput;
    constructor(input: DeleteResolverRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput>;
    private serialize;
    private deserialize;
}
