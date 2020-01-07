import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportCatalogToGlueCommandInput = ImportCatalogToGlueRequest;
export declare type ImportCatalogToGlueCommandOutput = ImportCatalogToGlueResponse & __MetadataBearer;
export declare class ImportCatalogToGlueCommand extends $Command<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput, GlueClientResolvedConfig> {
    readonly input: ImportCatalogToGlueCommandInput;
    constructor(input: ImportCatalogToGlueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportCatalogToGlueCommandInput, ImportCatalogToGlueCommandOutput>;
    private serialize;
    private deserialize;
}
