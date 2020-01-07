import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMissionProfileCommandInput = GetMissionProfileRequest;
export declare type GetMissionProfileCommandOutput = GetMissionProfileResponse & __MetadataBearer;
export declare class GetMissionProfileCommand extends $Command<GetMissionProfileCommandInput, GetMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetMissionProfileCommandInput;
    constructor(input: GetMissionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMissionProfileCommandInput, GetMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
