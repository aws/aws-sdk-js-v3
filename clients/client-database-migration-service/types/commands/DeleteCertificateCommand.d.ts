import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteCertificateMessage, DeleteCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCertificateCommandInput = DeleteCertificateMessage;
export declare type DeleteCertificateCommandOutput = DeleteCertificateResponse & __MetadataBearer;
export declare class DeleteCertificateCommand extends $Command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteCertificateCommandInput;
    constructor(input: DeleteCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
