import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetVPCEConfigurationRequest, GetVPCEConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetVPCEConfigurationCommandInput = GetVPCEConfigurationRequest;
export declare type GetVPCEConfigurationCommandOutput = GetVPCEConfigurationResult & __MetadataBearer;
export declare class GetVPCEConfigurationCommand extends $Command<GetVPCEConfigurationCommandInput, GetVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetVPCEConfigurationCommandInput;
    constructor(input: GetVPCEConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVPCEConfigurationCommandInput, GetVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
