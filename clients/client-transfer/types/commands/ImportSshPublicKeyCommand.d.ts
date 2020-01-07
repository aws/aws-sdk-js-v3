import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportSshPublicKeyCommandInput = ImportSshPublicKeyRequest;
export declare type ImportSshPublicKeyCommandOutput = ImportSshPublicKeyResponse & __MetadataBearer;
export declare class ImportSshPublicKeyCommand extends $Command<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput, TransferClientResolvedConfig> {
    readonly input: ImportSshPublicKeyCommandInput;
    constructor(input: ImportSshPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
