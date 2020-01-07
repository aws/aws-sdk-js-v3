import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFastSnapshotRestoresRequest, DescribeFastSnapshotRestoresResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFastSnapshotRestoresCommandInput = DescribeFastSnapshotRestoresRequest;
export declare type DescribeFastSnapshotRestoresCommandOutput = DescribeFastSnapshotRestoresResult & __MetadataBearer;
export declare class DescribeFastSnapshotRestoresCommand extends $Command<DescribeFastSnapshotRestoresCommandInput, DescribeFastSnapshotRestoresCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFastSnapshotRestoresCommandInput;
    constructor(input: DescribeFastSnapshotRestoresCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFastSnapshotRestoresCommandInput, DescribeFastSnapshotRestoresCommandOutput>;
    private serialize;
    private deserialize;
}
