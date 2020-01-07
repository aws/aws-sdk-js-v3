import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RegisterCrossAccountAccessRoleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterCrossAccountAccessRoleCommandInput = RegisterCrossAccountAccessRoleRequest;
export declare type RegisterCrossAccountAccessRoleCommandOutput = __MetadataBearer;
export declare class RegisterCrossAccountAccessRoleCommand extends $Command<RegisterCrossAccountAccessRoleCommandInput, RegisterCrossAccountAccessRoleCommandOutput, InspectorClientResolvedConfig> {
    readonly input: RegisterCrossAccountAccessRoleCommandInput;
    constructor(input: RegisterCrossAccountAccessRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterCrossAccountAccessRoleCommandInput, RegisterCrossAccountAccessRoleCommandOutput>;
    private serialize;
    private deserialize;
}
