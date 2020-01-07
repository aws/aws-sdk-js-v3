import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectLabelsRequest, DetectLabelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectLabelsCommandInput = DetectLabelsRequest;
export declare type DetectLabelsCommandOutput = DetectLabelsResponse & __MetadataBearer;
export declare class DetectLabelsCommand extends $Command<DetectLabelsCommandInput, DetectLabelsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DetectLabelsCommandInput;
    constructor(input: DetectLabelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectLabelsCommandInput, DetectLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
