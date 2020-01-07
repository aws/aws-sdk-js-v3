import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { RecognizeCelebritiesRequest, RecognizeCelebritiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RecognizeCelebritiesCommandInput = RecognizeCelebritiesRequest;
export declare type RecognizeCelebritiesCommandOutput = RecognizeCelebritiesResponse & __MetadataBearer;
export declare class RecognizeCelebritiesCommand extends $Command<RecognizeCelebritiesCommandInput, RecognizeCelebritiesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: RecognizeCelebritiesCommandInput;
    constructor(input: RecognizeCelebritiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecognizeCelebritiesCommandInput, RecognizeCelebritiesCommandOutput>;
    private serialize;
    private deserialize;
}
