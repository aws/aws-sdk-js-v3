import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListDominantLanguageDetectionJobsRequest, ListDominantLanguageDetectionJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDominantLanguageDetectionJobsCommandInput = ListDominantLanguageDetectionJobsRequest;
export declare type ListDominantLanguageDetectionJobsCommandOutput = ListDominantLanguageDetectionJobsResponse & __MetadataBearer;
export declare class ListDominantLanguageDetectionJobsCommand extends $Command<ListDominantLanguageDetectionJobsCommandInput, ListDominantLanguageDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListDominantLanguageDetectionJobsCommandInput;
    constructor(input: ListDominantLanguageDetectionJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDominantLanguageDetectionJobsCommandInput, ListDominantLanguageDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
