import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStacksCommandInput = DescribeStacksRequest;
export declare type DescribeStacksCommandOutput = DescribeStacksResult & __MetadataBearer;
export declare class DescribeStacksCommand extends $Command<DescribeStacksCommandInput, DescribeStacksCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeStacksCommandInput;
    constructor(input: DescribeStacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStacksCommandInput, DescribeStacksCommandOutput>;
    private serialize;
    private deserialize;
}
