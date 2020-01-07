import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVPCEConfigurationCommandInput = UpdateVPCEConfigurationRequest;
export declare type UpdateVPCEConfigurationCommandOutput = UpdateVPCEConfigurationResult & __MetadataBearer;
export declare class UpdateVPCEConfigurationCommand extends $Command<UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateVPCEConfigurationCommandInput;
    constructor(input: UpdateVPCEConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
