import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSnapshotScheduleMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterSnapshotScheduleCommandInput = ModifyClusterSnapshotScheduleMessage;
export declare type ModifyClusterSnapshotScheduleCommandOutput = __MetadataBearer;
export declare class ModifyClusterSnapshotScheduleCommand extends $Command<ModifyClusterSnapshotScheduleCommandInput, ModifyClusterSnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterSnapshotScheduleCommandInput;
    constructor(input: ModifyClusterSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterSnapshotScheduleCommandInput, ModifyClusterSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
