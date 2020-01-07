import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationVersionDescriptionsMessage, DescribeApplicationVersionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationVersionsCommandInput = DescribeApplicationVersionsMessage;
export declare type DescribeApplicationVersionsCommandOutput = ApplicationVersionDescriptionsMessage & __MetadataBearer;
export declare class DescribeApplicationVersionsCommand extends $Command<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeApplicationVersionsCommandInput;
    constructor(input: DescribeApplicationVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
