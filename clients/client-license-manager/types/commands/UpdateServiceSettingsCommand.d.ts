import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateServiceSettingsRequest, UpdateServiceSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceSettingsCommandInput = UpdateServiceSettingsRequest;
export declare type UpdateServiceSettingsCommandOutput = UpdateServiceSettingsResponse & __MetadataBearer;
export declare class UpdateServiceSettingsCommand extends $Command<UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: UpdateServiceSettingsCommandInput;
    constructor(input: UpdateServiceSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
