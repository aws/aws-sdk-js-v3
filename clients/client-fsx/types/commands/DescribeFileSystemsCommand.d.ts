import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFileSystemsCommandInput = DescribeFileSystemsRequest;
export declare type DescribeFileSystemsCommandOutput = DescribeFileSystemsResponse & __MetadataBearer;
export declare class DescribeFileSystemsCommand extends $Command<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput, FSxClientResolvedConfig> {
    readonly input: DescribeFileSystemsCommandInput;
    constructor(input: DescribeFileSystemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput>;
    private serialize;
    private deserialize;
}
