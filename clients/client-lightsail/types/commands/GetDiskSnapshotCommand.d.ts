import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskSnapshotRequest, GetDiskSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDiskSnapshotCommandInput = GetDiskSnapshotRequest;
export declare type GetDiskSnapshotCommandOutput = GetDiskSnapshotResult & __MetadataBearer;
export declare class GetDiskSnapshotCommand extends $Command<GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDiskSnapshotCommandInput;
    constructor(input: GetDiskSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
