import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeGlobalTableInput, DescribeGlobalTableOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGlobalTableCommandInput = DescribeGlobalTableInput;
export declare type DescribeGlobalTableCommandOutput = DescribeGlobalTableOutput & __MetadataBearer;
export declare class DescribeGlobalTableCommand extends $Command<DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeGlobalTableCommandInput;
    constructor(input: DescribeGlobalTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput>;
    private serialize;
    private deserialize;
}
