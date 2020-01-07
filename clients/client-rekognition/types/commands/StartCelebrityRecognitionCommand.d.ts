import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartCelebrityRecognitionRequest, StartCelebrityRecognitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartCelebrityRecognitionCommandInput = StartCelebrityRecognitionRequest;
export declare type StartCelebrityRecognitionCommandOutput = StartCelebrityRecognitionResponse & __MetadataBearer;
export declare class StartCelebrityRecognitionCommand extends $Command<StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartCelebrityRecognitionCommandInput;
    constructor(input: StartCelebrityRecognitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput>;
    private serialize;
    private deserialize;
}
