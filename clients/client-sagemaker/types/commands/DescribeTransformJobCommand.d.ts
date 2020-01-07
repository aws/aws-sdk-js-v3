import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTransformJobRequest, DescribeTransformJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransformJobCommandInput = DescribeTransformJobRequest;
export declare type DescribeTransformJobCommandOutput = DescribeTransformJobResponse & __MetadataBearer;
export declare class DescribeTransformJobCommand extends $Command<DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTransformJobCommandInput;
    constructor(input: DescribeTransformJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput>;
    private serialize;
    private deserialize;
}
