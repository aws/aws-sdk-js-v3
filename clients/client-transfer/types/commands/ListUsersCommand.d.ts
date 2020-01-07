import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListUsersRequest, ListUsersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUsersCommandInput = ListUsersRequest;
export declare type ListUsersCommandOutput = ListUsersResponse & __MetadataBearer;
export declare class ListUsersCommand extends $Command<ListUsersCommandInput, ListUsersCommandOutput, TransferClientResolvedConfig> {
    readonly input: ListUsersCommandInput;
    constructor(input: ListUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsersCommandInput, ListUsersCommandOutput>;
    private serialize;
    private deserialize;
}
