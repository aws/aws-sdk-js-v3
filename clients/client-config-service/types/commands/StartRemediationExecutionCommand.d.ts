import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartRemediationExecutionRequest, StartRemediationExecutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartRemediationExecutionCommandInput = StartRemediationExecutionRequest;
export declare type StartRemediationExecutionCommandOutput = StartRemediationExecutionResponse & __MetadataBearer;
export declare class StartRemediationExecutionCommand extends $Command<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StartRemediationExecutionCommandInput;
    constructor(input: StartRemediationExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
