import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifySnapshotCopyRetentionPeriodMessage, ModifySnapshotCopyRetentionPeriodResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySnapshotCopyRetentionPeriodCommandInput = ModifySnapshotCopyRetentionPeriodMessage;
export declare type ModifySnapshotCopyRetentionPeriodCommandOutput = ModifySnapshotCopyRetentionPeriodResult & __MetadataBearer;
export declare class ModifySnapshotCopyRetentionPeriodCommand extends $Command<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifySnapshotCopyRetentionPeriodCommandInput;
    constructor(input: ModifySnapshotCopyRetentionPeriodCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput>;
    private serialize;
    private deserialize;
}
