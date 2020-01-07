import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { CreateApplicationSnapshotRequest, CreateApplicationSnapshotResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApplicationSnapshotCommandInput = CreateApplicationSnapshotRequest;
export declare type CreateApplicationSnapshotCommandOutput = CreateApplicationSnapshotResponse & __MetadataBearer;
export declare class CreateApplicationSnapshotCommand extends $Command<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: CreateApplicationSnapshotCommandInput;
    constructor(input: CreateApplicationSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationSnapshotCommandInput, CreateApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
