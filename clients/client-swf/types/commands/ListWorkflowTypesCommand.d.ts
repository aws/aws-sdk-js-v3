import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ListWorkflowTypesInput, WorkflowTypeInfos } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkflowTypesCommandInput = ListWorkflowTypesInput;
export declare type ListWorkflowTypesCommandOutput = WorkflowTypeInfos & __MetadataBearer;
export declare class ListWorkflowTypesCommand extends $Command<ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput, SWFClientResolvedConfig> {
    readonly input: ListWorkflowTypesCommandInput;
    constructor(input: ListWorkflowTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput>;
    private serialize;
    private deserialize;
}
