import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListApplicationStatesRequest, ListApplicationStatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationStatesCommandInput = ListApplicationStatesRequest;
export declare type ListApplicationStatesCommandOutput = ListApplicationStatesResult & __MetadataBearer;
export declare class ListApplicationStatesCommand extends $Command<ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListApplicationStatesCommandInput;
    constructor(input: ListApplicationStatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput>;
    private serialize;
    private deserialize;
}
