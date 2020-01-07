import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { CreateRuleInput, CreateRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRuleCommandInput = CreateRuleInput;
export declare type CreateRuleCommandOutput = CreateRuleOutput & __MetadataBearer;
export declare class CreateRuleCommand extends $Command<CreateRuleCommandInput, CreateRuleCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: CreateRuleCommandInput;
    constructor(input: CreateRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRuleCommandInput, CreateRuleCommandOutput>;
    private serialize;
    private deserialize;
}
