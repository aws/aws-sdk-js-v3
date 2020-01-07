import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePermissionsBoundaryRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRolePermissionsBoundaryCommandInput = PutRolePermissionsBoundaryRequest;
export declare type PutRolePermissionsBoundaryCommandOutput = __MetadataBearer;
export declare class PutRolePermissionsBoundaryCommand extends $Command<PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutRolePermissionsBoundaryCommandInput;
    constructor(input: PutRolePermissionsBoundaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
