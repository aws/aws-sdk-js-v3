import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskFromSnapshotRequest, CreateDiskFromSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDiskFromSnapshotCommandInput = CreateDiskFromSnapshotRequest;
export declare type CreateDiskFromSnapshotCommandOutput = CreateDiskFromSnapshotResult & __MetadataBearer;
export declare class CreateDiskFromSnapshotCommand extends $Command<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDiskFromSnapshotCommandInput;
    constructor(input: CreateDiskFromSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
