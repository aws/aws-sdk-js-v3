import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSnapshotScheduleCommandInput = DeleteSnapshotScheduleInput;
export declare type DeleteSnapshotScheduleCommandOutput = DeleteSnapshotScheduleOutput & __MetadataBearer;
export declare class DeleteSnapshotScheduleCommand extends $Command<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteSnapshotScheduleCommandInput;
    constructor(input: DeleteSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
