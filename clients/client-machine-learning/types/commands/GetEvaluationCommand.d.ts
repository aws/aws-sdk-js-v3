import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetEvaluationInput, GetEvaluationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEvaluationCommandInput = GetEvaluationInput;
export declare type GetEvaluationCommandOutput = GetEvaluationOutput & __MetadataBearer;
export declare class GetEvaluationCommand extends $Command<GetEvaluationCommandInput, GetEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetEvaluationCommandInput;
    constructor(input: GetEvaluationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEvaluationCommandInput, GetEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
