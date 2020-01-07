import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminSetUserSettingsRequest, AdminSetUserSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminSetUserSettingsCommandInput = AdminSetUserSettingsRequest;
export declare type AdminSetUserSettingsCommandOutput = AdminSetUserSettingsResponse & __MetadataBearer;
export declare class AdminSetUserSettingsCommand extends $Command<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminSetUserSettingsCommandInput;
    constructor(input: AdminSetUserSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
