import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { ListApplicationSnapshotsRequest, ListApplicationSnapshotsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationSnapshotsCommandInput = ListApplicationSnapshotsRequest;
export declare type ListApplicationSnapshotsCommandOutput = ListApplicationSnapshotsResponse & __MetadataBearer;
export declare class ListApplicationSnapshotsCommand extends $Command<ListApplicationSnapshotsCommandInput, ListApplicationSnapshotsCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: ListApplicationSnapshotsCommandInput;
    constructor(input: ListApplicationSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationSnapshotsCommandInput, ListApplicationSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
