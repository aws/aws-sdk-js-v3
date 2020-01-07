import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetRoleRequest, GetRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRoleCommandInput = GetRoleRequest;
export declare type GetRoleCommandOutput = GetRoleResponse & __MetadataBearer;
export declare class GetRoleCommand extends $Command<GetRoleCommandInput, GetRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetRoleCommandInput;
    constructor(input: GetRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRoleCommandInput, GetRoleCommandOutput>;
    private serialize;
    private deserialize;
}
