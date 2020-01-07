import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetMLModelInput, GetMLModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMLModelCommandInput = GetMLModelInput;
export declare type GetMLModelCommandOutput = GetMLModelOutput & __MetadataBearer;
export declare class GetMLModelCommand extends $Command<GetMLModelCommandInput, GetMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetMLModelCommandInput;
    constructor(input: GetMLModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLModelCommandInput, GetMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
