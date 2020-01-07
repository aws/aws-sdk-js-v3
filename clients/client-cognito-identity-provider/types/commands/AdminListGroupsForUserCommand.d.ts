import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListGroupsForUserRequest, AdminListGroupsForUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminListGroupsForUserCommandInput = AdminListGroupsForUserRequest;
export declare type AdminListGroupsForUserCommandOutput = AdminListGroupsForUserResponse & __MetadataBearer;
export declare class AdminListGroupsForUserCommand extends $Command<AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListGroupsForUserCommandInput;
    constructor(input: AdminListGroupsForUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput>;
    private serialize;
    private deserialize;
}
