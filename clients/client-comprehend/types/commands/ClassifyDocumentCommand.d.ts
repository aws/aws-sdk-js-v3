import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ClassifyDocumentRequest, ClassifyDocumentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ClassifyDocumentCommandInput = ClassifyDocumentRequest;
export declare type ClassifyDocumentCommandOutput = ClassifyDocumentResponse & __MetadataBearer;
export declare class ClassifyDocumentCommand extends $Command<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ClassifyDocumentCommandInput;
    constructor(input: ClassifyDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
