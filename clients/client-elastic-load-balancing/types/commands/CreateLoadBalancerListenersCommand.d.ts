import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateLoadBalancerListenerInput, CreateLoadBalancerListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerListenersCommandInput = CreateLoadBalancerListenerInput;
export declare type CreateLoadBalancerListenersCommandOutput = CreateLoadBalancerListenerOutput & __MetadataBearer;
export declare class CreateLoadBalancerListenersCommand extends $Command<CreateLoadBalancerListenersCommandInput, CreateLoadBalancerListenersCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLoadBalancerListenersCommandInput;
    constructor(input: CreateLoadBalancerListenersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerListenersCommandInput, CreateLoadBalancerListenersCommandOutput>;
    private serialize;
    private deserialize;
}
