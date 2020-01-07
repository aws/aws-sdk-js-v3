import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFunctionDefinitionsCommandInput = ListFunctionDefinitionsRequest;
export declare type ListFunctionDefinitionsCommandOutput = ListFunctionDefinitionsResponse & __MetadataBearer;
export declare class ListFunctionDefinitionsCommand extends $Command<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListFunctionDefinitionsCommandInput;
    constructor(input: ListFunctionDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
