import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLoadBalancersRequest, DescribeLoadBalancersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancersCommandInput = DescribeLoadBalancersRequest;
export declare type DescribeLoadBalancersCommandOutput = DescribeLoadBalancersResponse & __MetadataBearer;
export declare class DescribeLoadBalancersCommand extends $Command<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeLoadBalancersCommandInput;
    constructor(input: DescribeLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
