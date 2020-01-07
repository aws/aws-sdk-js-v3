import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeLoadBalancerPoliciesInput, DescribeLoadBalancerPoliciesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancerPoliciesCommandInput = DescribeLoadBalancerPoliciesInput;
export declare type DescribeLoadBalancerPoliciesCommandOutput = DescribeLoadBalancerPoliciesOutput & __MetadataBearer;
export declare class DescribeLoadBalancerPoliciesCommand extends $Command<DescribeLoadBalancerPoliciesCommandInput, DescribeLoadBalancerPoliciesCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeLoadBalancerPoliciesCommandInput;
    constructor(input: DescribeLoadBalancerPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancerPoliciesCommandInput, DescribeLoadBalancerPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
