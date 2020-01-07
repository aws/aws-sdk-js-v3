import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { DetectDocumentTextRequest, DetectDocumentTextResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectDocumentTextCommandInput = DetectDocumentTextRequest;
export declare type DetectDocumentTextCommandOutput = DetectDocumentTextResponse & __MetadataBearer;
export declare class DetectDocumentTextCommand extends $Command<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput, TextractClientResolvedConfig> {
    readonly input: DetectDocumentTextCommandInput;
    constructor(input: DetectDocumentTextCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput>;
    private serialize;
    private deserialize;
}
