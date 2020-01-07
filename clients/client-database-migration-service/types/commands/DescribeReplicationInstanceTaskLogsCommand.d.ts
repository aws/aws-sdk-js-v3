import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstanceTaskLogsMessage, DescribeReplicationInstanceTaskLogsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationInstanceTaskLogsCommandInput = DescribeReplicationInstanceTaskLogsMessage;
export declare type DescribeReplicationInstanceTaskLogsCommandOutput = DescribeReplicationInstanceTaskLogsResponse & __MetadataBearer;
export declare class DescribeReplicationInstanceTaskLogsCommand extends $Command<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationInstanceTaskLogsCommandInput;
    constructor(input: DescribeReplicationInstanceTaskLogsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput>;
    private serialize;
    private deserialize;
}
