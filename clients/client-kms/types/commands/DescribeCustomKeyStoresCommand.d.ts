import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DescribeCustomKeyStoresRequest, DescribeCustomKeyStoresResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCustomKeyStoresCommandInput = DescribeCustomKeyStoresRequest;
export declare type DescribeCustomKeyStoresCommandOutput = DescribeCustomKeyStoresResponse & __MetadataBearer;
export declare class DescribeCustomKeyStoresCommand extends $Command<DescribeCustomKeyStoresCommandInput, DescribeCustomKeyStoresCommandOutput, KMSClientResolvedConfig> {
    readonly input: DescribeCustomKeyStoresCommandInput;
    constructor(input: DescribeCustomKeyStoresCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomKeyStoresCommandInput, DescribeCustomKeyStoresCommandOutput>;
    private serialize;
    private deserialize;
}
