import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationSnapshotCommandInput = DeleteApplicationSnapshotRequest;
export declare type DeleteApplicationSnapshotCommandOutput = DeleteApplicationSnapshotResponse & __MetadataBearer;
export declare class DeleteApplicationSnapshotCommand extends $Command<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationSnapshotCommandInput;
    constructor(input: DeleteApplicationSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
