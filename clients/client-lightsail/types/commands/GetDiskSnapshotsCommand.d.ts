import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskSnapshotsRequest, GetDiskSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDiskSnapshotsCommandInput = GetDiskSnapshotsRequest;
export declare type GetDiskSnapshotsCommandOutput = GetDiskSnapshotsResult & __MetadataBearer;
export declare class GetDiskSnapshotsCommand extends $Command<GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDiskSnapshotsCommandInput;
    constructor(input: GetDiskSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
