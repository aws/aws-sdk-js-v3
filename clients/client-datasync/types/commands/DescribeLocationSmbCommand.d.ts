import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationSmbRequest, DescribeLocationSmbResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocationSmbCommandInput = DescribeLocationSmbRequest;
export declare type DescribeLocationSmbCommandOutput = DescribeLocationSmbResponse & __MetadataBearer;
export declare class DescribeLocationSmbCommand extends $Command<DescribeLocationSmbCommandInput, DescribeLocationSmbCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationSmbCommandInput;
    constructor(input: DescribeLocationSmbCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationSmbCommandInput, DescribeLocationSmbCommandOutput>;
    private serialize;
    private deserialize;
}
