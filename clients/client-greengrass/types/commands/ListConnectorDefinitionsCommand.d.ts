import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionsRequest, ListConnectorDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConnectorDefinitionsCommandInput = ListConnectorDefinitionsRequest;
export declare type ListConnectorDefinitionsCommandOutput = ListConnectorDefinitionsResponse & __MetadataBearer;
export declare class ListConnectorDefinitionsCommand extends $Command<ListConnectorDefinitionsCommandInput, ListConnectorDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListConnectorDefinitionsCommandInput;
    constructor(input: ListConnectorDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectorDefinitionsCommandInput, ListConnectorDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
