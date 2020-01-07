import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskSnapshotRequest, CreateDiskSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDiskSnapshotCommandInput = CreateDiskSnapshotRequest;
export declare type CreateDiskSnapshotCommandOutput = CreateDiskSnapshotResult & __MetadataBearer;
export declare class CreateDiskSnapshotCommand extends $Command<CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDiskSnapshotCommandInput;
    constructor(input: CreateDiskSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
