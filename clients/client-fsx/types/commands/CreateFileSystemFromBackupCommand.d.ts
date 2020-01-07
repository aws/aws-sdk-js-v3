import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateFileSystemFromBackupRequest, CreateFileSystemFromBackupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFileSystemFromBackupCommandInput = CreateFileSystemFromBackupRequest;
export declare type CreateFileSystemFromBackupCommandOutput = CreateFileSystemFromBackupResponse & __MetadataBearer;
export declare class CreateFileSystemFromBackupCommand extends $Command<CreateFileSystemFromBackupCommandInput, CreateFileSystemFromBackupCommandOutput, FSxClientResolvedConfig> {
    readonly input: CreateFileSystemFromBackupCommandInput;
    constructor(input: CreateFileSystemFromBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFileSystemFromBackupCommandInput, CreateFileSystemFromBackupCommandOutput>;
    private serialize;
    private deserialize;
}
