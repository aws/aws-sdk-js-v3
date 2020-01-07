import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunRequest, GetWorkflowRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkflowRunCommandInput = GetWorkflowRunRequest;
export declare type GetWorkflowRunCommandOutput = GetWorkflowRunResponse & __MetadataBearer;
export declare class GetWorkflowRunCommand extends $Command<GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowRunCommandInput;
    constructor(input: GetWorkflowRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput>;
    private serialize;
    private deserialize;
}
