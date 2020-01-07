import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ShareDirectoryRequest, ShareDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ShareDirectoryCommandInput = ShareDirectoryRequest;
export declare type ShareDirectoryCommandOutput = ShareDirectoryResult & __MetadataBearer;
export declare class ShareDirectoryCommand extends $Command<ShareDirectoryCommandInput, ShareDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ShareDirectoryCommandInput;
    constructor(input: ShareDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ShareDirectoryCommandInput, ShareDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
