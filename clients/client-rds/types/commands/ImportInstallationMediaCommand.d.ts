import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ImportInstallationMediaMessage, InstallationMedia } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportInstallationMediaCommandInput = ImportInstallationMediaMessage;
export declare type ImportInstallationMediaCommandOutput = InstallationMedia & __MetadataBearer;
export declare class ImportInstallationMediaCommand extends $Command<ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: ImportInstallationMediaCommandInput;
    constructor(input: ImportInstallationMediaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportInstallationMediaCommandInput, ImportInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
