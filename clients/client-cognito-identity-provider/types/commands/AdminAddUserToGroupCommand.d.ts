import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminAddUserToGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminAddUserToGroupCommandInput = AdminAddUserToGroupRequest;
export declare type AdminAddUserToGroupCommandOutput = __MetadataBearer;
export declare class AdminAddUserToGroupCommand extends $Command<AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminAddUserToGroupCommandInput;
    constructor(input: AdminAddUserToGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
