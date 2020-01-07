import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImportTasksCommandInput = DescribeImportTasksRequest;
export declare type DescribeImportTasksCommandOutput = DescribeImportTasksResponse & __MetadataBearer;
export declare class DescribeImportTasksCommand extends $Command<DescribeImportTasksCommandInput, DescribeImportTasksCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeImportTasksCommandInput;
    constructor(input: DescribeImportTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImportTasksCommandInput, DescribeImportTasksCommandOutput>;
    private serialize;
    private deserialize;
}
