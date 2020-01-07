import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { DescribeEnvironmentsRequest, DescribeEnvironmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEnvironmentsCommandInput = DescribeEnvironmentsRequest;
export declare type DescribeEnvironmentsCommandOutput = DescribeEnvironmentsResult & __MetadataBearer;
export declare class DescribeEnvironmentsCommand extends $Command<DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: DescribeEnvironmentsCommandInput;
    constructor(input: DescribeEnvironmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
