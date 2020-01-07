import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyDBClusterSnapshotCommandInput = CopyDBClusterSnapshotMessage;
export declare type CopyDBClusterSnapshotCommandOutput = CopyDBClusterSnapshotResult & __MetadataBearer;
export declare class CopyDBClusterSnapshotCommand extends $Command<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CopyDBClusterSnapshotCommandInput;
    constructor(input: CopyDBClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
