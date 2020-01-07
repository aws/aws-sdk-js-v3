import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeProcessingJobRequest, DescribeProcessingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProcessingJobCommandInput = DescribeProcessingJobRequest;
export declare type DescribeProcessingJobCommandOutput = DescribeProcessingJobResponse & __MetadataBearer;
export declare class DescribeProcessingJobCommand extends $Command<DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeProcessingJobCommandInput;
    constructor(input: DescribeProcessingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput>;
    private serialize;
    private deserialize;
}
