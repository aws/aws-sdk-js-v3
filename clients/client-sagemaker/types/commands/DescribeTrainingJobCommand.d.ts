import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrainingJobRequest, DescribeTrainingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrainingJobCommandInput = DescribeTrainingJobRequest;
export declare type DescribeTrainingJobCommandOutput = DescribeTrainingJobResponse & __MetadataBearer;
export declare class DescribeTrainingJobCommand extends $Command<DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTrainingJobCommandInput;
    constructor(input: DescribeTrainingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
