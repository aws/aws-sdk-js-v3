import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotScheduleMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSnapshotScheduleCommandInput = DeleteSnapshotScheduleMessage;
export declare type DeleteSnapshotScheduleCommandOutput = __MetadataBearer;
export declare class DeleteSnapshotScheduleCommand extends $Command<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteSnapshotScheduleCommandInput;
    constructor(input: DeleteSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
