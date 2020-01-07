import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminLinkProviderForUserCommandInput = AdminLinkProviderForUserRequest;
export declare type AdminLinkProviderForUserCommandOutput = AdminLinkProviderForUserResponse & __MetadataBearer;
export declare class AdminLinkProviderForUserCommand extends $Command<AdminLinkProviderForUserCommandInput, AdminLinkProviderForUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminLinkProviderForUserCommandInput;
    constructor(input: AdminLinkProviderForUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminLinkProviderForUserCommandInput, AdminLinkProviderForUserCommandOutput>;
    private serialize;
    private deserialize;
}
