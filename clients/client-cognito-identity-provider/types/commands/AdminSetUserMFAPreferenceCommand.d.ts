import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminSetUserMFAPreferenceRequest, AdminSetUserMFAPreferenceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminSetUserMFAPreferenceCommandInput = AdminSetUserMFAPreferenceRequest;
export declare type AdminSetUserMFAPreferenceCommandOutput = AdminSetUserMFAPreferenceResponse & __MetadataBearer;
export declare class AdminSetUserMFAPreferenceCommand extends $Command<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminSetUserMFAPreferenceCommandInput;
    constructor(input: AdminSetUserMFAPreferenceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
