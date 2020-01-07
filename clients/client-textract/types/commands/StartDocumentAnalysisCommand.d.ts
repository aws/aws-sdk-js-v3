import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { StartDocumentAnalysisRequest, StartDocumentAnalysisResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDocumentAnalysisCommandInput = StartDocumentAnalysisRequest;
export declare type StartDocumentAnalysisCommandOutput = StartDocumentAnalysisResponse & __MetadataBearer;
export declare class StartDocumentAnalysisCommand extends $Command<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput, TextractClientResolvedConfig> {
    readonly input: StartDocumentAnalysisCommandInput;
    constructor(input: StartDocumentAnalysisCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
