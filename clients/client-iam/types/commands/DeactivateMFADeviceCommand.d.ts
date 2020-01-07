import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeactivateMFADeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeactivateMFADeviceCommandInput = DeactivateMFADeviceRequest;
export declare type DeactivateMFADeviceCommandOutput = __MetadataBearer;
export declare class DeactivateMFADeviceCommand extends $Command<DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeactivateMFADeviceCommandInput;
    constructor(input: DeactivateMFADeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
