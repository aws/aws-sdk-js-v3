import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ListOpenWorkflowExecutionsInput, WorkflowExecutionInfos } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOpenWorkflowExecutionsCommandInput = ListOpenWorkflowExecutionsInput;
export declare type ListOpenWorkflowExecutionsCommandOutput = WorkflowExecutionInfos & __MetadataBearer;
export declare class ListOpenWorkflowExecutionsCommand extends $Command<ListOpenWorkflowExecutionsCommandInput, ListOpenWorkflowExecutionsCommandOutput, SWFClientResolvedConfig> {
    readonly input: ListOpenWorkflowExecutionsCommandInput;
    constructor(input: ListOpenWorkflowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpenWorkflowExecutionsCommandInput, ListOpenWorkflowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
