import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationDescriptionsMessage, DescribeApplicationsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationsCommandInput = DescribeApplicationsMessage;
export declare type DescribeApplicationsCommandOutput = ApplicationDescriptionsMessage & __MetadataBearer;
export declare class DescribeApplicationsCommand extends $Command<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeApplicationsCommandInput;
    constructor(input: DescribeApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
