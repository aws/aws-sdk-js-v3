import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOpsItemsCommandInput = DescribeOpsItemsRequest;
export declare type DescribeOpsItemsCommandOutput = DescribeOpsItemsResponse & __MetadataBearer;
export declare class DescribeOpsItemsCommand extends $Command<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeOpsItemsCommandInput;
    constructor(input: DescribeOpsItemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput>;
    private serialize;
    private deserialize;
}
