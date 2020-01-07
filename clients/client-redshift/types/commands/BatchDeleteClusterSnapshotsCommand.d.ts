import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteClusterSnapshotsCommandInput = BatchDeleteClusterSnapshotsRequest;
export declare type BatchDeleteClusterSnapshotsCommandOutput = BatchDeleteClusterSnapshotsResult & __MetadataBearer;
export declare class BatchDeleteClusterSnapshotsCommand extends $Command<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: BatchDeleteClusterSnapshotsCommandInput;
    constructor(input: BatchDeleteClusterSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
