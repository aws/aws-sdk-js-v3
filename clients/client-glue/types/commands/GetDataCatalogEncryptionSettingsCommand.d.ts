import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataCatalogEncryptionSettingsRequest, GetDataCatalogEncryptionSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDataCatalogEncryptionSettingsCommandInput = GetDataCatalogEncryptionSettingsRequest;
export declare type GetDataCatalogEncryptionSettingsCommandOutput = GetDataCatalogEncryptionSettingsResponse & __MetadataBearer;
export declare class GetDataCatalogEncryptionSettingsCommand extends $Command<GetDataCatalogEncryptionSettingsCommandInput, GetDataCatalogEncryptionSettingsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDataCatalogEncryptionSettingsCommandInput;
    constructor(input: GetDataCatalogEncryptionSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataCatalogEncryptionSettingsCommandInput, GetDataCatalogEncryptionSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
