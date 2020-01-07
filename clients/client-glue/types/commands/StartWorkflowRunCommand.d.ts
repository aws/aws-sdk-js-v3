import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartWorkflowRunRequest, StartWorkflowRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartWorkflowRunCommandInput = StartWorkflowRunRequest;
export declare type StartWorkflowRunCommandOutput = StartWorkflowRunResponse & __MetadataBearer;
export declare class StartWorkflowRunCommand extends $Command<StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartWorkflowRunCommandInput;
    constructor(input: StartWorkflowRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput>;
    private serialize;
    private deserialize;
}
