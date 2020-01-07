import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFileSystemCommandInput = DeleteFileSystemRequest;
export declare type DeleteFileSystemCommandOutput = DeleteFileSystemResponse & __MetadataBearer;
export declare class DeleteFileSystemCommand extends $Command<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput, FSxClientResolvedConfig> {
    readonly input: DeleteFileSystemCommandInput;
    constructor(input: DeleteFileSystemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
