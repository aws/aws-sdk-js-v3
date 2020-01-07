import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountClosedWorkflowExecutionsInput, WorkflowExecutionCount } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CountClosedWorkflowExecutionsCommandInput = CountClosedWorkflowExecutionsInput;
export declare type CountClosedWorkflowExecutionsCommandOutput = WorkflowExecutionCount & __MetadataBearer;
export declare class CountClosedWorkflowExecutionsCommand extends $Command<CountClosedWorkflowExecutionsCommandInput, CountClosedWorkflowExecutionsCommandOutput, SWFClientResolvedConfig> {
    readonly input: CountClosedWorkflowExecutionsCommandInput;
    constructor(input: CountClosedWorkflowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CountClosedWorkflowExecutionsCommandInput, CountClosedWorkflowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
