import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeTargetGroupAttributesInput, DescribeTargetGroupAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTargetGroupAttributesCommandInput = DescribeTargetGroupAttributesInput;
export declare type DescribeTargetGroupAttributesCommandOutput = DescribeTargetGroupAttributesOutput & __MetadataBearer;
export declare class DescribeTargetGroupAttributesCommand extends $Command<DescribeTargetGroupAttributesCommandInput, DescribeTargetGroupAttributesCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeTargetGroupAttributesCommandInput;
    constructor(input: DescribeTargetGroupAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTargetGroupAttributesCommandInput, DescribeTargetGroupAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
