import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDisableProviderForUserRequest, AdminDisableProviderForUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminDisableProviderForUserCommandInput = AdminDisableProviderForUserRequest;
export declare type AdminDisableProviderForUserCommandOutput = AdminDisableProviderForUserResponse & __MetadataBearer;
export declare class AdminDisableProviderForUserCommand extends $Command<AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDisableProviderForUserCommandInput;
    constructor(input: AdminDisableProviderForUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput>;
    private serialize;
    private deserialize;
}
