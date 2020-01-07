import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ScheduleKeyDeletionRequest, ScheduleKeyDeletionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ScheduleKeyDeletionCommandInput = ScheduleKeyDeletionRequest;
export declare type ScheduleKeyDeletionCommandOutput = ScheduleKeyDeletionResponse & __MetadataBearer;
export declare class ScheduleKeyDeletionCommand extends $Command<ScheduleKeyDeletionCommandInput, ScheduleKeyDeletionCommandOutput, KMSClientResolvedConfig> {
    readonly input: ScheduleKeyDeletionCommandInput;
    constructor(input: ScheduleKeyDeletionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScheduleKeyDeletionCommandInput, ScheduleKeyDeletionCommandOutput>;
    private serialize;
    private deserialize;
}
