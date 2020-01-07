import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateInstanceProfileRequest, UpdateInstanceProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateInstanceProfileCommandInput = UpdateInstanceProfileRequest;
export declare type UpdateInstanceProfileCommandOutput = UpdateInstanceProfileResult & __MetadataBearer;
export declare class UpdateInstanceProfileCommand extends $Command<UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateInstanceProfileCommandInput;
    constructor(input: UpdateInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
