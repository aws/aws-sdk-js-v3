import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteSnapshotRequest, DeleteSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSnapshotCommandInput = DeleteSnapshotRequest;
export declare type DeleteSnapshotCommandOutput = DeleteSnapshotResult & __MetadataBearer;
export declare class DeleteSnapshotCommand extends $Command<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteSnapshotCommandInput;
    constructor(input: DeleteSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
