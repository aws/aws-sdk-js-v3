import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancerPolicyTypesCommandInput = DescribeLoadBalancerPolicyTypesInput;
export declare type DescribeLoadBalancerPolicyTypesCommandOutput = DescribeLoadBalancerPolicyTypesOutput & __MetadataBearer;
export declare class DescribeLoadBalancerPolicyTypesCommand extends $Command<DescribeLoadBalancerPolicyTypesCommandInput, DescribeLoadBalancerPolicyTypesCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeLoadBalancerPolicyTypesCommandInput;
    constructor(input: DescribeLoadBalancerPolicyTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancerPolicyTypesCommandInput, DescribeLoadBalancerPolicyTypesCommandOutput>;
    private serialize;
    private deserialize;
}
