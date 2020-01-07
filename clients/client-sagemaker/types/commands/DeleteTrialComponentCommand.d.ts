import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTrialComponentRequest, DeleteTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrialComponentCommandInput = DeleteTrialComponentRequest;
export declare type DeleteTrialComponentCommandOutput = DeleteTrialComponentResponse & __MetadataBearer;
export declare class DeleteTrialComponentCommand extends $Command<DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTrialComponentCommandInput;
    constructor(input: DeleteTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
