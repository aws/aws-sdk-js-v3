import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListTestGridSessionsRequest, ListTestGridSessionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTestGridSessionsCommandInput = ListTestGridSessionsRequest;
export declare type ListTestGridSessionsCommandOutput = ListTestGridSessionsResult & __MetadataBearer;
export declare class ListTestGridSessionsCommand extends $Command<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListTestGridSessionsCommandInput;
    constructor(input: ListTestGridSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
