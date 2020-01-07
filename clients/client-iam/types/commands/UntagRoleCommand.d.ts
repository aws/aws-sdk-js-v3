import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagRoleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagRoleCommandInput = UntagRoleRequest;
export declare type UntagRoleCommandOutput = __MetadataBearer;
export declare class UntagRoleCommand extends $Command<UntagRoleCommandInput, UntagRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagRoleCommandInput;
    constructor(input: UntagRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagRoleCommandInput, UntagRoleCommandOutput>;
    private serialize;
    private deserialize;
}
