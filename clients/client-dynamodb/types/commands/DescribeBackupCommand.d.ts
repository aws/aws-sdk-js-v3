import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeBackupInput, DescribeBackupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBackupCommandInput = DescribeBackupInput;
export declare type DescribeBackupCommandOutput = DescribeBackupOutput & __MetadataBearer;
export declare class DescribeBackupCommand extends $Command<DescribeBackupCommandInput, DescribeBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeBackupCommandInput;
    constructor(input: DescribeBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupCommandInput, DescribeBackupCommandOutput>;
    private serialize;
    private deserialize;
}
