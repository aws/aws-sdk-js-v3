import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetSatelliteRequest, GetSatelliteResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSatelliteCommandInput = GetSatelliteRequest;
export declare type GetSatelliteCommandOutput = GetSatelliteResponse & __MetadataBearer;
export declare class GetSatelliteCommand extends $Command<GetSatelliteCommandInput, GetSatelliteCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetSatelliteCommandInput;
    constructor(input: GetSatelliteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSatelliteCommandInput, GetSatelliteCommandOutput>;
    private serialize;
    private deserialize;
}
