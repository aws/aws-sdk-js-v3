import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionVersionRequest, CreateConnectorDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConnectorDefinitionVersionCommandInput = CreateConnectorDefinitionVersionRequest;
export declare type CreateConnectorDefinitionVersionCommandOutput = CreateConnectorDefinitionVersionResponse & __MetadataBearer;
export declare class CreateConnectorDefinitionVersionCommand extends $Command<CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateConnectorDefinitionVersionCommandInput;
    constructor(input: CreateConnectorDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectorDefinitionVersionCommandInput, CreateConnectorDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
