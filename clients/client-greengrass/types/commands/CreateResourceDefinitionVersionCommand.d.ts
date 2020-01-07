import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceDefinitionVersionCommandInput = CreateResourceDefinitionVersionRequest;
export declare type CreateResourceDefinitionVersionCommandOutput = CreateResourceDefinitionVersionResponse & __MetadataBearer;
export declare class CreateResourceDefinitionVersionCommand extends $Command<CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateResourceDefinitionVersionCommandInput;
    constructor(input: CreateResourceDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
