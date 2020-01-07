import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { ImportServerCatalogRequest, ImportServerCatalogResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportServerCatalogCommandInput = ImportServerCatalogRequest;
export declare type ImportServerCatalogCommandOutput = ImportServerCatalogResponse & __MetadataBearer;
export declare class ImportServerCatalogCommand extends $Command<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput, SMSClientResolvedConfig> {
    readonly input: ImportServerCatalogCommandInput;
    constructor(input: ImportServerCatalogCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput>;
    private serialize;
    private deserialize;
}
