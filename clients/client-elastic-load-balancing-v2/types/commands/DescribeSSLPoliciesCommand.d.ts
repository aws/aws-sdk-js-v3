import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSSLPoliciesCommandInput = DescribeSSLPoliciesInput;
export declare type DescribeSSLPoliciesCommandOutput = DescribeSSLPoliciesOutput & __MetadataBearer;
export declare class DescribeSSLPoliciesCommand extends $Command<DescribeSSLPoliciesCommandInput, DescribeSSLPoliciesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeSSLPoliciesCommandInput;
    constructor(input: DescribeSSLPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSSLPoliciesCommandInput, DescribeSSLPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
