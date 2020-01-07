import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetRoomRequest, GetRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRoomCommandInput = GetRoomRequest;
export declare type GetRoomCommandOutput = GetRoomResponse & __MetadataBearer;
export declare class GetRoomCommand extends $Command<GetRoomCommandInput, GetRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetRoomCommandInput;
    constructor(input: GetRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRoomCommandInput, GetRoomCommandOutput>;
    private serialize;
    private deserialize;
}
