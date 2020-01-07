import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RequestCancelWorkflowExecutionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestCancelWorkflowExecutionCommandInput = RequestCancelWorkflowExecutionInput;
export declare type RequestCancelWorkflowExecutionCommandOutput = __MetadataBearer;
export declare class RequestCancelWorkflowExecutionCommand extends $Command<RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: RequestCancelWorkflowExecutionCommandInput;
    constructor(input: RequestCancelWorkflowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
