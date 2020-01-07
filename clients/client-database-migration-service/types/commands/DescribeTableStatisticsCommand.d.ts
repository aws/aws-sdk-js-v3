import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTableStatisticsCommandInput = DescribeTableStatisticsMessage;
export declare type DescribeTableStatisticsCommandOutput = DescribeTableStatisticsResponse & __MetadataBearer;
export declare class DescribeTableStatisticsCommand extends $Command<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeTableStatisticsCommandInput;
    constructor(input: DescribeTableStatisticsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
