import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ImportTerminologyRequest, ImportTerminologyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportTerminologyCommandInput = ImportTerminologyRequest;
export declare type ImportTerminologyCommandOutput = ImportTerminologyResponse & __MetadataBearer;
export declare class ImportTerminologyCommand extends $Command<ImportTerminologyCommandInput, ImportTerminologyCommandOutput, TranslateClientResolvedConfig> {
    readonly input: ImportTerminologyCommandInput;
    constructor(input: ImportTerminologyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportTerminologyCommandInput, ImportTerminologyCommandOutput>;
    private serialize;
    private deserialize;
}
