import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateServiceLinkedRoleRequest, CreateServiceLinkedRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateServiceLinkedRoleCommandInput = CreateServiceLinkedRoleRequest;
export declare type CreateServiceLinkedRoleCommandOutput = CreateServiceLinkedRoleResponse & __MetadataBearer;
export declare class CreateServiceLinkedRoleCommand extends $Command<CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateServiceLinkedRoleCommandInput;
    constructor(input: CreateServiceLinkedRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput>;
    private serialize;
    private deserialize;
}
