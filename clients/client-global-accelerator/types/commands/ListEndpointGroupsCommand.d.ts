import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEndpointGroupsCommandInput = ListEndpointGroupsRequest;
export declare type ListEndpointGroupsCommandOutput = ListEndpointGroupsResponse & __MetadataBearer;
export declare class ListEndpointGroupsCommand extends $Command<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListEndpointGroupsCommandInput;
    constructor(input: ListEndpointGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
