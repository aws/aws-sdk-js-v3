import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServiceLinkedRoleCommandInput = DeleteServiceLinkedRoleRequest;
export declare type DeleteServiceLinkedRoleCommandOutput = DeleteServiceLinkedRoleResponse & __MetadataBearer;
export declare class DeleteServiceLinkedRoleCommand extends $Command<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteServiceLinkedRoleCommandInput;
    constructor(input: DeleteServiceLinkedRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput>;
    private serialize;
    private deserialize;
}
