import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { RecordLifecycleActionHeartbeatAnswer, RecordLifecycleActionHeartbeatType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RecordLifecycleActionHeartbeatCommandInput = RecordLifecycleActionHeartbeatType;
export declare type RecordLifecycleActionHeartbeatCommandOutput = RecordLifecycleActionHeartbeatAnswer & __MetadataBearer;
export declare class RecordLifecycleActionHeartbeatCommand extends $Command<RecordLifecycleActionHeartbeatCommandInput, RecordLifecycleActionHeartbeatCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: RecordLifecycleActionHeartbeatCommandInput;
    constructor(input: RecordLifecycleActionHeartbeatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecordLifecycleActionHeartbeatCommandInput, RecordLifecycleActionHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
