import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionVersionsRequest, ListCoreDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCoreDefinitionVersionsCommandInput = ListCoreDefinitionVersionsRequest;
export declare type ListCoreDefinitionVersionsCommandOutput = ListCoreDefinitionVersionsResponse & __MetadataBearer;
export declare class ListCoreDefinitionVersionsCommand extends $Command<ListCoreDefinitionVersionsCommandInput, ListCoreDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListCoreDefinitionVersionsCommandInput;
    constructor(input: ListCoreDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCoreDefinitionVersionsCommandInput, ListCoreDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
