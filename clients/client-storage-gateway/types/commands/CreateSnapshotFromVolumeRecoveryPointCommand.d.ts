import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateSnapshotFromVolumeRecoveryPointInput, CreateSnapshotFromVolumeRecoveryPointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotFromVolumeRecoveryPointCommandInput = CreateSnapshotFromVolumeRecoveryPointInput;
export declare type CreateSnapshotFromVolumeRecoveryPointCommandOutput = CreateSnapshotFromVolumeRecoveryPointOutput & __MetadataBearer;
export declare class CreateSnapshotFromVolumeRecoveryPointCommand extends $Command<CreateSnapshotFromVolumeRecoveryPointCommandInput, CreateSnapshotFromVolumeRecoveryPointCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateSnapshotFromVolumeRecoveryPointCommandInput;
    constructor(input: CreateSnapshotFromVolumeRecoveryPointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotFromVolumeRecoveryPointCommandInput, CreateSnapshotFromVolumeRecoveryPointCommandOutput>;
    private serialize;
    private deserialize;
}
