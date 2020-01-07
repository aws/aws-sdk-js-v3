import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { TerminateWorkflowExecutionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateWorkflowExecutionCommandInput = TerminateWorkflowExecutionInput;
export declare type TerminateWorkflowExecutionCommandOutput = __MetadataBearer;
export declare class TerminateWorkflowExecutionCommand extends $Command<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: TerminateWorkflowExecutionCommandInput;
    constructor(input: TerminateWorkflowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
