import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { InitiateDeviceClaimRequest, InitiateDeviceClaimResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InitiateDeviceClaimCommandInput = InitiateDeviceClaimRequest;
export declare type InitiateDeviceClaimCommandOutput = InitiateDeviceClaimResponse & __MetadataBearer;
export declare class InitiateDeviceClaimCommand extends $Command<InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: InitiateDeviceClaimCommandInput;
    constructor(input: InitiateDeviceClaimCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput>;
    private serialize;
    private deserialize;
}
