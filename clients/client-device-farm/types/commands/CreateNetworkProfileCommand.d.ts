import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateNetworkProfileRequest, CreateNetworkProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNetworkProfileCommandInput = CreateNetworkProfileRequest;
export declare type CreateNetworkProfileCommandOutput = CreateNetworkProfileResult & __MetadataBearer;
export declare class CreateNetworkProfileCommand extends $Command<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateNetworkProfileCommandInput;
    constructor(input: CreateNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
