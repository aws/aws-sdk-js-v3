import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListResourceDelegatesRequest, ListResourceDelegatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceDelegatesCommandInput = ListResourceDelegatesRequest;
export declare type ListResourceDelegatesCommandOutput = ListResourceDelegatesResponse & __MetadataBearer;
export declare class ListResourceDelegatesCommand extends $Command<ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListResourceDelegatesCommandInput;
    constructor(input: ListResourceDelegatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput>;
    private serialize;
    private deserialize;
}
