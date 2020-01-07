import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DeleteRuleInput, DeleteRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRuleCommandInput = DeleteRuleInput;
export declare type DeleteRuleCommandOutput = DeleteRuleOutput & __MetadataBearer;
export declare class DeleteRuleCommand extends $Command<DeleteRuleCommandInput, DeleteRuleCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DeleteRuleCommandInput;
    constructor(input: DeleteRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput>;
    private serialize;
    private deserialize;
}
