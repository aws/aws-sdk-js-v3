import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { SignalWorkflowExecutionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SignalWorkflowExecutionCommandInput = SignalWorkflowExecutionInput;
export declare type SignalWorkflowExecutionCommandOutput = __MetadataBearer;
export declare class SignalWorkflowExecutionCommand extends $Command<SignalWorkflowExecutionCommandInput, SignalWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: SignalWorkflowExecutionCommandInput;
    constructor(input: SignalWorkflowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignalWorkflowExecutionCommandInput, SignalWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
