import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolesRequest, ListRolesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRolesCommandInput = ListRolesRequest;
export declare type ListRolesCommandOutput = ListRolesResponse & __MetadataBearer;
export declare class ListRolesCommand extends $Command<ListRolesCommandInput, ListRolesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRolesCommandInput;
    constructor(input: ListRolesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRolesCommandInput, ListRolesCommandOutput>;
    private serialize;
    private deserialize;
}
