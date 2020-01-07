import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateDirectoryRequest, CreateDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDirectoryCommandInput = CreateDirectoryRequest;
export declare type CreateDirectoryCommandOutput = CreateDirectoryResult & __MetadataBearer;
export declare class CreateDirectoryCommand extends $Command<CreateDirectoryCommandInput, CreateDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateDirectoryCommandInput;
    constructor(input: CreateDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDirectoryCommandInput, CreateDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
