import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { Run, StartWorkflowExecutionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartWorkflowExecutionCommandInput = StartWorkflowExecutionInput;
export declare type StartWorkflowExecutionCommandOutput = Run & __MetadataBearer;
export declare class StartWorkflowExecutionCommand extends $Command<StartWorkflowExecutionCommandInput, StartWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: StartWorkflowExecutionCommandInput;
    constructor(input: StartWorkflowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartWorkflowExecutionCommandInput, StartWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
