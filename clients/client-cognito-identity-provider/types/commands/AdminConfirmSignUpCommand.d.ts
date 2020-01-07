import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminConfirmSignUpRequest, AdminConfirmSignUpResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminConfirmSignUpCommandInput = AdminConfirmSignUpRequest;
export declare type AdminConfirmSignUpCommandOutput = AdminConfirmSignUpResponse & __MetadataBearer;
export declare class AdminConfirmSignUpCommand extends $Command<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminConfirmSignUpCommandInput;
    constructor(input: AdminConfirmSignUpCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput>;
    private serialize;
    private deserialize;
}
