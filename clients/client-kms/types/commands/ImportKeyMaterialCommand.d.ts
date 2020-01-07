import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportKeyMaterialCommandInput = ImportKeyMaterialRequest;
export declare type ImportKeyMaterialCommandOutput = ImportKeyMaterialResponse & __MetadataBearer;
export declare class ImportKeyMaterialCommand extends $Command<ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput, KMSClientResolvedConfig> {
    readonly input: ImportKeyMaterialCommandInput;
    constructor(input: ImportKeyMaterialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput>;
    private serialize;
    private deserialize;
}
