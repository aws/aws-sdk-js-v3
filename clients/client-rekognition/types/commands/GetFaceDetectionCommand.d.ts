import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetFaceDetectionRequest, GetFaceDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFaceDetectionCommandInput = GetFaceDetectionRequest;
export declare type GetFaceDetectionCommandOutput = GetFaceDetectionResponse & __MetadataBearer;
export declare class GetFaceDetectionCommand extends $Command<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetFaceDetectionCommandInput;
    constructor(input: GetFaceDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
