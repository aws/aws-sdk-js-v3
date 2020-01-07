import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DisableSnapshotCopyMessage, DisableSnapshotCopyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableSnapshotCopyCommandInput = DisableSnapshotCopyMessage;
export declare type DisableSnapshotCopyCommandOutput = DisableSnapshotCopyResult & __MetadataBearer;
export declare class DisableSnapshotCopyCommand extends $Command<DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DisableSnapshotCopyCommandInput;
    constructor(input: DisableSnapshotCopyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput>;
    private serialize;
    private deserialize;
}
