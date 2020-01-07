import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeSessionsRequest, DescribeSessionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSessionsCommandInput = DescribeSessionsRequest;
export declare type DescribeSessionsCommandOutput = DescribeSessionsResponse & __MetadataBearer;
export declare class DescribeSessionsCommand extends $Command<DescribeSessionsCommandInput, DescribeSessionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeSessionsCommandInput;
    constructor(input: DescribeSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSessionsCommandInput, DescribeSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
