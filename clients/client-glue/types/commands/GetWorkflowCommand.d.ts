import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRequest, GetWorkflowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkflowCommandInput = GetWorkflowRequest;
export declare type GetWorkflowCommandOutput = GetWorkflowResponse & __MetadataBearer;
export declare class GetWorkflowCommand extends $Command<GetWorkflowCommandInput, GetWorkflowCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowCommandInput;
    constructor(input: GetWorkflowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowCommandInput, GetWorkflowCommandOutput>;
    private serialize;
    private deserialize;
}
