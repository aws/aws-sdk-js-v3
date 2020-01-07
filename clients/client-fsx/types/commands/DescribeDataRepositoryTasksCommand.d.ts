import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDataRepositoryTasksCommandInput = DescribeDataRepositoryTasksRequest;
export declare type DescribeDataRepositoryTasksCommandOutput = DescribeDataRepositoryTasksResponse & __MetadataBearer;
export declare class DescribeDataRepositoryTasksCommand extends $Command<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput, FSxClientResolvedConfig> {
    readonly input: DescribeDataRepositoryTasksCommandInput;
    constructor(input: DescribeDataRepositoryTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput>;
    private serialize;
    private deserialize;
}
