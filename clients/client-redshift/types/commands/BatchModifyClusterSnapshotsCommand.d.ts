import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchModifyClusterSnapshotsCommandInput = BatchModifyClusterSnapshotsMessage;
export declare type BatchModifyClusterSnapshotsCommandOutput = BatchModifyClusterSnapshotsOutputMessage & __MetadataBearer;
export declare class BatchModifyClusterSnapshotsCommand extends $Command<BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: BatchModifyClusterSnapshotsCommandInput;
    constructor(input: BatchModifyClusterSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
