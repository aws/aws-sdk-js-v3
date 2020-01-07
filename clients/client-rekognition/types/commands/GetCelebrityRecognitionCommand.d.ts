import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetCelebrityRecognitionRequest, GetCelebrityRecognitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCelebrityRecognitionCommandInput = GetCelebrityRecognitionRequest;
export declare type GetCelebrityRecognitionCommandOutput = GetCelebrityRecognitionResponse & __MetadataBearer;
export declare class GetCelebrityRecognitionCommand extends $Command<GetCelebrityRecognitionCommandInput, GetCelebrityRecognitionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetCelebrityRecognitionCommandInput;
    constructor(input: GetCelebrityRecognitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCelebrityRecognitionCommandInput, GetCelebrityRecognitionCommandOutput>;
    private serialize;
    private deserialize;
}
