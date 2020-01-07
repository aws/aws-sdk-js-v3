import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopLabelingJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopLabelingJobCommandInput = StopLabelingJobRequest;
export declare type StopLabelingJobCommandOutput = __MetadataBearer;
export declare class StopLabelingJobCommand extends $Command<StopLabelingJobCommandInput, StopLabelingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopLabelingJobCommandInput;
    constructor(input: StopLabelingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopLabelingJobCommandInput, StopLabelingJobCommandOutput>;
    private serialize;
    private deserialize;
}
