import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContributorInsightsCommandInput = DescribeContributorInsightsInput;
export declare type DescribeContributorInsightsCommandOutput = DescribeContributorInsightsOutput & __MetadataBearer;
export declare class DescribeContributorInsightsCommand extends $Command<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeContributorInsightsCommandInput;
    constructor(input: DescribeContributorInsightsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput>;
    private serialize;
    private deserialize;
}
