import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTimeToLiveCommandInput = DescribeTimeToLiveInput;
export declare type DescribeTimeToLiveCommandOutput = DescribeTimeToLiveOutput & __MetadataBearer;
export declare class DescribeTimeToLiveCommand extends $Command<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeTimeToLiveCommandInput;
    constructor(input: DescribeTimeToLiveCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput>;
    private serialize;
    private deserialize;
}
