import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminCreateUserRequest, AdminCreateUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminCreateUserCommandInput = AdminCreateUserRequest;
export declare type AdminCreateUserCommandOutput = AdminCreateUserResponse & __MetadataBearer;
export declare class AdminCreateUserCommand extends $Command<AdminCreateUserCommandInput, AdminCreateUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminCreateUserCommandInput;
    constructor(input: AdminCreateUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminCreateUserCommandInput, AdminCreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
