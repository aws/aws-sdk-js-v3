import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentManagedActionHistoryRequest, DescribeEnvironmentManagedActionHistoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentManagedActionHistoryCommandInput = DescribeEnvironmentManagedActionHistoryRequest;
export declare type DescribeEnvironmentManagedActionHistoryCommandOutput = DescribeEnvironmentManagedActionHistoryResult & __MetadataBearer;
export declare class DescribeEnvironmentManagedActionHistoryCommand extends $Command<DescribeEnvironmentManagedActionHistoryCommandInput, DescribeEnvironmentManagedActionHistoryCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeEnvironmentManagedActionHistoryCommandInput;
    constructor(input: DescribeEnvironmentManagedActionHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentManagedActionHistoryCommandInput, DescribeEnvironmentManagedActionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
