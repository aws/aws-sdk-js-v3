import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateDevicePoolRequest, CreateDevicePoolResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDevicePoolCommandInput = CreateDevicePoolRequest;
export declare type CreateDevicePoolCommandOutput = CreateDevicePoolResult & __MetadataBearer;
export declare class CreateDevicePoolCommand extends $Command<CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateDevicePoolCommandInput;
    constructor(input: CreateDevicePoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
