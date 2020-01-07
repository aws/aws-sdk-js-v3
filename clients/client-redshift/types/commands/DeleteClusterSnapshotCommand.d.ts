import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterSnapshotMessage, DeleteClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterSnapshotCommandInput = DeleteClusterSnapshotMessage;
export declare type DeleteClusterSnapshotCommandOutput = DeleteClusterSnapshotResult & __MetadataBearer;
export declare class DeleteClusterSnapshotCommand extends $Command<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterSnapshotCommandInput;
    constructor(input: DeleteClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
