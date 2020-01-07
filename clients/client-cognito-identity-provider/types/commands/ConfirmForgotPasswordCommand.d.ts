import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ConfirmForgotPasswordRequest, ConfirmForgotPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmForgotPasswordCommandInput = ConfirmForgotPasswordRequest;
export declare type ConfirmForgotPasswordCommandOutput = ConfirmForgotPasswordResponse & __MetadataBearer;
export declare class ConfirmForgotPasswordCommand extends $Command<ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ConfirmForgotPasswordCommandInput;
    constructor(input: ConfirmForgotPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
