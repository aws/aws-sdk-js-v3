import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteAutoSnapshotRequest, DeleteAutoSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAutoSnapshotCommandInput = DeleteAutoSnapshotRequest;
export declare type DeleteAutoSnapshotCommandOutput = DeleteAutoSnapshotResult & __MetadataBearer;
export declare class DeleteAutoSnapshotCommand extends $Command<DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteAutoSnapshotCommandInput;
    constructor(input: DeleteAutoSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
