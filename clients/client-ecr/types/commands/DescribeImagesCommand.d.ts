import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImagesRequest, DescribeImagesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImagesCommandInput = DescribeImagesRequest;
export declare type DescribeImagesCommandOutput = DescribeImagesResponse & __MetadataBearer;
export declare class DescribeImagesCommand extends $Command<DescribeImagesCommandInput, DescribeImagesCommandOutput, ECRClientResolvedConfig> {
    readonly input: DescribeImagesCommandInput;
    constructor(input: DescribeImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput>;
    private serialize;
    private deserialize;
}
