import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ForgotPasswordCommandInput = ForgotPasswordRequest;
export declare type ForgotPasswordCommandOutput = ForgotPasswordResponse & __MetadataBearer;
export declare class ForgotPasswordCommand extends $Command<ForgotPasswordCommandInput, ForgotPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ForgotPasswordCommandInput;
    constructor(input: ForgotPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ForgotPasswordCommandInput, ForgotPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
