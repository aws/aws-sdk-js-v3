import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableInput, DescribeTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTableCommandInput = DescribeTableInput;
export declare type DescribeTableCommandOutput = DescribeTableOutput & __MetadataBearer;
export declare class DescribeTableCommand extends $Command<DescribeTableCommandInput, DescribeTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeTableCommandInput;
    constructor(input: DescribeTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableCommandInput, DescribeTableCommandOutput>;
    private serialize;
    private deserialize;
}
