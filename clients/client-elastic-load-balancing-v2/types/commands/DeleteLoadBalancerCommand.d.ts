import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DeleteLoadBalancerInput, DeleteLoadBalancerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLoadBalancerCommandInput = DeleteLoadBalancerInput;
export declare type DeleteLoadBalancerCommandOutput = DeleteLoadBalancerOutput & __MetadataBearer;
export declare class DeleteLoadBalancerCommand extends $Command<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DeleteLoadBalancerCommandInput;
    constructor(input: DeleteLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
