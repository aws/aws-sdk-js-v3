import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StopAppReplicationRequest, StopAppReplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopAppReplicationCommandInput = StopAppReplicationRequest;
export declare type StopAppReplicationCommandOutput = StopAppReplicationResponse & __MetadataBearer;
export declare class StopAppReplicationCommand extends $Command<StopAppReplicationCommandInput, StopAppReplicationCommandOutput, SMSClientResolvedConfig> {
    readonly input: StopAppReplicationCommandInput;
    constructor(input: StopAppReplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAppReplicationCommandInput, StopAppReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
