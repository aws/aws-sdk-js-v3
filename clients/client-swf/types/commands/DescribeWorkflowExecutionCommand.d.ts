import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DescribeWorkflowExecutionInput, WorkflowExecutionDetail } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkflowExecutionCommandInput = DescribeWorkflowExecutionInput;
export declare type DescribeWorkflowExecutionCommandOutput = WorkflowExecutionDetail & __MetadataBearer;
export declare class DescribeWorkflowExecutionCommand extends $Command<DescribeWorkflowExecutionCommandInput, DescribeWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: DescribeWorkflowExecutionCommandInput;
    constructor(input: DescribeWorkflowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkflowExecutionCommandInput, DescribeWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
