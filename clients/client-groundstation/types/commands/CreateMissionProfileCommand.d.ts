import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMissionProfileCommandInput = CreateMissionProfileRequest;
export declare type CreateMissionProfileCommandOutput = MissionProfileIdResponse & __MetadataBearer;
export declare class CreateMissionProfileCommand extends $Command<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CreateMissionProfileCommandInput;
    constructor(input: CreateMissionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
