import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsRequest, ListGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupsCommandInput = ListGroupsRequest;
export declare type ListGroupsCommandOutput = ListGroupsResponse & __MetadataBearer;
export declare class ListGroupsCommand extends $Command<ListGroupsCommandInput, ListGroupsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListGroupsCommandInput;
    constructor(input: ListGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupsCommandInput, ListGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
