import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkflowsCommandInput = ListWorkflowsRequest;
export declare type ListWorkflowsCommandOutput = ListWorkflowsResponse & __MetadataBearer;
export declare class ListWorkflowsCommand extends $Command<ListWorkflowsCommandInput, ListWorkflowsCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListWorkflowsCommandInput;
    constructor(input: ListWorkflowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkflowsCommandInput, ListWorkflowsCommandOutput>;
    private serialize;
    private deserialize;
}
