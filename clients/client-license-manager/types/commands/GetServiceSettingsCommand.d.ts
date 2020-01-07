import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceSettingsCommandInput = GetServiceSettingsRequest;
export declare type GetServiceSettingsCommandOutput = GetServiceSettingsResponse & __MetadataBearer;
export declare class GetServiceSettingsCommand extends $Command<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetServiceSettingsCommandInput;
    constructor(input: GetServiceSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
