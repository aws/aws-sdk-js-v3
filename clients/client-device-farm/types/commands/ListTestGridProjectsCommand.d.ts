import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridProjectsRequest, ListTestGridProjectsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTestGridProjectsCommandInput = ListTestGridProjectsRequest;
export declare type ListTestGridProjectsCommandOutput = ListTestGridProjectsResult & __MetadataBearer;
export declare class ListTestGridProjectsCommand extends $Command<ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridProjectsCommandInput;
    constructor(input: ListTestGridProjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput>;
    private serialize;
    private deserialize;
}
