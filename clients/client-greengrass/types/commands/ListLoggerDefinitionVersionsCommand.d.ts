import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionVersionsRequest, ListLoggerDefinitionVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLoggerDefinitionVersionsCommandInput = ListLoggerDefinitionVersionsRequest;
export declare type ListLoggerDefinitionVersionsCommandOutput = ListLoggerDefinitionVersionsResponse & __MetadataBearer;
export declare class ListLoggerDefinitionVersionsCommand extends $Command<ListLoggerDefinitionVersionsCommandInput, ListLoggerDefinitionVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListLoggerDefinitionVersionsCommandInput;
    constructor(input: ListLoggerDefinitionVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLoggerDefinitionVersionsCommandInput, ListLoggerDefinitionVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
