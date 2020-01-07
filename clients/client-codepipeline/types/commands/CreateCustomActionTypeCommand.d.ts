import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCustomActionTypeCommandInput = CreateCustomActionTypeInput;
export declare type CreateCustomActionTypeCommandOutput = CreateCustomActionTypeOutput & __MetadataBearer;
export declare class CreateCustomActionTypeCommand extends $Command<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: CreateCustomActionTypeCommandInput;
    constructor(input: CreateCustomActionTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
