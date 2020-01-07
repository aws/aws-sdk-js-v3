import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionsRequest, ListResourceDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceDefinitionsCommandInput = ListResourceDefinitionsRequest;
export declare type ListResourceDefinitionsCommandOutput = ListResourceDefinitionsResponse & __MetadataBearer;
export declare class ListResourceDefinitionsCommand extends $Command<ListResourceDefinitionsCommandInput, ListResourceDefinitionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListResourceDefinitionsCommandInput;
    constructor(input: ListResourceDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDefinitionsCommandInput, ListResourceDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
