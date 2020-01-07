import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListLogSubscriptionsRequest, ListLogSubscriptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLogSubscriptionsCommandInput = ListLogSubscriptionsRequest;
export declare type ListLogSubscriptionsCommandOutput = ListLogSubscriptionsResult & __MetadataBearer;
export declare class ListLogSubscriptionsCommand extends $Command<ListLogSubscriptionsCommandInput, ListLogSubscriptionsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListLogSubscriptionsCommandInput;
    constructor(input: ListLogSubscriptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLogSubscriptionsCommandInput, ListLogSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
