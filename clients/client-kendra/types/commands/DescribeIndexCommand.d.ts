import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { DescribeIndexRequest, DescribeIndexResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIndexCommandInput = DescribeIndexRequest;
export declare type DescribeIndexCommandOutput = DescribeIndexResponse & __MetadataBearer;
export declare class DescribeIndexCommand extends $Command<DescribeIndexCommandInput, DescribeIndexCommandOutput, kendraClientResolvedConfig> {
    readonly input: DescribeIndexCommandInput;
    constructor(input: DescribeIndexCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIndexCommandInput, DescribeIndexCommandOutput>;
    private serialize;
    private deserialize;
}
