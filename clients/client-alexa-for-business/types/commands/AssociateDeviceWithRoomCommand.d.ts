import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateDeviceWithRoomRequest, AssociateDeviceWithRoomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDeviceWithRoomCommandInput = AssociateDeviceWithRoomRequest;
export declare type AssociateDeviceWithRoomCommandOutput = AssociateDeviceWithRoomResponse & __MetadataBearer;
export declare class AssociateDeviceWithRoomCommand extends $Command<AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateDeviceWithRoomCommandInput;
    constructor(input: AssociateDeviceWithRoomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput>;
    private serialize;
    private deserialize;
}
