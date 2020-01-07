import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DescribeWorkflowTypeInput, WorkflowTypeDetail } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkflowTypeCommandInput = DescribeWorkflowTypeInput;
export declare type DescribeWorkflowTypeCommandOutput = WorkflowTypeDetail & __MetadataBearer;
export declare class DescribeWorkflowTypeCommand extends $Command<DescribeWorkflowTypeCommandInput, DescribeWorkflowTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: DescribeWorkflowTypeCommandInput;
    constructor(input: DescribeWorkflowTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkflowTypeCommandInput, DescribeWorkflowTypeCommandOutput>;
    private serialize;
    private deserialize;
}
