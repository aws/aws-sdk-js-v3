import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartFaceDetectionRequest, StartFaceDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartFaceDetectionCommandInput = StartFaceDetectionRequest;
export declare type StartFaceDetectionCommandOutput = StartFaceDetectionResponse & __MetadataBearer;
export declare class StartFaceDetectionCommand extends $Command<StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartFaceDetectionCommandInput;
    constructor(input: StartFaceDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
