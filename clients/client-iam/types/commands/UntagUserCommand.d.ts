import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagUserRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagUserCommandInput = UntagUserRequest;
export declare type UntagUserCommandOutput = __MetadataBearer;
export declare class UntagUserCommand extends $Command<UntagUserCommandInput, UntagUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagUserCommandInput;
    constructor(input: UntagUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagUserCommandInput, UntagUserCommandOutput>;
    private serialize;
    private deserialize;
}
