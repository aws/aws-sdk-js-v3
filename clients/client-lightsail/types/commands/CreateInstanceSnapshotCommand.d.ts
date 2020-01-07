import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateInstanceSnapshotRequest, CreateInstanceSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstanceSnapshotCommandInput = CreateInstanceSnapshotRequest;
export declare type CreateInstanceSnapshotCommandOutput = CreateInstanceSnapshotResult & __MetadataBearer;
export declare class CreateInstanceSnapshotCommand extends $Command<CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateInstanceSnapshotCommandInput;
    constructor(input: CreateInstanceSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
