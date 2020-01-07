import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCatalogImportStatusRequest, GetCatalogImportStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCatalogImportStatusCommandInput = GetCatalogImportStatusRequest;
export declare type GetCatalogImportStatusCommandOutput = GetCatalogImportStatusResponse & __MetadataBearer;
export declare class GetCatalogImportStatusCommand extends $Command<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCatalogImportStatusCommandInput;
    constructor(input: GetCatalogImportStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCatalogImportStatusCommandInput, GetCatalogImportStatusCommandOutput>;
    private serialize;
    private deserialize;
}
