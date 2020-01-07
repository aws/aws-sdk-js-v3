import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeProjectsRequest, DescribeProjectsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProjectsCommandInput = DescribeProjectsRequest;
export declare type DescribeProjectsCommandOutput = DescribeProjectsResponse & __MetadataBearer;
export declare class DescribeProjectsCommand extends $Command<DescribeProjectsCommandInput, DescribeProjectsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeProjectsCommandInput;
    constructor(input: DescribeProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProjectsCommandInput, DescribeProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
