import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDataflowEndpointGroupCommandInput = GetDataflowEndpointGroupRequest;
export declare type GetDataflowEndpointGroupCommandOutput = GetDataflowEndpointGroupResponse & __MetadataBearer;
export declare class GetDataflowEndpointGroupCommand extends $Command<GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetDataflowEndpointGroupCommandInput;
    constructor(input: GetDataflowEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
