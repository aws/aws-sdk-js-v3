import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutWorkflowRunPropertiesRequest, PutWorkflowRunPropertiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutWorkflowRunPropertiesCommandInput = PutWorkflowRunPropertiesRequest;
export declare type PutWorkflowRunPropertiesCommandOutput = PutWorkflowRunPropertiesResponse & __MetadataBearer;
export declare class PutWorkflowRunPropertiesCommand extends $Command<PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput, GlueClientResolvedConfig> {
    readonly input: PutWorkflowRunPropertiesCommandInput;
    constructor(input: PutWorkflowRunPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
