import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceSnapshotRequest, GetInstanceSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceSnapshotCommandInput = GetInstanceSnapshotRequest;
export declare type GetInstanceSnapshotCommandOutput = GetInstanceSnapshotResult & __MetadataBearer;
export declare class GetInstanceSnapshotCommand extends $Command<GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceSnapshotCommandInput;
    constructor(input: GetInstanceSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
