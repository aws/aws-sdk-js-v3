import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UnshareDirectoryRequest, UnshareDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnshareDirectoryCommandInput = UnshareDirectoryRequest;
export declare type UnshareDirectoryCommandOutput = UnshareDirectoryResult & __MetadataBearer;
export declare class UnshareDirectoryCommand extends $Command<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UnshareDirectoryCommandInput;
    constructor(input: UnshareDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
