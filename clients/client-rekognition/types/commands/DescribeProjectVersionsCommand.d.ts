import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeProjectVersionsRequest, DescribeProjectVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProjectVersionsCommandInput = DescribeProjectVersionsRequest;
export declare type DescribeProjectVersionsCommandOutput = DescribeProjectVersionsResponse & __MetadataBearer;
export declare class DescribeProjectVersionsCommand extends $Command<DescribeProjectVersionsCommandInput, DescribeProjectVersionsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeProjectVersionsCommandInput;
    constructor(input: DescribeProjectVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectVersionsCommandInput, DescribeProjectVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
