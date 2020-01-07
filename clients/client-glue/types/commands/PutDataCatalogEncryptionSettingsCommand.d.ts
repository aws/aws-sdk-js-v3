import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutDataCatalogEncryptionSettingsRequest, PutDataCatalogEncryptionSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDataCatalogEncryptionSettingsCommandInput = PutDataCatalogEncryptionSettingsRequest;
export declare type PutDataCatalogEncryptionSettingsCommandOutput = PutDataCatalogEncryptionSettingsResponse & __MetadataBearer;
export declare class PutDataCatalogEncryptionSettingsCommand extends $Command<PutDataCatalogEncryptionSettingsCommandInput, PutDataCatalogEncryptionSettingsCommandOutput, GlueClientResolvedConfig> {
    readonly input: PutDataCatalogEncryptionSettingsCommandInput;
    constructor(input: PutDataCatalogEncryptionSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDataCatalogEncryptionSettingsCommandInput, PutDataCatalogEncryptionSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
