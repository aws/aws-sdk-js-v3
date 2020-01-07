import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetUserPoolMfaConfigCommandInput = SetUserPoolMfaConfigRequest;
export declare type SetUserPoolMfaConfigCommandOutput = SetUserPoolMfaConfigResponse & __MetadataBearer;
export declare class SetUserPoolMfaConfigCommand extends $Command<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUserPoolMfaConfigCommandInput;
    constructor(input: SetUserPoolMfaConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput>;
    private serialize;
    private deserialize;
}
