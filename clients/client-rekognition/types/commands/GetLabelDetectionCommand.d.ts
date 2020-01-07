import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetLabelDetectionRequest, GetLabelDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLabelDetectionCommandInput = GetLabelDetectionRequest;
export declare type GetLabelDetectionCommandOutput = GetLabelDetectionResponse & __MetadataBearer;
export declare class GetLabelDetectionCommand extends $Command<GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetLabelDetectionCommandInput;
    constructor(input: GetLabelDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
