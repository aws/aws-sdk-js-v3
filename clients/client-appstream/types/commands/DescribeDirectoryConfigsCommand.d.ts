import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeDirectoryConfigsRequest, DescribeDirectoryConfigsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectoryConfigsCommandInput = DescribeDirectoryConfigsRequest;
export declare type DescribeDirectoryConfigsCommandOutput = DescribeDirectoryConfigsResult & __MetadataBearer;
export declare class DescribeDirectoryConfigsCommand extends $Command<DescribeDirectoryConfigsCommandInput, DescribeDirectoryConfigsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeDirectoryConfigsCommandInput;
    constructor(input: DescribeDirectoryConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectoryConfigsCommandInput, DescribeDirectoryConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
