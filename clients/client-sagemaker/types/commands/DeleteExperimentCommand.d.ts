import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteExperimentRequest, DeleteExperimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteExperimentCommandInput = DeleteExperimentRequest;
export declare type DeleteExperimentCommandOutput = DeleteExperimentResponse & __MetadataBearer;
export declare class DeleteExperimentCommand extends $Command<DeleteExperimentCommandInput, DeleteExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteExperimentCommandInput;
    constructor(input: DeleteExperimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExperimentCommandInput, DeleteExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
