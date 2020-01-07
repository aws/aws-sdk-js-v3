import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountOpenWorkflowExecutionsInput, WorkflowExecutionCount } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CountOpenWorkflowExecutionsCommandInput = CountOpenWorkflowExecutionsInput;
export declare type CountOpenWorkflowExecutionsCommandOutput = WorkflowExecutionCount & __MetadataBearer;
export declare class CountOpenWorkflowExecutionsCommand extends $Command<CountOpenWorkflowExecutionsCommandInput, CountOpenWorkflowExecutionsCommandOutput, SWFClientResolvedConfig> {
    readonly input: CountOpenWorkflowExecutionsCommandInput;
    constructor(input: CountOpenWorkflowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CountOpenWorkflowExecutionsCommandInput, CountOpenWorkflowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
