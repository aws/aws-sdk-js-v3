import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWorkflowCommandInput = DeleteWorkflowRequest;
export declare type DeleteWorkflowCommandOutput = DeleteWorkflowResponse & __MetadataBearer;
export declare class DeleteWorkflowCommand extends $Command<DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteWorkflowCommandInput;
    constructor(input: DeleteWorkflowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}
