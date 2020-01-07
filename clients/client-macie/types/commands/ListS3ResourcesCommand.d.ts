import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListS3ResourcesRequest, ListS3ResourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListS3ResourcesCommandInput = ListS3ResourcesRequest;
export declare type ListS3ResourcesCommandOutput = ListS3ResourcesResult & __MetadataBearer;
export declare class ListS3ResourcesCommand extends $Command<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: ListS3ResourcesCommandInput;
    constructor(input: ListS3ResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
