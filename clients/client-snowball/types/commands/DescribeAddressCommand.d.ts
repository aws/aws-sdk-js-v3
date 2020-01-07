import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeAddressRequest, DescribeAddressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAddressCommandInput = DescribeAddressRequest;
export declare type DescribeAddressCommandOutput = DescribeAddressResult & __MetadataBearer;
export declare class DescribeAddressCommand extends $Command<DescribeAddressCommandInput, DescribeAddressCommandOutput, SnowballClientResolvedConfig> {
    readonly input: DescribeAddressCommandInput;
    constructor(input: DescribeAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddressCommandInput, DescribeAddressCommandOutput>;
    private serialize;
    private deserialize;
}
