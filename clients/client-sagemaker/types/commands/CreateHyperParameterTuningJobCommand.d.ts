import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateHyperParameterTuningJobRequest, CreateHyperParameterTuningJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHyperParameterTuningJobCommandInput = CreateHyperParameterTuningJobRequest;
export declare type CreateHyperParameterTuningJobCommandOutput = CreateHyperParameterTuningJobResponse & __MetadataBearer;
export declare class CreateHyperParameterTuningJobCommand extends $Command<CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateHyperParameterTuningJobCommandInput;
    constructor(input: CreateHyperParameterTuningJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
