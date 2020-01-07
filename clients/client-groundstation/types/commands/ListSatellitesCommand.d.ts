import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListSatellitesRequest, ListSatellitesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSatellitesCommandInput = ListSatellitesRequest;
export declare type ListSatellitesCommandOutput = ListSatellitesResponse & __MetadataBearer;
export declare class ListSatellitesCommand extends $Command<ListSatellitesCommandInput, ListSatellitesCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListSatellitesCommandInput;
    constructor(input: ListSatellitesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSatellitesCommandInput, ListSatellitesCommandOutput>;
    private serialize;
    private deserialize;
}
