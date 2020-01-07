import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentHealthRequest, DescribeEnvironmentHealthResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentHealthCommandInput = DescribeEnvironmentHealthRequest;
export declare type DescribeEnvironmentHealthCommandOutput = DescribeEnvironmentHealthResult & __MetadataBearer;
export declare class DescribeEnvironmentHealthCommand extends $Command<DescribeEnvironmentHealthCommandInput, DescribeEnvironmentHealthCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeEnvironmentHealthCommandInput;
    constructor(input: DescribeEnvironmentHealthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentHealthCommandInput, DescribeEnvironmentHealthCommandOutput>;
    private serialize;
    private deserialize;
}
