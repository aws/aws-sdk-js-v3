import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { CreateUserProfileRequest, CreateUserProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserProfileCommandInput = CreateUserProfileRequest;
export declare type CreateUserProfileCommandOutput = CreateUserProfileResult & __MetadataBearer;
export declare class CreateUserProfileCommand extends $Command<CreateUserProfileCommandInput, CreateUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: CreateUserProfileCommandInput;
    constructor(input: CreateUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
