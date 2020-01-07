import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateExperimentRequest, UpdateExperimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateExperimentCommandInput = UpdateExperimentRequest;
export declare type UpdateExperimentCommandOutput = UpdateExperimentResponse & __MetadataBearer;
export declare class UpdateExperimentCommand extends $Command<UpdateExperimentCommandInput, UpdateExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateExperimentCommandInput;
    constructor(input: UpdateExperimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExperimentCommandInput, UpdateExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
