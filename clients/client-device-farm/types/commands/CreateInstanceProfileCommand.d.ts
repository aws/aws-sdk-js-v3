import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateInstanceProfileRequest, CreateInstanceProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstanceProfileCommandInput = CreateInstanceProfileRequest;
export declare type CreateInstanceProfileCommandOutput = CreateInstanceProfileResult & __MetadataBearer;
export declare class CreateInstanceProfileCommand extends $Command<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateInstanceProfileCommandInput;
    constructor(input: CreateInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
