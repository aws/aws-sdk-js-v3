import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { DescribeTargetGroupsInput, DescribeTargetGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTargetGroupsCommandInput = DescribeTargetGroupsInput;
export declare type DescribeTargetGroupsCommandOutput = DescribeTargetGroupsOutput & __MetadataBearer;
export declare class DescribeTargetGroupsCommand extends $Command<DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: DescribeTargetGroupsCommandInput;
    constructor(input: DescribeTargetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTargetGroupsCommandInput, DescribeTargetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
