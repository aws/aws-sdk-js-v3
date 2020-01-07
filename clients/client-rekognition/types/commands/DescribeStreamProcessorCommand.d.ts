import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeStreamProcessorRequest, DescribeStreamProcessorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStreamProcessorCommandInput = DescribeStreamProcessorRequest;
export declare type DescribeStreamProcessorCommandOutput = DescribeStreamProcessorResponse & __MetadataBearer;
export declare class DescribeStreamProcessorCommand extends $Command<DescribeStreamProcessorCommandInput, DescribeStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeStreamProcessorCommandInput;
    constructor(input: DescribeStreamProcessorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStreamProcessorCommandInput, DescribeStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
