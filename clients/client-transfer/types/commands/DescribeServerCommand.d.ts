import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeServerRequest, DescribeServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServerCommandInput = DescribeServerRequest;
export declare type DescribeServerCommandOutput = DescribeServerResponse & __MetadataBearer;
export declare class DescribeServerCommand extends $Command<DescribeServerCommandInput, DescribeServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: DescribeServerCommandInput;
    constructor(input: DescribeServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServerCommandInput, DescribeServerCommandOutput>;
    private serialize;
    private deserialize;
}
