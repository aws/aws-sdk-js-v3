import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DetachLoadBalancerFromSubnetsInput, DetachLoadBalancerFromSubnetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachLoadBalancerFromSubnetsCommandInput = DetachLoadBalancerFromSubnetsInput;
export declare type DetachLoadBalancerFromSubnetsCommandOutput = DetachLoadBalancerFromSubnetsOutput & __MetadataBearer;
export declare class DetachLoadBalancerFromSubnetsCommand extends $Command<DetachLoadBalancerFromSubnetsCommandInput, DetachLoadBalancerFromSubnetsCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DetachLoadBalancerFromSubnetsCommandInput;
    constructor(input: DetachLoadBalancerFromSubnetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachLoadBalancerFromSubnetsCommandInput, DetachLoadBalancerFromSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
