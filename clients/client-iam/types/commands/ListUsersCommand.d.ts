import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUsersRequest, ListUsersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUsersCommandInput = ListUsersRequest;
export declare type ListUsersCommandOutput = ListUsersResponse & __MetadataBearer;
export declare class ListUsersCommand extends $Command<ListUsersCommandInput, ListUsersCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListUsersCommandInput;
    constructor(input: ListUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsersCommandInput, ListUsersCommandOutput>;
    private serialize;
    private deserialize;
}
