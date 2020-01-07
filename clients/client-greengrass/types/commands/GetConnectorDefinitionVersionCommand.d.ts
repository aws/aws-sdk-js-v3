import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectorDefinitionVersionRequest, GetConnectorDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectorDefinitionVersionCommandInput = GetConnectorDefinitionVersionRequest;
export declare type GetConnectorDefinitionVersionCommandOutput = GetConnectorDefinitionVersionResponse & __MetadataBearer;
export declare class GetConnectorDefinitionVersionCommand extends $Command<GetConnectorDefinitionVersionCommandInput, GetConnectorDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetConnectorDefinitionVersionCommandInput;
    constructor(input: GetConnectorDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectorDefinitionVersionCommandInput, GetConnectorDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
