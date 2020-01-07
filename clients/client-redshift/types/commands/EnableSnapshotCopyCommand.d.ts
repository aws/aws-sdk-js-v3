import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EnableSnapshotCopyMessage, EnableSnapshotCopyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableSnapshotCopyCommandInput = EnableSnapshotCopyMessage;
export declare type EnableSnapshotCopyCommandOutput = EnableSnapshotCopyResult & __MetadataBearer;
export declare class EnableSnapshotCopyCommand extends $Command<EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: EnableSnapshotCopyCommandInput;
    constructor(input: EnableSnapshotCopyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput>;
    private serialize;
    private deserialize;
}
