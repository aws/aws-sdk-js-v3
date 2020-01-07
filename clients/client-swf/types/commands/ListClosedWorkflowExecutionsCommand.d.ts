import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ListClosedWorkflowExecutionsInput, WorkflowExecutionInfos } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListClosedWorkflowExecutionsCommandInput = ListClosedWorkflowExecutionsInput;
export declare type ListClosedWorkflowExecutionsCommandOutput = WorkflowExecutionInfos & __MetadataBearer;
export declare class ListClosedWorkflowExecutionsCommand extends $Command<ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput, SWFClientResolvedConfig> {
    readonly input: ListClosedWorkflowExecutionsCommandInput;
    constructor(input: ListClosedWorkflowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
