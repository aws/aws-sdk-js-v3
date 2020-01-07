import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupsForUserCommandInput = ListGroupsForUserRequest;
export declare type ListGroupsForUserCommandOutput = ListGroupsForUserResponse & __MetadataBearer;
export declare class ListGroupsForUserCommand extends $Command<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListGroupsForUserCommandInput;
    constructor(input: ListGroupsForUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput>;
    private serialize;
    private deserialize;
}
