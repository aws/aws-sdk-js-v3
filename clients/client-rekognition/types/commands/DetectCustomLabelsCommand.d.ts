import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectCustomLabelsRequest, DetectCustomLabelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectCustomLabelsCommandInput = DetectCustomLabelsRequest;
export declare type DetectCustomLabelsCommandOutput = DetectCustomLabelsResponse & __MetadataBearer;
export declare class DetectCustomLabelsCommand extends $Command<DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DetectCustomLabelsCommandInput;
    constructor(input: DetectCustomLabelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
