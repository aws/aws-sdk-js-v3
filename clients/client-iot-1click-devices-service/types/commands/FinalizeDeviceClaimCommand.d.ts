import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type FinalizeDeviceClaimCommandInput = FinalizeDeviceClaimRequest;
export declare type FinalizeDeviceClaimCommandOutput = FinalizeDeviceClaimResponse & __MetadataBearer;
export declare class FinalizeDeviceClaimCommand extends $Command<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: FinalizeDeviceClaimCommandInput;
    constructor(input: FinalizeDeviceClaimCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput>;
    private serialize;
    private deserialize;
}
