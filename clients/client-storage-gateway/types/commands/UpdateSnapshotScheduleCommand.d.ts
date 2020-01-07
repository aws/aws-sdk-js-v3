import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSnapshotScheduleCommandInput = UpdateSnapshotScheduleInput;
export declare type UpdateSnapshotScheduleCommandOutput = UpdateSnapshotScheduleOutput & __MetadataBearer;
export declare class UpdateSnapshotScheduleCommand extends $Command<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateSnapshotScheduleCommandInput;
    constructor(input: UpdateSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
