import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeTaskRequest, DescribeTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTaskCommandInput = DescribeTaskRequest;
export declare type DescribeTaskCommandOutput = DescribeTaskResponse & __MetadataBearer;
export declare class DescribeTaskCommand extends $Command<DescribeTaskCommandInput, DescribeTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeTaskCommandInput;
    constructor(input: DescribeTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTaskCommandInput, DescribeTaskCommandOutput>;
    private serialize;
    private deserialize;
}
