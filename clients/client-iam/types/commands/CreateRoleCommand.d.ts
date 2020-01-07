import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateRoleRequest, CreateRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRoleCommandInput = CreateRoleRequest;
export declare type CreateRoleCommandOutput = CreateRoleResponse & __MetadataBearer;
export declare class CreateRoleCommand extends $Command<CreateRoleCommandInput, CreateRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateRoleCommandInput;
    constructor(input: CreateRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRoleCommandInput, CreateRoleCommandOutput>;
    private serialize;
    private deserialize;
}
