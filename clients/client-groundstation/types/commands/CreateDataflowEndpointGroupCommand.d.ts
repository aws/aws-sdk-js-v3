import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateDataflowEndpointGroupRequest, DataflowEndpointGroupIdResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataflowEndpointGroupCommandInput = CreateDataflowEndpointGroupRequest;
export declare type CreateDataflowEndpointGroupCommandOutput = DataflowEndpointGroupIdResponse & __MetadataBearer;
export declare class CreateDataflowEndpointGroupCommand extends $Command<CreateDataflowEndpointGroupCommandInput, CreateDataflowEndpointGroupCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CreateDataflowEndpointGroupCommandInput;
    constructor(input: CreateDataflowEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataflowEndpointGroupCommandInput, CreateDataflowEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
