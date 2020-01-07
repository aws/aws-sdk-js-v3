import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ImportCertificateMessage, ImportCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportCertificateCommandInput = ImportCertificateMessage;
export declare type ImportCertificateCommandOutput = ImportCertificateResponse & __MetadataBearer;
export declare class ImportCertificateCommand extends $Command<ImportCertificateCommandInput, ImportCertificateCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ImportCertificateCommandInput;
    constructor(input: ImportCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportCertificateCommandInput, ImportCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
