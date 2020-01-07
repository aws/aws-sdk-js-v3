import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ConfirmSignUpRequest, ConfirmSignUpResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmSignUpCommandInput = ConfirmSignUpRequest;
export declare type ConfirmSignUpCommandOutput = ConfirmSignUpResponse & __MetadataBearer;
export declare class ConfirmSignUpCommand extends $Command<ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ConfirmSignUpCommandInput;
    constructor(input: ConfirmSignUpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput>;
    private serialize;
    private deserialize;
}
