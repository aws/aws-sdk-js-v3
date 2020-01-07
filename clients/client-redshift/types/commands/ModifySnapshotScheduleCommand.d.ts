import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifySnapshotScheduleMessage, SnapshotSchedule } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifySnapshotScheduleCommandInput = ModifySnapshotScheduleMessage;
export declare type ModifySnapshotScheduleCommandOutput = SnapshotSchedule & __MetadataBearer;
export declare class ModifySnapshotScheduleCommand extends $Command<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifySnapshotScheduleCommandInput;
    constructor(input: ModifySnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
