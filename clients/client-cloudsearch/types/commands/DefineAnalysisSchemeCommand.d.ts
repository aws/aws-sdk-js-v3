import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DefineAnalysisSchemeCommandInput = DefineAnalysisSchemeRequest;
export declare type DefineAnalysisSchemeCommandOutput = DefineAnalysisSchemeResponse & __MetadataBearer;
export declare class DefineAnalysisSchemeCommand extends $Command<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineAnalysisSchemeCommandInput;
    constructor(input: DefineAnalysisSchemeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput>;
    private serialize;
    private deserialize;
}
