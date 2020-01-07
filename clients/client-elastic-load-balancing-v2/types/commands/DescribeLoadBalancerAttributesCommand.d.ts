import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancerAttributesCommandInput = DescribeLoadBalancerAttributesInput;
export declare type DescribeLoadBalancerAttributesCommandOutput = DescribeLoadBalancerAttributesOutput & __MetadataBearer;
export declare class DescribeLoadBalancerAttributesCommand extends $Command<DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeLoadBalancerAttributesCommandInput;
    constructor(input: DescribeLoadBalancerAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
