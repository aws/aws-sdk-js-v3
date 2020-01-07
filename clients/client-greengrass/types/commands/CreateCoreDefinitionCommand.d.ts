import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateCoreDefinitionRequest, CreateCoreDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCoreDefinitionCommandInput = CreateCoreDefinitionRequest;
export declare type CreateCoreDefinitionCommandOutput = CreateCoreDefinitionResponse & __MetadataBearer;
export declare class CreateCoreDefinitionCommand extends $Command<CreateCoreDefinitionCommandInput, CreateCoreDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateCoreDefinitionCommandInput;
    constructor(input: CreateCoreDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCoreDefinitionCommandInput, CreateCoreDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
