import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminInitiateAuthCommandInput = AdminInitiateAuthRequest;
export declare type AdminInitiateAuthCommandOutput = AdminInitiateAuthResponse & __MetadataBearer;
export declare class AdminInitiateAuthCommand extends $Command<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminInitiateAuthCommandInput;
    constructor(input: AdminInitiateAuthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput>;
    private serialize;
    private deserialize;
}
