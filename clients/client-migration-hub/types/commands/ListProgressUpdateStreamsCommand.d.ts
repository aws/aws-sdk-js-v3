import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListProgressUpdateStreamsRequest, ListProgressUpdateStreamsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProgressUpdateStreamsCommandInput = ListProgressUpdateStreamsRequest;
export declare type ListProgressUpdateStreamsCommandOutput = ListProgressUpdateStreamsResult & __MetadataBearer;
export declare class ListProgressUpdateStreamsCommand extends $Command<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListProgressUpdateStreamsCommandInput;
    constructor(input: ListProgressUpdateStreamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProgressUpdateStreamsCommandInput, ListProgressUpdateStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
