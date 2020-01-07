import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { SetRulePrioritiesInput, SetRulePrioritiesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetRulePrioritiesCommandInput = SetRulePrioritiesInput;
export declare type SetRulePrioritiesCommandOutput = SetRulePrioritiesOutput & __MetadataBearer;
export declare class SetRulePrioritiesCommand extends $Command<SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: SetRulePrioritiesCommandInput;
    constructor(input: SetRulePrioritiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput>;
    private serialize;
    private deserialize;
}
