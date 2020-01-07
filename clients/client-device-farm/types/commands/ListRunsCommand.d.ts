import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRunsRequest, ListRunsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRunsCommandInput = ListRunsRequest;
export declare type ListRunsCommandOutput = ListRunsResult & __MetadataBearer;
export declare class ListRunsCommand extends $Command<ListRunsCommandInput, ListRunsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListRunsCommandInput;
    constructor(input: ListRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRunsCommandInput, ListRunsCommandOutput>;
    private serialize;
    private deserialize;
}
