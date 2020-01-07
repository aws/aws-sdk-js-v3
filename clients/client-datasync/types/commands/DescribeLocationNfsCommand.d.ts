import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationNfsRequest, DescribeLocationNfsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocationNfsCommandInput = DescribeLocationNfsRequest;
export declare type DescribeLocationNfsCommandOutput = DescribeLocationNfsResponse & __MetadataBearer;
export declare class DescribeLocationNfsCommand extends $Command<DescribeLocationNfsCommandInput, DescribeLocationNfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationNfsCommandInput;
    constructor(input: DescribeLocationNfsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationNfsCommandInput, DescribeLocationNfsCommandOutput>;
    private serialize;
    private deserialize;
}
