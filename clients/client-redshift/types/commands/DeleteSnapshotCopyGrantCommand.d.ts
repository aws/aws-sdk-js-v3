import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotCopyGrantMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSnapshotCopyGrantCommandInput = DeleteSnapshotCopyGrantMessage;
export declare type DeleteSnapshotCopyGrantCommandOutput = __MetadataBearer;
export declare class DeleteSnapshotCopyGrantCommand extends $Command<DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteSnapshotCopyGrantCommandInput;
    constructor(input: DeleteSnapshotCopyGrantCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput>;
    private serialize;
    private deserialize;
}
