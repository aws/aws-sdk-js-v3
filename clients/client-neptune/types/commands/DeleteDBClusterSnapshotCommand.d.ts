import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBClusterSnapshotCommandInput = DeleteDBClusterSnapshotMessage;
export declare type DeleteDBClusterSnapshotCommandOutput = DeleteDBClusterSnapshotResult & __MetadataBearer;
export declare class DeleteDBClusterSnapshotCommand extends $Command<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBClusterSnapshotCommandInput;
    constructor(input: DeleteDBClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
