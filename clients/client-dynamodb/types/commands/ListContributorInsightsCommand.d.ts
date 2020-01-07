import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListContributorInsightsCommandInput = ListContributorInsightsInput;
export declare type ListContributorInsightsCommandOutput = ListContributorInsightsOutput & __MetadataBearer;
export declare class ListContributorInsightsCommand extends $Command<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListContributorInsightsCommandInput;
    constructor(input: ListContributorInsightsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
