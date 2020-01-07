import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { StopDataCollectionByAgentIdsRequest, StopDataCollectionByAgentIdsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDataCollectionByAgentIdsCommandInput = StopDataCollectionByAgentIdsRequest;
export declare type StopDataCollectionByAgentIdsCommandOutput = StopDataCollectionByAgentIdsResponse & __MetadataBearer;
export declare class StopDataCollectionByAgentIdsCommand extends $Command<StopDataCollectionByAgentIdsCommandInput, StopDataCollectionByAgentIdsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: StopDataCollectionByAgentIdsCommandInput;
    constructor(input: StopDataCollectionByAgentIdsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDataCollectionByAgentIdsCommandInput, StopDataCollectionByAgentIdsCommandOutput>;
    private serialize;
    private deserialize;
}
