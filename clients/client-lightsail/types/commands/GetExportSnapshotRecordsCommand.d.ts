import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetExportSnapshotRecordsRequest, GetExportSnapshotRecordsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetExportSnapshotRecordsCommandInput = GetExportSnapshotRecordsRequest;
export declare type GetExportSnapshotRecordsCommandOutput = GetExportSnapshotRecordsResult & __MetadataBearer;
export declare class GetExportSnapshotRecordsCommand extends $Command<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetExportSnapshotRecordsCommandInput;
    constructor(input: GetExportSnapshotRecordsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
