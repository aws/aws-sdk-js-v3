import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBClusterSnapshotCommandInput = DeleteDBClusterSnapshotMessage;
export declare type DeleteDBClusterSnapshotCommandOutput = DeleteDBClusterSnapshotResult & __MetadataBearer;
export declare class DeleteDBClusterSnapshotCommand extends $Command<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBClusterSnapshotCommandInput;
    constructor(input: DeleteDBClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
