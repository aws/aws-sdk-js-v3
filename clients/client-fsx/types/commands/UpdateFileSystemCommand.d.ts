import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateFileSystemRequest, UpdateFileSystemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFileSystemCommandInput = UpdateFileSystemRequest;
export declare type UpdateFileSystemCommandOutput = UpdateFileSystemResponse & __MetadataBearer;
export declare class UpdateFileSystemCommand extends $Command<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput, FSxClientResolvedConfig> {
    readonly input: UpdateFileSystemCommandInput;
    constructor(input: UpdateFileSystemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput>;
    private serialize;
    private deserialize;
}
