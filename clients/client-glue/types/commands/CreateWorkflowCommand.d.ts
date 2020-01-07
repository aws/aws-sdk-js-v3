import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWorkflowCommandInput = CreateWorkflowRequest;
export declare type CreateWorkflowCommandOutput = CreateWorkflowResponse & __MetadataBearer;
export declare class CreateWorkflowCommand extends $Command<CreateWorkflowCommandInput, CreateWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateWorkflowCommandInput;
    constructor(input: CreateWorkflowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkflowCommandInput, CreateWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}
