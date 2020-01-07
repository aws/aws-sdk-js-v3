import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminRemoveUserFromGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminRemoveUserFromGroupCommandInput = AdminRemoveUserFromGroupRequest;
export declare type AdminRemoveUserFromGroupCommandOutput = __MetadataBearer;
export declare class AdminRemoveUserFromGroupCommand extends $Command<AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminRemoveUserFromGroupCommandInput;
    constructor(input: AdminRemoveUserFromGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
