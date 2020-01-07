import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ClaimDevicesByClaimCodeCommandInput = ClaimDevicesByClaimCodeRequest;
export declare type ClaimDevicesByClaimCodeCommandOutput = ClaimDevicesByClaimCodeResponse & __MetadataBearer;
export declare class ClaimDevicesByClaimCodeCommand extends $Command<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: ClaimDevicesByClaimCodeCommandInput;
    constructor(input: ClaimDevicesByClaimCodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput>;
    private serialize;
    private deserialize;
}
