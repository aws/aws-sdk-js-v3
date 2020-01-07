import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { InitiateAuthRequest, InitiateAuthResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InitiateAuthCommandInput = InitiateAuthRequest;
export declare type InitiateAuthCommandOutput = InitiateAuthResponse & __MetadataBearer;
export declare class InitiateAuthCommand extends $Command<InitiateAuthCommandInput, InitiateAuthCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: InitiateAuthCommandInput;
    constructor(input: InitiateAuthCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateAuthCommandInput, InitiateAuthCommandOutput>;
    private serialize;
    private deserialize;
}
