import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteVPCEConfigurationRequest, DeleteVPCEConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVPCEConfigurationCommandInput = DeleteVPCEConfigurationRequest;
export declare type DeleteVPCEConfigurationCommandOutput = DeleteVPCEConfigurationResult & __MetadataBearer;
export declare class DeleteVPCEConfigurationCommand extends $Command<DeleteVPCEConfigurationCommandInput, DeleteVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteVPCEConfigurationCommandInput;
    constructor(input: DeleteVPCEConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVPCEConfigurationCommandInput, DeleteVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
