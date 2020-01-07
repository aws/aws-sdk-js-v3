import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreFromClusterSnapshotCommandInput = RestoreFromClusterSnapshotMessage;
export declare type RestoreFromClusterSnapshotCommandOutput = RestoreFromClusterSnapshotResult & __MetadataBearer;
export declare class RestoreFromClusterSnapshotCommand extends $Command<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RestoreFromClusterSnapshotCommandInput;
    constructor(input: RestoreFromClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
