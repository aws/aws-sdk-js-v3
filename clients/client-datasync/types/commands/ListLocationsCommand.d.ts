import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListLocationsRequest, ListLocationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLocationsCommandInput = ListLocationsRequest;
export declare type ListLocationsCommandOutput = ListLocationsResponse & __MetadataBearer;
export declare class ListLocationsCommand extends $Command<ListLocationsCommandInput, ListLocationsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: ListLocationsCommandInput;
    constructor(input: ListLocationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLocationsCommandInput, ListLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
