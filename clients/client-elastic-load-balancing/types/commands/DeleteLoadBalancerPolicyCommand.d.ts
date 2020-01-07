import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerPolicyCommandInput = DeleteLoadBalancerPolicyInput;
export declare type DeleteLoadBalancerPolicyCommandOutput = DeleteLoadBalancerPolicyOutput & __MetadataBearer;
export declare class DeleteLoadBalancerPolicyCommand extends $Command<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DeleteLoadBalancerPolicyCommandInput;
    constructor(input: DeleteLoadBalancerPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
