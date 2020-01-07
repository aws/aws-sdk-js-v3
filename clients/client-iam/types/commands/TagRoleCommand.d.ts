import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagRoleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagRoleCommandInput = TagRoleRequest;
export declare type TagRoleCommandOutput = __MetadataBearer;
export declare class TagRoleCommand extends $Command<TagRoleCommandInput, TagRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: TagRoleCommandInput;
    constructor(input: TagRoleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagRoleCommandInput, TagRoleCommandOutput>;
    private serialize;
    private deserialize;
}
