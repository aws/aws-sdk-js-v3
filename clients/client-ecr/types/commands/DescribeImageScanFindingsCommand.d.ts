import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImageScanFindingsCommandInput = DescribeImageScanFindingsRequest;
export declare type DescribeImageScanFindingsCommandOutput = DescribeImageScanFindingsResponse & __MetadataBearer;
export declare class DescribeImageScanFindingsCommand extends $Command<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput, ECRClientResolvedConfig> {
    readonly input: DescribeImageScanFindingsCommandInput;
    constructor(input: DescribeImageScanFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
