import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentManagedActionsCommandInput = DescribeEnvironmentManagedActionsRequest;
export declare type DescribeEnvironmentManagedActionsCommandOutput = DescribeEnvironmentManagedActionsResult & __MetadataBearer;
export declare class DescribeEnvironmentManagedActionsCommand extends $Command<DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeEnvironmentManagedActionsCommandInput;
    constructor(input: DescribeEnvironmentManagedActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput>;
    private serialize;
    private deserialize;
}
