import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfilesForRoleRequest, ListInstanceProfilesForRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstanceProfilesForRoleCommandInput = ListInstanceProfilesForRoleRequest;
export declare type ListInstanceProfilesForRoleCommandOutput = ListInstanceProfilesForRoleResponse & __MetadataBearer;
export declare class ListInstanceProfilesForRoleCommand extends $Command<ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListInstanceProfilesForRoleCommandInput;
    constructor(input: ListInstanceProfilesForRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput>;
    private serialize;
    private deserialize;
}
