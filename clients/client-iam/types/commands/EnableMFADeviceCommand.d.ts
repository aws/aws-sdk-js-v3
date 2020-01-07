import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { EnableMFADeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableMFADeviceCommandInput = EnableMFADeviceRequest;
export declare type EnableMFADeviceCommandOutput = __MetadataBearer;
export declare class EnableMFADeviceCommand extends $Command<EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: EnableMFADeviceCommandInput;
    constructor(input: EnableMFADeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
