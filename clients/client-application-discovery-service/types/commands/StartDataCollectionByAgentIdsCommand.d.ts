import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StartDataCollectionByAgentIdsRequest, StartDataCollectionByAgentIdsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDataCollectionByAgentIdsCommandInput = StartDataCollectionByAgentIdsRequest;
export declare type StartDataCollectionByAgentIdsCommandOutput = StartDataCollectionByAgentIdsResponse & __MetadataBearer;
export declare class StartDataCollectionByAgentIdsCommand extends $Command<StartDataCollectionByAgentIdsCommandInput, StartDataCollectionByAgentIdsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StartDataCollectionByAgentIdsCommandInput;
    constructor(input: StartDataCollectionByAgentIdsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDataCollectionByAgentIdsCommandInput, StartDataCollectionByAgentIdsCommandOutput>;
    private serialize;
    private deserialize;
}
