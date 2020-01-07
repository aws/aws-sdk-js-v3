import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentResourcesCommandInput = DescribeEnvironmentResourcesMessage;
export declare type DescribeEnvironmentResourcesCommandOutput = EnvironmentResourceDescriptionsMessage & __MetadataBearer;
export declare class DescribeEnvironmentResourcesCommand extends $Command<DescribeEnvironmentResourcesCommandInput, DescribeEnvironmentResourcesCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeEnvironmentResourcesCommandInput;
    constructor(input: DescribeEnvironmentResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentResourcesCommandInput, DescribeEnvironmentResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
