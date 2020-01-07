import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeExportTasksRequest, DescribeExportTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExportTasksCommandInput = DescribeExportTasksRequest;
export declare type DescribeExportTasksCommandOutput = DescribeExportTasksResponse & __MetadataBearer;
export declare class DescribeExportTasksCommand extends $Command<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeExportTasksCommandInput;
    constructor(input: DescribeExportTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput>;
    private serialize;
    private deserialize;
}
