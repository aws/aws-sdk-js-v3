import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInventoryEntriesCommandInput = ListInventoryEntriesRequest;
export declare type ListInventoryEntriesCommandOutput = ListInventoryEntriesResult & __MetadataBearer;
export declare class ListInventoryEntriesCommand extends $Command<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListInventoryEntriesCommandInput;
    constructor(input: ListInventoryEntriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput>;
    private serialize;
    private deserialize;
}
