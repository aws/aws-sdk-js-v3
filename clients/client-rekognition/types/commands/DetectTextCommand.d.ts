import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectTextRequest, DetectTextResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectTextCommandInput = DetectTextRequest;
export declare type DetectTextCommandOutput = DetectTextResponse & __MetadataBearer;
export declare class DetectTextCommand extends $Command<DetectTextCommandInput, DetectTextCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DetectTextCommandInput;
    constructor(input: DetectTextCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectTextCommandInput, DetectTextCommandOutput>;
    private serialize;
    private deserialize;
}
