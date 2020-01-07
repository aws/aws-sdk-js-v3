import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEvaluationCommandInput = UpdateEvaluationInput;
export declare type UpdateEvaluationCommandOutput = UpdateEvaluationOutput & __MetadataBearer;
export declare class UpdateEvaluationCommand extends $Command<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateEvaluationCommandInput;
    constructor(input: UpdateEvaluationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
