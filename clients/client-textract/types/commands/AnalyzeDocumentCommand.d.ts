import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { AnalyzeDocumentRequest, AnalyzeDocumentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AnalyzeDocumentCommandInput = AnalyzeDocumentRequest;
export declare type AnalyzeDocumentCommandOutput = AnalyzeDocumentResponse & __MetadataBearer;
export declare class AnalyzeDocumentCommand extends $Command<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput, TextractClientResolvedConfig> {
    readonly input: AnalyzeDocumentCommandInput;
    constructor(input: AnalyzeDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
