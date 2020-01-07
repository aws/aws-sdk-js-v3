import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteDevicePoolRequest, DeleteDevicePoolResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDevicePoolCommandInput = DeleteDevicePoolRequest;
export declare type DeleteDevicePoolCommandOutput = DeleteDevicePoolResult & __MetadataBearer;
export declare class DeleteDevicePoolCommand extends $Command<DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteDevicePoolCommandInput;
    constructor(input: DeleteDevicePoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
