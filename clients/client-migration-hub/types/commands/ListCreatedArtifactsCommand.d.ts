import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListCreatedArtifactsRequest, ListCreatedArtifactsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCreatedArtifactsCommandInput = ListCreatedArtifactsRequest;
export declare type ListCreatedArtifactsCommandOutput = ListCreatedArtifactsResult & __MetadataBearer;
export declare class ListCreatedArtifactsCommand extends $Command<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListCreatedArtifactsCommandInput;
    constructor(input: ListCreatedArtifactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
