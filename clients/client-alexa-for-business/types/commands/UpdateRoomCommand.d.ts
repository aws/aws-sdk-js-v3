import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateRoomRequest, UpdateRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRoomCommandInput = UpdateRoomRequest;
export declare type UpdateRoomCommandOutput = UpdateRoomResponse & __MetadataBearer;
export declare class UpdateRoomCommand extends $Command<UpdateRoomCommandInput, UpdateRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateRoomCommandInput;
    constructor(input: UpdateRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoomCommandInput, UpdateRoomCommandOutput>;
    private serialize;
    private deserialize;
}
