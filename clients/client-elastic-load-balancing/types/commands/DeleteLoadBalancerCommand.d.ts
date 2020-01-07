import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DeleteAccessPointInput, DeleteAccessPointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerCommandInput = DeleteAccessPointInput;
export declare type DeleteLoadBalancerCommandOutput = DeleteAccessPointOutput & __MetadataBearer;
export declare class DeleteLoadBalancerCommand extends $Command<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DeleteLoadBalancerCommandInput;
    constructor(input: DeleteLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
