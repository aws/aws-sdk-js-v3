import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopTrainingEntityRecognizerRequest, StopTrainingEntityRecognizerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTrainingEntityRecognizerCommandInput = StopTrainingEntityRecognizerRequest;
export declare type StopTrainingEntityRecognizerCommandOutput = StopTrainingEntityRecognizerResponse & __MetadataBearer;
export declare class StopTrainingEntityRecognizerCommand extends $Command<StopTrainingEntityRecognizerCommandInput, StopTrainingEntityRecognizerCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopTrainingEntityRecognizerCommandInput;
    constructor(input: StopTrainingEntityRecognizerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTrainingEntityRecognizerCommandInput, StopTrainingEntityRecognizerCommandOutput>;
    private serialize;
    private deserialize;
}
