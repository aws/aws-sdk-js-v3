import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateInstancesFromSnapshotRequest, CreateInstancesFromSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateInstancesFromSnapshotCommandInput = CreateInstancesFromSnapshotRequest;
export declare type CreateInstancesFromSnapshotCommandOutput = CreateInstancesFromSnapshotResult & __MetadataBearer;
export declare class CreateInstancesFromSnapshotCommand extends $Command<CreateInstancesFromSnapshotCommandInput, CreateInstancesFromSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateInstancesFromSnapshotCommandInput;
    constructor(input: CreateInstancesFromSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstancesFromSnapshotCommandInput, CreateInstancesFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
