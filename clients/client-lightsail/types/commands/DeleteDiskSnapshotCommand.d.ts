import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDiskSnapshotRequest, DeleteDiskSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDiskSnapshotCommandInput = DeleteDiskSnapshotRequest;
export declare type DeleteDiskSnapshotCommandOutput = DeleteDiskSnapshotResult & __MetadataBearer;
export declare class DeleteDiskSnapshotCommand extends $Command<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDiskSnapshotCommandInput;
    constructor(input: DeleteDiskSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
