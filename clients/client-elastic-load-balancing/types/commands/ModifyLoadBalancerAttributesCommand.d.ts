import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyLoadBalancerAttributesCommandInput = ModifyLoadBalancerAttributesInput;
export declare type ModifyLoadBalancerAttributesCommandOutput = ModifyLoadBalancerAttributesOutput & __MetadataBearer;
export declare class ModifyLoadBalancerAttributesCommand extends $Command<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: ModifyLoadBalancerAttributesCommandInput;
    constructor(input: ModifyLoadBalancerAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
