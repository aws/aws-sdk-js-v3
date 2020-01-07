import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountLimitsCommandInput = DescribeAccountLimitsInput;
export declare type DescribeAccountLimitsCommandOutput = DescribeAccountLimitsOutput & __MetadataBearer;
export declare class DescribeAccountLimitsCommand extends $Command<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeAccountLimitsCommandInput;
    constructor(input: DescribeAccountLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
