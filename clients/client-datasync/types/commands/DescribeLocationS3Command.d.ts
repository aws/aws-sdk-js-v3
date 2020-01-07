import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationS3Request, DescribeLocationS3Response } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocationS3CommandInput = DescribeLocationS3Request;
export declare type DescribeLocationS3CommandOutput = DescribeLocationS3Response & __MetadataBearer;
export declare class DescribeLocationS3Command extends $Command<DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationS3CommandInput;
    constructor(input: DescribeLocationS3CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput>;
    private serialize;
    private deserialize;
}
