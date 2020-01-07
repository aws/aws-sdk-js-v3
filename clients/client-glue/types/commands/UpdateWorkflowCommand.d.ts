import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateWorkflowRequest, UpdateWorkflowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWorkflowCommandInput = UpdateWorkflowRequest;
export declare type UpdateWorkflowCommandOutput = UpdateWorkflowResponse & __MetadataBearer;
export declare class UpdateWorkflowCommand extends $Command<UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateWorkflowCommandInput;
    constructor(input: UpdateWorkflowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}
