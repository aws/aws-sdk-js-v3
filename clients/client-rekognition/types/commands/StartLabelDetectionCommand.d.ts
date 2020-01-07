import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartLabelDetectionRequest, StartLabelDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartLabelDetectionCommandInput = StartLabelDetectionRequest;
export declare type StartLabelDetectionCommandOutput = StartLabelDetectionResponse & __MetadataBearer;
export declare class StartLabelDetectionCommand extends $Command<StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartLabelDetectionCommandInput;
    constructor(input: StartLabelDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
