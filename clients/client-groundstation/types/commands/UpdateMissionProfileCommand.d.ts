import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { MissionProfileIdResponse, UpdateMissionProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMissionProfileCommandInput = UpdateMissionProfileRequest;
export declare type UpdateMissionProfileCommandOutput = MissionProfileIdResponse & __MetadataBearer;
export declare class UpdateMissionProfileCommand extends $Command<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: UpdateMissionProfileCommandInput;
    constructor(input: UpdateMissionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
