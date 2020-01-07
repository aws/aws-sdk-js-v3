import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocationEfsCommandInput = DescribeLocationEfsRequest;
export declare type DescribeLocationEfsCommandOutput = DescribeLocationEfsResponse & __MetadataBearer;
export declare class DescribeLocationEfsCommand extends $Command<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationEfsCommandInput;
    constructor(input: DescribeLocationEfsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput>;
    private serialize;
    private deserialize;
}
