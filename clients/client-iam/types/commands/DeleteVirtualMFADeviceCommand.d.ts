import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteVirtualMFADeviceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVirtualMFADeviceCommandInput = DeleteVirtualMFADeviceRequest;
export declare type DeleteVirtualMFADeviceCommandOutput = __MetadataBearer;
export declare class DeleteVirtualMFADeviceCommand extends $Command<DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteVirtualMFADeviceCommandInput;
    constructor(input: DeleteVirtualMFADeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput>;
    private serialize;
    private deserialize;
}
