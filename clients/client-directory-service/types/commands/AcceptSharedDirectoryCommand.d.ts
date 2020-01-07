import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AcceptSharedDirectoryRequest, AcceptSharedDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptSharedDirectoryCommandInput = AcceptSharedDirectoryRequest;
export declare type AcceptSharedDirectoryCommandOutput = AcceptSharedDirectoryResult & __MetadataBearer;
export declare class AcceptSharedDirectoryCommand extends $Command<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: AcceptSharedDirectoryCommandInput;
    constructor(input: AcceptSharedDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
