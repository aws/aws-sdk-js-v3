import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionRequest, CreateResourceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceDefinitionCommandInput = CreateResourceDefinitionRequest;
export declare type CreateResourceDefinitionCommandOutput = CreateResourceDefinitionResponse & __MetadataBearer;
export declare class CreateResourceDefinitionCommand extends $Command<CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateResourceDefinitionCommandInput;
    constructor(input: CreateResourceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
