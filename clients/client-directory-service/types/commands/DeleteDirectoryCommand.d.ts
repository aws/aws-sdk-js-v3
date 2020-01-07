import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteDirectoryRequest, DeleteDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDirectoryCommandInput = DeleteDirectoryRequest;
export declare type DeleteDirectoryCommandOutput = DeleteDirectoryResult & __MetadataBearer;
export declare class DeleteDirectoryCommand extends $Command<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteDirectoryCommandInput;
    constructor(input: DeleteDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
