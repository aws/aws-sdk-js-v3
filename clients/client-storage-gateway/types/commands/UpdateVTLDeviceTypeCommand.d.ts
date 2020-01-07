import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVTLDeviceTypeCommandInput = UpdateVTLDeviceTypeInput;
export declare type UpdateVTLDeviceTypeCommandOutput = UpdateVTLDeviceTypeOutput & __MetadataBearer;
export declare class UpdateVTLDeviceTypeCommand extends $Command<UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateVTLDeviceTypeCommandInput;
    constructor(input: UpdateVTLDeviceTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput>;
    private serialize;
    private deserialize;
}
