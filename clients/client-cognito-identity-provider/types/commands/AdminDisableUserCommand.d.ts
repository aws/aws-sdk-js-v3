import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDisableUserRequest, AdminDisableUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminDisableUserCommandInput = AdminDisableUserRequest;
export declare type AdminDisableUserCommandOutput = AdminDisableUserResponse & __MetadataBearer;
export declare class AdminDisableUserCommand extends $Command<AdminDisableUserCommandInput, AdminDisableUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDisableUserCommandInput;
    constructor(input: AdminDisableUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDisableUserCommandInput, AdminDisableUserCommandOutput>;
    private serialize;
    private deserialize;
}
