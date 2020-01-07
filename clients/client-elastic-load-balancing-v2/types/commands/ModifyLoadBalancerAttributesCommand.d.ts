import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyLoadBalancerAttributesCommandInput = ModifyLoadBalancerAttributesInput;
export declare type ModifyLoadBalancerAttributesCommandOutput = ModifyLoadBalancerAttributesOutput & __MetadataBearer;
export declare class ModifyLoadBalancerAttributesCommand extends $Command<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: ModifyLoadBalancerAttributesCommandInput;
    constructor(input: ModifyLoadBalancerAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
