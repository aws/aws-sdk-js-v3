import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDataflowEndpointGroupsCommandInput = ListDataflowEndpointGroupsRequest;
export declare type ListDataflowEndpointGroupsCommandOutput = ListDataflowEndpointGroupsResponse & __MetadataBearer;
export declare class ListDataflowEndpointGroupsCommand extends $Command<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListDataflowEndpointGroupsCommandInput;
    constructor(input: ListDataflowEndpointGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
