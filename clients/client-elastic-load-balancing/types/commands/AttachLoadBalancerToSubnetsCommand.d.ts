import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { AttachLoadBalancerToSubnetsInput, AttachLoadBalancerToSubnetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachLoadBalancerToSubnetsCommandInput = AttachLoadBalancerToSubnetsInput;
export declare type AttachLoadBalancerToSubnetsCommandOutput = AttachLoadBalancerToSubnetsOutput & __MetadataBearer;
export declare class AttachLoadBalancerToSubnetsCommand extends $Command<AttachLoadBalancerToSubnetsCommandInput, AttachLoadBalancerToSubnetsCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: AttachLoadBalancerToSubnetsCommandInput;
    constructor(input: AttachLoadBalancerToSubnetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachLoadBalancerToSubnetsCommandInput, AttachLoadBalancerToSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
