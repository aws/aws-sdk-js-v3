import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateFileSystemRequest, CreateFileSystemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFileSystemCommandInput = CreateFileSystemRequest;
export declare type CreateFileSystemCommandOutput = CreateFileSystemResponse & __MetadataBearer;
export declare class CreateFileSystemCommand extends $Command<CreateFileSystemCommandInput, CreateFileSystemCommandOutput, FSxClientResolvedConfig> {
    readonly input: CreateFileSystemCommandInput;
    constructor(input: CreateFileSystemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFileSystemCommandInput, CreateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
