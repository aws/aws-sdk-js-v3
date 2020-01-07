import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServerNeighborsCommandInput = ListServerNeighborsRequest;
export declare type ListServerNeighborsCommandOutput = ListServerNeighborsResponse & __MetadataBearer;
export declare class ListServerNeighborsCommand extends $Command<ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: ListServerNeighborsCommandInput;
    constructor(input: ListServerNeighborsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput>;
    private serialize;
    private deserialize;
}
