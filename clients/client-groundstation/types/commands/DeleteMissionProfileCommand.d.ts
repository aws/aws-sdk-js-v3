import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DeleteMissionProfileRequest, MissionProfileIdResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMissionProfileCommandInput = DeleteMissionProfileRequest;
export declare type DeleteMissionProfileCommandOutput = MissionProfileIdResponse & __MetadataBearer;
export declare class DeleteMissionProfileCommand extends $Command<DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteMissionProfileCommandInput;
    constructor(input: DeleteMissionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
