import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerPolicyCommandInput = CreateLoadBalancerPolicyInput;
export declare type CreateLoadBalancerPolicyCommandOutput = CreateLoadBalancerPolicyOutput & __MetadataBearer;
export declare class CreateLoadBalancerPolicyCommand extends $Command<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLoadBalancerPolicyCommandInput;
    constructor(input: CreateLoadBalancerPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
