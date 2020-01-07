import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeAccessPointsInput, DescribeAccessPointsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoadBalancersCommandInput = DescribeAccessPointsInput;
export declare type DescribeLoadBalancersCommandOutput = DescribeAccessPointsOutput & __MetadataBearer;
export declare class DescribeLoadBalancersCommand extends $Command<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeLoadBalancersCommandInput;
    constructor(input: DescribeLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
