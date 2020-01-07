import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkerBlocksCommandInput = ListWorkerBlocksRequest;
export declare type ListWorkerBlocksCommandOutput = ListWorkerBlocksResponse & __MetadataBearer;
export declare class ListWorkerBlocksCommand extends $Command<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListWorkerBlocksCommandInput;
    constructor(input: ListWorkerBlocksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput>;
    private serialize;
    private deserialize;
}
