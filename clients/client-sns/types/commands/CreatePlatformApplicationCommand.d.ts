import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreatePlatformApplicationInput, CreatePlatformApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlatformApplicationCommandInput = CreatePlatformApplicationInput;
export declare type CreatePlatformApplicationCommandOutput = CreatePlatformApplicationResponse & __MetadataBearer;
export declare class CreatePlatformApplicationCommand extends $Command<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreatePlatformApplicationCommandInput;
    constructor(input: CreatePlatformApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
