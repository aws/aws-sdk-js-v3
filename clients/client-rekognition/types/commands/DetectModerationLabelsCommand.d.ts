import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectModerationLabelsRequest, DetectModerationLabelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectModerationLabelsCommandInput = DetectModerationLabelsRequest;
export declare type DetectModerationLabelsCommandOutput = DetectModerationLabelsResponse & __MetadataBearer;
export declare class DetectModerationLabelsCommand extends $Command<DetectModerationLabelsCommandInput, DetectModerationLabelsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DetectModerationLabelsCommandInput;
    constructor(input: DetectModerationLabelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectModerationLabelsCommandInput, DetectModerationLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
