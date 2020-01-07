import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConditionalForwardersCommandInput = DescribeConditionalForwardersRequest;
export declare type DescribeConditionalForwardersCommandOutput = DescribeConditionalForwardersResult & __MetadataBearer;
export declare class DescribeConditionalForwardersCommand extends $Command<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeConditionalForwardersCommandInput;
    constructor(input: DescribeConditionalForwardersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput>;
    private serialize;
    private deserialize;
}
