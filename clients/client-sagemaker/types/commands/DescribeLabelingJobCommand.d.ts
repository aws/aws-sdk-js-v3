import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeLabelingJobRequest, DescribeLabelingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLabelingJobCommandInput = DescribeLabelingJobRequest;
export declare type DescribeLabelingJobCommandOutput = DescribeLabelingJobResponse & __MetadataBearer;
export declare class DescribeLabelingJobCommand extends $Command<DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeLabelingJobCommandInput;
    constructor(input: DescribeLabelingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput>;
    private serialize;
    private deserialize;
}
