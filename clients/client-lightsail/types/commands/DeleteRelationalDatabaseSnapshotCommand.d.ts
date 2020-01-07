import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteRelationalDatabaseSnapshotRequest, DeleteRelationalDatabaseSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRelationalDatabaseSnapshotCommandInput = DeleteRelationalDatabaseSnapshotRequest;
export declare type DeleteRelationalDatabaseSnapshotCommandOutput = DeleteRelationalDatabaseSnapshotResult & __MetadataBearer;
export declare class DeleteRelationalDatabaseSnapshotCommand extends $Command<DeleteRelationalDatabaseSnapshotCommandInput, DeleteRelationalDatabaseSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteRelationalDatabaseSnapshotCommandInput;
    constructor(input: DeleteRelationalDatabaseSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRelationalDatabaseSnapshotCommandInput, DeleteRelationalDatabaseSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
