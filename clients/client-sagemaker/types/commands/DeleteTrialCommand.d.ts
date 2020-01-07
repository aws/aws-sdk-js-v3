import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTrialRequest, DeleteTrialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrialCommandInput = DeleteTrialRequest;
export declare type DeleteTrialCommandOutput = DeleteTrialResponse & __MetadataBearer;
export declare class DeleteTrialCommand extends $Command<DeleteTrialCommandInput, DeleteTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTrialCommandInput;
    constructor(input: DeleteTrialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrialCommandInput, DeleteTrialCommandOutput>;
    private serialize;
    private deserialize;
}
