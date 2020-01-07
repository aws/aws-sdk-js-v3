import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateEvaluationInput, CreateEvaluationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEvaluationCommandInput = CreateEvaluationInput;
export declare type CreateEvaluationCommandOutput = CreateEvaluationOutput & __MetadataBearer;
export declare class CreateEvaluationCommand extends $Command<CreateEvaluationCommandInput, CreateEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateEvaluationCommandInput;
    constructor(input: CreateEvaluationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEvaluationCommandInput, CreateEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
