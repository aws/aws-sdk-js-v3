import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUserRequest, CreateUserResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserCommandInput = CreateUserRequest;
export declare type CreateUserCommandOutput = CreateUserResult & __MetadataBearer;
export declare class CreateUserCommand extends $Command<CreateUserCommandInput, CreateUserCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateUserCommandInput;
    constructor(input: CreateUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserCommandInput, CreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
