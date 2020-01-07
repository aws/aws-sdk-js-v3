import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionsRequest, ListCoreDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCoreDefinitionsCommandInput = ListCoreDefinitionsRequest;
export declare type ListCoreDefinitionsCommandOutput = ListCoreDefinitionsResponse & __MetadataBearer;
export declare class ListCoreDefinitionsCommand extends $Command<ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListCoreDefinitionsCommandInput;
    constructor(input: ListCoreDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCoreDefinitionsCommandInput, ListCoreDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
