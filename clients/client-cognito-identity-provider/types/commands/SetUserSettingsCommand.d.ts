import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUserSettingsRequest, SetUserSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetUserSettingsCommandInput = SetUserSettingsRequest;
export declare type SetUserSettingsCommandOutput = SetUserSettingsResponse & __MetadataBearer;
export declare class SetUserSettingsCommand extends $Command<SetUserSettingsCommandInput, SetUserSettingsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUserSettingsCommandInput;
    constructor(input: SetUserSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUserSettingsCommandInput, SetUserSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
