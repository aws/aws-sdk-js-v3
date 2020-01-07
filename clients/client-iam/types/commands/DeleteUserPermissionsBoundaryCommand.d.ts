import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPermissionsBoundaryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserPermissionsBoundaryCommandInput = DeleteUserPermissionsBoundaryRequest;
export declare type DeleteUserPermissionsBoundaryCommandOutput = __MetadataBearer;
export declare class DeleteUserPermissionsBoundaryCommand extends $Command<DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteUserPermissionsBoundaryCommandInput;
    constructor(input: DeleteUserPermissionsBoundaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
