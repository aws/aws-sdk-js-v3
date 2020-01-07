import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleRequest, UpdateRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRoleCommandInput = UpdateRoleRequest;
export declare type UpdateRoleCommandOutput = UpdateRoleResponse & __MetadataBearer;
export declare class UpdateRoleCommand extends $Command<UpdateRoleCommandInput, UpdateRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateRoleCommandInput;
    constructor(input: UpdateRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoleCommandInput, UpdateRoleCommandOutput>;
    private serialize;
    private deserialize;
}
