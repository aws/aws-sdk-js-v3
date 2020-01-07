import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { ModifyRuleInput, ModifyRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyRuleCommandInput = ModifyRuleInput;
export declare type ModifyRuleCommandOutput = ModifyRuleOutput & __MetadataBearer;
export declare class ModifyRuleCommand extends $Command<ModifyRuleCommandInput, ModifyRuleCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: ModifyRuleCommandInput;
    constructor(input: ModifyRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyRuleCommandInput, ModifyRuleCommandOutput>;
    private serialize;
    private deserialize;
}
