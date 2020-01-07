import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateExperimentRequest, CreateExperimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateExperimentCommandInput = CreateExperimentRequest;
export declare type CreateExperimentCommandOutput = CreateExperimentResponse & __MetadataBearer;
export declare class CreateExperimentCommand extends $Command<CreateExperimentCommandInput, CreateExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateExperimentCommandInput;
    constructor(input: CreateExperimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateExperimentCommandInput, CreateExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
