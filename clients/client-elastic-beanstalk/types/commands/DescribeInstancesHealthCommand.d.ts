import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeInstancesHealthRequest, DescribeInstancesHealthResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancesHealthCommandInput = DescribeInstancesHealthRequest;
export declare type DescribeInstancesHealthCommandOutput = DescribeInstancesHealthResult & __MetadataBearer;
export declare class DescribeInstancesHealthCommand extends $Command<DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeInstancesHealthCommandInput;
    constructor(input: DescribeInstancesHealthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput>;
    private serialize;
    private deserialize;
}
