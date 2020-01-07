import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopHyperParameterTuningJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopHyperParameterTuningJobCommandInput = StopHyperParameterTuningJobRequest;
export declare type StopHyperParameterTuningJobCommandOutput = __MetadataBearer;
export declare class StopHyperParameterTuningJobCommand extends $Command<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopHyperParameterTuningJobCommandInput;
    constructor(input: StopHyperParameterTuningJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
