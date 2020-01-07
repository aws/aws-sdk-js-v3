import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateDeviceFromRoomRequest, DisassociateDeviceFromRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateDeviceFromRoomCommandInput = DisassociateDeviceFromRoomRequest;
export declare type DisassociateDeviceFromRoomCommandOutput = DisassociateDeviceFromRoomResponse & __MetadataBearer;
export declare class DisassociateDeviceFromRoomCommand extends $Command<DisassociateDeviceFromRoomCommandInput, DisassociateDeviceFromRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DisassociateDeviceFromRoomCommandInput;
    constructor(input: DisassociateDeviceFromRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDeviceFromRoomCommandInput, DisassociateDeviceFromRoomCommandOutput>;
    private serialize;
    private deserialize;
}
