import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminResetUserPasswordRequest, AdminResetUserPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminResetUserPasswordCommandInput = AdminResetUserPasswordRequest;
export declare type AdminResetUserPasswordCommandOutput = AdminResetUserPasswordResponse & __MetadataBearer;
export declare class AdminResetUserPasswordCommand extends $Command<AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminResetUserPasswordCommandInput;
    constructor(input: AdminResetUserPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
