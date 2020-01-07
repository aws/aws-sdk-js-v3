import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRoleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRoleCommandInput = DeleteRoleRequest;
export declare type DeleteRoleCommandOutput = __MetadataBearer;
export declare class DeleteRoleCommand extends $Command<DeleteRoleCommandInput, DeleteRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteRoleCommandInput;
    constructor(input: DeleteRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRoleCommandInput, DeleteRoleCommandOutput>;
    private serialize;
    private deserialize;
}
