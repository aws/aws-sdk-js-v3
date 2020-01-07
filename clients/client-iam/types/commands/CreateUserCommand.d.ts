import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateUserRequest, CreateUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserCommandInput = CreateUserRequest;
export declare type CreateUserCommandOutput = CreateUserResponse & __MetadataBearer;
export declare class CreateUserCommand extends $Command<CreateUserCommandInput, CreateUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateUserCommandInput;
    constructor(input: CreateUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserCommandInput, CreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
