import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExpressionsCommandInput = DescribeExpressionsRequest;
export declare type DescribeExpressionsCommandOutput = DescribeExpressionsResponse & __MetadataBearer;
export declare class DescribeExpressionsCommand extends $Command<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeExpressionsCommandInput;
    constructor(input: DescribeExpressionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput>;
    private serialize;
    private deserialize;
}
