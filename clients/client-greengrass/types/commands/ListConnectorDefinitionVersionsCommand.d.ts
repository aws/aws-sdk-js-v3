import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionVersionsRequest, ListConnectorDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConnectorDefinitionVersionsCommandInput = ListConnectorDefinitionVersionsRequest;
export declare type ListConnectorDefinitionVersionsCommandOutput = ListConnectorDefinitionVersionsResponse & __MetadataBearer;
export declare class ListConnectorDefinitionVersionsCommand extends $Command<ListConnectorDefinitionVersionsCommandInput, ListConnectorDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListConnectorDefinitionVersionsCommandInput;
    constructor(input: ListConnectorDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectorDefinitionVersionsCommandInput, ListConnectorDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
