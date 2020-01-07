import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateMLModelInput, CreateMLModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMLModelCommandInput = CreateMLModelInput;
export declare type CreateMLModelCommandOutput = CreateMLModelOutput & __MetadataBearer;
export declare class CreateMLModelCommand extends $Command<CreateMLModelCommandInput, CreateMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateMLModelCommandInput;
    constructor(input: CreateMLModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMLModelCommandInput, CreateMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
