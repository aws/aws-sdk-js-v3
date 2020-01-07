import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { GetDocumentAnalysisRequest, GetDocumentAnalysisResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDocumentAnalysisCommandInput = GetDocumentAnalysisRequest;
export declare type GetDocumentAnalysisCommandOutput = GetDocumentAnalysisResponse & __MetadataBearer;
export declare class GetDocumentAnalysisCommand extends $Command<GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput, TextractClientResolvedConfig> {
    readonly input: GetDocumentAnalysisCommandInput;
    constructor(input: GetDocumentAnalysisCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
