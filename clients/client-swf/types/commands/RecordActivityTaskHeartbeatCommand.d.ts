import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTaskStatus, RecordActivityTaskHeartbeatInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RecordActivityTaskHeartbeatCommandInput = RecordActivityTaskHeartbeatInput;
export declare type RecordActivityTaskHeartbeatCommandOutput = ActivityTaskStatus & __MetadataBearer;
export declare class RecordActivityTaskHeartbeatCommand extends $Command<RecordActivityTaskHeartbeatCommandInput, RecordActivityTaskHeartbeatCommandOutput, SWFClientResolvedConfig> {
    readonly input: RecordActivityTaskHeartbeatCommandInput;
    constructor(input: RecordActivityTaskHeartbeatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecordActivityTaskHeartbeatCommandInput, RecordActivityTaskHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
