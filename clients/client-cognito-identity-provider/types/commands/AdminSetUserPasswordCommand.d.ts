import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminSetUserPasswordRequest, AdminSetUserPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminSetUserPasswordCommandInput = AdminSetUserPasswordRequest;
export declare type AdminSetUserPasswordCommandOutput = AdminSetUserPasswordResponse & __MetadataBearer;
export declare class AdminSetUserPasswordCommand extends $Command<AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminSetUserPasswordCommandInput;
    constructor(input: AdminSetUserPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
