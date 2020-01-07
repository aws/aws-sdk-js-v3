import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RegisterAVSDeviceRequest, RegisterAVSDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterAVSDeviceCommandInput = RegisterAVSDeviceRequest;
export declare type RegisterAVSDeviceCommandOutput = RegisterAVSDeviceResponse & __MetadataBearer;
export declare class RegisterAVSDeviceCommand extends $Command<RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: RegisterAVSDeviceCommandInput;
    constructor(input: RegisterAVSDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
