import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RejectSharedDirectoryRequest, RejectSharedDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectSharedDirectoryCommandInput = RejectSharedDirectoryRequest;
export declare type RejectSharedDirectoryCommandOutput = RejectSharedDirectoryResult & __MetadataBearer;
export declare class RejectSharedDirectoryCommand extends $Command<RejectSharedDirectoryCommandInput, RejectSharedDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RejectSharedDirectoryCommandInput;
    constructor(input: RejectSharedDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectSharedDirectoryCommandInput, RejectSharedDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
