import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DeleteLoadBalancerListenerInput, DeleteLoadBalancerListenerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerListenersCommandInput = DeleteLoadBalancerListenerInput;
export declare type DeleteLoadBalancerListenersCommandOutput = DeleteLoadBalancerListenerOutput & __MetadataBearer;
export declare class DeleteLoadBalancerListenersCommand extends $Command<DeleteLoadBalancerListenersCommandInput, DeleteLoadBalancerListenersCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DeleteLoadBalancerListenersCommandInput;
    constructor(input: DeleteLoadBalancerListenersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerListenersCommandInput, DeleteLoadBalancerListenersCommandOutput>;
    private serialize;
    private deserialize;
}
