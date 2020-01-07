import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDeleteUserRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminDeleteUserCommandInput = AdminDeleteUserRequest;
export declare type AdminDeleteUserCommandOutput = __MetadataBearer;
export declare class AdminDeleteUserCommand extends $Command<AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDeleteUserCommandInput;
    constructor(input: AdminDeleteUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
