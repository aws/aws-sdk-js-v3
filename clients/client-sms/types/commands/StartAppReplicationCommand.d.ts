import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartAppReplicationRequest, StartAppReplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAppReplicationCommandInput = StartAppReplicationRequest;
export declare type StartAppReplicationCommandOutput = StartAppReplicationResponse & __MetadataBearer;
export declare class StartAppReplicationCommand extends $Command<StartAppReplicationCommandInput, StartAppReplicationCommandOutput, SMSClientResolvedConfig> {
    readonly input: StartAppReplicationCommandInput;
    constructor(input: StartAppReplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAppReplicationCommandInput, StartAppReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
