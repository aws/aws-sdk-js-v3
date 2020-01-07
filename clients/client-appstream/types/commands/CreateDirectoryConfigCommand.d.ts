import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateDirectoryConfigRequest, CreateDirectoryConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDirectoryConfigCommandInput = CreateDirectoryConfigRequest;
export declare type CreateDirectoryConfigCommandOutput = CreateDirectoryConfigResult & __MetadataBearer;
export declare class CreateDirectoryConfigCommand extends $Command<CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateDirectoryConfigCommandInput;
    constructor(input: CreateDirectoryConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput>;
    private serialize;
    private deserialize;
}
