import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAssociatedRoleCommandInput = GetAssociatedRoleRequest;
export declare type GetAssociatedRoleCommandOutput = GetAssociatedRoleResponse & __MetadataBearer;
export declare class GetAssociatedRoleCommand extends $Command<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetAssociatedRoleCommandInput;
    constructor(input: GetAssociatedRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput>;
    private serialize;
    private deserialize;
}
