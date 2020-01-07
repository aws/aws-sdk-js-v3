import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CopyClusterSnapshotMessage, CopyClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyClusterSnapshotCommandInput = CopyClusterSnapshotMessage;
export declare type CopyClusterSnapshotCommandOutput = CopyClusterSnapshotResult & __MetadataBearer;
export declare class CopyClusterSnapshotCommand extends $Command<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CopyClusterSnapshotCommandInput;
    constructor(input: CopyClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
