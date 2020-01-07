import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminGetUserRequest, AdminGetUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminGetUserCommandInput = AdminGetUserRequest;
export declare type AdminGetUserCommandOutput = AdminGetUserResponse & __MetadataBearer;
export declare class AdminGetUserCommand extends $Command<AdminGetUserCommandInput, AdminGetUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminGetUserCommandInput;
    constructor(input: AdminGetUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminGetUserCommandInput, AdminGetUserCommandOutput>;
    private serialize;
    private deserialize;
}
