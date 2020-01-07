import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateRelationalDatabaseSnapshotRequest, CreateRelationalDatabaseSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRelationalDatabaseSnapshotCommandInput = CreateRelationalDatabaseSnapshotRequest;
export declare type CreateRelationalDatabaseSnapshotCommandOutput = CreateRelationalDatabaseSnapshotResult & __MetadataBearer;
export declare class CreateRelationalDatabaseSnapshotCommand extends $Command<CreateRelationalDatabaseSnapshotCommandInput, CreateRelationalDatabaseSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateRelationalDatabaseSnapshotCommandInput;
    constructor(input: CreateRelationalDatabaseSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRelationalDatabaseSnapshotCommandInput, CreateRelationalDatabaseSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
