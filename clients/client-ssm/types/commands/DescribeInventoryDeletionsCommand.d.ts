import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInventoryDeletionsCommandInput = DescribeInventoryDeletionsRequest;
export declare type DescribeInventoryDeletionsCommandOutput = DescribeInventoryDeletionsResult & __MetadataBearer;
export declare class DescribeInventoryDeletionsCommand extends $Command<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInventoryDeletionsCommandInput;
    constructor(input: DescribeInventoryDeletionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput>;
    private serialize;
    private deserialize;
}
