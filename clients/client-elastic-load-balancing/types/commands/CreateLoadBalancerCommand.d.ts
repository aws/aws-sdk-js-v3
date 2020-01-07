import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateAccessPointInput, CreateAccessPointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerCommandInput = CreateAccessPointInput;
export declare type CreateLoadBalancerCommandOutput = CreateAccessPointOutput & __MetadataBearer;
export declare class CreateLoadBalancerCommand extends $Command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLoadBalancerCommandInput;
    constructor(input: CreateLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
