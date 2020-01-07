import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateManagedInstanceRoleCommandInput = UpdateManagedInstanceRoleRequest;
export declare type UpdateManagedInstanceRoleCommandOutput = UpdateManagedInstanceRoleResult & __MetadataBearer;
export declare class UpdateManagedInstanceRoleCommand extends $Command<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateManagedInstanceRoleCommandInput;
    constructor(input: UpdateManagedInstanceRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput>;
    private serialize;
    private deserialize;
}
