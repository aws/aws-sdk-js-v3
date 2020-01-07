import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBSnapshotMessage, DeleteDBSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBSnapshotCommandInput = DeleteDBSnapshotMessage;
export declare type DeleteDBSnapshotCommandOutput = DeleteDBSnapshotResult & __MetadataBearer;
export declare class DeleteDBSnapshotCommand extends $Command<DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBSnapshotCommandInput;
    constructor(input: DeleteDBSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
