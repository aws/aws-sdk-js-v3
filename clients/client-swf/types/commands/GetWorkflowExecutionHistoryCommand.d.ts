import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { GetWorkflowExecutionHistoryInput, History } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkflowExecutionHistoryCommandInput = GetWorkflowExecutionHistoryInput;
export declare type GetWorkflowExecutionHistoryCommandOutput = History & __MetadataBearer;
export declare class GetWorkflowExecutionHistoryCommand extends $Command<GetWorkflowExecutionHistoryCommandInput, GetWorkflowExecutionHistoryCommandOutput, SWFClientResolvedConfig> {
    readonly input: GetWorkflowExecutionHistoryCommandInput;
    constructor(input: GetWorkflowExecutionHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowExecutionHistoryCommandInput, GetWorkflowExecutionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
