import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateMLModelInput, UpdateMLModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMLModelCommandInput = UpdateMLModelInput;
export declare type UpdateMLModelCommandOutput = UpdateMLModelOutput & __MetadataBearer;
export declare class UpdateMLModelCommand extends $Command<UpdateMLModelCommandInput, UpdateMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateMLModelCommandInput;
    constructor(input: UpdateMLModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMLModelCommandInput, UpdateMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
