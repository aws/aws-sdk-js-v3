import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DescribeKeyRequest, DescribeKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeKeyCommandInput = DescribeKeyRequest;
export declare type DescribeKeyCommandOutput = DescribeKeyResponse & __MetadataBearer;
export declare class DescribeKeyCommand extends $Command<DescribeKeyCommandInput, DescribeKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: DescribeKeyCommandInput;
    constructor(input: DescribeKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeKeyCommandInput, DescribeKeyCommandOutput>;
    private serialize;
    private deserialize;
}
