import { CodeStarconnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarconnectionsClient";
import { ListConnectionsInput, ListConnectionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConnectionsCommandInput = ListConnectionsInput;
export declare type ListConnectionsCommandOutput = ListConnectionsOutput & __MetadataBearer;
export declare class ListConnectionsCommand extends $Command<ListConnectionsCommandInput, ListConnectionsCommandOutput, CodeStarconnectionsClientResolvedConfig> {
    readonly input: ListConnectionsCommandInput;
    constructor(input: ListConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarconnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConnectionsCommandInput, ListConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
