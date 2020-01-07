import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeSessionsRequest, DescribeSessionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSessionsCommandInput = DescribeSessionsRequest;
export declare type DescribeSessionsCommandOutput = DescribeSessionsResult & __MetadataBearer;
export declare class DescribeSessionsCommand extends $Command<DescribeSessionsCommandInput, DescribeSessionsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeSessionsCommandInput;
    constructor(input: DescribeSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSessionsCommandInput, DescribeSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
