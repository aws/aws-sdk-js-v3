import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunsRequest, GetWorkflowRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkflowRunsCommandInput = GetWorkflowRunsRequest;
export declare type GetWorkflowRunsCommandOutput = GetWorkflowRunsResponse & __MetadataBearer;
export declare class GetWorkflowRunsCommand extends $Command<GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowRunsCommandInput;
    constructor(input: GetWorkflowRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput>;
    private serialize;
    private deserialize;
}
