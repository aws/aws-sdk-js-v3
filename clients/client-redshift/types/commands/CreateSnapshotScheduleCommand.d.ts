import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotScheduleCommandInput = CreateSnapshotScheduleMessage;
export declare type CreateSnapshotScheduleCommandOutput = SnapshotSchedule & __MetadataBearer;
export declare class CreateSnapshotScheduleCommand extends $Command<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateSnapshotScheduleCommandInput;
    constructor(input: CreateSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
