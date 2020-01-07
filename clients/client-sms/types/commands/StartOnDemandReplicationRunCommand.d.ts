import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartOnDemandReplicationRunCommandInput = StartOnDemandReplicationRunRequest;
export declare type StartOnDemandReplicationRunCommandOutput = StartOnDemandReplicationRunResponse & __MetadataBearer;
export declare class StartOnDemandReplicationRunCommand extends $Command<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput, SMSClientResolvedConfig> {
    readonly input: StartOnDemandReplicationRunCommandInput;
    constructor(input: StartOnDemandReplicationRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput>;
    private serialize;
    private deserialize;
}
