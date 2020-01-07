import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCachediSCSIVolumeCommandInput = CreateCachediSCSIVolumeInput;
export declare type CreateCachediSCSIVolumeCommandOutput = CreateCachediSCSIVolumeOutput & __MetadataBearer;
export declare class CreateCachediSCSIVolumeCommand extends $Command<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateCachediSCSIVolumeCommandInput;
    constructor(input: CreateCachediSCSIVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
