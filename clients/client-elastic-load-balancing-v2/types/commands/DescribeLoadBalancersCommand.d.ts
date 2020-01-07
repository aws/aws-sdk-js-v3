import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeLoadBalancersInput, DescribeLoadBalancersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancersCommandInput = DescribeLoadBalancersInput;
export declare type DescribeLoadBalancersCommandOutput = DescribeLoadBalancersOutput & __MetadataBearer;
export declare class DescribeLoadBalancersCommand extends $Command<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeLoadBalancersCommandInput;
    constructor(input: DescribeLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
