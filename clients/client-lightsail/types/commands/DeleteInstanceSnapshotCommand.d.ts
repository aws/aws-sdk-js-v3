import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteInstanceSnapshotRequest, DeleteInstanceSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInstanceSnapshotCommandInput = DeleteInstanceSnapshotRequest;
export declare type DeleteInstanceSnapshotCommandOutput = DeleteInstanceSnapshotResult & __MetadataBearer;
export declare class DeleteInstanceSnapshotCommand extends $Command<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteInstanceSnapshotCommandInput;
    constructor(input: DeleteInstanceSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
