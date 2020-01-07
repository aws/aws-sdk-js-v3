import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMissionProfilesCommandInput = ListMissionProfilesRequest;
export declare type ListMissionProfilesCommandOutput = ListMissionProfilesResponse & __MetadataBearer;
export declare class ListMissionProfilesCommand extends $Command<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListMissionProfilesCommandInput;
    constructor(input: ListMissionProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
