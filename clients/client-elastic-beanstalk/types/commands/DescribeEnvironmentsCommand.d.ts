import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentsCommandInput = DescribeEnvironmentsMessage;
export declare type DescribeEnvironmentsCommandOutput = EnvironmentDescriptionsMessage & __MetadataBearer;
export declare class DescribeEnvironmentsCommand extends $Command<DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeEnvironmentsCommandInput;
    constructor(input: DescribeEnvironmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
