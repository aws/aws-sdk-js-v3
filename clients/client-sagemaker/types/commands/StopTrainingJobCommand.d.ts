import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopTrainingJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTrainingJobCommandInput = StopTrainingJobRequest;
export declare type StopTrainingJobCommandOutput = __MetadataBearer;
export declare class StopTrainingJobCommand extends $Command<StopTrainingJobCommandInput, StopTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopTrainingJobCommandInput;
    constructor(input: StopTrainingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTrainingJobCommandInput, StopTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
