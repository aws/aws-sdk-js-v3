import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DataflowEndpointGroupIdResponse, DeleteDataflowEndpointGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDataflowEndpointGroupCommandInput = DeleteDataflowEndpointGroupRequest;
export declare type DeleteDataflowEndpointGroupCommandOutput = DataflowEndpointGroupIdResponse & __MetadataBearer;
export declare class DeleteDataflowEndpointGroupCommand extends $Command<DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteDataflowEndpointGroupCommandInput;
    constructor(input: DeleteDataflowEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
