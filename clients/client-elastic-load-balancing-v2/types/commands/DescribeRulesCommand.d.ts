import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeRulesInput, DescribeRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRulesCommandInput = DescribeRulesInput;
export declare type DescribeRulesCommandOutput = DescribeRulesOutput & __MetadataBearer;
export declare class DescribeRulesCommand extends $Command<DescribeRulesCommandInput, DescribeRulesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeRulesCommandInput;
    constructor(input: DescribeRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRulesCommandInput, DescribeRulesCommandOutput>;
    private serialize;
    private deserialize;
}
