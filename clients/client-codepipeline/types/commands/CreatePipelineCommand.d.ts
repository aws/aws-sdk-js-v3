import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreatePipelineInput, CreatePipelineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePipelineCommandInput = CreatePipelineInput;
export declare type CreatePipelineCommandOutput = CreatePipelineOutput & __MetadataBearer;
export declare class CreatePipelineCommand extends $Command<CreatePipelineCommandInput, CreatePipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: CreatePipelineCommandInput;
    constructor(input: CreatePipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePipelineCommandInput, CreatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
