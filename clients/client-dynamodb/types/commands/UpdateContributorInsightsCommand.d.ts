import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateContributorInsightsInput, UpdateContributorInsightsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateContributorInsightsCommandInput = UpdateContributorInsightsInput;
export declare type UpdateContributorInsightsCommandOutput = UpdateContributorInsightsOutput & __MetadataBearer;
export declare class UpdateContributorInsightsCommand extends $Command<UpdateContributorInsightsCommandInput, UpdateContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateContributorInsightsCommandInput;
    constructor(input: UpdateContributorInsightsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContributorInsightsCommandInput, UpdateContributorInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
