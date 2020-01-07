import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeTaskExecutionRequest, DescribeTaskExecutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTaskExecutionCommandInput = DescribeTaskExecutionRequest;
export declare type DescribeTaskExecutionCommandOutput = DescribeTaskExecutionResponse & __MetadataBearer;
export declare class DescribeTaskExecutionCommand extends $Command<DescribeTaskExecutionCommandInput, DescribeTaskExecutionCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeTaskExecutionCommandInput;
    constructor(input: DescribeTaskExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTaskExecutionCommandInput, DescribeTaskExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
