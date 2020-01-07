import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceSnapshotsRequest, GetInstanceSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceSnapshotsCommandInput = GetInstanceSnapshotsRequest;
export declare type GetInstanceSnapshotsCommandOutput = GetInstanceSnapshotsResult & __MetadataBearer;
export declare class GetInstanceSnapshotsCommand extends $Command<GetInstanceSnapshotsCommandInput, GetInstanceSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceSnapshotsCommandInput;
    constructor(input: GetInstanceSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceSnapshotsCommandInput, GetInstanceSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
