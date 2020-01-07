import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminUserGlobalSignOutCommandInput = AdminUserGlobalSignOutRequest;
export declare type AdminUserGlobalSignOutCommandOutput = AdminUserGlobalSignOutResponse & __MetadataBearer;
export declare class AdminUserGlobalSignOutCommand extends $Command<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUserGlobalSignOutCommandInput;
    constructor(input: AdminUserGlobalSignOutCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput>;
    private serialize;
    private deserialize;
}
