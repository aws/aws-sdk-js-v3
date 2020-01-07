import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableFastSnapshotRestoresRequest, DisableFastSnapshotRestoresResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableFastSnapshotRestoresCommandInput = DisableFastSnapshotRestoresRequest;
export declare type DisableFastSnapshotRestoresCommandOutput = DisableFastSnapshotRestoresResult & __MetadataBearer;
export declare class DisableFastSnapshotRestoresCommand extends $Command<DisableFastSnapshotRestoresCommandInput, DisableFastSnapshotRestoresCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableFastSnapshotRestoresCommandInput;
    constructor(input: DisableFastSnapshotRestoresCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableFastSnapshotRestoresCommandInput, DisableFastSnapshotRestoresCommandOutput>;
    private serialize;
    private deserialize;
}
