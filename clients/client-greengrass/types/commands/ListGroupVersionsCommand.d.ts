import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListGroupVersionsRequest, ListGroupVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupVersionsCommandInput = ListGroupVersionsRequest;
export declare type ListGroupVersionsCommandOutput = ListGroupVersionsResponse & __MetadataBearer;
export declare class ListGroupVersionsCommand extends $Command<ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListGroupVersionsCommandInput;
    constructor(input: ListGroupVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
