import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUsersInGroupRequest, ListUsersInGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUsersInGroupCommandInput = ListUsersInGroupRequest;
export declare type ListUsersInGroupCommandOutput = ListUsersInGroupResponse & __MetadataBearer;
export declare class ListUsersInGroupCommand extends $Command<ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUsersInGroupCommandInput;
    constructor(input: ListUsersInGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput>;
    private serialize;
    private deserialize;
}
