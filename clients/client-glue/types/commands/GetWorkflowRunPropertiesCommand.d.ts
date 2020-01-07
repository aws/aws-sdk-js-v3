import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunPropertiesRequest, GetWorkflowRunPropertiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWorkflowRunPropertiesCommandInput = GetWorkflowRunPropertiesRequest;
export declare type GetWorkflowRunPropertiesCommandOutput = GetWorkflowRunPropertiesResponse & __MetadataBearer;
export declare class GetWorkflowRunPropertiesCommand extends $Command<GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetWorkflowRunPropertiesCommandInput;
    constructor(input: GetWorkflowRunPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWorkflowRunPropertiesCommandInput, GetWorkflowRunPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
