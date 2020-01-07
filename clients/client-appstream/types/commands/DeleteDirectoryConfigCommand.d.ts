import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDirectoryConfigCommandInput = DeleteDirectoryConfigRequest;
export declare type DeleteDirectoryConfigCommandOutput = DeleteDirectoryConfigResult & __MetadataBearer;
export declare class DeleteDirectoryConfigCommand extends $Command<DeleteDirectoryConfigCommandInput, DeleteDirectoryConfigCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteDirectoryConfigCommandInput;
    constructor(input: DeleteDirectoryConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDirectoryConfigCommandInput, DeleteDirectoryConfigCommandOutput>;
    private serialize;
    private deserialize;
}
