import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ScheduleRunRequest, ScheduleRunResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ScheduleRunCommandInput = ScheduleRunRequest;
export declare type ScheduleRunCommandOutput = ScheduleRunResult & __MetadataBearer;
export declare class ScheduleRunCommand extends $Command<ScheduleRunCommandInput, ScheduleRunCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ScheduleRunCommandInput;
    constructor(input: ScheduleRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScheduleRunCommandInput, ScheduleRunCommandOutput>;
    private serialize;
    private deserialize;
}
