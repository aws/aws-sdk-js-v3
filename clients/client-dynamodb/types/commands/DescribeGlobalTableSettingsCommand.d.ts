import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGlobalTableSettingsCommandInput = DescribeGlobalTableSettingsInput;
export declare type DescribeGlobalTableSettingsCommandOutput = DescribeGlobalTableSettingsOutput & __MetadataBearer;
export declare class DescribeGlobalTableSettingsCommand extends $Command<DescribeGlobalTableSettingsCommandInput, DescribeGlobalTableSettingsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeGlobalTableSettingsCommandInput;
    constructor(input: DescribeGlobalTableSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGlobalTableSettingsCommandInput, DescribeGlobalTableSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
