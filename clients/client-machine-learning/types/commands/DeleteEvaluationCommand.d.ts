import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteEvaluationInput, DeleteEvaluationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEvaluationCommandInput = DeleteEvaluationInput;
export declare type DeleteEvaluationCommandOutput = DeleteEvaluationOutput & __MetadataBearer;
export declare class DeleteEvaluationCommand extends $Command<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteEvaluationCommandInput;
    constructor(input: DeleteEvaluationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
