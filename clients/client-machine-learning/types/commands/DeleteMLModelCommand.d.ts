import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteMLModelInput, DeleteMLModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMLModelCommandInput = DeleteMLModelInput;
export declare type DeleteMLModelCommandOutput = DeleteMLModelOutput & __MetadataBearer;
export declare class DeleteMLModelCommand extends $Command<DeleteMLModelCommandInput, DeleteMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteMLModelCommandInput;
    constructor(input: DeleteMLModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMLModelCommandInput, DeleteMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
