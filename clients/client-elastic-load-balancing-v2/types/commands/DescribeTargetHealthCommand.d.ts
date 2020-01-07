import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeTargetHealthInput, DescribeTargetHealthOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTargetHealthCommandInput = DescribeTargetHealthInput;
export declare type DescribeTargetHealthCommandOutput = DescribeTargetHealthOutput & __MetadataBearer;
export declare class DescribeTargetHealthCommand extends $Command<DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeTargetHealthCommandInput;
    constructor(input: DescribeTargetHealthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput>;
    private serialize;
    private deserialize;
}
