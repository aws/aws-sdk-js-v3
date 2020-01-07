import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectorDefinitionRequest, GetConnectorDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectorDefinitionCommandInput = GetConnectorDefinitionRequest;
export declare type GetConnectorDefinitionCommandOutput = GetConnectorDefinitionResponse & __MetadataBearer;
export declare class GetConnectorDefinitionCommand extends $Command<GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetConnectorDefinitionCommandInput;
    constructor(input: GetConnectorDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
