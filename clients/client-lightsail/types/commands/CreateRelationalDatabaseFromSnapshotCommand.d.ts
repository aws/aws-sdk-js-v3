import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateRelationalDatabaseFromSnapshotRequest, CreateRelationalDatabaseFromSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRelationalDatabaseFromSnapshotCommandInput = CreateRelationalDatabaseFromSnapshotRequest;
export declare type CreateRelationalDatabaseFromSnapshotCommandOutput = CreateRelationalDatabaseFromSnapshotResult & __MetadataBearer;
export declare class CreateRelationalDatabaseFromSnapshotCommand extends $Command<CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateRelationalDatabaseFromSnapshotCommandInput;
    constructor(input: CreateRelationalDatabaseFromSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
