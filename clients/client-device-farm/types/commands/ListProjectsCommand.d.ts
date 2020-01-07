import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListProjectsRequest, ListProjectsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProjectsCommandInput = ListProjectsRequest;
export declare type ListProjectsCommandOutput = ListProjectsResult & __MetadataBearer;
export declare class ListProjectsCommand extends $Command<ListProjectsCommandInput, ListProjectsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListProjectsCommandInput;
    constructor(input: ListProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProjectsCommandInput, ListProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
