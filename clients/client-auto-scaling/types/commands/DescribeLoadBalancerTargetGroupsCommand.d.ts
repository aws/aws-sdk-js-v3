import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLoadBalancerTargetGroupsRequest, DescribeLoadBalancerTargetGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancerTargetGroupsCommandInput = DescribeLoadBalancerTargetGroupsRequest;
export declare type DescribeLoadBalancerTargetGroupsCommandOutput = DescribeLoadBalancerTargetGroupsResponse & __MetadataBearer;
export declare class DescribeLoadBalancerTargetGroupsCommand extends $Command<DescribeLoadBalancerTargetGroupsCommandInput, DescribeLoadBalancerTargetGroupsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeLoadBalancerTargetGroupsCommandInput;
    constructor(input: DescribeLoadBalancerTargetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancerTargetGroupsCommandInput, DescribeLoadBalancerTargetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
