import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListGroundStationsRequest, ListGroundStationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroundStationsCommandInput = ListGroundStationsRequest;
export declare type ListGroundStationsCommandOutput = ListGroundStationsResponse & __MetadataBearer;
export declare class ListGroundStationsCommand extends $Command<ListGroundStationsCommandInput, ListGroundStationsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListGroundStationsCommandInput;
    constructor(input: ListGroundStationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroundStationsCommandInput, ListGroundStationsCommandOutput>;
    private serialize;
    private deserialize;
}
