import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUserMFAPreferenceRequest, SetUserMFAPreferenceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetUserMFAPreferenceCommandInput = SetUserMFAPreferenceRequest;
export declare type SetUserMFAPreferenceCommandOutput = SetUserMFAPreferenceResponse & __MetadataBearer;
export declare class SetUserMFAPreferenceCommand extends $Command<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUserMFAPreferenceCommandInput;
    constructor(input: SetUserMFAPreferenceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
