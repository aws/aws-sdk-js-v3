import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RunJobFlowInput, RunJobFlowOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RunJobFlowCommandInput = RunJobFlowInput;
export declare type RunJobFlowCommandOutput = RunJobFlowOutput & __MetadataBearer;
export declare class RunJobFlowCommand extends $Command<RunJobFlowCommandInput, RunJobFlowCommandOutput, EMRClientResolvedConfig> {
    readonly input: RunJobFlowCommandInput;
    constructor(input: RunJobFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunJobFlowCommandInput, RunJobFlowCommandOutput>;
    private serialize;
    private deserialize;
}
