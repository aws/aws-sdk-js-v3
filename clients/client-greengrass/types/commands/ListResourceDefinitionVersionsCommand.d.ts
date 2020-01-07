import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceDefinitionVersionsCommandInput = ListResourceDefinitionVersionsRequest;
export declare type ListResourceDefinitionVersionsCommandOutput = ListResourceDefinitionVersionsResponse & __MetadataBearer;
export declare class ListResourceDefinitionVersionsCommand extends $Command<ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListResourceDefinitionVersionsCommandInput;
    constructor(input: ListResourceDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDefinitionVersionsCommandInput, ListResourceDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
