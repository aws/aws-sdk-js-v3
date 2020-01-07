import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { SetLoadBalancerPoliciesOfListenerInput, SetLoadBalancerPoliciesOfListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetLoadBalancerPoliciesOfListenerCommandInput = SetLoadBalancerPoliciesOfListenerInput;
export declare type SetLoadBalancerPoliciesOfListenerCommandOutput = SetLoadBalancerPoliciesOfListenerOutput & __MetadataBearer;
export declare class SetLoadBalancerPoliciesOfListenerCommand extends $Command<SetLoadBalancerPoliciesOfListenerCommandInput, SetLoadBalancerPoliciesOfListenerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: SetLoadBalancerPoliciesOfListenerCommandInput;
    constructor(input: SetLoadBalancerPoliciesOfListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBalancerPoliciesOfListenerCommandInput, SetLoadBalancerPoliciesOfListenerCommandOutput>;
    private serialize;
    private deserialize;
}
