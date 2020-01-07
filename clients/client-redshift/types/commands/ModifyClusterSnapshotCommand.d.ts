import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterSnapshotCommandInput = ModifyClusterSnapshotMessage;
export declare type ModifyClusterSnapshotCommandOutput = ModifyClusterSnapshotResult & __MetadataBearer;
export declare class ModifyClusterSnapshotCommand extends $Command<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterSnapshotCommandInput;
    constructor(input: ModifyClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
