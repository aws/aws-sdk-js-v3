import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RestoreTableFromClusterSnapshotMessage, RestoreTableFromClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreTableFromClusterSnapshotCommandInput = RestoreTableFromClusterSnapshotMessage;
export declare type RestoreTableFromClusterSnapshotCommandOutput = RestoreTableFromClusterSnapshotResult & __MetadataBearer;
export declare class RestoreTableFromClusterSnapshotCommand extends $Command<RestoreTableFromClusterSnapshotCommandInput, RestoreTableFromClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RestoreTableFromClusterSnapshotCommandInput;
    constructor(input: RestoreTableFromClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreTableFromClusterSnapshotCommandInput, RestoreTableFromClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
