import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateVPCEConfigurationRequest, CreateVPCEConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVPCEConfigurationCommandInput = CreateVPCEConfigurationRequest;
export declare type CreateVPCEConfigurationCommandOutput = CreateVPCEConfigurationResult & __MetadataBearer;
export declare class CreateVPCEConfigurationCommand extends $Command<CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateVPCEConfigurationCommandInput;
    constructor(input: CreateVPCEConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
