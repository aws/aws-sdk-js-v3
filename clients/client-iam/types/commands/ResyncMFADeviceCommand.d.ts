import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResyncMFADeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResyncMFADeviceCommandInput = ResyncMFADeviceRequest;
export declare type ResyncMFADeviceCommandOutput = __MetadataBearer;
export declare class ResyncMFADeviceCommand extends $Command<ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: ResyncMFADeviceCommandInput;
    constructor(input: ResyncMFADeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
