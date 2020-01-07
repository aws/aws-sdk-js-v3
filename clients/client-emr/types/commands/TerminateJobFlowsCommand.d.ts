import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { TerminateJobFlowsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateJobFlowsCommandInput = TerminateJobFlowsInput;
export declare type TerminateJobFlowsCommandOutput = __MetadataBearer;
export declare class TerminateJobFlowsCommand extends $Command<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput, EMRClientResolvedConfig> {
    readonly input: TerminateJobFlowsCommandInput;
    constructor(input: TerminateJobFlowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput>;
    private serialize;
    private deserialize;
}
