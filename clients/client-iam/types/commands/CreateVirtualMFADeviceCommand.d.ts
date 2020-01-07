import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateVirtualMFADeviceRequest, CreateVirtualMFADeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVirtualMFADeviceCommandInput = CreateVirtualMFADeviceRequest;
export declare type CreateVirtualMFADeviceCommandOutput = CreateVirtualMFADeviceResponse & __MetadataBearer;
export declare class CreateVirtualMFADeviceCommand extends $Command<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateVirtualMFADeviceCommandInput;
    constructor(input: CreateVirtualMFADeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
