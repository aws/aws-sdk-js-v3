import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeEndPointStateInput, DescribeEndPointStateOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceHealthCommandInput = DescribeEndPointStateInput;
export declare type DescribeInstanceHealthCommandOutput = DescribeEndPointStateOutput & __MetadataBearer;
export declare class DescribeInstanceHealthCommand extends $Command<DescribeInstanceHealthCommandInput, DescribeInstanceHealthCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeInstanceHealthCommandInput;
    constructor(input: DescribeInstanceHealthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceHealthCommandInput, DescribeInstanceHealthCommandOutput>;
    private serialize;
    private deserialize;
}
