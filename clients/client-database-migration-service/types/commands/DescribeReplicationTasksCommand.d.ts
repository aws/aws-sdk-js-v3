import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksMessage, DescribeReplicationTasksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationTasksCommandInput = DescribeReplicationTasksMessage;
export declare type DescribeReplicationTasksCommandOutput = DescribeReplicationTasksResponse & __MetadataBearer;
export declare class DescribeReplicationTasksCommand extends $Command<DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationTasksCommandInput;
    constructor(input: DescribeReplicationTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput>;
    private serialize;
    private deserialize;
}
