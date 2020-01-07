import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionVersionsRequest, ListFunctionDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFunctionDefinitionVersionsCommandInput = ListFunctionDefinitionVersionsRequest;
export declare type ListFunctionDefinitionVersionsCommandOutput = ListFunctionDefinitionVersionsResponse & __MetadataBearer;
export declare class ListFunctionDefinitionVersionsCommand extends $Command<ListFunctionDefinitionVersionsCommandInput, ListFunctionDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListFunctionDefinitionVersionsCommandInput;
    constructor(input: ListFunctionDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFunctionDefinitionVersionsCommandInput, ListFunctionDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
