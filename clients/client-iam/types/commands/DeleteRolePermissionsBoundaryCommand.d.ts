import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRolePermissionsBoundaryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRolePermissionsBoundaryCommandInput = DeleteRolePermissionsBoundaryRequest;
export declare type DeleteRolePermissionsBoundaryCommandOutput = __MetadataBearer;
export declare class DeleteRolePermissionsBoundaryCommand extends $Command<DeleteRolePermissionsBoundaryCommandInput, DeleteRolePermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteRolePermissionsBoundaryCommandInput;
    constructor(input: DeleteRolePermissionsBoundaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRolePermissionsBoundaryCommandInput, DeleteRolePermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
