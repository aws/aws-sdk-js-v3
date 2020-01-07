import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagUserRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagUserCommandInput = TagUserRequest;
export declare type TagUserCommandOutput = __MetadataBearer;
export declare class TagUserCommand extends $Command<TagUserCommandInput, TagUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: TagUserCommandInput;
    constructor(input: TagUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagUserCommandInput, TagUserCommandOutput>;
    private serialize;
    private deserialize;
}
