import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { CreateLoadBalancerInput, CreateLoadBalancerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLoadBalancerCommandInput = CreateLoadBalancerInput;
export declare type CreateLoadBalancerCommandOutput = CreateLoadBalancerOutput & __MetadataBearer;
export declare class CreateLoadBalancerCommand extends $Command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: CreateLoadBalancerCommandInput;
    constructor(input: CreateLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
