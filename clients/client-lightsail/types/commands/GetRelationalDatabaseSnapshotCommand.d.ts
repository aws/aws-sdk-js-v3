import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseSnapshotRequest, GetRelationalDatabaseSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseSnapshotCommandInput = GetRelationalDatabaseSnapshotRequest;
export declare type GetRelationalDatabaseSnapshotCommandOutput = GetRelationalDatabaseSnapshotResult & __MetadataBearer;
export declare class GetRelationalDatabaseSnapshotCommand extends $Command<GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseSnapshotCommandInput;
    constructor(input: GetRelationalDatabaseSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
