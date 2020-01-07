import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminEnableUserRequest, AdminEnableUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminEnableUserCommandInput = AdminEnableUserRequest;
export declare type AdminEnableUserCommandOutput = AdminEnableUserResponse & __MetadataBearer;
export declare class AdminEnableUserCommand extends $Command<AdminEnableUserCommandInput, AdminEnableUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminEnableUserCommandInput;
    constructor(input: AdminEnableUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminEnableUserCommandInput, AdminEnableUserCommandOutput>;
    private serialize;
    private deserialize;
}
